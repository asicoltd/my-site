// ============================================
// COMPLETE SCRIPT.JS WITH ALL FEATURES
// ============================================

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
            easing: 'ease-in-out'
        });
    }
    
    // Initialize Navbar Scroll Effect
    initNavbarScroll();
    
    // Initialize Project Filtering
    initProjectFilters();
    
    // Initialize Download CV
    initDownloadCV();
    
    // Initialize Contact Form
    initContactForm();
    
    // Initialize View All Projects
    initViewAllProjects();
    
    // Initialize Popup Functions (original)
    initPopupFunctions();
    
    // Initialize Space Background
    initSpaceBackground();
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

function initNavbarScroll() {
    const navbar = document.querySelector('.glass-navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Active link highlighting
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href && href.includes(current)) {
                link.classList.add('active');
            }
        });
    });
}

// ============================================
// PROJECT FILTERING
// ============================================

function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    if (!filterBtns.length || !projectItems.length) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filter projects
            projectItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    // Add animation
                    item.style.animation = 'fadeInUp 0.6s ease';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// ============================================
// DOWNLOAD CV FUNCTION
// ============================================

function initDownloadCV() {
    const downloadBtn = document.getElementById('downloadCV');
    if (!downloadBtn) return;
    
    downloadBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // You can replace this with actual CV file path
        const cvContent = `
            ASIF HASAN - CV
            ===============
            AI Engineer & Researcher
            
            Education:
            - M.Sc. in CSE, East West University (Ongoing)
            - B.Sc. in CSE, East West University
            
            Skills:
            - AI/ML: Deep Learning, CNN, LSTM, Transformers
            - Programming: Python, C++, Java, JavaScript
            - Blockchain: Smart Contracts, dApps
            
            Contact: asifhasan099@gmail.com
        `;
        
        // Create blob and download
        const blob = new Blob([cvContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Asif_Hasan_CV.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        
        // Show success message
        alert('CV download started! (This is a placeholder - replace with actual CV file)');
    });
}

// ============================================
// CONTACT FORM HANDLING
// ============================================

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        form.reset();
    });
}

// ============================================
// VIEW ALL PROJECTS
// ============================================

function initViewAllProjects() {
    const viewAllBtn = document.getElementById('viewAllProjects');
    if (!viewAllBtn) return;
    
    let expanded = false;
    const hiddenProjects = document.querySelectorAll('.project-item.hidden-project');
    
    // Initially hide some projects if you want pagination
    // This is optional - you can hide some projects initially
    
    viewAllBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (!expanded) {
            // Show all projects
            document.querySelectorAll('.project-item').forEach(item => {
                item.style.display = 'block';
            });
            this.innerHTML = '<i class="fas fa-compress me-2"></i>Show Less';
            expanded = true;
        } else {
            // Hide some projects (e.g., hide last 3)
            const allProjects = document.querySelectorAll('.project-item');
            allProjects.forEach((item, index) => {
                if (index >= 6) { // Show only first 6
                    item.style.display = 'none';
                }
            });
            this.innerHTML = '<i class="fas fa-folder-open me-2"></i>View All Projects';
            expanded = false;
        }
    });
}

// ============================================
// PROJECT DEMO FUNCTION
// ============================================

function openProjectDemo(project) {
    const demos = {
        'chess': 'https://lichess.org/analysis', // Placeholder
        'asicoin': '#', // Placeholder
        'trading': '#' // Placeholder
    };
    
    const url = demos[project];
    if (url && url !== '#') {
        window.open(url, '_blank');
    } else {
        alert('Demo coming soon! Check back later.');
    }
}

// ============================================
// POPUP FUNCTIONS (ORIGINAL)
// ============================================

function initPopupFunctions() {
    // Make functions global
    window.openPopup = function(page) {
        const overlay = document.getElementById("popupOverlay");
        const frame = document.getElementById("popupFrame");
        if (overlay && frame) {
            frame.src = page;
            overlay.style.display = "flex";
            document.body.style.overflow = 'hidden';
        }
    };
    
    window.closePopup = function() {
        const overlay = document.getElementById("popupOverlay");
        const frame = document.getElementById("popupFrame");
        if (overlay && frame) {
            overlay.style.display = "none";
            frame.src = "";
            document.body.style.overflow = '';
        }
    };
    
    // Close popup when clicking outside
    const overlay = document.getElementById("popupOverlay");
    if (overlay) {
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                window.closePopup();
            }
        });
    }
    
    // Close popup with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            window.closePopup();
        }
    });
}

// ============================================
// SPACE BACKGROUND (ENHANCED VERSION)
// ============================================

function initSpaceBackground() {
    // Check if THREE is available, if not load it
    if (typeof THREE === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
        script.onload = setupSpaceScene;
        document.head.appendChild(script);
    } else {
        setupSpaceScene();
    }
}

