"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Sphere } from "@react-three/drei";

export default function ParticleBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      className="absolute inset-0"
    >
      <ambientLight intensity={2} />

      <Float speed={2}>

        <Sphere args={[1.5, 64, 64]}>
          <meshStandardMaterial
            wireframe
            color="#38bdf8"
          />
        </Sphere>

      </Float>

    </Canvas>
  );
}