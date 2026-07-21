import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const ringData = [
      { radius: 2.45, color: 0xb05234, opacity: 0.18, rotation: [1.1, 0.2, 0.1] },
      { radius: 2.05, color: 0x527966, opacity: 0.16, rotation: [0.75, -0.55, 0.4] },
      { radius: 1.65, color: 0xc6a252, opacity: 0.2, rotation: [1.35, 0.35, -0.25] },
    ] as const;

    const rings = ringData.map((item) => {
      const geometry = new THREE.TorusGeometry(item.radius, 0.012, 5, 160);
      const material = new THREE.MeshBasicMaterial({ color: item.color, transparent: true, opacity: item.opacity });
      const ring = new THREE.Mesh(geometry, material);
      ring.rotation.set(item.rotation[0], item.rotation[1], item.rotation[2]);
      group.add(ring);
      return ring;
    });

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(mount);

    let frame = 0;
    const render = () => {
      if (!reduceMotion) {
        group.rotation.z += 0.0007;
        rings[1].rotation.z -= 0.001;
      }
      renderer.render(scene, camera);
      frame = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      rings.forEach((ring) => {
        ring.geometry.dispose();
        (ring.material as THREE.Material).dispose();
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={mountRef} className="hero-scene" aria-hidden="true" />;
};

export default HeroScene;