function setupSpaceScene() {
    // Get or create canvas
    let canvas = document.getElementById('bg-canvas');
    if (!canvas) {
        const container = document.getElementById('bg-canvas-container') || document.createElement('div');
        container.id = 'bg-canvas-container';
        canvas = document.createElement('canvas');
        canvas.id = 'bg-canvas';
        container.appendChild(canvas);
        if (!document.getElementById('bg-canvas-container')) {
            document.body.insertBefore(container, document.body.firstChild);
        }
    }

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x03030f);
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 100;
    
    const renderer = new THREE.WebGLRenderer({ 
        canvas: canvas, 
        antialias: true, 
        alpha: false
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create star texture
    function createStarTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 4;
        canvas.height = 4;
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(2, 2, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        return new THREE.CanvasTexture(canvas);
    }
    
    const starTexture = createStarTexture();

    // Main starfield
    const starCount = 25000;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
        const r = 40 + Math.pow(Math.random(), 0.5) * 160;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        
        starPositions[i*3] = r * Math.sin(phi) * Math.cos(theta);
        starPositions[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
        starPositions[i*3+2] = r * Math.cos(phi);
        
        const rand = Math.random();
        if (rand < 0.7) {
            starColors[i*3] = 0.9 + Math.random() * 0.1;
            starColors[i*3+1] = 0.9 + Math.random() * 0.1;
            starColors[i*3+2] = 1.0;
        } else if (rand < 0.9) {
            starColors[i*3] = 1.0;
            starColors[i*3+1] = 0.85 + Math.random() * 0.15;
            starColors[i*3+2] = 0.6 + Math.random() * 0.3;
        } else {
            starColors[i*3] = 1.0;
            starColors[i*3+1] = 0.5 + Math.random() * 0.3;
            starColors[i*3+2] = 0.3 + Math.random() * 0.3;
        }
        
        const distanceFactor = 1 - (r - 40) / 160;
        const brightnessFactor = 0.5 + Math.random() * 0.5;
        starSizes[i] = (0.1 + brightnessFactor * 0.3) * (0.7 + distanceFactor * 0.6);
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
    starGeometry.setAttribute('size', new THREE.BufferAttribute(starSizes, 1));

    const starMaterial = new THREE.PointsMaterial({
        size: 0.2,
        vertexColors: true,
        map: starTexture,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
        transparent: true,
        depthWrite: false
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Distant stars
    const distantStarCount = 15000;
    const distantGeometry = new THREE.BufferGeometry();
    const distantPositions = new Float32Array(distantStarCount * 3);
    
    for (let i = 0; i < distantStarCount; i++) {
        const r = 150 + Math.random() * 150;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        
        distantPositions[i*3] = r * Math.sin(phi) * Math.cos(theta);
        distantPositions[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
        distantPositions[i*3+2] = r * Math.cos(phi);
    }
    
    distantGeometry.setAttribute('position', new THREE.BufferAttribute(distantPositions, 3));
    
    const distantMaterial = new THREE.PointsMaterial({
        size: 0.08,
        color: 0x888888,
        map: starTexture,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.6,
        depthWrite: false
    });
    
    const distantStars = new THREE.Points(distantGeometry, distantMaterial);
    scene.add(distantStars);

    // Milky Way
    const milkyWayCount = 8000;
    const milkyWayGeometry = new THREE.BufferGeometry();
    const milkyWayPositions = new Float32Array(milkyWayCount * 3);
    const milkyWayColors = new Float32Array(milkyWayCount * 3);

    for (let i = 0; i < milkyWayCount; i++) {
        const r = 60 + Math.random() * 120;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.PI/2 + (Math.random() - 0.5) * 0.6;
        
        milkyWayPositions[i*3] = r * Math.sin(phi) * Math.cos(theta);
        milkyWayPositions[i*3+1] = r * Math.sin(phi) * Math.sin(theta) * 0.3;
        milkyWayPositions[i*3+2] = r * Math.cos(phi);
        
        milkyWayColors[i*3] = 1.0;
        milkyWayColors[i*3+1] = 0.9;
        milkyWayColors[i*3+2] = 0.8;
    }

    milkyWayGeometry.setAttribute('position', new THREE.BufferAttribute(milkyWayPositions, 3));
    milkyWayGeometry.setAttribute('color', new THREE.BufferAttribute(milkyWayColors, 3));

    const milkyWayMaterial = new THREE.PointsMaterial({
        size: 0.15,
        vertexColors: true,
        map: starTexture,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.4,
        depthWrite: false
    });

    const milkyWay = new THREE.Points(milkyWayGeometry, milkyWayMaterial);
    scene.add(milkyWay);

    // Interaction variables
    let mouseX = 0, mouseY = 0;
    let targetRotY = 0, targetRotX = 0;
    let currentRotY = 0, currentRotX = 0;

    // Event listeners
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const percent = scrollY / maxScroll;
        targetRotY = percent * Math.PI * 1.5;
        targetRotX = Math.sin(percent * Math.PI) * 0.1;
    });

    window.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        currentRotY += (targetRotY - currentRotY) * 0.015;
        currentRotX += (targetRotX - currentRotX) * 0.015;
        
        const rotY = currentRotY + mouseX * 0.02;
        const rotX = currentRotX + mouseY * 0.01;
        
        distantStars.rotation.y = rotY * 0.3;
        distantStars.rotation.x = rotX * 0.2;
        
        stars.rotation.y = rotY * 0.6;
        stars.rotation.x = rotX * 0.4;
        
        milkyWay.rotation.y = rotY * 0.5;
        milkyWay.rotation.x = rotX * 0.3;
        
        camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.005;
        camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.005;
        camera.lookAt(scene.position);
        
        renderer.render(scene, camera);
    }
    
    animate();
}