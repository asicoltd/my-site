/**
 * AH-2026: "THE SIGNAL"
 * Research & Systems Portfolio of Asif Hasan
 * Procedural Space Depth • Scroll-Driven Card Focal Zoom • Web Audio Morse Synthesis • Plain View Switcher
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. Audited Single Source of Truth Dataset
  // ==========================================================================
  const SIGNAL_DATA = {
    system: {
      identifier: "AH-2026",
      name: "Asif Hasan",
      callsign: "S21NEO",
      status: "SIGNAL ACQUIRED",
      tagline: "AI/ML Researcher & Systems Engineer",
      subtitle: "Graduate researcher at East West University focusing on Explainable AI for IoT cybersecurity, deep learning, and distributed network architectures.",
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
          badge: "Springer LNNS (ICDMIS 2024)",
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
          badge: "Springer LNNS (ICDMIS 2024)",
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
          badge: "Springer LNNS (ICTCS 2024)",
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
          name: "M.Sc. Thesis Nebula",
          badge: "Active M.Sc. Thesis",
          color: "#10b981"
        }
      }
    ],
    projects: [
      {
        id: "ewu_mind",
        title: "EWU_MIND: AI-Driven News Recommendation System",
        category: "Machine Learning",
        tech: ["PyTorch", "Python", "Neural Collaborative Filtering", "MIND Dataset"],
        description: "Personalized neural recommendation engine combining collaborative filtering with content embeddings to deliver low-latency, accurate ranking across large-scale news reader datasets.",
        github: "https://github.com/asicoltd/EWU_MIND"
      },
      {
        id: "ai_chess",
        title: "AI-Based Chess Engine",
        category: "Reinforcement Learning",
        tech: ["Python", "Q-Learning", "Deep Q-Networks (DQN)", "MCTS"],
        description: "Autonomous competitive chess engine implementing Deep Q-Networks and Monte Carlo Tree Search (MCTS) to iteratively optimize positional evaluation and tactical move selections.",
        github: "https://github.com/asicoltd/AI_Chess"
      },
      {
        id: "asicoin",
        title: "ASICoin: Blockchain Cryptocurrency with AI Fraud Detection",
        category: "Distributed Ledger",
        tech: ["Python", "Blockchain", "AI Security", "Post-Quantum Cryptography"],
        description: "Cryptocurrency implementation exploring distributed consensus, cryptographic transaction validation, and AI-assisted anomaly detection for future-proof ledger protection.",
        github: "https://github.com/asicoltd/ASICoin"
      },
      {
        id: "one_dtn",
        title: "The ONE DTN Routing Protocol Simulator Extension",
        category: "Networking Research",
        tech: ["Java", "Python", "The ONE Simulator", "Ad-Hoc Protocols"],
        description: "Extensive empirical simulation benchmarking Epidemic, PRoPHET, and Spray-and-Wait delay-tolerant routing protocols across partitioned, intermittent networks during emergency disasters.",
        github: "https://github.com/asicoltd"
      },
      {
        id: "medicine_shop",
        title: "Medicine Shop Inventory Management System",
        category: "Enterprise Software",
        tech: ["PHP", "MySQL", "JavaScript", "Relational Database"],
        description: "Production database software managing pharmaceutical stock, real-time invoicing, point-of-sale audits, and automated expiry date tracking.",
        github: "https://github.com/asicoltd/Medicine-Shop-Management-System"
      },
      {
        id: "crypto_sentiment",
        title: "Cryptocurrency Price Prediction via Sentiment Analysis",
        category: "Deep Learning",
        tech: ["Python", "TensorFlow", "Keras", "NLP", "LSTM"],
        description: "Multimodal time-series forecasting model combining historical price movements with NLP sentiment embeddings extracted from financial news streams.",
        github: "https://github.com/asicoltd/Temporal-Analysis-of-Cryptocurrency-Prices-LSTM-Based-ETH-Price-Prediction-from-BTC-Data"
      }
    ],
    sideband: [
      {
        code: "144 - 430 MHz",
        title: "Licensed Amateur Radio Operator (S21NEO)",
        frequency: "VHF / UHF Bands",
        description: "Licensed HAM radio operator (Callsign: S21NEO). Researching RF wave propagation, antenna impedance matching, emergency radio networks, and packet radio communications during disasters."
      },
      {
        code: "Competitive Programming",
        title: "Algorithmic Problem Solving",
        frequency: "Codeforces • HackerRank • Beecrowd",
        description: "Solved thousands of algorithmic and data structure problems across online judges. Active contestant in national programming contests and university ICPC preliminaries."
      },
      {
        code: "Parliamentary Debate",
        title: "Debating & Public Oratory Champion",
        frequency: "University Level",
        description: "University-level debate champion, former General Secretary of college debate club. Trainer in structured rhetoric, policy critique, and scientific communication."
      },
      {
        code: "Community Leadership",
        title: "Senior Rover Mate — Scouting Movement",
        frequency: "Samatat Open Scout Group",
        description: "Senior Rover Mate spearheading community service, disaster relief campaigns, winter clothes distribution, youth leadership development, and scout jamborees."
      },
      {
        code: "Emergency Care",
        title: "Voluntary Blood Donor (20+ Donations)",
        frequency: "Quantum Foundation",
        description: "Regular blood donor since 2017 with over 20 voluntary donations connecting donors with critically ill emergency patients."
      },
      {
        code: "Discipline & Endurance",
        title: "Marathon Runner & Martial Arts Practitioner",
        frequency: "15 Marathon Events • Blue Belt Karate",
        description: "Completed 15 mini, half, and full marathons with Run Bangladesh; holds Blue Belt in Karate and Green Belt in Taekwondo, cultivating mental endurance and physical discipline."
      }
    ]
  };

  // ==========================================================================
  // 2. Fluid Card Zoom-In/Zoom-Out on Scroll (Focal Sweet Spot)
  // ==========================================================================
  let isCardZoomAttached = false;
  function initCardZoomEffect() {
    const cards = document.querySelectorAll('.focal-zoom-card, .celestial-card, .system-node-card, .sideband-node, .metric-card');
    if (cards.length === 0) return;

    let ticking = false;
    let vh = window.innerHeight;

    function updateFocalCards() {
      const focalCenter = vh * 0.5;
      const focalBand = vh * 0.28;

      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.bottom < -40 || rect.top > vh + 40) {
          if (card.classList.contains('is-focal-zoomed')) {
            card.classList.remove('is-focal-zoomed');
          }
          return;
        }

        const cardCenter = rect.top + rect.height * 0.5;
        const distFromCenter = Math.abs(cardCenter - focalCenter);

        const isZoomed = card.classList.contains('is-focal-zoomed');
        const threshold = isZoomed ? (focalBand + 35) : focalBand;

        if (distFromCenter < threshold) {
          if (!isZoomed) card.classList.add('is-focal-zoomed');
        } else {
          if (isZoomed) card.classList.remove('is-focal-zoomed');
        }
      });
      ticking = false;
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateFocalCards);
        ticking = true;
      }
    };

    if (!isCardZoomAttached) {
      window.addEventListener('resize', () => {
        vh = window.innerHeight;
        onScroll();
      }, { passive: true });

      window.addEventListener('scroll', onScroll, { passive: true });
      isCardZoomAttached = true;
    }

    requestAnimationFrame(updateFocalCards);
  }

  // ==========================================================================
  // 3. DOM Rendering Engine (Human-Grade Presentation)
  // ==========================================================================
  function renderAllContent() {
    // 3.1 Render Research Celestial Nodes
    const researchContainer = document.getElementById('celestial-nodes-container');
    if (researchContainer) {
      researchContainer.innerHTML = SIGNAL_DATA.publications.map((pub) => {
        const badgeText = pub.celestial_body?.badge || (pub.id === 'thesis_nebula' ? 'Active M.Sc. Thesis' : 'Springer Proceedings');
        const dotColor = pub.celestial_body?.color || '#00ff77';
        return `
          <article class="celestial-card focal-zoom-card ${pub.id === 'thesis_nebula' ? 'is-active-thesis' : ''}" data-pub-id="${pub.id}" tabindex="0" role="region" aria-label="${pub.title}">
            <div>
              <div class="celestial-header">
                <span class="celestial-beacon">
                  <span class="beacon-dot" style="background: ${dotColor}; box-shadow: 0 0 10px ${dotColor}"></span>
                  ${badgeText}
                </span>
                <span class="celestial-doi-pill">${pub.year}</span>
              </div>
              <h3 class="celestial-title">${pub.title}</h3>
              <p class="celestial-authors">${pub.authors}</p>
              <p class="celestial-venue">${pub.venue}</p>
              <p class="celestial-abstract">${pub.abstract}</p>
            </div>
            <div class="celestial-footer">
              <button class="btn-telemetry-action btn-inspect-pub" data-pub-id="${pub.id}" aria-label="Inspect metadata and copy BibTeX for ${pub.title}">View BibTeX &amp; Abstract</button>
              ${pub.doi !== 'IN_PROGRESS' ? `<a href="${pub.link}" target="_blank" rel="noopener noreferrer" class="btn-telemetry-action" aria-label="Open Springer publication proceeding">Springer Proceeding ↗</a>` : `<span class="btn-telemetry-action" style="opacity:0.75">Active Research</span>`}
            </div>
          </article>
        `;
      }).join('');
    }

    // 3.2 Render Systems Constellation Nodes
    const systemsContainer = document.getElementById('constellation-nodes-container');
    if (systemsContainer) {
      systemsContainer.innerHTML = SIGNAL_DATA.projects.map((proj) => `
        <article class="system-node-card focal-zoom-card btn-inspect-proj" data-proj-id="${proj.id}" tabindex="0" role="button" aria-label="${proj.title}">
          <div>
            <span class="system-category">${proj.category}</span>
            <h3 class="system-title">${proj.title}</h3>
            <p class="system-desc">${proj.description}</p>
          </div>
          <div>
            <div class="system-tags">
              ${proj.tech.map(t => `<span class="system-tag">${t}</span>`).join('')}
            </div>
          </div>
        </article>
      `).join('');
    }

    // 3.3 Render Sideband Frequencies
    const sidebandContainer = document.getElementById('sideband-nodes-container');
    if (sidebandContainer) {
      sidebandContainer.innerHTML = SIGNAL_DATA.sideband.map((side) => `
        <div class="sideband-node focal-zoom-card">
          <span class="sideband-freq">${side.code}</span>
          <h3 class="sideband-title">${side.title}</h3>
          <p class="sideband-desc">${side.description}</p>
        </div>
      `).join('');
    }

    // 3.4 Render Plain Text Document (Blue Pill View)
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
            ${p.doi !== 'IN_PROGRESS' ? `<a href="${p.link}" target="_blank" rel="noopener noreferrer">Springer Proceeding ↗</a>` : `<span>Active M.Sc. Thesis</span>`}
            <a href="#" class="btn-inspect-pub" data-pub-id="${p.id}">View BibTeX &amp; Citation</a>
          </div>
        </div>
      `).join('');
    }

    const plainProjects = document.getElementById('plain-projects-list');
    if (plainProjects) {
      plainProjects.innerHTML = SIGNAL_DATA.projects.map(proj => `
        <div class="plain-item">
          <h3 class="plain-item-title">${proj.title}</h3>
          <p class="plain-item-meta">${proj.category} &bull; ${proj.tech.join(', ')}</p>
          <p class="plain-item-desc">${proj.description}</p>
          <div class="plain-item-links">
            <a href="${proj.github}" target="_blank" rel="noopener noreferrer">GitHub Repository ↗</a>
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

    // Attach card zoom listeners after rendering
    initCardZoomEffect();
  }
  renderAllContent();

  // Async SSOT fetch with graceful local cache fallback
  if (typeof fetch === 'function') {
    fetch('data/signal_data.json')
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (data && data.publications) {
          Object.assign(SIGNAL_DATA, data);
          renderAllContent();
        }
      })
      .catch(() => {});
  }

  // ==========================================================================
  // 4. View Mode Switching (Immersive vs Plain View)
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
      if (label) label.textContent = 'Immersive View';
    }
    isThreeRendering = false;
    try {
      sessionStorage.setItem('signal_pill_pref', 'plain');
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
      if (label) label.textContent = 'Plain View';
    }
    isThreeRendering = true;
    if (startThreeLoop) startThreeLoop();
    try {
      sessionStorage.setItem('signal_pill_pref', 'immersive');
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

  // Default view is always the rich Immersive View.
  // Plain View is available on-demand via the HUD toggle.
  try {
    localStorage.removeItem('signal_pill_pref');
    const sessionPref = sessionStorage.getItem('signal_pill_pref');
    if (sessionPref === 'plain') {
      activatePlainView();
    }
  } catch (_) {}

  // ==========================================================================
  // 5. Procedural Atmospheric Deep Space Flight (Three.js)
  //    No foreground spheres colliding with text — pure background cosmic depth!
  // ==========================================================================
  const spaceCanvas = document.getElementById('space-canvas');
  if (spaceCanvas && typeof THREE !== 'undefined') {
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070b12, 0.012);

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

    // 5.1 Deep Multi-Tier Starfield
    const starCount = window.innerWidth < 768 ? 800 : 2000;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const colorWhite = new THREE.Color(0xffffff);
    const colorGreen = new THREE.Color(0x00ff77);
    const colorCyan = new THREE.Color(0x38bdf8);

    for (let i = 0; i < starCount; i++) {
      starPos[i * 3] = (Math.random() - 0.5) * 180;
      starPos[i * 3 + 1] = (Math.random() - 0.5) * 180;
      starPos[i * 3 + 2] = (Math.random() - 0.5) * 160 - 30;

      const randColor = Math.random();
      let chosenColor = colorWhite;
      if (randColor > 0.85) chosenColor = colorGreen;
      else if (randColor > 0.70) chosenColor = colorCyan;

      starColors[i * 3] = chosenColor.r;
      starColors[i * 3 + 1] = chosenColor.g;
      starColors[i * 3 + 2] = chosenColor.b;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
    });
    const starPoints = new THREE.Points(starGeo, starMat);
    scene.add(starPoints);

    // 5.2 Subtle Ambient Cosmic Dust Layer
    const dustCount = 400;
    const dustGeo = new THREE.BufferGeometry();
    const dustPos = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
      dustPos[i * 3] = (Math.random() - 0.5) * 120;
      dustPos[i * 3 + 1] = (Math.random() - 0.5) * 120;
      dustPos[i * 3 + 2] = (Math.random() - 0.5) * 80 - 15;
    }
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
    const dustMat = new THREE.PointsMaterial({
      color: 0x00ff77,
      size: 0.28,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending
    });
    const dustPoints = new THREE.Points(dustGeo, dustMat);
    scene.add(dustPoints);

    // Resize handler
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }, { passive: true });

    // Smooth Scroll Camera Tracking (glides along Z without clipping)
    let targetScrollY = 0;
    let currentScrollY = 0;
    window.addEventListener('scroll', () => {
      targetScrollY = window.scrollY;
    }, { passive: true });

    let clock = new THREE.Clock();
    let threeAnimId = null;

    function animate() {
      if (!isThreeRendering) return;
      threeAnimId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Slow, majestic autonomous cosmic drift
      starPoints.rotation.y = elapsedTime * 0.005;
      dustPoints.rotation.y = -elapsedTime * 0.008;

      // Scroll-Driven Camera Depth (Z-axis flight)
      currentScrollY += (targetScrollY - currentScrollY) * 0.08;
      const docHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const scrollPct = Math.min(Math.max(currentScrollY / docHeight, 0), 1);

      camera.position.y = -scrollPct * 30;
      camera.position.z = 30 - scrollPct * 15;

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
  // 6. Synthesized Morse Code Transmitter for Callsign [ S21NEO ]
  // ==========================================================================
  let audioCtx = null;
  let isSoundEnabled = false;

  const MORSE_S21NEO = [
    // S: ...
    { tone: true, dur: 75 }, { tone: false, dur: 75 },
    { tone: true, dur: 75 }, { tone: false, dur: 75 },
    { tone: true, dur: 75 }, { tone: false, dur: 220 },
    // 2: ..---
    { tone: true, dur: 75 }, { tone: false, dur: 75 },
    { tone: true, dur: 75 }, { tone: false, dur: 75 },
    { tone: true, dur: 220 }, { tone: false, dur: 75 },
    { tone: true, dur: 220 }, { tone: false, dur: 75 },
    { tone: true, dur: 220 }, { tone: false, dur: 220 },
    // 1: .----
    { tone: true, dur: 75 }, { tone: false, dur: 75 },
    { tone: true, dur: 220 }, { tone: false, dur: 75 },
    { tone: true, dur: 220 }, { tone: false, dur: 75 },
    { tone: true, dur: 220 }, { tone: false, dur: 75 },
    { tone: true, dur: 220 }, { tone: false, dur: 220 },
    // N: -.
    { tone: true, dur: 220 }, { tone: false, dur: 75 },
    { tone: true, dur: 75 }, { tone: false, dur: 220 },
    // E: .
    { tone: true, dur: 75 }, { tone: false, dur: 220 },
    // O: ---
    { tone: true, dur: 220 }, { tone: false, dur: 75 },
    { tone: true, dur: 220 }, { tone: false, dur: 75 },
    { tone: true, dur: 220 }, { tone: false, dur: 350 }
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
      if (label) label.textContent = isSoundEnabled ? 'Audio: On' : 'Audio: Off';
      soundToggleBtn.style.borderColor = isSoundEnabled ? 'var(--signal-green)' : 'rgba(255,255,255,0.1)';
      soundToggleBtn.style.color = isSoundEnabled ? 'var(--signal-green)' : 'var(--text-secondary)';
      if (isSoundEnabled) getAudioContext();
    });
  }

  let isTransmitting = false;
  let transmitCancelled = false;

  async function playMorseSequence() {
    if (isTransmitting) {
      transmitCancelled = true;
      isTransmitting = false;
      showToast('Transmission paused.');
      return;
    }
    isTransmitting = true;
    transmitCancelled = false;
    showToast('Broadcasting callsign S21NEO in Morse...');

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
      showToast('Transmission completed. Callsign S21NEO logged.');
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
      wavePulse *= 0.94;

      wCtx.fillStyle = '#030509';
      wCtx.fillRect(0, 0, waveCanvas.width, waveCanvas.height);

      // Grid Lines
      wCtx.strokeStyle = 'rgba(0, 255, 119, 0.08)';
      wCtx.lineWidth = 1;
      for (let y = 15; y < waveCanvas.height; y += 15) {
        wCtx.beginPath();
        wCtx.moveTo(0, y);
        wCtx.lineTo(waveCanvas.width, y);
        wCtx.stroke();
      }

      // Signal Beam
      wCtx.strokeStyle = '#00ff77';
      wCtx.lineWidth = 2;
      wCtx.shadowBlur = 10;
      wCtx.shadowColor = '#00ff77';
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
  // 8. Telemetry Drawer & BibTeX Inspection
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
      ${pub.doi !== 'IN_PROGRESS' ? `<a href="${pub.link}" target="_blank" rel="noopener noreferrer" class="btn-telemetry-action">Springer Proceeding ↗</a>` : `<span class="btn-telemetry-action" style="opacity:0.75">Active Research</span>`}
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
    drawerMeta.textContent = `Category: ${proj.category} • Tech Stack: ${proj.tech.join(', ')}`;
    drawerAbstract.textContent = proj.description;
    drawerBibtexBlock.style.display = 'none';

    drawerActions.innerHTML = `
      <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn-telemetry-action">GitHub Repository ↗</a>
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
      showToast('✓ BibTeX citation copied to clipboard');
    } catch (_) {
      showToast('BibTeX citation displayed below');
    }
  }

  copyBibtexBtn?.addEventListener('click', () => {
    if (activeBibtexText) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(activeBibtexText)
          .then(() => showToast('✓ BibTeX citation copied to clipboard'))
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
    setTimeout(() => toast.classList.remove('show'), 2600);
  }

  // ==========================================================================
  // 11. Tab Title Easter Egg
  // ==========================================================================
  const originalDocTitle = document.title;
  window.addEventListener('blur', () => {
    document.title = 'Signal lost...';
  });
  window.addEventListener('focus', () => {
    document.title = 'Signal acquired';
    setTimeout(() => {
      document.title = originalDocTitle;
    }, 1800);
  });

})();