import * as THREE from 'https://cdn.skypack.dev/three';
import { GLTFLoader } from 'https://cdn.skypack.dev/three/examples/jsm/loaders/GLTFLoader';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, 800 / 600, 0.1, 1000);
camera.position.z = 6;

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(800, 600);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Свет
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 2, 5);
scene.add(light);

// Загрузка модели
const loader = new GLTFLoader();
let model;
loader.load('phone.glb', (gltf) => {
  model = gltf.scene;
  model.scale.set(1.5, 1.5, 1.5);
  scene.add(model);
}, undefined, function (error) {
  console.error('Ошибка загрузки модели:', error);
});

// Поворот при движении мышки
document.getElementById('mainBlock').addEventListener('mousemove', (e) => {
  if (!model) return;

  const block = e.currentTarget.getBoundingClientRect();
  const x = (e.clientX - block.left) / block.width;
  const y = (e.clientY - block.top) / block.height;

  const rotateY = (x - 0.5) * 2; // от -1 до 1
  const rotateX = (y - 0.5) * -2;

  model.rotation.y = rotateY * Math.PI * 0.25;
  model.rotation.x = rotateX * Math.PI * 0.25;
});

// Рендер
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
