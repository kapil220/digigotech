"use client";

import { Suspense, type RefObject } from "react";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, Preload } from "@react-three/drei";
import Globe from "./Globe";

/**
 * Thin Canvas wrapper around the Globe scene. Imported via next/dynamic with
 * ssr:false so Three.js never touches the server bundle.
 */
export default function HeroCanvas({
  progress,
}: {
  progress: RefObject<number>;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ width: "100%", height: "100%" }}
    >
      <Suspense fallback={null}>
        <Globe progress={progress} />
        <Preload all />
      </Suspense>
      <AdaptiveDpr pixelated />
    </Canvas>
  );
}
