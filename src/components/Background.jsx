import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Stars = (props) => {
  const ref = useRef();
  
  const sphere = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const r = 1.5 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const ShootingStar = () => {
  const { viewport } = useThree();
  const groupRef = useRef();
  const [active, setActive] = useState(false);
  
  // Random color for each star
  const color = useMemo(() => {
    const colors = ["#ccffff", "#ffccff", "#ffffff", "#ccccff"];
    return colors[Math.floor(Math.random() * colors.length)];
  }, []);

  const reset = () => {
    if (groupRef.current) {
      // Spawn at random depth to create "void" effect
      const z = -Math.random() * 20 - 10; // z between -10 and -30
      
      // Adjust spawn position based on depth (perspective)
      // Objects further away need to spawn further out to be off-screen
      const depthScale = Math.abs(z) / 2; 
      
      const startX = (viewport.width / 2) * (1 + Math.random() * 0.5) * depthScale; 
      const startY = (viewport.height / 2) * (1 + Math.random() * 0.5) * depthScale;
      
      groupRef.current.position.set(startX, startY, z);
      
      // Scale up distant stars so they remain visible but look "deep"
      const scale = 1 + Math.abs(z) / 10;
      groupRef.current.scale.setScalar(scale);
    }
    setActive(true);
  };

  useFrame((state, delta) => {
    if (!active) {
      if (Math.random() < 0.01) reset(); // 1% chance per frame to spawn
      return;
    }
    if (groupRef.current) {
      // Constant world speed, but parallax makes distant ones look slower
      groupRef.current.position.x -= delta * 20; 
      groupRef.current.position.y -= delta * 20;
      
      // Despawn logic needs to account for depth
      const z = groupRef.current.position.z;
      const depthScale = Math.abs(z) / 2 + 1;
      
      if (
        groupRef.current.position.y < -viewport.height / 2 * depthScale - 10 || 
        groupRef.current.position.x < -viewport.width / 2 * depthScale - 10
      ) {
        setActive(false);
      }
    }
  });

  return (
    <group ref={groupRef} visible={active} rotation={[0, 0, -Math.PI / 4]}>
      {/* Core */}
      <mesh>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>
      {/* Glow */}
      <mesh>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshBasicMaterial color={color} toneMapped={false} transparent opacity={0.3} />
      </mesh>
      {/* Trail */}
      <mesh position={[0, 1.5, 0]}>
        <cylinderGeometry args={[0, 0.1, 3, 8]} />
        <meshBasicMaterial color={color} transparent opacity={0.4} toneMapped={false} />
      </mesh>
    </group>
  );
};

const Background = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars radius={50} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        {Array.from({ length: 3 }).map((_, i) => (
          <ShootingStar key={i} />
        ))}
      </Canvas>
    </div>
  );
};

export default Background;
