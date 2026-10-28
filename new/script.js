/**
 * AH-2026: "THE SIGNAL"
 * Research Portfolio Architecture of Asif Hasan
 * Procedural Starfield & Celestial Bodies • Matrix Code Rain • Morse Audio Synthesis • Plain View Switcher
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. Single Source of Truth: Audited Signal Dataset
  // ==========================================================================
  const SIGNAL_DATA = {
    system: {
      identifier: "AH-2026",
      name: "Asif Hasan",
      callsign: "S21NEO",
      status: "SIGNAL ACQUIRED",
      tagline: "AI/ML Researcher & Systems Engineer",
      subtitle: "Investigating Explainable AI for IoT Security, Edge Inference, and Distributed Systems.",
      email: "asifhasan.cse@gmail.com",
      github: "https://github.com/asicoltd",
      linkedin: "https://www.linkedin.com/in/asicoltd",
      location: "Dhaka, Bangladesh"
    },
    education: [
      {
        degree: "M.Sc. in Computer Science and Engineering",
        institution: "East West University",
        location: "Dhaka, Bangladesh",
        status: "Currently Enrolled (Active Thesis)",
        focus: "Explainable Artificial Intelligence (XAI), IoT Intrusion Detection on Edge Gateways, and Deep Neural Networks."
      },
      {
        degree: "B.Sc. in Computer Science and Engineering",
        institution: "East West University",
        location: "Dhaka, Bangladesh",
        status: "Graduated",
        focus: "Theoretical Computer Science, Algorithms, Machine Learning, Operating Systems, and Distributed Networks."
      }
    ],
    publications: [
      {
        id: "hfmd",
        type: "conference_proceeding",
        title: "Ensemble Deep Learning for Enhanced Detection and Classification of Hand, Foot, and Mouth Disease",
        authors: "Hasan, Md Asif and Collaborators",
        venue: "International Conference on Data Mining and Information Security (ICDMIS 2024)",
        series: "Lecture Notes in Networks and Systems (LNNS)",
        publisher: "Springer, Singapore",
        year: 2024,
        doi: "10.1007/978-981-96-6063-6_25",
        link: "https://link.springer.com/chapter/10.1007/978-981-96-6063-6_25",
        abstract: "Addresses the clinical diagnostic challenge of accurately detecting Hand, Foot, and Mouth Disease (HFMD) in infants and children. Leverages deep convolutional networks with an ensemble voting pipeline to enhance robustness and classification accuracy in dermatological lesion analysis.",
        bibtex: `@inproceedings{hasan2024hfmd,
  title={Ensemble Deep Learning for Enhanced Detection and Classification of Hand, Foot, and Mouth Disease},
  author={Hasan, Md Asif and Collaborators},
  booktitle={International Conference on Data Mining and Information Security (ICDMIS 2024)},
  series={Lecture Notes in Networks and Systems},
  publisher={Springer, Singapore},
  doi={10.1007/978-981-96-6063-6_25},
  year={2024}
}`,
        celestial_body: {
          name: "PLANET HFMD-24",
          badge: "CELESTIAL BODY // 01",
          color: "#00ff88"
        }
      },
      {
        id: "peptic",
        type: "conference_proceeding",
        title: "Classification of Peptic Ulcer and Digestive Tract Disorders Using Endoscopic Images",
        authors: "Hasan, Md Asif and Collaborators",
        venue: "International Conference on Data Mining and Information Security (ICDMIS 2024)",
        series: "Lecture Notes in Networks and Systems (LNNS)",
        publisher: "Springer, Singapore",
        year: 2024,
        doi: "10.1007/978-981-96-6066-7_32",
        link: "https://link.springer.com/chapter/10.1007/978-981-96-6066-7_32",
        abstract: "Proposes an automated computer-assisted diagnostic framework for evaluating gastrointestinal endoscopy frames. Employs fine-tuned transfer learning backbones with targeted feature extraction to assist clinical specialists in identifying peptic ulcers and gastrointestinal abnormalities.",
        bibtex: `@inproceedings{hasan2024peptic,
  title={Classification of Peptic Ulcer and Digestive Tract Disorders Using Endoscopic Images},
  author={Hasan, Md Asif and Collaborators},
  booktitle={International Conference on Data Mining and Information Security (ICDMIS 2024)},
  series={Lecture Notes in Networks and Systems},
  publisher={Springer, Singapore},
  doi={10.1007/978-981-96-6066-7_32},
  year={2024}
}`,
        celestial_body: {
          name: "PLANET PEPTIC-24",
          badge: "CELESTIAL BODY // 02",
          color: "#00e5ff"
        }
      },
      {
        id: "rose",
        type: "conference_proceeding",
        title: "Rose Disease Detection Using YOLO: A Deep Learning-Based Approach",
        authors: "Hasan, Md Asif and Collaborators",
        venue: "9th International Conference on ICTCS 2024",
        series: "Lecture Notes in Networks and Systems (LNNS)",
        publisher: "Springer, Singapore",
        year: 2024,
        doi: "10.1007/978-981-96-5607-3_13",
        link: "https://link.springer.com/chapter/10.1007/978-981-96-5607-3_13",
        abstract: "Investigates real-time single-stage object detection architectures (YOLO) for early botanical pathology detection. Evaluates bounding box localization and multi-class disease classification on foliar rose datasets under varying natural field illumination.",
        bibtex: `@inproceedings{hasan2024rose,
  title={Rose Disease Detection Using YOLO: A Deep Learning-Based Approach},
  author={Hasan, Md Asif and Collaborators},
  booktitle={9th International Conference on ICTCS 2024},
  series={Lecture Notes in Networks and Systems},
  publisher={Springer, Singapore},
  doi={10.1007/978-981-96-5607-3_13},
  year={2024}
}`,
        celestial_body: {
          name: "PLANET ROSE-24",
          badge: "CELESTIAL BODY // 03",
          color: "#a855f7"
        }
      },
      {
        id: "thesis_nebula",
        type: "ms_thesis_active",
        title: "Explainable Artificial Intelligence (XAI) for IoT Intrusion Detection in Edge Gateways",
        authors: "Asif Hasan (M.Sc. Thesis)",
        venue: "East West University — Department of CSE (Active Thesis)",
        series: "M.Sc. Research In Progress",
        publisher: "Under Active Supervision",
        year: 2026,
        doi: "IN_PROGRESS",
        link: "#contact",
        abstract: "Active M.Sc. thesis research developing lightweight, transparent tree ensembles and deep neural networks with SHAP/LIME attribution pipelines for real-time cyberattack detection on resource-constrained IoT gateways.",
        bibtex: `@mastersthesis{hasan2026xai_iot,
  title={Explainable Artificial Intelligence (XAI) for IoT Intrusion Detection in Edge Gateways},
  author={Hasan, Md Asif},
  school={East West University, Dhaka, Bangladesh},
  year={2026},
  note={M.Sc. Thesis in Progress}
}`,
        celestial_body: {
          name: "PROTO-PLANET NEBULA // THESIS",
          badge: "ACTIVE FORMATION // 04",
          color: "#10b981"
        }
      }
    ],
    projects: [
      {
        id: "ewu_mind",
        title: "EWU_MIND: AI-Driven News Recommendation System",
        category: "MACHINE LEARNING",
        tech: ["PyTorch", "Python", "Neural Collaborative Filtering", "MIND Dataset"],
        description: "Personalized neural recommendation engine combining collaborative filtering with content embeddings to deliver low-latency, accurate ranking across large-scale news reader datasets.",
        github: "https://github.com/asicoltd/EWU_MIND"
      },
      {
        id: "ai_chess",
        title: "AI-Based Chess Engine",
        category: "REINFORCEMENT LEARNING",
        tech: ["Python", "Q-Learning", "Deep Q-Networks (DQN)", "MCTS"],
        description: "Autonomous competitive chess engine implementing Deep Q-Networks and Monte Carlo Tree Search (MCTS) to iteratively optimize positional evaluation and tactical move selections.",
        github: "https://github.com/asicoltd/AI_Chess"
      },
      {
        id: "asicoin",
        title: "ASICoin: Blockchain Cryptocurrency with AI Fraud Detection",
        category: "DISTRIBUTED LEDGER",
        tech: ["Python", "Blockchain", "AI Security", "Post-Quantum Cryptography"],
        description: "Cryptocurrency implementation exploring distributed consensus, cryptographic transaction validation, and AI-assisted anomaly detection for future-proof ledger protection.",
        github: "https://github.com/asicoltd/ASICoin"
      },
      {
        id: "one_dtn",
        title: "The ONE DTN Routing Protocol Simulator Extension",
        category: "NETWORKING RESEARCH",
        tech: ["Java", "Python", "The ONE Simulator", "Ad-Hoc Protocols"],
        description: "Extensive empirical simulation benchmarking Epidemic, PRoPHET, and Spray-and-Wait delay-tolerant routing protocols across partitioned, intermittent networks during emergency disasters.",
        github: "https://github.com/asicoltd"
      },
      {
        id: "medicine_shop",
        title: "Medicine Shop Inventory Management System",
        category: "ENTERPRISE SOFTWARE",
        tech: ["PHP", "MySQL", "JavaScript", "Relational Database"],
        description: "Production database software managing pharmaceutical stock, real-time invoicing, point-of-sale audits, and automated expiry date tracking.",
        github: "https://github.com/asicoltd/Medicine-Shop-Management-System"
      },
      {
        id: "crypto_sentiment",
        title: "Cryptocurrency Price Prediction via Sentiment Analysis",
        category: "DEEP LEARNING",
        tech: ["Python", "TensorFlow", "Keras", "NLP", "LSTM"],
        description: "Multimodal time-series forecasting model combining historical price movements with NLP sentiment embeddings extracted from financial news streams.",
        github: "https://github.com/asicoltd/Temporal-Analysis-of-Cryptocurrency-Prices-LSTM-Based-ETH-Price-Prediction-from-BTC-Data"
      }
    ],
    sideband: [
      {
        code: "FREQ // 144-430 MHz",
        title: "Licensed Amateur Radio Operator (S21NEO)",
        frequency: "VHF / UHF Bands",
        description: "Licensed HAM radio operator (Callsign: S21NEO). Researching RF wave propagation, antenna impedance matching, emergency radio networks, and packet radio communications during disasters."
      },
      {
        code: "FREQ // ICPC-ALGO",
        title: "Competitive Programming & Problem Solving",
        frequency: "Codeforces • HackerRank • Beecrowd",
        description: "Solved thousands of algorithmic and data structure problems across online judges. Active contestant in national programming contests and university ICPC preliminaries."
      },
      {
        code: "FREQ // ORATORY",
        title: "Debating & Public Oratory Champion",
        frequency: "Parliamentary Debate",
        description: "University-level debate champion, former General Secretary of college debate club. Trainer in structured rhetoric, policy critique, and scientific communication."
      },
      {
        code: "FREQ // SERVICE",
        title: "Senior Rover Mate — Scouting Movement",
        frequency: "Samatat Open Scout Group",
        description: "Senior Rover Mate spearheading community service, disaster relief campaigns, winter clothes distribution, youth leadership development, and scout jamborees."
      },
      {
        code: "FREQ // DONOR-20+",
        title: "Voluntary Blood Donor (20+ Donations)",
        frequency: "Quantum Foundation & Emergency Care",
        description: "Regular blood donor since 2017 with over 20 voluntary donations connecting donors with critically ill emergency patients."
      },
      {
        code: "FREQ // ENDURANCE",
        title: "Marathon Runner & Martial Arts Practitioner",
        frequency: "15 Marathon Events • Blue Belt Karate",
        description: "Completed 15 mini, half, and full marathons with Run Bangladesh; holds Blue Belt in Karate and Green Belt in Taekwondo, cultivating mental endurance and physical discipline."
      }
    ]
  };

  // ==========================================================================
  // 2. DOM Rendering Engine (Populate Views from Single Source of Truth)
  // ==========================================================================
  function renderAllContent() {
    // 2.1 Render Research Celestial Nodes (Immersive View)
    const researchContainer = document.getElementById('celestial-nodes-container');
    if (researchContainer) {
      researchContainer.innerHTML = SIGNAL_DATA.publications.map((pub, idx) => `
        <article class="celestial-card ${pub.id === 'thesis_nebula' ? 'is-active-thesis' : ''}" data-pub-id="${pub.id}" tabindex="0" role="region" aria-label="${pub.title}">
          <div>
            <div class="celestial-header">
              <span class="celestial-beacon">
                <span class="beacon-dot" style="background: ${pub.celestial_body.color}; box-shadow: 0 0 10px ${pub.celestial_body.color}"></span>
                ${pub.celestial_body.badge}
              </span>
              <span class="celestial-doi-pill">${pub.id === 'thesis_nebula' ? 'M.SC. THESIS' : 'SPRINGER LNNS'}</span>
            </div>
            <h3 class="celestial-title">${pub.title}</h3>
            <p class="celestial-authors">${pub.authors}</p>
            <p class="celestial-venue">${pub.venue}</p>
            <p class="celestial-abstract">${pub.abstract}</p>
          </div>
          <div class="celestial-footer">
            <button class="btn-telemetry-action btn-inspect-pub" data-pub-id="${pub.id}" aria-label="Decode telemetry for ${pub.title}">[ DECODE TELEMETRY ↗ ]</button>
            ${pub.doi !== 'IN_PROGRESS' ? `<a href="${pub.link}" target="_blank" rel="noopener noreferrer" class="btn-telemetry-action" aria-label="Springer proceeding link">[ SPRINGER DOI ↗ ]</a>` : `<span class="btn-telemetry-action" style="opacity:0.7">// IN PROGRESS</span>`}
          </div>
        </article>
      `).join('');
    }

    // 2.2 Render Systems Constellation Nodes (Immersive View)
    const systemsContainer = document.getElementById('constellation-nodes-container');
    if (systemsContainer) {
      systemsContainer.innerHTML = SIGNAL_DATA.projects.map((proj) => `
        <article class="system-node-card btn-inspect-proj" data-proj-id="${proj.id}" tabindex="0" role="button" aria-label="${proj.title}">
          <div>
            <span class="system-category">// ${proj.category}</span>
            <h3 class="system-title">${proj.title}</h3>
            <p class="system-desc">${proj.description}</p>
          </div>
          <div class="system-tags">
            ${proj.tech.map(t => `<span class="system-tag">${t}</span>`).join('')}
          </div>
        </article>
      `).join('');
    }

    // 2.3 Render Sideband Frequencies (Immersive View)
    const sidebandContainer = document.getElementById('sideband-nodes-container');
    if (sidebandContainer) {
      sidebandContainer.innerHTML = SIGNAL_DATA.sideband.map((side) => `
        <div class="sideband-node">
          <span class="sideband-freq">${side.code}</span>
          <h3 class="sideband-title">${side.title}</h3>
          <p class="sideband-desc">${side.description}</p>
        </div>
      `).join('');
    }

    // 2.4 Render Plain Text Document (Blue Pill View)
    const plainEdu = document.getElementById('plain-education-list');
    if (plainEdu) {
      plainEdu.innerHTML = SIGNAL_DATA.education.map(e => `
        <div class="plain-item">
          <h3 class="plain-item-title">${e.degree}</h3>
          <p class="plain-item-meta">${e.institution} &bull; ${e.status}</p>
          <p class="plain-item-desc">${e.focus}</p>
        </div>
      `).join('');
    }

    const plainPubs = document.getElementById('plain-publications-list');
    if (plainPubs) {
      plainPubs.innerHTML = SIGNAL_DATA.publications.map(p => `
        <div class="plain-item">
          <h3 class="plain-item-title">${p.title}</h3>
          <p class="plain-item-meta">${p.authors} &bull; ${p.venue} (${p.year})</p>
          <p class="plain-item-desc">${p.abstract}</p>
          <div class="plain-item-links">
            ${p.doi !== 'IN_PROGRESS' ? `<a href="${p.link}" target="_blank" rel="noopener noreferrer">[ Springer Proceeding ↗ ]</a>` : `<span>[ Active Thesis ]</span>`}
            <a href="#" class="btn-inspect-pub" data-pub-id="${p.id}">[ View BibTeX ]</a>
          </div>
        </div>
      `).join('');
    }

    const plainProjects = document.getElementById('plain-projects-list');
    if (plainProjects) {
      plainProjects.innerHTML = SIGNAL_DATA.projects.map(proj => `
        <div class="plain-item">
          <h3 class="plain-item-title">${proj.title}</h3>
          <p class="plain-item-meta">// ${proj.category} &bull; ${proj.tech.join(', ')}</p>
          <p class="plain-item-desc">${proj.description}</p>
          <div class="plain-item-links">
            <a href="${proj.github}" target="_blank" rel="noopener noreferrer">[ GitHub Repository ↗ ]</a>
          </div>
        </div>
      `).join('');
    }

    const plainSide = document.getElementById('plain-sideband-list');
    if (plainSide) {
      plainSide.innerHTML = SIGNAL_DATA.sideband.map(s => `
        <div class="plain-item">
          <h3 class="plain-item-title">${s.title} (${s.frequency})</h3>
          <p class="plain-item-meta">${s.code}</p>
          <p class="plain-item-desc">${s.description}</p>
        </div>
      `).join('');
    }
  }
  renderAllContent();

  // Runtime asynchronous fetch to guarantee single source of truth from signal_data.json
  if (typeof fetch === 'function') {
    fetch('data/signal_data.json')
      .then(response => {
        if (response.ok) return response.json();
        throw new Error('HTTP ' + response.status);
      })
      .then(data => {
        if (data && data.publications && data.projects) {
          Object.assign(SIGNAL_DATA, data);
          renderAllContent();
        }
      })
      .catch(() => {
        // Fallback already pre-rendered seamlessly from verified local cache
      });
  }

  // ==========================================================================
  // 3. STOP 0: 2D Matrix Code Rain Canvas & Boot Dissolve
  // ==========================================================================
  const rainCanvas = document.getElementById('rain-canvas');
  let rainCtx = null;
  let rainAnimId = null;
  let rainChars = '0123456789ABCDEFHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソタチツテトS21NEO';
  let drops = [];
  let fontSize = 14;

  if (rainCanvas) {
    rainCtx = rainCanvas.getContext('2d');
    function resizeRain() {
      rainCanvas.width = window.innerWidth;
      rainCanvas.height = window.innerHeight;
      const columns = Math.floor(rainCanvas.width / fontSize);
      drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * -50);
      }
    }
    resizeRain();
    window.addEventListener('resize', resizeRain, { passive: true });

    function drawRain() {
      rainCtx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      rainCtx.fillRect(0, 0, rainCanvas.width, rainCanvas.height);

      rainCtx.fillStyle = '#00ff66';
      rainCtx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = rainChars[Math.floor(Math.random() * rainChars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        rainCtx.fillText(text, x, y);

        if (y > rainCanvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      rainAnimId = requestAnimationFrame(drawRain);
    }
    rainAnimId = requestAnimationFrame(drawRain);
  }

  // Boot Dismiss / Dissolve
  const bootOverlay = document.getElementById('boot-overlay');
  function dissolveBoot(targetView) {
    if (bootOverlay) {
      bootOverlay.classList.add('dissolved');
      setTimeout(() => {
        if (rainAnimId) cancelAnimationFrame(rainAnimId);
      }, 900);
    }
    if (targetView === 'plain') {
      activatePlainView();
    } else {
      activateImmersiveView();
    }
  }

  document.getElementById('btn-skip-boot')?.addEventListener('click', () => dissolveBoot('immersive'));
  document.getElementById('btn-choose-red')?.addEventListener('click', () => dissolveBoot('immersive'));
  document.getElementById('btn-choose-blue')?.addEventListener('click', () => dissolveBoot('plain'));

  // ==========================================================================
  // 4. View Mode Switching: Red Pill (Immersive) vs Blue Pill (Plain Text)
  // ==========================================================================
  const viewImmersive = document.getElementById('view-immersive');
  const viewPlain = document.getElementById('view-plain');
  const viewToggleBtn = document.getElementById('hud-view-toggle');
  const returnImmersiveBtn = document.getElementById('btn-return-immersive');
  let currentView = 'immersive';
  let isThreeRendering = true;
  let startThreeLoop = null;

  function activatePlainView() {
    currentView = 'plain';
    document.body.classList.remove('mode-immersive');
    document.body.classList.add('mode-plain');
    if (viewImmersive) viewImmersive.style.display = 'none';
    if (viewPlain) viewPlain.style.display = 'block';
    if (viewToggleBtn) {
      viewToggleBtn.setAttribute('aria-checked', 'true');
      const label = viewToggleBtn.querySelector('.view-label');
      if (label) label.textContent = 'IMMERSIVE VIEW';
    }
    isThreeRendering = false;
    try {
      localStorage.setItem('signal_pill_pref', 'plain');
    } catch (_) {}
    window.scrollTo(0, 0);
  }

  function activateImmersiveView() {
    currentView = 'immersive';
    document.body.classList.remove('mode-plain');
    document.body.classList.add('mode-immersive');
    if (viewPlain) viewPlain.style.display = 'none';
    if (viewImmersive) viewImmersive.style.display = 'block';
    if (viewToggleBtn) {
      viewToggleBtn.setAttribute('aria-checked', 'false');
      const label = viewToggleBtn.querySelector('.view-label');
      if (label) label.textContent = 'PLAIN VIEW';
    }
    isThreeRendering = true;
    if (startThreeLoop) startThreeLoop();
    try {
      localStorage.setItem('signal_pill_pref', 'immersive');
    } catch (_) {}
    window.scrollTo(0, 0);
  }

  viewToggleBtn?.addEventListener('click', () => {
    if (currentView === 'immersive') {
      activatePlainView();
    } else {
      activateImmersiveView();
    }
  });

  returnImmersiveBtn?.addEventListener('click', activateImmersiveView);

  // Preference Check: Saved user choice takes priority; else auto-activate for reduced-motion
  try {
    const savedPillPref = localStorage.getItem('signal_pill_pref');
    if (savedPillPref === 'plain') {
      activatePlainView();
    } else if (!savedPillPref && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      activatePlainView();
    }
  } catch (_) {}

  // ==========================================================================
  // 5. Procedural 3D Space Flight Scene (Three.js)
  // ==========================================================================
  const spaceCanvas = document.getElementById('space-canvas');
  if (spaceCanvas && typeof THREE !== 'undefined') {
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030508, 0.015);

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 30);

    const renderer = new THREE.WebGLRenderer({
      canvas: spaceCanvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    // 5.1 Procedural Starfield (Twinkling Cosmic Depth)
    const starCount = window.innerWidth < 768 ? 900 : 2200;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      starPos[i * 3] = (Math.random() - 0.5) * 160;
      starPos[i * 3 + 1] = (Math.random() - 0.5) * 160;
      starPos[i * 3 + 2] = (Math.random() - 0.5) * 120 - 20;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0x00ff66,
      size: 0.18,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });
    const starPoints = new THREE.Points(starGeo, starMat);
    scene.add(starPoints);

    // 5.2 Stop 2: Celestial Bodies (Planets + Active Nebula)
    const celestialGroup = new THREE.Group();
    celestialGroup.position.set(0, -18, -15);
    scene.add(celestialGroup);

    // Planet 1: HFMD (Emerald Terrestrial)
    const p1Geo = new THREE.SphereGeometry(1.5, 32, 32);
    const p1Mat = new THREE.MeshStandardMaterial({
      color: 0x00ff88,
      roughness: 0.4,
      metalness: 0.2,
      emissive: 0x003311
    });
    const planet1 = new THREE.Mesh(p1Geo, p1Mat);
    planet1.position.set(-6, 2, 0);
    celestialGroup.add(planet1);

    // Planet 2: Peptic (Cyan Gas Giant with Ring)
    const p2Geo = new THREE.SphereGeometry(1.8, 32, 32);
    const p2Mat = new THREE.MeshStandardMaterial({
      color: 0x00e5ff,
      roughness: 0.3,
      metalness: 0.3,
      emissive: 0x002233
    });
    const planet2 = new THREE.Mesh(p2Geo, p2Mat);
    planet2.position.set(-2, -3, 2);
    celestialGroup.add(planet2);

    // Planet 3: Rose (Silicate Amethyst)
    const p3Geo = new THREE.SphereGeometry(1.4, 32, 32);
    const p3Mat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      roughness: 0.5,
      metalness: 0.2,
      emissive: 0x220033
    });
    const planet3 = new THREE.Mesh(p3Geo, p3Mat);
    planet3.position.set(3, 3, -1);
    celestialGroup.add(planet3);

    // Body 4: Active Thesis Nebula (Swirling Volumetric Particle Cloud)
    const nebulaCount = 600;
    const nebulaGeo = new THREE.BufferGeometry();
    const nebulaPos = new Float32Array(nebulaCount * 3);
    for (let i = 0; i < nebulaCount; i++) {
      const angle = i * 0.12;
      const radius = 0.5 + Math.random() * 2.5;
      nebulaPos[i * 3] = Math.cos(angle) * radius + (Math.random() - 0.5) * 0.4;
      nebulaPos[i * 3 + 1] = Math.sin(angle) * radius + (Math.random() - 0.5) * 0.4;
      nebulaPos[i * 3 + 2] = (Math.random() - 0.5) * 1.5;
    }
    nebulaGeo.setAttribute('position', new THREE.BufferAttribute(nebulaPos, 3));
    const nebulaMat = new THREE.PointsMaterial({
      color: 0x10b981,
      size: 0.16,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    const nebulaPoints = new THREE.Points(nebulaGeo, nebulaMat);
    nebulaPoints.position.set(7, -1, 1);
    celestialGroup.add(nebulaPoints);

    // 5.3 Stop 3: Systems Constellation Star Map
    const constellationGroup = new THREE.Group();
    constellationGroup.position.set(0, -42, -20);
    scene.add(constellationGroup);

    const starCoords = [
      new THREE.Vector3(-6, 2, 0),
      new THREE.Vector3(-2, 5, 1),
      new THREE.Vector3(3, 3, -2),
      new THREE.Vector3(5, -1, 1),
      new THREE.Vector3(1, -4, 0),
      new THREE.Vector3(-4, -3, -1)
    ];

    const linePoints = [];
    for (let i = 0; i < starCoords.length; i++) {
      const next = starCoords[(i + 1) % starCoords.length];
      linePoints.push(starCoords[i], next);
    }
    const constLineGeo = new THREE.BufferGeometry().setFromPoints(linePoints);
    const constLineMat = new THREE.LineBasicMaterial({
      color: 0x00ff66,
      transparent: true,
      opacity: 0.45
    });
    const constellationLines = new THREE.LineSegments(constLineGeo, constLineMat);
    constellationGroup.add(constellationLines);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x061109, 2.0);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight.position.set(8, 12, 10);
    scene.add(dirLight);

    // Resize handler
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }, { passive: true });

    // Smooth Scroll Camera Tracking
    let targetScrollY = 0;
    let currentScrollY = 0;
    window.addEventListener('scroll', () => {
      targetScrollY = window.scrollY;
    }, { passive: true });

    // Render Animation Loop
    let clock = new THREE.Clock();
    let threeAnimId = null;

    function animate() {
      if (!isThreeRendering) return;
      threeAnimId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Autonomous Starfield Drift
      starPoints.rotation.y = elapsedTime * 0.008;

      // Autonomous Planetary Rotations
      planet1.rotation.y = elapsedTime * 0.25;
      planet2.rotation.y = elapsedTime * 0.35;
      planet3.rotation.y = elapsedTime * 0.20;
      nebulaPoints.rotation.z = -elapsedTime * 0.4;

      // Constellation Drift
      constellationGroup.rotation.y = Math.sin(elapsedTime * 0.15) * 0.1;

      // Scroll-Driven Camera Flight
      currentScrollY += (targetScrollY - currentScrollY) * 0.08;
      const docHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const scrollPct = Math.min(Math.max(currentScrollY / docHeight, 0), 1);

      // Camera flies down the signal pipeline
      camera.position.y = -scrollPct * 52;
      camera.position.z = 30 - scrollPct * 12;

      renderer.render(scene, camera);
    }

    startThreeLoop = function () {
      if (threeAnimId) cancelAnimationFrame(threeAnimId);
      animate();
    };

    if (isThreeRendering) {
      animate();
    }
  }

  // ==========================================================================
  // 6. Audio Synthesis: Morse Code Transmitter for Callsign [ S21NEO ]
  // ==========================================================================
  let audioCtx = null;
  let isSoundEnabled = false;

  const MORSE_S21NEO = [
    // S: ...
    { tone: true, dur: 80 }, { tone: false, dur: 80 },
    { tone: true, dur: 80 }, { tone: false, dur: 80 },
    { tone: true, dur: 80 }, { tone: false, dur: 240 },
    // 2: ..---
    { tone: true, dur: 80 }, { tone: false, dur: 80 },
    { tone: true, dur: 80 }, { tone: false, dur: 80 },
    { tone: true, dur: 240 }, { tone: false, dur: 80 },
    { tone: true, dur: 240 }, { tone: false, dur: 80 },
    { tone: true, dur: 240 }, { tone: false, dur: 240 },
    // 1: .----
    { tone: true, dur: 80 }, { tone: false, dur: 80 },
    { tone: true, dur: 240 }, { tone: false, dur: 80 },
    { tone: true, dur: 240 }, { tone: false, dur: 80 },
    { tone: true, dur: 240 }, { tone: false, dur: 80 },
    { tone: true, dur: 240 }, { tone: false, dur: 240 },
    // N: -.
    { tone: true, dur: 240 }, { tone: false, dur: 80 },
    { tone: true, dur: 80 }, { tone: false, dur: 240 },
    // E: .
    { tone: true, dur: 80 }, { tone: false, dur: 240 },
    // O: ---
    { tone: true, dur: 240 }, { tone: false, dur: 80 },
    { tone: true, dur: 240 }, { tone: false, dur: 80 },
    { tone: true, dur: 240 }, { tone: false, dur: 400 }
  ];

  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) audioCtx = new AudioContextClass();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  const soundToggleBtn = document.getElementById('hud-sound-toggle');
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      isSoundEnabled = !isSoundEnabled;
      const label = soundToggleBtn.querySelector('.sound-label');
      if (label) label.textContent = isSoundEnabled ? 'AUDIO: ON' : 'AUDIO: OFF';
      soundToggleBtn.style.borderColor = isSoundEnabled ? 'var(--signal-green)' : 'rgba(255,255,255,0.15)';
      soundToggleBtn.style.color = isSoundEnabled ? 'var(--signal-green)' : 'var(--text-body)';
      if (isSoundEnabled) getAudioContext();
    });
  }

  let isTransmitting = false;
  let transmitCancelled = false;

  async function playMorseSequence() {
    if (isTransmitting) {
      transmitCancelled = true;
      isTransmitting = false;
      showToast('TRANSMISSION ABORTED.');
      return;
    }
    isTransmitting = true;
    transmitCancelled = false;
    showToast('TRANSMITTING CALLSIGN [ S21NEO ] ... (CLICK AGAIN TO STOP)');

    const ctx = isSoundEnabled ? getAudioContext() : null;

    for (const step of MORSE_S21NEO) {
      if (transmitCancelled) break;
      if (step.tone && ctx && isSoundEnabled) {
        try {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(750, ctx.currentTime);
          gain.gain.setValueAtTime(0.12, ctx.currentTime);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + step.dur / 1000);
        } catch (_) {}
      }
      triggerWavePulse();
      await new Promise(r => setTimeout(r, step.dur));
    }
    if (!transmitCancelled) {
      showToast('TRANSMISSION COMPLETE. CALLSIGN S21NEO LOGGED.');
    }
    isTransmitting = false;
    transmitCancelled = false;
  }

  document.getElementById('btn-transmit-signal')?.addEventListener('click', playMorseSequence);

  // ==========================================================================
  // 7. Oscilloscope Waveform Canvas
  // ==========================================================================
  const waveCanvas = document.getElementById('waveform-canvas');
  let wavePulse = 0;

  function triggerWavePulse() {
    wavePulse = 1.0;
  }

  if (waveCanvas) {
    const wCtx = waveCanvas.getContext('2d');
    let waveTime = 0;

    function drawWaveform() {
      requestAnimationFrame(drawWaveform);
      waveTime += 0.05;
      wavePulse *= 0.94; // decay pulse

      wCtx.fillStyle = '#020305';
      wCtx.fillRect(0, 0, waveCanvas.width, waveCanvas.height);

      // Grid Lines
      wCtx.strokeStyle = 'rgba(0, 255, 102, 0.1)';
      wCtx.lineWidth = 1;
      for (let y = 15; y < waveCanvas.height; y += 15) {
        wCtx.beginPath();
        wCtx.moveTo(0, y);
        wCtx.lineTo(waveCanvas.width, y);
        wCtx.stroke();
      }

      // Signal Beam
      wCtx.strokeStyle = '#00ff66';
      wCtx.lineWidth = 2;
      wCtx.shadowBlur = 12;
      wCtx.shadowColor = '#00ff66';
      wCtx.beginPath();

      const centerY = waveCanvas.height / 2;
      const amp = 14 + wavePulse * 28;

      for (let x = 0; x < waveCanvas.width; x++) {
        const freq = 0.035;
        const y = centerY + Math.sin(x * freq + waveTime) * Math.cos(x * 0.01) * amp;
        if (x === 0) wCtx.moveTo(x, y);
        else wCtx.lineTo(x, y);
      }
      wCtx.stroke();
      wCtx.shadowBlur = 0;
    }
    drawWaveform();
  }

  // ==========================================================================
  // 8. Telemetry Drawer & BibTeX Inspection (Accessible with Focus Trapping)
  // ==========================================================================
  const drawer = document.getElementById('telemetry-drawer');
  const drawerTitle = document.getElementById('drawer-title');
  const drawerMeta = document.getElementById('drawer-meta');
  const drawerAbstract = document.getElementById('drawer-abstract');
  const drawerActions = document.getElementById('drawer-actions');
  const drawerBibtexBlock = document.getElementById('drawer-bibtex-block');
  const drawerBibtexCode = document.getElementById('drawer-bibtex-code');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');
  const copyBibtexBtn = document.getElementById('btn-copy-bibtex-action');

  let activeBibtexText = '';
  let lastFocusedElement = null;

  function openPubInspection(pubId, triggerEl) {
    const pub = SIGNAL_DATA.publications.find(p => p.id === pubId);
    if (!pub || !drawer) return;
    lastFocusedElement = triggerEl || document.activeElement;

    drawerTitle.textContent = pub.title;
    drawerMeta.textContent = `${pub.authors} • ${pub.venue} (${pub.year})`;
    drawerAbstract.textContent = pub.abstract;

    if (pub.bibtex) {
      activeBibtexText = pub.bibtex;
      drawerBibtexCode.textContent = pub.bibtex;
      drawerBibtexBlock.style.display = 'block';
    } else {
      drawerBibtexBlock.style.display = 'none';
    }

    drawerActions.innerHTML = `
      ${pub.doi !== 'IN_PROGRESS' ? `<a href="${pub.link}" target="_blank" rel="noopener noreferrer" class="btn-telemetry-action">[ SPRINGER PROCEEDING ↗ ]</a>` : `<span class="btn-telemetry-action">[ ACTIVE M.SC. THESIS ]</span>`}
    `;

    drawer.classList.add('active');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setTimeout(() => drawerCloseBtn?.focus(), 50);
  }

  function openProjInspection(projId, triggerEl) {
    const proj = SIGNAL_DATA.projects.find(p => p.id === projId);
    if (!proj || !drawer) return;
    lastFocusedElement = triggerEl || document.activeElement;

    drawerTitle.textContent = proj.title;
    drawerMeta.textContent = `CATEGORY: ${proj.category} • TECH: ${proj.tech.join(', ')}`;
    drawerAbstract.textContent = proj.description;
    drawerBibtexBlock.style.display = 'none';

    drawerActions.innerHTML = `
      <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn-telemetry-action">[ GITHUB REPOSITORY ↗ ]</a>
    `;

    drawer.classList.add('active');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setTimeout(() => drawerCloseBtn?.focus(), 50);
  }

  function closeDrawer() {
    if (drawer) {
      drawer.classList.remove('active');
      drawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
      }
    }
  }

  drawerCloseBtn?.addEventListener('click', closeDrawer);
  drawerBackdrop?.addEventListener('click', closeDrawer);

  // Focus trap inside drawer
  drawer?.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      const focusables = drawer.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusables.length === 0) return;
      const firstEl = focusables[0];
      const lastEl = focusables[focusables.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          lastEl.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastEl) {
          firstEl.focus();
          e.preventDefault();
        }
      }
    }
  });

  function fallbackCopyText(text) {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showToast('✓ BIBTEX CITATION COPIED TO CLIPBOARD');
    } catch (_) {
      showToast('BibTeX citation displayed below');
    }
  }

  copyBibtexBtn?.addEventListener('click', () => {
    if (activeBibtexText) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(activeBibtexText)
          .then(() => showToast('✓ BIBTEX CITATION COPIED TO CLIPBOARD'))
          .catch(() => fallbackCopyText(activeBibtexText));
      } else {
        fallbackCopyText(activeBibtexText);
      }
    }
  });

  // Attach dynamic event delegation for inspection buttons & keyboard access
  document.addEventListener('click', (e) => {
    const pubBtn = e.target.closest('.btn-inspect-pub');
    if (pubBtn) {
      e.preventDefault();
      const pubId = pubBtn.getAttribute('data-pub-id');
      openPubInspection(pubId, pubBtn);
      return;
    }

    const projBtn = e.target.closest('.btn-inspect-proj');
    if (projBtn) {
      e.preventDefault();
      const projId = projBtn.getAttribute('data-proj-id');
      openProjInspection(projId, projBtn);
      return;
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const pubCard = e.target.closest('.celestial-card');
      if (pubCard && !e.target.matches('button, a')) {
        e.preventDefault();
        const pubId = pubCard.getAttribute('data-pub-id');
        openPubInspection(pubId, pubCard);
        return;
      }
      const projCard = e.target.closest('.system-node-card');
      if (projCard && !e.target.matches('button, a')) {
        e.preventDefault();
        const projId = projCard.getAttribute('data-proj-id');
        openProjInspection(projId, projCard);
        return;
      }
    }
  });

  // ==========================================================================
  // 9. Interactive Mini-Apps Launcher Modal (Lab Apps 05)
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
    if (modalTitle) modalTitle.textContent = title || 'Mini-App Sandbox';
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

  document.querySelectorAll('.btn-play-miniapp').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openLauncherModal();
    });
  });

  document.querySelectorAll('.app-launcher-item').forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const url = item.getAttribute('data-app-url');
      const title = item.getAttribute('data-app-title');
      launchApp(url, title);
    });
  });

  backToMenuBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    showLauncherMenu();
  });

  closeInteractiveBtn?.addEventListener('click', closeLauncherModal);
  modalBackdrop?.addEventListener('click', closeLauncherModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDrawer();
      closeLauncherModal();
    }
  });

  // ==========================================================================
  // 10. Toast Notification System
  // ==========================================================================
  const toast = document.getElementById('signal-toast');
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2800);
  }

  // ==========================================================================
  // 11. Easter Eggs: Tab Title Lost/Acquired
  // ==========================================================================
  const originalDocTitle = document.title;
  window.addEventListener('blur', () => {
    document.title = '[ Signal lost... ]';
  });
  window.addEventListener('focus', () => {
    document.title = '[ Signal acquired ]';
    setTimeout(() => {
      document.title = originalDocTitle;
    }, 1800);
  });

})();
