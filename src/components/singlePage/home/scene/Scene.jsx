import React from "react";
import { useEffect } from "react";
import * as THREE from "three";
import backRoom from "../../../assets/src/backgrounds/effectVidrio1.webp";

const Scene = () => {
  useEffect(() => {
    const room = () => {
      const canvas = document.querySelector(".webGlScene");

      const scene = new THREE.Scene();

      const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      window.addEventListener("click", () => {
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();

        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      });

      const camera = new THREE.PerspectiveCamera(
        75,
        sizes.width / sizes.height
      );
      camera.rotation.reorder("YXZ");
      camera.position.set(0, 0, 4.5);
      camera.rotation.set(0, 0, 0);

      scene.add(camera);

      const textureLoader = new THREE.TextureLoader();
      const texturePlane = textureLoader.load(backRoom);

      const plane = new THREE.PlaneGeometry(15, 7);
      const planeMaterial = new THREE.MeshBasicMaterial({
        map: texturePlane,
        transparent: true,
        opacity: 1,
      });
      const MeshPlane = new THREE.Mesh(plane, planeMaterial);

      scene.add(MeshPlane);

      const ambientLight = new THREE.AmbientLight(0xffffff, 1);
      scene.add(ambientLight);

      /*   renderer  */

      const renderer = new THREE.WebGL1Renderer({
        canvas: canvas,
        alpha: true,
      });
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      /* renderer.physicallyCorrectLights = true; */

      const cursor = {
        x: 0,
        y: 0,
      };

      window.addEventListener("mousemove", (e) => {
        cursor.x = (e.x / sizes.width) * 0.5;
        cursor.y = -((e.y / sizes.height) * 0.5);
      });

      const tick = () => {
        camera.position.y = cursor.y * 0.5;
        camera.position.x = cursor.x * 0.5;

        renderer.render(scene, camera);
        window.requestAnimationFrame(tick);
      };

      tick();
    };

    room();
  }, []);

  return <canvas className="webGlScene"></canvas>;
};

export default Scene;
