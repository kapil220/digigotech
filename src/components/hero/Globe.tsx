"use client";

import { useMemo, useRef, type RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import { Icosahedron, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

interface GlobeProps {
  /** Live 0→1 scroll progress driving the scrubbed transformation. */
  progress: RefObject<number>;
}

/** Fibonacci-sphere point cloud — evenly distributed dots on a sphere. */
function useSpherePoints(count: number, radius: number) {
  return useMemo(() => {
    const positions = new Float32Array(count * 3);
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      positions[i * 3] = Math.cos(theta) * r * radius;
      positions[i * 3 + 1] = y * radius;
      positions[i * 3 + 2] = Math.sin(theta) * r * radius;
    }
    return positions;
  }, [count, radius]);
}

export default function Globe({ progress }: GlobeProps) {
  const group = useRef<THREE.Group>(null);
  const wire = useRef<THREE.Mesh>(null);
  const core = useRef<THREE.Mesh>(null);
  const cyanLight = useRef<THREE.PointLight>(null);

  const points = useSpherePoints(900, 2.05);

  // Smooth the raw scroll value so jitter never reaches the transforms.
  const eased = useRef(0);

  useFrame((state, delta) => {
    const p = progress.current ?? 0;
    eased.current += (p - eased.current) * Math.min(1, delta * 4);
    const e = eased.current;
    const t = state.clock.elapsedTime;

    if (group.current) {
      // Constant idle spin + scroll-driven extra rotation and tilt.
      group.current.rotation.y = t * 0.12 + e * Math.PI * 1.4;
      group.current.rotation.x = Math.sin(t * 0.2) * 0.08 + e * 0.5;
      // Globe assembles: scales up and settles as you scroll in.
      const s = 0.85 + e * 0.35;
      group.current.scale.setScalar(s);
    }

    if (wire.current) {
      wire.current.rotation.z = -t * 0.05;
      const mat = wire.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.12 + e * 0.28;
    }

    if (core.current) {
      const mat = core.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 0.4 + e * 1.6;
    }

    if (cyanLight.current) {
      cyanLight.current.intensity = 6 + Math.sin(t * 1.5) * 1.5 + e * 8;
    }
  });

  return (
    <group ref={group}>
      {/* Lighting — violet key, cyan rim, matches the brand 3D palette. */}
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={8} color="#7b61ff" />
      <pointLight
        ref={cyanLight}
        position={[-4, -2, 3]}
        intensity={6}
        color="#00e5ff"
      />

      {/* Inner molten core */}
      <Icosahedron ref={core} args={[1.25, 4]}>
        <meshStandardMaterial
          color="#0a0a16"
          emissive="#00e5ff"
          emissiveIntensity={0.5}
          roughness={0.35}
          metalness={0.9}
          flatShading
        />
      </Icosahedron>

      {/* Wireframe shell */}
      <Icosahedron ref={wire} args={[1.85, 2]}>
        <meshBasicMaterial
          color="#7b61ff"
          wireframe
          transparent
          opacity={0.18}
        />
      </Icosahedron>

      {/* Orbiting point cloud */}
      <Points positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00e5ff"
          size={0.025}
          sizeAttenuation
          depthWrite={false}
          opacity={0.85}
        />
      </Points>
    </group>
  );
}
