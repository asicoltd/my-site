/**
 * ASIF HASAN - AI/ML RESEARCH PORTFOLIO
 * Core Script: WebGL2 Explainable Manifold Engine, Lenis Inertia Scroll & GSAP Choreography
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. Lenis Smooth Scrolling Engine
  // ==========================================================================
  let lenis = null;
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // exponential ease-out
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 1.5
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

  // Navbar Scroll State
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  }, { passive: true });

  // ==========================================================================
  // 2. Three.js: Explainable Attractor Manifold & Neural Traffic Graph
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

  if (!canvas || !isWebGLSupported() || typeof THREE === 'undefined') {
    document.body.classList.add('no-webgl');
    return;
  }

  // Scene Setup
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x08090b, 0.02);

  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 150);
  camera.position.set(0, 0, 24);

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  } catch (err) {
    document.body.classList.add('no-webgl');
    return;
  }

  // Graph Data Structure: Clustered Latent Manifold
  const isMobile = window.innerWidth < 768;
  const NODE_COUNT = isMobile ? 280 : 540;
  const CLUSTER_COUNT = 5;

  const clusterCenters = isMobile ? [
    new THREE.Vector3(-1.5, 2.5, -1),
    new THREE.Vector3(1.8, 3.0, -3),
    new THREE.Vector3(0.5, -3.0, 1.5),
    new THREE.Vector3(-1.0, -1.5, -2),
    new THREE.Vector3(1.5, -0.8, 2)
  ] : [
    new THREE.Vector3(3.5, 3.0, -1),   // Cluster 0: Normal MQTT / IoT Traffic
    new THREE.Vector3(7.2, 3.8, -3),   // Cluster 1: Benign HTTP/REST Telemetry
    new THREE.Vector3(4.0, -3.2, 1.5), // Cluster 2: Delay-Tolerant Network Nodes
    new THREE.Vector3(2.0, -2.0, -2),  // Cluster 3: Time-Series State Vectors
    new THREE.Vector3(6.8, -1.2, 2)    // Cluster 4: Decision Boundary Frontier
  ];

  const nodes = [];
  const nodePositions = new Float32Array(NODE_COUNT * 3);
  const nodeColors = new Float32Array(NODE_COUNT * 3);
  const nodeSizes = new Float32Array(NODE_COUNT);

  const colorNormal = new THREE.Color(0x64748b);     // Titanium Slate
  const colorCluster = new THREE.Color(0x6366f1);    // Latent Indigo
  const colorAnomaly = new THREE.Color(0x38bdf8);    // Decision Cyan

  for (let i = 0; i < NODE_COUNT; i++) {
    const clusterIdx = i % CLUSTER_COUNT;
    const center = clusterCenters[clusterIdx];

    // Clustered dispersion with Gaussian-like spread
    const spread = (1 - (i % 3) * 0.2) * 2.5;
    const x = center.x + (Math.random() - 0.5) * spread;
    const y = center.y + (Math.random() - 0.5) * spread;
    const z = center.z + (Math.random() - 0.5) * spread;

    nodePositions[i * 3] = x;
    nodePositions[i * 3 + 1] = y;
    nodePositions[i * 3 + 2] = z;

    nodes.push({
      pos: new THREE.Vector3(x, y, z),
      basePos: new THREE.Vector3(x, y, z),
      cluster: clusterIdx,
      velocity: new THREE.Vector3((Math.random() - 0.5) * 0.004, (Math.random() - 0.5) * 0.004, (Math.random() - 0.5) * 0.004),
      isAnomaly: false,
      attributionWeight: 0.1
    });

    const isCenter = Math.random() < 0.2;
    const c = isCenter ? colorCluster : colorNormal;
    nodeColors[i * 3] = c.r;
    nodeColors[i * 3 + 1] = c.g;
    nodeColors[i * 3 + 2] = c.b;

    nodeSizes[i] = isCenter ? 1.4 : 1.0;
  }

  // 1. Points Geometry
  const nodeGeometry = new THREE.BufferGeometry();
  nodeGeometry.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
  nodeGeometry.setAttribute('color', new THREE.BufferAttribute(nodeColors, 3));

  // Circular point texture with gentle alpha falloff (anti-glare)
  function createPointTexture() {
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 64;
    pCanvas.height = 64;
    const ctx = pCanvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.5, 'rgba(255, 255, 255, 0.7)');
    grad.addColorStop(0.85, 'rgba(255, 255, 255, 0.15)');
    grad.addColorStop(1.0, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(32, 32, 30, 0, Math.PI * 2);
    ctx.fill();
    return new THREE.CanvasTexture(pCanvas);
  }

  const pointTexture = createPointTexture();

  const nodeMaterial = new THREE.PointsMaterial({
    size: isMobile ? 0.24 : 0.28,
    vertexColors: true,
    map: pointTexture,
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const nodePoints = new THREE.Points(nodeGeometry, nodeMaterial);
  scene.add(nodePoints);

  // 2. Topology Filaments (Connecting nearby neighbors)
  const MAX_CONNECTIONS = isMobile ? 300 : 750;
  const linePositions = new Float32Array(MAX_CONNECTIONS * 2 * 3);
  const lineColors = new Float32Array(MAX_CONNECTIONS * 2 * 3);

  const lineGeometry = new THREE.BufferGeometry();
  lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage));
  lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage));

  const lineMaterial = new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0.35,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
  scene.add(lineMesh);

  // 3. Explainability Attribution Rays
  const ATTRIBUTION_RAYS = 12;
  const rayPositions = new Float32Array(ATTRIBUTION_RAYS * 2 * 3);
  const rayGeometry = new THREE.BufferGeometry();
  rayGeometry.setAttribute('position', new THREE.BufferAttribute(rayPositions, 3).setUsage(THREE.DynamicDrawUsage));

  const rayMaterial = new THREE.LineBasicMaterial({
    color: 0x38bdf8,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending,
    linewidth: 2
  });

  const rayMesh = new THREE.LineSegments(rayGeometry, rayMaterial);
  scene.add(rayMesh);

  // 4. Decision Boundary Surface Manifold
  const surfaceGeom = new THREE.PlaneGeometry(24, 20, 24, 20);
  const surfaceMat = new THREE.MeshBasicMaterial({
    color: 0x38bdf8,
    wireframe: true,
    transparent: true,
    opacity: 0.05,
    blending: THREE.AdditiveBlending
  });
  const surfaceMesh = new THREE.Mesh(surfaceGeom, surfaceMat);
  surfaceMesh.rotation.x = -Math.PI / 3;
  surfaceMesh.position.set(isMobile ? 0 : 4, -3, -2);
  scene.add(surfaceMesh);

  // Cursor & Mouse Parallax Rig
  const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
  const raycaster = new THREE.Raycaster();
  const pointerCoord = new THREE.Vector2(-100, -100);

  window.addEventListener('mousemove', (e) => {
    mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    pointerCoord.x = mouse.targetX;
    pointerCoord.y = mouse.targetY;
  }, { passive: true });

  // Touch Support
  window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      mouse.targetX = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
    }
  }, { passive: true });

  // Resize Handler
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }, { passive: true });

  // Intrusion Anomaly Simulation
  let intrusionActive = false;
  let intrusionTimer = 0;

  function triggerIntrusionAnomaly() {
    intrusionActive = true;
    intrusionTimer = 1.0;

    // Pick 8-12 nodes to mark as anomalous feature vectors
    const targetCluster = 4; // Decision boundary cluster
    nodes.forEach((n, idx) => {
      if (n.cluster === targetCluster && Math.random() < 0.6) {
        n.isAnomaly = true;
        n.attributionWeight = 1.0;
        nodeColors[idx * 3] = 0.95;
        nodeColors[idx * 3 + 1] = 0.25;
        nodeColors[idx * 3 + 2] = 0.35; // Red-cyan alert
      }
    });

    nodeGeometry.attributes.color.needsUpdate = true;

    // Update Telemetry Display in DOM
    const stateVal = document.getElementById('telemetry-state-val');
    const metricEnt = document.getElementById('metric-entropy');
    if (stateVal) stateVal.textContent = 'INTRUSION DETECTED';
    if (stateVal) stateVal.style.color = '#f43f5e';
    if (metricEnt) metricEnt.textContent = '0.94 bits';

    setTimeout(() => {
      // Revert to stable equilibrium
      nodes.forEach((n, idx) => {
        n.isAnomaly = false;
        n.attributionWeight = 0.1;
        const isCenter = Math.random() < 0.15;
        const c = isCenter ? colorCluster : colorNormal;
        nodeColors[idx * 3] = c.r;
        nodeColors[idx * 3 + 1] = c.g;
        nodeColors[idx * 3 + 2] = c.b;
      });
      nodeGeometry.attributes.color.needsUpdate = true;
      if (stateVal) stateVal.textContent = 'MONITORING';
      if (stateVal) stateVal.style.color = 'var(--accent-emerald)';
      if (metricEnt) metricEnt.textContent = '0.04 bits';
      intrusionActive = false;
    }, 3200);
  }

  // Bind simulation button
  const triggerBtn = document.getElementById('trigger-intrusion-btn');
  if (triggerBtn) {
    triggerBtn.addEventListener('click', triggerIntrusionAnomaly);
  }

  // Render Loop
  let clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    const delta = clock.getDelta();
    const time = clock.getElapsedTime();

    // Smooth Mouse Look-At Damping
    mouse.x += (mouse.targetX - mouse.x) * 0.05;
    mouse.y += (mouse.targetY - mouse.y) * 0.05;

    camera.position.x = mouse.x * 2.5;
    camera.position.y = mouse.y * 2.0;
    camera.lookAt(0, 0, 0);

    // Dynamic Decision Surface Wave
    const posAttr = surfaceGeom.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      const u = posAttr.getX(i);
      const v = posAttr.getY(i);
      const z = Math.sin(u * 0.4 + time * 1.2) * Math.cos(v * 0.4 + time * 1.0) * 1.2;
      posAttr.setZ(i, z);
    }
    posAttr.needsUpdate = true;

    // Node Micro-Drift & Network Connections
    let connectionIdx = 0;
    const thresholdDist = isMobile ? 3.2 : 2.8;

    for (let i = 0; i < NODE_COUNT; i++) {
      const n = nodes[i];

      // Subtle brownian drift
      n.pos.add(n.velocity);
      if (n.pos.distanceTo(n.basePos) > 1.2) {
        n.velocity.negate();
      }

      nodePositions[i * 3] = n.pos.x;
      nodePositions[i * 3 + 1] = n.pos.y;
      nodePositions[i * 3 + 2] = n.pos.z;

      // Connect to adjacent cluster members
      if (connectionIdx < MAX_CONNECTIONS && i % 2 === 0) {
        for (let j = i + 1; j < NODE_COUNT; j += 3) {
          const dist = n.pos.distanceTo(nodes[j].pos);
          if (dist < thresholdDist && connectionIdx < MAX_CONNECTIONS) {
            const lIdx = connectionIdx * 6;

            linePositions[lIdx] = n.pos.x;
            linePositions[lIdx + 1] = n.pos.y;
            linePositions[lIdx + 2] = n.pos.z;

            linePositions[lIdx + 3] = nodes[j].pos.x;
            linePositions[lIdx + 4] = nodes[j].pos.y;
            linePositions[lIdx + 5] = nodes[j].pos.z;

            const alpha = 1.0 - dist / thresholdDist;
            const lineColor = n.isAnomaly || nodes[j].isAnomaly ? colorAnomaly : colorNormal;

            lineColors[lIdx] = lineColor.r * alpha;
            lineColors[lIdx + 1] = lineColor.g * alpha;
            lineColors[lIdx + 2] = lineColor.b * alpha;

            lineColors[lIdx + 3] = lineColor.r * alpha;
            lineColors[lIdx + 4] = lineColor.g * alpha;
            lineColors[lIdx + 5] = lineColor.b * alpha;

            connectionIdx++;
          }
        }
      }
    }

    nodeGeometry.attributes.position.needsUpdate = true;
    lineGeometry.attributes.position.needsUpdate = true;
    lineGeometry.attributes.color.needsUpdate = true;
    lineGeometry.setDrawRange(0, connectionIdx * 2);

    // Update Attribution Rays (SHAP Rays connecting decision plane to nodes)
    let rayCount = 0;
    nodes.forEach((n) => {
      if ((n.isAnomaly || Math.random() < 0.008) && rayCount < ATTRIBUTION_RAYS) {
        const rIdx = rayCount * 6;
        rayPositions[rIdx] = n.pos.x;
        rayPositions[rIdx + 1] = n.pos.y;
        rayPositions[rIdx + 2] = n.pos.z;

        rayPositions[rIdx + 3] = n.pos.x * 0.4;
        rayPositions[rIdx + 4] = -4; // Grounded to decision manifold
        rayPositions[rIdx + 5] = n.pos.z * 0.4;

        rayCount++;
      }
    });
    rayGeometry.attributes.position.needsUpdate = true;
    rayGeometry.setDrawRange(0, rayCount * 2);

    // Rotation of entire galaxy cluster
    nodePoints.rotation.y = time * 0.02;
    lineMesh.rotation.y = time * 0.02;

    renderer.render(scene, camera);
  }

  animate();

  // Scroll-linked camera dolly (GSAP ScrollTrigger)
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(camera.position, {
      z: 16,
      y: -3,
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });

    // Fade WebGL manifold gracefully when leaving hero into content sections
    gsap.to(container, {
      opacity: 0.16,
      scrollTrigger: {
        trigger: '#research',
        start: 'top 85%',
        end: 'top 25%',
        scrub: 1
      }
    });

    gsap.to(scene.rotation, {
      x: 0.35,
      scrollTrigger: {
        trigger: '#research',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5
      }
    });

    // Animate Cards Reveal
    gsap.utils.toArray('.pub-card, .system-card, .academic-card').forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      });
    });
  }

  // ==========================================================================
  // 3. Card 2.5D Interactive Perspective Tilt
  // ==========================================================================
  const tiltCards = document.querySelectorAll('.pub-card, .system-card, .telemetry-card');

  tiltCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -4.5;
      const rotateY = ((x - centerX) / centerX) * 4.5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });

  // ==========================================================================
  // 4. BibTeX Modal & Clipboard Toast Notification
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

  const modalOverlay = document.getElementById('bibtex-modal');
  const bibtexPre = document.getElementById('bibtex-content');
  const modalClose = document.getElementById('modal-close-btn');
  const copyBibtexBtn = document.getElementById('copy-bibtex-btn');
  const toast = document.getElementById('toast-alert');

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  document.querySelectorAll('.btn-bibtex').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pubKey = btn.getAttribute('data-pub');
      const citation = bibtexDatabase[pubKey];
      if (citation && bibtexPre && modalOverlay) {
        bibtexPre.textContent = citation;
        modalOverlay.classList.add('active');
      }
    });
  });

  if (modalClose && modalOverlay) {
    modalClose.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }

  if (copyBibtexBtn && bibtexPre) {
    copyBibtexBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(bibtexPre.textContent).then(() => {
        showToast('✓ BibTeX entry copied to clipboard');
        if (modalOverlay) modalOverlay.classList.remove('active');
      }).catch(() => {
        showToast('Error copying to clipboard');
      });
    });
  }

})();
