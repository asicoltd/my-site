// Complete script.js with all original functionality + REALISTIC SPACE BACKGROUND

// ============================================
// ORIGINAL FUNCTIONS (PRESERVED)
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    // Toggle functionality for experience section
    document.querySelectorAll('#experience ul').forEach(ul => {
        ul.classList.add('collapsed');
        ul.addEventListener('click', function (e) {
            this.classList.toggle('active');
            this.classList.toggle('collapsed');
        });
    });
});

// Popup functions
function openPopup(page) {
    document.getElementById("popupFrame").src = page;
    document.getElementById("popupOverlay").style.display = "flex";
}
function closePopup() {
    document.getElementById("popupOverlay").style.display = "none";
    document.getElementById("popupFrame").src = "";
}

// ============================================
// REALISTIC SPACE BACKGROUND
// ============================================

// Initialize after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Hide old canvas if it exists
    const oldCanvas = document.getElementById('starfield');
    if (oldCanvas) oldCanvas.style.display = 'none';
    
    initSpaceBackground();
});

function initSpaceBackground() {
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
    // --- Setup Canvas ---
    let canvas = document.getElementById('bg-canvas');
    if (!canvas) {
        const oldContainer = document.querySelector('.bg-container');
        if (oldContainer) oldContainer.style.display = 'none';
        
        const container = document.createElement('div');
        container.id = 'bg-canvas-container';
        canvas = document.createElement('canvas');
        canvas.id = 'bg-canvas';
        container.appendChild(canvas);
        document.body.insertBefore(container, document.body.firstChild);
    }

    // --- Scene, Camera, Renderer ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x03030f); // Deep space color
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 100;
    
    const renderer = new THREE.WebGLRenderer({ 
        canvas: canvas, 
        antialias: true, 
        alpha: false
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // --- Create Star Texture (sharp, small dots) ---
    function createStarTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 4;
        canvas.height = 4;
        const ctx = canvas.getContext('2d');
        
        // Sharp white dot
        ctx.beginPath();
        ctx.arc(2, 2, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        
        return new THREE.CanvasTexture(canvas);
    }
    
    const starTexture = createStarTexture();

    // --- MAIN STARFIELD: 25,000 stars with realistic distribution ---
    const starCount = 25000;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
        // Create a realistic spherical distribution with varying distances
        // Using cube root for more natural density (more stars in background)
        const r = 40 + Math.pow(Math.random(), 0.5) * 160; // Range: 40 to 200
        
        // Random direction
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        
        starPositions[i*3] = r * Math.sin(phi) * Math.cos(theta);
        starPositions[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
        starPositions[i*3+2] = r * Math.cos(phi);
        
        // Realistic star colors based on temperature
        // Most stars are white/blue-white, some yellow, few red
        const rand = Math.random();
        if (rand < 0.7) {
            // White to blue-white (common)
            const blueShift = 0.8 + Math.random() * 0.2;
            starColors[i*3] = 0.9 + Math.random() * 0.1;     // R
            starColors[i*3+1] = 0.9 + Math.random() * 0.1;   // G
            starColors[i*3+2] = 1.0;                          // B
        } else if (rand < 0.9) {
            // Yellow to orange (like our sun)
            starColors[i*3] = 1.0;                             // R
            starColors[i*3+1] = 0.85 + Math.random() * 0.15;   // G
            starColors[i*3+2] = 0.6 + Math.random() * 0.3;     // B
        } else {
            // Red dwarfs (less common)
            starColors[i*3] = 1.0;                             // R
            starColors[i*3+1] = 0.5 + Math.random() * 0.3;     // G
            starColors[i*3+2] = 0.3 + Math.random() * 0.3;     // B
        }
        
        // Size varies by distance and brightness
        // Closer/fainter stars appear larger, distant stars smaller
        const distanceFactor = 1 - (r - 40) / 160; // 1 at r=40, 0 at r=200
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
        opacity: 1,
        depthWrite: false
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // --- ADD A SECOND LAYER OF VERY TINY DISTANT STARS ---
    const distantStarCount = 15000;
    const distantGeometry = new THREE.BufferGeometry();
    const distantPositions = new Float32Array(distantStarCount * 3);
    
    for (let i = 0; i < distantStarCount; i++) {
        // Much larger sphere for background depth
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

    // --- ADD A MILKY WAY BAND (DENSER REGION) ---
    const milkyWayCount = 8000;
    const milkyWayGeometry = new THREE.BufferGeometry();
    const milkyWayPositions = new Float32Array(milkyWayCount * 3);
    const milkyWayColors = new Float32Array(milkyWayCount * 3);

    for (let i = 0; i < milkyWayCount; i++) {
        // Flattened distribution (disk shape)
        const r = 60 + Math.random() * 120;
        const theta = Math.random() * Math.PI * 2;
        // Bias towards equator (phi near PI/2)
        const phi = Math.PI/2 + (Math.random() - 0.5) * 0.6;
        
        milkyWayPositions[i*3] = r * Math.sin(phi) * Math.cos(theta);
        milkyWayPositions[i*3+1] = r * Math.sin(phi) * Math.sin(theta) * 0.3; // Flatten
        milkyWayPositions[i*3+2] = r * Math.cos(phi);
        
        // Slightly warmer colors for milky way
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

    // --- Interaction Variables ---
    let mouseX = 0, mouseY = 0;
    let targetRotY = 0, targetRotX = 0;
    let currentRotY = 0, currentRotX = 0;

    // --- Event Listeners ---
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const percent = scrollY / maxScroll;
        targetRotY = percent * Math.PI * 1.5; // 0.75 rotation total
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

    // --- Animation Loop ---
    function animate() {
        requestAnimationFrame(animate);
        
        // Smooth rotation
        currentRotY += (targetRotY - currentRotY) * 0.015;
        currentRotX += (targetRotX - currentRotX) * 0.015;
        
        // Apply rotation with subtle mouse influence
        const rotY = currentRotY + mouseX * 0.02;
        const rotX = currentRotX + mouseY * 0.01;
        
        // Rotate layers at different rates for depth
        distantStars.rotation.y = rotY * 0.3;
        distantStars.rotation.x = rotX * 0.2;
        
        stars.rotation.y = rotY * 0.6;
        stars.rotation.x = rotX * 0.4;
        
        milkyWay.rotation.y = rotY * 0.5;
        milkyWay.rotation.x = rotX * 0.3;
        
        // Very subtle camera movement
        camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.005;
        camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.005;
        camera.lookAt(scene.position);
        
        renderer.render(scene, camera);
    }
    
    animate();
}

// ============================================
// SPACE CSS
// ============================================
const style = document.createElement('style');
style.textContent = `
    #bg-canvas-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -2;
        pointer-events: none;
    }
    #bg-canvas {
        display: block;
        width: 100%;
        height: 100%;
    }
    .bg-container, #starfield { display: none !important; }
    body { background-color: transparent !important; margin: 0; }
    section, header, footer { position: relative; z-index: 2; background-color: transparent !important; }
    
    /* Subtle space-themed card styling */
    .bg-dark, .card, .accordion-item { 
        background-color: rgba(10, 10, 20, 0.85) !important; 
        backdrop-filter: blur(5px);
        border: 1px solid rgba(100, 150, 255, 0.15) !important;
    }
    
    /* Subtle text glow */
    .text-light, h1, h2, h3 {
        text-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
    }
    
    /* Clean scrollbar */
    ::-webkit-scrollbar {
        width: 8px;
        background: #03030f;
    }
    
    ::-webkit-scrollbar-thumb {
        background: #2a3f5a;
        border-radius: 4px;
    }
`;
document.head.appendChild(style);