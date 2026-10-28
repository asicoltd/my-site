/**
 * ASIF HASAN — CINEMATIC EDITORIAL PORTFOLIO (v5.0)
 * Lusion-Inspired Three.js Cybernetic Manifold, Magnetic Cursor, 3D Card Physics & Smooth Scroll
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. Lenis Inertia Smooth Scrolling Engine
  // ==========================================================================
  let lenis = null;
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 1.3
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }
  }

  // Navbar Dynamic Blur on Scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 35) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  }, { passive: true });

  // ==========================================================================
  // 2. Custom Magnetic Cursor System
  // ==========================================================================
  const cursorDot = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let isHovering = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (cursorDot) {
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    }
  }, { passive: true });

  function renderCursor() {
    ringX += (mouseX - ringX) * 0.16;
    ringY += (mouseY - ringY) * 0.16;
    if (cursorRing) {
      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;
    }
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  function attachCursorHoverListeners() {
    const targets = document.querySelectorAll('a, button, .project-card, .pub-card, .about-focus-card, .social-card, .skills-box, .app-launcher-item');
    targets.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        isHovering = true;
        document.body.classList.add('cursor-hover');
      });
      el.addEventListener('mouseleave', () => {
        isHovering = false;
        document.body.classList.remove('cursor-hover');
      });
    });
  }
  attachCursorHoverListeners();

  // ==========================================================================
  // 3. Tactile 3D Card Tilt Physics & Holographic Radial Shimmer
  // ==========================================================================
  const tiltCards = document.querySelectorAll('.project-card, .pub-card, .about-focus-card, .social-card, .contact-card');
  tiltCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
      card.style.setProperty('--mouse-x', `${x.toFixed(1)}px`);
      card.style.setProperty('--mouse-y', `${y.toFixed(1)}px`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });

  // ==========================================================================
  // 4. Three.js: Sculpted Neural Torus Manifold & Orbital IoT Streams
  // ==========================================================================
  const canvas = document.getElementById('webgl-canvas');
  const container = document.getElementById('webgl-canvas-container');

  function isWebGLSupported() {
    try {
      const c = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (c.getContext('webgl') || c.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  }

  if (canvas && isWebGLSupported() && typeof THREE !== 'undefined') {
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x06070a, 0.022);

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 19);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.15;
    } catch (err) {
      console.warn('WebGL initialization error:', err);
    }

    if (renderer) {
      const isMobile = window.innerWidth < 992;

      // Group Container for all 3D components
      const manifoldGroup = new THREE.Group();
      manifoldGroup.position.set(isMobile ? 0 : 3.6, isMobile ? 1.2 : 0, 0);
      scene.add(manifoldGroup);

      // --- Central Neural Torus Knot Geometry ---
      const torusGeo = new THREE.TorusKnotGeometry(
        isMobile ? 2.8 : 3.5,
        isMobile ? 0.8 : 0.95,
        220,
        36,
        2,
        3
      );

      // 1. Primary Sculptural Manifold: High-Gloss Pearl Ceramic White
      const torusMat = new THREE.MeshPhysicalMaterial({
        color: 0xf5f7fb,
        emissive: 0x080e18,
        roughness: 0.12,
        metalness: 0.08,
        clearcoat: 1.0,
        clearcoatRoughness: 0.06,
        reflectivity: 0.95
      });
      const torusMesh = new THREE.Mesh(torusGeo, torusMat);
      manifoldGroup.add(torusMesh);

      // 2. Interlocking Inner Core: High-Gloss Lacquer Onyx Black
      const innerCoreGeo = new THREE.TorusKnotGeometry(
        isMobile ? 1.8 : 2.2,
        isMobile ? 0.42 : 0.52,
        180,
        32,
        3,
        4
      );
      const innerCoreMat = new THREE.MeshPhysicalMaterial({
        color: 0x080b12,
        emissive: 0x010306,
        roughness: 0.10,
        metalness: 0.65,
        clearcoat: 1.0,
        clearcoatRoughness: 0.04
      });
      const innerCoreMesh = new THREE.Mesh(innerCoreGeo, innerCoreMat);
      manifoldGroup.add(innerCoreMesh);

      // 3. Outer Holographic Cybernetic Lattice
      const wireframeGeo = new THREE.WireframeGeometry(torusGeo);
      const wireframeMat = new THREE.LineBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.22,
        blending: THREE.AdditiveBlending
      });
      const wireframeMesh = new THREE.LineSegments(wireframeGeo, wireframeMat);
      manifoldGroup.add(wireframeMesh);

      // 4. Synaptic Vertex Nodes
      const pointsMat = new THREE.PointsMaterial({
        color: 0x38bdf8,
        size: isMobile ? 0.05 : 0.075,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending
      });
      const pointsMesh = new THREE.Points(torusGeo, pointsMat);
      manifoldGroup.add(pointsMesh);

      // --- Orbital IoT Traffic Streams (Concentric Data Rings) ---
      function createDataStream(radius, count, colorHex, inclinationX, inclinationY) {
        const streamGroup = new THREE.Group();
        streamGroup.rotation.x = inclinationX;
        streamGroup.rotation.y = inclinationY;

        const positions = new Float32Array(count * 3);
        const sizes = new Float32Array(count);
        for (let i = 0; i < count; i++) {
          const angle = (i / count) * Math.PI * 2;
          const spread = (Math.random() - 0.5) * 0.45;
          positions[i * 3] = Math.cos(angle) * (radius + spread);
          positions[i * 3 + 1] = (Math.random() - 0.5) * 0.45;
          positions[i * 3 + 2] = Math.sin(angle) * (radius + spread);
          sizes[i] = Math.random() * 0.08 + 0.03;
        }

        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const mat = new THREE.PointsMaterial({
          color: colorHex,
          size: 0.07,
          transparent: true,
          opacity: 0.7,
          blending: THREE.AdditiveBlending
        });

        const points = new THREE.Points(geo, mat);
        streamGroup.add(points);
        return { group: streamGroup, points };
      }

      const stream1 = createDataStream(5.6, 120, 0x38bdf8, 0.4, 0.2); // Cyan Stream
      const stream2 = createDataStream(6.4, 90, 0x2dd4bf, -0.6, 0.5); // Emerald Stream
      const stream3 = createDataStream(7.2, 75, 0xa78bfa, 0.8, -0.4); // Violet Stream

      manifoldGroup.add(stream1.group);
      manifoldGroup.add(stream2.group);
      manifoldGroup.add(stream3.group);

      // --- Ambient 3D Cosmic Particle Field ---
      const dustCount = isMobile ? 350 : 800;
      const dustGeo = new THREE.BufferGeometry();
      const dustPositions = new Float32Array(dustCount * 3);
      for (let i = 0; i < dustCount; i++) {
        dustPositions[i * 3] = (Math.random() - 0.5) * 32;
        dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 32;
        dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 22 - 2;
      }
      dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
      const dustMat = new THREE.PointsMaterial({
        color: 0x38bdf8,
        size: 0.035,
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending
      });
      const dustPoints = new THREE.Points(dustGeo, dustMat);
      scene.add(dustPoints);

      // --- Atmospheric Lights & Studio Key Lighting ---
      const ambientLight = new THREE.AmbientLight(0x0a101f, 1.8);
      scene.add(ambientLight);

      // Studio Directional Key Light (Creates tactile PBR specular sheen)
      const studioMainLight = new THREE.DirectionalLight(0xffffff, 2.2);
      studioMainLight.position.set(6, 8, 10);
      scene.add(studioMainLight);

      // Dynamic Cyan Point Light (Follows mouse)
      const keyLight = new THREE.PointLight(0x38bdf8, 3.5, 55);
      keyLight.position.set(5, 5, 10);
      scene.add(keyLight);

      // Orbiting Violet Rim Light
      const rimLight = new THREE.PointLight(0xa78bfa, 2.5, 55);
      rimLight.position.set(-8, -4, 6);
      scene.add(rimLight);

      // Subtle Emerald Fill
      const fillLight = new THREE.DirectionalLight(0x2dd4bf, 0.8);
      fillLight.position.set(0, -10, 5);
      scene.add(fillLight);

      // --- Interactive Cursor Physics ---
      const mouse3D = { x: 0, y: 0, targetX: 0, targetY: 0 };
      window.addEventListener('mousemove', (e) => {
        mouse3D.targetX = (e.clientX / window.innerWidth) * 2 - 1;
        mouse3D.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
      }, { passive: true });

      // Resize Handler
      window.addEventListener('resize', () => {
        isMobile = window.innerWidth < 992;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }, { passive: true });

      // Smooth scroll state decoupled from event listener
      let targetScrollY = 0;
      let currentScrollY = 0;
      window.addEventListener('scroll', () => {
        targetScrollY = window.scrollY;
      }, { passive: true });

      // --- Data-Driven Choreography Keyframes ---
      const DESKTOP_KEYFRAMES = [
        { p: 0.00, x: 3.6, y: 0.0, z: -1.2, scale: 1.00 },
        { p: 0.20, x: 4.2, y: 0.2, z: -2.8, scale: 0.95 },
        { p: 0.45, x: 3.8, y: -0.2, z: -3.0, scale: 0.95 },
        { p: 0.72, x: 0.0, y: 0.0, z: -5.0, scale: 1.30 },
        { p: 1.00, x: 0.0, y: 0.4, z: -2.0, scale: 1.05 }
      ];

      // Smooth Hermite cubic interpolation for C1 velocity continuity
      function sampleKeyframes(p, kfs) {
        if (p <= kfs[0].p) return kfs[0];
        if (p >= kfs[kfs.length - 1].p) return kfs[kfs.length - 1];

        let i = 0;
        while (i < kfs.length - 1 && kfs[i + 1].p < p) {
          i++;
        }
        const k1 = kfs[i];
        const k2 = kfs[i + 1];

        const t = (p - k1.p) / (k2.p - k1.p);
        const st = t * t * (3 - 2 * t); // Smoothstep easing

        return {
          x: k1.x + (k2.x - k1.x) * st,
          y: k1.y + (k2.y - k1.y) * st,
          z: k1.z + (k2.z - k1.z) * st,
          scale: k1.scale + (k2.scale - k1.scale) * st
        };
      }

      // --- Animation Loop ---
      let clock = new THREE.Clock();
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const motionFactor = prefersReduced ? 0.4 : 1.0;

      // HUD Telemetry hooks
      const hudFps = document.querySelector('.hud-fps');
      const hudScroll = document.querySelector('.hud-scroll');
      let lastFpsTime = performance.now();
      let lastFrameTime = performance.now();
      let frameCount = 0;
      let animFrameId = null;

      function animate(now) {
        animFrameId = requestAnimationFrame(animate);
        const dt = Math.min((now - lastFrameTime) / 1000, 0.1);
        lastFrameTime = now;
        const elapsedTime = clock.getElapsedTime();

        // FPS and HUD updates
        frameCount++;
        if (now - lastFpsTime >= 500) {
          const fps = Math.round((frameCount * 1000) / (now - lastFpsTime));
          if (hudFps) hudFps.textContent = `${Math.min(fps, 60)} FPS`;
          frameCount = 0;
          lastFpsTime = now;
        }

        // Frame-rate independent mouse lerp
        const mouseDecay = 1 - Math.exp(-dt * 8);
        mouse3D.x += (mouse3D.targetX - mouse3D.x) * mouseDecay;
        mouse3D.y += (mouse3D.targetY - mouse3D.y) * mouseDecay;

        // Dynamic light follow
        keyLight.position.x = mouse3D.x * 12 + 4;
        keyLight.position.y = mouse3D.y * 10 + 4;

        // Rim light orbit
        rimLight.position.x = Math.sin(elapsedTime * 0.6) * 10 - 2;
        rimLight.position.z = Math.cos(elapsedTime * 0.6) * 8 + 4;

        // Ambient dust drift
        dustPoints.rotation.y = elapsedTime * 0.012 * motionFactor;
        dustPoints.rotation.x = elapsedTime * 0.006 * motionFactor;

        // Torus Intrinsic Rotation & Mouse Lean
        torusMesh.rotation.x = elapsedTime * 0.20 * motionFactor + mouse3D.y * 0.35;
        torusMesh.rotation.y = elapsedTime * 0.28 * motionFactor + mouse3D.x * 0.45;
        innerCoreMesh.rotation.x = -torusMesh.rotation.x * 1.25;
        innerCoreMesh.rotation.y = -torusMesh.rotation.y * 1.15;
        wireframeMesh.rotation.x = torusMesh.rotation.x;
        wireframeMesh.rotation.y = torusMesh.rotation.y;
        pointsMesh.rotation.x = torusMesh.rotation.x;
        pointsMesh.rotation.y = torusMesh.rotation.y;

        // Orbital Data Streams Revolution
        stream1.group.rotation.z = elapsedTime * 0.45 * motionFactor;
        stream2.group.rotation.z = -elapsedTime * 0.35 * motionFactor;
        stream3.group.rotation.z = elapsedTime * 0.25 * motionFactor;

        // Synaptic point breathing pulse
        const pulse = (Math.sin(elapsedTime * 2.5) + 1) * 0.5;
        pointsMat.size = (isMobile ? 0.05 : 0.075) * (0.85 + pulse * 0.3);

        // Frame-rate independent scroll decay
        const scrollDecay = 1 - Math.exp(-dt * 10);
        currentScrollY += (targetScrollY - currentScrollY) * scrollDecay;
        const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        const p = Math.min(Math.max(currentScrollY / maxScroll, 0), 1);

        if (hudScroll) {
          const pct = Math.min(Math.max(Math.round(p * 100), 0), 100);
          hudScroll.textContent = `${pct < 10 ? '0' + pct : pct}%`;
        }

        // Sample target pose from smooth spline
        let target;
        if (isMobile) {
          target = {
            x: 0,
            y: Math.sin(p * Math.PI * 2) * 0.35,
            z: -1.5 - Math.sin(p * Math.PI) * 1.8,
            scale: 0.82
          };
        } else {
          target = sampleKeyframes(p, DESKTOP_KEYFRAMES);
        }

        // Frame-rate independent pose lerp
        const poseDecay = 1 - Math.exp(-dt * 8);
        manifoldGroup.position.x += (target.x - manifoldGroup.position.x) * poseDecay;
        manifoldGroup.position.y += (target.y - manifoldGroup.position.y) * poseDecay;
        manifoldGroup.position.z += (target.z - manifoldGroup.position.z) * poseDecay;

        const currentScale = manifoldGroup.scale.x;
        const newScale = currentScale + (target.scale - currentScale) * poseDecay;
        manifoldGroup.scale.setScalar(newScale);

        torusMesh.rotation.z = p * Math.PI * 2;
        wireframeMesh.rotation.z = torusMesh.rotation.z;
        innerCoreMesh.rotation.z = -torusMesh.rotation.z;

        // Dynamic lighting shift across sections
        if (p < 0.3) {
          keyLight.color.setHex(0x38bdf8); // Cyan
          rimLight.color.setHex(0xa78bfa); // Violet
        } else if (p < 0.7) {
          keyLight.color.setHex(0x2dd4bf); // Emerald
          rimLight.color.setHex(0x38bdf8); // Cyan
        } else {
          keyLight.color.setHex(0x38bdf8); // Cyan
          rimLight.color.setHex(0xf472b6); // Rose
        }

        renderer.render(scene, camera);
      }
      animFrameId = requestAnimationFrame(animate);

      // Three.js Memory Cleanup on Page Unload
      function disposeThree() {
        if (animFrameId) cancelAnimationFrame(animFrameId);
        scene.traverse((obj) => {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) {
            if (Array.isArray(obj.material)) {
              obj.material.forEach((m) => m.dispose());
            } else {
              obj.material.dispose();
            }
          }
        });
        renderer?.dispose();
      }
      window.addEventListener('beforeunload', disposeThree);
    }
  }

  // ==========================================================================
  // 4.5 Lusion-Style Nav Motion Toggle
  // ==========================================================================
  const motionToggleBtn = document.getElementById('motion-toggle-btn');
  let isDynamicMotion = true;
  if (motionToggleBtn) {
    motionToggleBtn.addEventListener('click', () => {
      isDynamicMotion = !isDynamicMotion;
      const icon = motionToggleBtn.querySelector('.toggle-icon');
      if (icon) icon.textContent = isDynamicMotion ? '−' : '+';
      motionToggleBtn.setAttribute('title', isDynamicMotion ? 'Dynamic Motion Active' : 'Calm Motion Active');
      document.body.classList.toggle('calm-motion', !isDynamicMotion);
    });
  }

  // ==========================================================================
  // 5. Mini-Apps Launcher Modal System
  // ==========================================================================
  const interactiveModal = document.getElementById('interactive-modal');
  const launcherMenu = document.getElementById('app-launcher-menu');
  const iframeWrapper = document.getElementById('modal-iframe-wrapper');
  const interactiveFrame = document.getElementById('modal-iframe');
  const modalTitle = document.getElementById('interactive-modal-title');
  const closeInteractiveBtn = document.getElementById('modal-close-btn');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const backToMenuBtn = document.getElementById('modal-back-btn');

  function openLauncherModal(targetAppUrl, targetAppTitle) {
    if (!interactiveModal) return;
    interactiveModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (targetAppUrl) {
      launchApp(targetAppUrl, targetAppTitle);
    } else {
      showLauncherMenu();
    }
  }

  function showLauncherMenu() {
    if (modalTitle) modalTitle.textContent = 'Creative Mini-Apps';
    if (launcherMenu) launcherMenu.style.display = 'block';
    if (iframeWrapper) {
      iframeWrapper.style.display = 'none';
      iframeWrapper.classList.remove('active');
    }
    if (backToMenuBtn) backToMenuBtn.style.display = 'none';
    if (interactiveFrame) interactiveFrame.src = 'about:blank';
  }

  function launchApp(url, title) {
    if (modalTitle) modalTitle.textContent = title || 'Mini-App';
    if (launcherMenu) launcherMenu.style.display = 'none';
    if (backToMenuBtn) backToMenuBtn.style.display = 'inline-flex';
    if (iframeWrapper) {
      iframeWrapper.style.display = 'block';
      iframeWrapper.classList.add('active');
    }
    if (interactiveFrame) interactiveFrame.src = url;
  }

  function closeLauncherModal() {
    if (!interactiveModal) return;
    interactiveModal.classList.remove('active');
    if (interactiveFrame) interactiveFrame.src = 'about:blank';
    document.body.style.overflow = '';
  }

  // Bind "Play Mini-App" triggers
  document.querySelectorAll('.btn-play-miniapp, .app-launcher-btn, [data-open-launcher]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openLauncherModal();
    });
  });

  // Bind app selection buttons inside the launcher menu
  document.querySelectorAll('.app-launcher-item').forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const url = item.getAttribute('data-app-url');
      const title = item.getAttribute('data-app-title');
      launchApp(url, title);
    });
  });

  if (backToMenuBtn) {
    backToMenuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showLauncherMenu();
    });
  }

  if (closeInteractiveBtn) {
    closeInteractiveBtn.addEventListener('click', closeLauncherModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', closeLauncherModal);
  }

  // ==========================================================================
  // 6. BibTeX Citation Modal & Clipboard Toast
  // ==========================================================================
  const bibtexDatabase = {
    hfmd: `@inproceedings{hasan2024hfmd,
  title={Ensemble Deep Learning for Enhanced Detection and Classification of Hand, Foot, and Mouth Disease},
  author={Hasan, Md Asif and Collaborators},
  booktitle={International Conference on Data Mining and Information Security (DMIS 2024)},
  series={Lecture Notes in Networks and Systems},
  publisher={Springer, Singapore},
  doi={10.1007/978-981-96-6063-6_25},
  year={2024}
}`,
    peptic: `@inproceedings{hasan2024peptic,
  title={Classification of Peptic Ulcer and Digestive Tract Disorders Using Endoscopic Images},
  author={Hasan, Md Asif and Collaborators},
  booktitle={International Conference on Data Mining and Information Security (DMIS 2024)},
  series={Lecture Notes in Networks and Systems},
  publisher={Springer, Singapore},
  doi={10.1007/978-981-96-6066-7_32},
  year={2024}
}`,
    rose: `@inproceedings{hasan2024rose,
  title={Rose Disease Detection Using YOLO: A Deep Learning-Based Approach},
  author={Hasan, Md Asif and Collaborators},
  booktitle={9th International Conference on ICTCS 2024},
  series={Lecture Notes in Networks and Systems},
  publisher={Springer, Singapore},
  doi={10.1007/978-981-96-5607-3_13},
  year={2024}
}`
  };

  const bibtexModal = document.getElementById('bibtex-modal');
  const bibtexContent = document.getElementById('bibtex-content');
  const closeBibtexBtn = document.getElementById('close-bibtex-btn');
  const copyBibtexBtn = document.getElementById('copy-bibtex-btn');
  const toast = document.getElementById('toast-alert');

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2600);
  }

  function openBibtexModal(key) {
    const entry = bibtexDatabase[key];
    if (entry && bibtexModal && bibtexContent) {
      bibtexContent.textContent = entry;
      bibtexModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeBibtexModal() {
    if (bibtexModal) {
      bibtexModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  document.querySelectorAll('.btn-bibtex').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pubKey = btn.getAttribute('data-pub');
      openBibtexModal(pubKey);
    });
  });

  if (closeBibtexBtn) {
    closeBibtexBtn.addEventListener('click', closeBibtexModal);
  }

  if (bibtexModal) {
    bibtexModal.addEventListener('click', (e) => {
      if (e.target === bibtexModal) closeBibtexModal();
    });
  }

  if (copyBibtexBtn && bibtexContent) {
    copyBibtexBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(bibtexContent.textContent).then(() => {
        showToast('✓ BibTeX citation copied to clipboard');
        closeBibtexModal();
      }).catch(() => {
        showToast('Citation copied');
      });
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLauncherModal();
      closeBibtexModal();
    }
  });

  // Footer Dynamic Year
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

})();
