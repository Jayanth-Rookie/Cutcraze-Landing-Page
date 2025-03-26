import React, { useEffect, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const LoadingPage: React.FC = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["Drag.", "Drop.", "Cut.", "Create."];

  useEffect(() => {
    // Sequential Text Animation (faster transition)
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => {
        if (prevIndex >= words.length - 1) {
          clearInterval(interval); // Stop the animation when all words are shown
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, 700); // Change word every 0.7 seconds (faster)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  useEffect(() => {
    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("canvas-container")?.appendChild(renderer.domElement);

    // Lighting
    const light = new THREE.AmbientLight(0x555555, 0.8);
    scene.add(light);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const objects: THREE.Object3D[] = [];
    const loader = new GLTFLoader();

    function getVerticalRingPosition(radius: number, index: number, totalObjects: number) {
      const angle = (index / totalObjects) * Math.PI * 2;
      return {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle),
        z: Math.random() * 4 - 2,
      };
    }

    function loadScissorsModel(index: number, total: number) {
      loader.load(
        "scissors.glb",
        (gltf) => {
          const model = gltf.scene;
          model.scale.set(0.05, 0.05, 0.05);
          const pos = getVerticalRingPosition(10, index, total);
          model.position.set(pos.x, pos.y, pos.z);
          model.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
          );
          scene.add(model);
          objects.push(model);
        },
        undefined,
        (error) => {
          console.error("Error loading the scissors model:", error);
        }
      );
    }

    function createCameraObject(index: number, total: number) {
      const group = new THREE.Group();
      const body = new THREE.Mesh(
        new THREE.BoxGeometry(1.2, 0.8, 0.5),
        new THREE.MeshStandardMaterial({
          color: 0x222222,
          metalness: 0.6,
          roughness: 0.5,
        })
      );
      const lens = new THREE.Mesh(
        new THREE.CylinderGeometry(0.25, 0.25, 0.6, 32),
        new THREE.MeshStandardMaterial({
          color: 0x888888,
          metalness: 0.8,
          roughness: 0.3,
        })
      );
      lens.rotation.x = Math.PI / 2;
      lens.position.set(0.5, 0.5, 0);
      const button = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.1, 0.05, 16),
        new THREE.MeshStandardMaterial({ color: 0x888888 })
      );
      button.position.set(-0.3, 0.4, 0.2);
      group.add(body);
      group.add(lens);
      group.add(button);
      const pos = getVerticalRingPosition(13, index, total);
      group.position.set(pos.x, pos.y, pos.z);
      group.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      scene.add(group);
      objects.push(group);
    }

    const numScissors = 7;
    const numCameras = 12;
    for (let i = 0; i < numCameras; i++) createCameraObject(i, numCameras);
    for (let i = 0; i < numScissors; i++) loadScissorsModel(i, numScissors);
    camera.position.z = 13;

    function animate() {
      requestAnimationFrame(animate);
      objects.forEach((obj) => {
        obj.rotation.x += 0.007;
        obj.rotation.y += 0.007;
        obj.position.z += Math.sin(Date.now() * 0.001) * 0.002;
      });

      // Camera Shake Effect
      camera.position.x += (Math.random() - 0.5) * 0.095;
      camera.position.y += (Math.random() - 0.5) * 0.09;

      renderer.render(scene, camera);
    }
    animate();

    window.addEventListener("resize", () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });

    // Simulate loading completion after all words are shown and 1 extra second
    setTimeout(() => {
      setLoadingComplete(true);
    }, words.length * 700 + 1000); // Wait for all words + 1 extra second

    return () => {
      document.getElementById("canvas-container")?.removeChild(renderer.domElement);
    };
  }, []);

//   if (loadingComplete) {
//     // Redirect to the main landing page or render it here
//     return <div>Redirecting to Main Page...</div>;
//   }

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-b from-gray-800 via-gray-900 to-black flex justify-center items-center">
      {/* Canvas Container */}
      <div id="canvas-container" className="absolute inset-0"></div>

      {/* Overlay */}
      <div className="absolute text-center z-10">
        {/* Animated Text */}
        <div className="text-4xl font-bold text-white text-shadow-md mb-6">
          {words[currentWordIndex]}
        </div>

        {/* Loading Bar */}
        <div className="w-72 h-1.5 bg-white/20 rounded-full shadow-md overflow-hidden backdrop-blur-lg relative">
          <div
            className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 transition-all duration-700"
            style={{ width: `${((currentWordIndex + 1) / words.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;