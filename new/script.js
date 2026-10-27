/**
 * ASIF HASAN — PERSONAL PORTFOLIO CORE SCRIPT
 * Three.js Atmospheric Constellation, Lenis Smooth Scroll, Interactive Lab & Citation Handlers
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. Lenis Smooth Scrolling
  // ==========================================================================
  let lenis = null;
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 1.4
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

  // Navbar Dynamic Scroll Blur
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  }, { passive: true });

  // ==========================================================================
  // 2. Three.js: Atmospheric Celestial Constellation Engine
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
    scene.fog = new THREE.FogExp2(0x08090d, 0.025);

    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 22);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    } catch (err) {
      console.warn('WebGL init error:', err);
    }

    if (renderer) {
      const isMobile = window.innerWidth < 768;
      const PARTICLE_COUNT = isMobile ? 180 : 380;
      const positions = new Float32Array(PARTICLE_COUNT * 3);
      const colors = new Float32Array(PARTICLE_COUNT * 3);
      const velocities = [];

      const colorCyan = new THREE.Color(0x38bdf8);
      const colorTeal = new THREE.Color(0x20c997);
      const colorSlate = new THREE.Color(0x64748b);
      const colorViolet = new THREE.Color(0x818cf8);

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const x = (Math.random() - 0.5) * 38;
        const y = (Math.random() - 0.5) * 26;
        const z = (Math.random() - 0.5) * 18;

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        velocities.push({
          x: (Math.random() - 0.5) * 0.006,
          y: (Math.random() - 0.5) * 0.006,
          z: (Math.random() - 0.5) * 0.004
        });

        const rand = Math.random();
        let c = colorSlate;
        if (rand < 0.25) c = colorCyan;
        else if (rand < 0.45) c = colorTeal;
        else if (rand < 0.6) c = colorViolet;

        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
      }

      // Smooth Particle Texture
      function createDiscTexture() {
        const pCanvas = document.createElement('canvas');
        pCanvas.width = 64;
        pCanvas.height = 64;
        const ctx = pCanvas.getContext('2d');
        const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
        grad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
        grad.addColorStop(0.4, 'rgba(255, 255, 255, 0.65)');
        grad.addColorStop(0.85, 'rgba(255, 255, 255, 0.1)');
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(32, 32, 30, 0, Math.PI * 2);
        ctx.fill();
        return new THREE.CanvasTexture(pCanvas);
      }

      const discTexture = createDiscTexture();

      const particleGeometry = new THREE.BufferGeometry();
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const particleMaterial = new THREE.PointsMaterial({
        size: isMobile ? 0.25 : 0.32,
        vertexColors: true,
        map: discTexture,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });

      const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particleSystem);

      // Connecting Filaments
      const MAX_LINES = isMobile ? 120 : 320;
      const linePositions = new Float32Array(MAX_LINES * 2 * 3);
      const lineColors = new Float32Array(MAX_LINES * 2 * 3);

      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage));
      lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage));

      const lineMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.25,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });

      const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(lineMesh);

      // Mouse Parallax
      const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
      window.addEventListener('mousemove', (e) => {
        mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
      }, { passive: true });

      // Resize
      window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }, { passive: true });

      // Animation Loop
      let clock = new THREE.Clock();
      function animate() {
        requestAnimationFrame(animate);
        const time = clock.getElapsedTime();

        // Mouse Damping
        mouse.x += (mouse.targetX - mouse.x) * 0.04;
        mouse.y += (mouse.targetY - mouse.y) * 0.04;

        camera.position.x = mouse.x * 2.0;
        camera.position.y = mouse.y * 1.5;
        camera.lookAt(0, 0, 0);

        // Drift
        let lineIdx = 0;
        const distThreshold = isMobile ? 3.0 : 3.8;

        for (let i = 0; i < PARTICLE_COUNT; i++) {
          positions[i * 3] += velocities[i].x;
          positions[i * 3 + 1] += velocities[i].y;
          positions[i * 3 + 2] += velocities[i].z;

          // Bounds bounce
          if (Math.abs(positions[i * 3]) > 19) velocities[i].x *= -1;
          if (Math.abs(positions[i * 3 + 1]) > 13) velocities[i].y *= -1;
          if (Math.abs(positions[i * 3 + 2]) > 9) velocities[i].z *= -1;

          // Lines
          if (lineIdx < MAX_LINES && i % 2 === 0) {
            for (let j = i + 1; j < PARTICLE_COUNT; j += 4) {
              const dx = positions[i * 3] - positions[j * 3];
              const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
              const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
              const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

              if (dist < distThreshold && lineIdx < MAX_LINES) {
                const l = lineIdx * 6;
                linePositions[l] = positions[i * 3];
                linePositions[l + 1] = positions[i * 3 + 1];
                linePositions[l + 2] = positions[i * 3 + 2];

                linePositions[l + 3] = positions[j * 3];
                linePositions[l + 4] = positions[j * 3 + 1];
                linePositions[l + 5] = positions[j * 3 + 2];

                const alpha = Math.max(0, 1 - dist / distThreshold) * 0.6;
                lineColors[l] = 0.22 * alpha;
                lineColors[l + 1] = 0.74 * alpha;
                lineColors[l + 2] = 0.97 * alpha;

                lineColors[l + 3] = 0.22 * alpha;
                lineColors[l + 4] = 0.74 * alpha;
                lineColors[l + 5] = 0.97 * alpha;

                lineIdx++;
              }
            }
          }
        }

        particleGeometry.attributes.position.needsUpdate = true;
        lineGeometry.attributes.position.needsUpdate = true;
        lineGeometry.attributes.color.needsUpdate = true;
        lineGeometry.setDrawRange(0, lineIdx * 2);

        particleSystem.rotation.y = time * 0.015;
        lineMesh.rotation.y = time * 0.015;

        renderer.render(scene, camera);
      }

      animate();

      // Scroll Dimming
      if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.to(container, {
          opacity: 0.18,
          scrollTrigger: {
            trigger: '#about',
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1
          }
        });
      }
    }
  }

  // ==========================================================================
  // 3. Interactive Lab (Mini-Apps Modal)
  // ==========================================================================
  const interactiveModal = document.getElementById('interactive-modal');
  const interactiveFrame = document.getElementById('interactive-frame');
  const interactiveTitle = document.getElementById('interactive-modal-title');
  const closeInteractiveBtn = document.getElementById('close-interactive-btn');

  function openInteractiveApp(url, title) {
    if (!interactiveModal || !interactiveFrame) return;
    interactiveFrame.src = url;
    if (interactiveTitle) interactiveTitle.textContent = title;
    interactiveModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeInteractiveApp() {
    if (!interactiveModal || !interactiveFrame) return;
    interactiveModal.classList.remove('active');
    interactiveFrame.src = '';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-interactive-url]').forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const url = trigger.getAttribute('data-interactive-url');
      const title = trigger.getAttribute('data-interactive-title') || 'Interactive Lab';
      openInteractiveApp(url, title);
    });
  });

  if (closeInteractiveBtn) {
    closeInteractiveBtn.addEventListener('click', closeInteractiveApp);
  }

  if (interactiveModal) {
    interactiveModal.addEventListener('click', (e) => {
      if (e.target === interactiveModal) closeInteractiveApp();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeInteractiveApp();
      closeBibtexModal();
    }
  });

  // ==========================================================================
  // 4. BibTeX Citation Modal & Clipboard Toast
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
    }
  }

  function closeBibtexModal() {
    if (bibtexModal) bibtexModal.classList.remove('active');
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

})();
