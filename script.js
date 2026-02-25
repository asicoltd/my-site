// Create a new file called background.js or add this to your existing script.js
// Make sure this runs after the DOM is loaded

document.addEventListener('DOMContentLoaded', function() {
    // Check if Three.js is loaded, if not load it
    if (typeof THREE === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
        script.onload = initBackground;
        document.head.appendChild(script);
    } else {
        initBackground();
    }
});

function initBackground() {
    // Get the canvas element
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) {
        console.error('Canvas element not found');
        return;
    }

    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
        canvas: canvas,
        antialias: true,
        alpha: false // Set to false for solid background
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x050510, 1); // Dark blue-black background

    // Create stars - Layer 1 (distant)
    const stars1Geometry = new THREE.BufferGeometry();
    const stars1Count = 1500;
    const stars1Positions = new Float32Array(stars1Count * 3);
    const stars1Colors = new Float32Array(stars1Count * 3);

    for (let i = 0; i < stars1Count; i++) {
        // Sphere distribution
        const r = 60 + Math.random() * 40;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        
        stars1Positions[i*3] = r * Math.sin(phi) * Math.cos(theta);
        stars1Positions[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
        stars1Positions[i*3+2] = r * Math.cos(phi);
        
        // Colors: cool blues and whites
        const hue = 0.6 + Math.random() * 0.3;
        const color = new THREE.Color().setHSL(hue, 0.8, 0.5 + Math.random() * 0.3);
        stars1Colors[i*3] = color.r;
        stars1Colors[i*3+1] = color.g;
        stars1Colors[i*3+2] = color.b;
    }

    stars1Geometry.setAttribute('position', new THREE.BufferAttribute(stars1Positions, 3));
    stars1Geometry.setAttribute('color', new THREE.BufferAttribute(stars1Colors, 3));

    const stars1Material = new THREE.PointsMaterial({ 
        size: 0.15,
        vertexColors: true,
        transparent: true,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
    });

    const stars1 = new THREE.Points(stars1Geometry, stars1Material);
    scene.add(stars1);

    // Create stars - Layer 2 (medium)
    const stars2Geometry = new THREE.BufferGeometry();
    const stars2Count = 800;
    const stars2Positions = new Float32Array(stars2Count * 3);
    const stars2Colors = new Float32Array(stars2Count * 3);

    for (let i = 0; i < stars2Count; i++) {
        const r = 30 + Math.random() * 30;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        
        stars2Positions[i*3] = r * Math.sin(phi) * Math.cos(theta);
        stars2Positions[i*3+1] = r * Math.sin(phi) * Math.sin(theta) * 0.7;
        stars2Positions[i*3+2] = r * Math.cos(phi);
        
        // Colors: warmer for variety
        const hue = Math.random() * 1;
        const color = new THREE.Color().setHSL(hue, 0.9, 0.6);
        stars2Colors[i*3] = color.r;
        stars2Colors[i*3+1] = color.g;
        stars2Colors[i*3+2] = color.b;
    }

    stars2Geometry.setAttribute('position', new THREE.BufferAttribute(stars2Positions, 3));
    stars2Geometry.setAttribute('color', new THREE.BufferAttribute(stars2Colors, 3));

    const stars2Material = new THREE.PointsMaterial({ 
        size: 0.25,
        vertexColors: true,
        transparent: true,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
    });

    const stars2 = new THREE.Points(stars2Geometry, stars2Material);
    scene.add(stars2);

    // Create stars - Layer 3 (foreground)
    const stars3Geometry = new THREE.BufferGeometry();
    const stars3Count = 300;
    const stars3Positions = new Float32Array(stars3Count * 3);
    const stars3Colors = new Float32Array(stars3Count * 3);

    for (let i = 0; i < stars3Count; i++) {
        const r = 15 + Math.random() * 15;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        
        stars3Positions[i*3] = r * Math.sin(phi) * Math.cos(theta);
        stars3Positions[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
        stars3Positions[i*3+2] = r * Math.cos(phi);
        
        // Bright, vibrant colors
        const hue = Math.random();
        const color = new THREE.Color().setHSL(hue, 0.9, 0.7);
        stars3Colors[i*3] = color.r;
        stars3Colors[i*3+1] = color.g;
        stars3Colors[i*3+2] = color.b;
    }

    stars3Geometry.setAttribute('position', new THREE.BufferAttribute(stars3Positions, 3));
    stars3Geometry.setAttribute('color', new THREE.BufferAttribute(stars3Colors, 3));

    const stars3Material = new THREE.PointsMaterial({ 
        size: 0.4,
        vertexColors: true,
        transparent: true,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
    });

    const stars3 = new THREE.Points(stars3Geometry, stars3Material);
    scene.add(stars3);

    // Add a subtle nebula effect using a large sphere
    const nebulaGeometry = new THREE.SphereGeometry(80, 32, 32);
    const nebulaMaterial = new THREE.MeshBasicMaterial({
        color: 0x1a237e,
        transparent: true,
        opacity: 0.1,
        side: THREE.BackSide
    });
    const nebula = new THREE.Mesh(nebulaGeometry, nebulaMaterial);
    scene.add(nebula);

    // Mouse and scroll variables
    let mouseX = 0;
    let mouseY = 0;
    let targetRotation = 0;
    let currentRotation = 0;

    // Event listeners
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = scrollY / maxScroll;
        targetRotation = scrollPercent * Math.PI * 2;
    });

    window.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        // Smooth rotation
        currentRotation += (targetRotation - currentRotation) * 0.02;
        
        // Rotate each layer at different speeds
        stars1.rotation.y = currentRotation * 0.2;
        stars1.rotation.x = Math.sin(currentRotation * 0.3) * 0.05;
        
        stars2.rotation.y = currentRotation * 0.5;
        stars2.rotation.x = Math.cos(currentRotation * 0.2) * 0.05;
        
        stars3.rotation.y = currentRotation * 0.8;
        stars3.rotation.z = Math.sin(currentRotation * 0.1) * 0.03;
        
        nebula.rotation.y = currentRotation * 0.1;
        
        // Mouse interaction
        stars1.rotation.y += mouseX * 0.0005;
        stars1.rotation.x += mouseY * 0.0005;
        
        stars2.rotation.y += mouseX * 0.001;
        stars2.rotation.x += mouseY * 0.001;
        
        stars3.rotation.y += mouseX * 0.002;
        stars3.rotation.x += mouseY * 0.002;
        
        // Subtle pulsing
        const time = Date.now() * 0.001;
        stars3.material.size = 0.4 + Math.sin(time * 2) * 0.1;
        
        renderer.render(scene, camera);
    }

    animate();
}