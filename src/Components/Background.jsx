import React, { useRef, useEffect } from "react";
import * as THREE from "three";

function Stars() {
  const stars = useRef([]);
  const mount = useRef(null);

  useEffect(() => {
    // camera
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 5;

    // scene
    const scene = new THREE.Scene();

    // renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // transparent background

    // add the renderer to the component
    mount.current.appendChild(renderer.domElement);

    // add spheres to the scene
    for (let z = -1000; z < 1000; z += 20) {
      const geometry = new THREE.SphereGeometry(0.5, 32, 32);
      const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const sphere = new THREE.Mesh(geometry, material);

      sphere.position.x = Math.random() * 1000 - 500;
      sphere.position.y = Math.random() * 1000 - 500;
      sphere.position.z = z;
      sphere.scale.x = sphere.scale.y = 2;

      scene.add(sphere);
      stars.current.push(sphere);
    }

    // render loop
    function render() {
      requestAnimationFrame(render);
      animateStars();
      renderer.render(scene, camera);
    }

    // animate the stars
    function animateStars() {
      for (let i = 0; i < stars.current.length; i++) {
        const star = stars.current[i];
        star.position.z += i / 200;
        if (star.position.z > 1000) star.position.z -= 2000;
      }
    }

    // start rendering
    render();

    // clean up
    return () => {
      mount.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mount}
      className="
      fixed left-0 top-0 z-[-1] h-full w-full"
    />
  );
}

export default Stars;
