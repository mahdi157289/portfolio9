/**
 * File Role: 3D Background Component
 * Utility: Creates an immersive visual background with floating particles and geometric shapes.
 * Technical description: Uses React Three Fiber (R3F) to render a 3D scene within a Canvas.
 * Workflow inside the file:
 *  1. Imports R3F hooks and Three.js.
 *  2. Defines `Particles` component for the starfield effect.
 *  3. Defines `FloatingShape` component for geometric objects (currently unused but available for extension).
 *  4. Defines `Background3D` component which renders the `Canvas` and the `Particles`.
 * Relation with other files: Imported by `App.jsx` to be rendered as a fixed background layer.
 * Overall utility in the project: Enhances the visual appeal and modern feel of the portfolio.
 */

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const Particles = () => {
  const count = 1500;
  const mesh = useRef();

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.1;
      mesh.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#667eea"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

const FloatingShape = ({ geometry, color, position, rotationSpeed }) => {
  const mesh = useRef();

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += rotationSpeed.x;
      mesh.current.rotation.y += rotationSpeed.y;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={mesh} position={position}>
        <primitive object={geometry} />
        <meshBasicMaterial
          color={color}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
};

const Background3D = () => {
  const shapes = useMemo(() => {
    const geometries = [
      new THREE.IcosahedronGeometry(0.3, 0),
      new THREE.OctahedronGeometry(0.25, 0),
      new THREE.TetrahedronGeometry(0.25, 0),
    ];
    
    return Array.from({ length: 15 }).map((_, i) => ({
      geometry: geometries[Math.floor(Math.random() * geometries.length)],
      color: Math.random() > 0.5 ? "#667eea" : "#764ba2",
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 5
      ],
      rotationSpeed: { 
        x: Math.random() * 0.01, 
        y: Math.random() * 0.01 
      },
      key: i
    }));
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <Particles />
        {shapes.map((shape) => (
          <FloatingShape
            key={shape.key}
            geometry={shape.geometry}
            color={shape.color}
            position={shape.position}
            rotationSpeed={shape.rotationSpeed}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default Background3D;
