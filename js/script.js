/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

const models = [];

/**
 * Loaders
 */
const loadingBarElement = document.querySelector(".loading-bar");
const bodyElement = document.querySelector("body");
const loadingManager = new THREE.LoadingManager(
  // All resources loaded
  () => {
    window.setTimeout(() => {
      gsap.to(overlayMaterial.uniforms.uAlpha, {
        duration: 3,
        value: 0,
        delay: 1,
      });

      loadingBarElement.classList.add("ended");
      bodyElement.classList.add("loaded");
      loadingBarElement.style.transform = "";
    }, 500);
  },
  // Resource progress
  (itemUrl, itemsLoaded, itemsTotal) => {
    const progressRatio = itemsLoaded / itemsTotal;
    loadingBarElement.style.transform = `scaleX(${progressRatio})`;
  }
);

const gltfLoader = new THREE.GLTFLoader(loadingManager);
const textureLoader = new THREE.TextureLoader();

// Model paths
const modelPaths = [
  "./assets/old_tree/scene.gltf",
  "./assets/teahouse_xyz_homework_part_2/scene.gltf",
  "./assets/charbot/scene.gltf",
  "./assets/the_wooden_glass_tea_house/scene.gltf"
  
];

modelPaths.forEach((path, index) => {
  gltfLoader.load(path, (gltf) => {
    const model = gltf.scene;
    // Initially, all models except the first one are not visible
    model.visible = index === 0;

    // Position and scale adjustments
    if (index === 0) {
      // Adjustments for the old_tree model
      model.position.set(1, -1, 0);
      model.scale.set(0.4, 0.4, 0.4); // Modified scale for visibility
    } else if (index == 1) {
      model.scale.set(0.5, 0.5, 0.5); // Increase scale for visibility
      model.position.set(2, -2.7, 0); // Adjust position to be on screen
    } else if (index === 2) {
      // Assuming the donut is the third model
      // Adjustments for the donut model to ensure visibility
      model.position.set(-4, 0.3, 0); // Adjusted position
      model.scale.set(0.06, 0.06, 0.06); // Increase scale for visibility
    } else if (index === 3) {
      // Specific adjustments for the tea_info model
      model.position.set(1, -0.5, 0); // Adjusted position for better visibility
      model.scale.set(0.3, 0.3, 0.3); // Smaller scale for tea_info
    }else {
      // Default settings for other models
      model.position.set(index === 1 || index === 3 ? 2 : -2, 1, 1);
      model.scale.set(1, 1, 1); // Standard initial scale for other models
    }

    models[index] = model;
    scene.add(model);
  });
});

/**
 * Scene Setup
 */
const scene = new THREE.Scene();

// Sphere Shadow
const alphaShadow = textureLoader.load("/assets/texture/simpleShadow.jpg");
const sphereShadow = new THREE.Mesh(
  new THREE.PlaneGeometry(1.5, 1.5),
  new THREE.MeshBasicMaterial({
    transparent: true,
    color: 0x000000,
    opacity: 0.5,
    alphaMap: alphaShadow,
  })
);
sphereShadow.rotation.x = -Math.PI * 0.5;
sphereShadow.position.y = -1;
sphereShadow.position.x = 2.0;
scene.add(sphereShadow);

// Overlay
const overlayGeometry = new THREE.PlaneGeometry(2, 2, 1, 1);
const overlayMaterial = new THREE.ShaderMaterial({
  vertexShader: `void main() { gl_Position = vec4(position, 1.0); }`,
  fragmentShader: `uniform float uAlpha; void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, uAlpha); }`,
  uniforms: { uAlpha: { value: 1.0 } },
  transparent: true,
});
const overlay = new THREE.Mesh(overlayGeometry, overlayMaterial);
scene.add(overlay);

/**
 * Lighting
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 2, 0);
directionalLight.castShadow = true;
scene.add(directionalLight);

/**
 * Camera and Renderer Setup
 */
const sizes = { width: window.innerWidth, height: window.innerHeight };
const camera = new THREE.PerspectiveCamera(
  35,
  sizes.width / sizes.height,
  0.1,
  1000
);

camera.position.z = 5;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
  alpha: true,
});
renderer.shadowMap.enabled = true;
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Scroll Interaction
 */
let currentSection = 0;
window.addEventListener("scroll", () => {
  const sectionHeight = sizes.height;
  const scrollPosition = window.scrollY;
  const newSection = Math.floor(scrollPosition / sectionHeight);

  if (newSection !== currentSection) {
    // If we're leaving the previous section, animate the old model out
    if (models[currentSection]) {
      const oldModel = models[currentSection];
      gsap.to(oldModel.position, {
        x: currentSection < newSection ? -10 : 10,
        duration: 1.5,
        ease: "power2.in",
        onComplete: () => {
          oldModel.visible = false;
        },
      });
    }

    // If we're entering a new section, animate the new model in
    if (models[newSection]) {
      const newModel = models[newSection];
      newModel.visible = true;

      // Default entrance animation for new model
      let entranceX = 1;

      // If the new section is the chatbot's section, we want to move it a little to the left
      if (newSection === 2) {
        // Adjust this index if your chatbot is not the third model
        entranceX = -1.5; // Adjust this value to set how far left the chatbot should move
      }

      gsap.fromTo(
        newModel.position,
        { x: newSection > currentSection ? 10 : -10 },
        { x: entranceX, duration: 1.5, ease: "power2.out" }
      );
    }

    currentSection = newSection;
  }
});

/**
 * Animation Loop
 */
const tick = () => {
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};
tick();

/**
 * On Reload
 */
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    // You can set this to the height of the hero section if needed
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});


document.addEventListener("scroll", function () {
  var footer = document.getElementById("site-footer");
  var leftHalf = document.getElementById("left-half");
  var rightHalf = document.getElementById("right-half");

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    // User is at the bottom of the page
    leftHalf.style.left = "0"; // Move the left half into view
    rightHalf.style.right = "0"; // Move the right half into view
  } else {
    // User is not at the bottom; reset if needed
    leftHalf.style.left = "-50%";
    rightHalf.style.right = "-50%";
  }
});
