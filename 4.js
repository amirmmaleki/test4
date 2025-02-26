document.addEventListener("DOMContentLoaded", function() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 400, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("globe") });

    renderer.setSize(window.innerWidth, 400);
    document.getElementById("globe-container").appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load("https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg");
    
    const geometry = new THREE.SphereGeometry(2, 50, 50);
    const material = new THREE.MeshBasicMaterial({ map: earthTexture });
    const earth = new THREE.Mesh(geometry, material);
    
    scene.add(earth);
    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        earth.rotation.y += 0.002;
        renderer.render(scene, camera);
    }
    
    animate();
});

/* تابع جستجوی مقاصد */
function searchDestinations() {
    let query = document.getElementById("search").value;
    alert("جستجو برای: " + query);
}