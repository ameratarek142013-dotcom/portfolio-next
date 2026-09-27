"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Float,
  useGLTF,
} from "@react-three/drei";

function Laptop() {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/mac-draco.glb");
  const { size } = useThree();

  const isMobile = size.width < 640;
  const scale = isMobile ? 0.9 : size.width < 768 ? 0.5 : 0.85;

  useFrame(({ clock }) => {
    if (!group.current) return;

    const t = clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t * 0.5) * 0.06;
    group.current.position.y = -0.35 + Math.sin(t * 0.8) * 0.03;
  });

  return (
    <group ref={group} scale={scale} dispose={null}>
      <group rotation={[-0.425, 0, 0]} position={[0, -0.04, 0]}>
        <group position={[0, 2.96, -0.13]} rotation={[1.559, 0, 0]}>
          <mesh
            geometry={nodes.Cube008.geometry}
            material={materials.aluminium}
          />
          <mesh
            geometry={nodes.Cube008_1.geometry}
            material={materials["matte.001"]}
          />
          <mesh
            geometry={nodes.Cube008_2.geometry}
            material={materials["screen.001"]}
          />
        </group>

        <mesh
          geometry={nodes.keyboard.geometry}
          material={materials.keys}
          position={[1.79, 0, 3.45]}
        />

        <group position={[0, -0.1, 3.39]}>
          <mesh
            geometry={nodes.Cube002.geometry}
            material={materials.aluminium}
          />
          <mesh
            geometry={nodes.Cube002_1.geometry}
            material={materials.trackpad}
          />
        </group>

        <mesh
          geometry={nodes.touchbar.geometry}
          material={materials.touchbar}
          position={[0, -0.03, 1.2]}
        />
      </group>
    </group>
  );
}



function ResponsiveCamera({ isMobile }) {
  const { camera } = useThree();

  camera.position.set(
    isMobile ? 6 : 3,
    isMobile ? 12 : 8,
    isMobile ? 12 : 10
  );
  camera.fov = isMobile ? 42 : 32;
  camera.lookAt(0, 0, 0);
  camera.updateProjectionMatrix();

  return null;
}

function Scene() {
  const { size } = useThree();
  const isMobile = size.width < 640;

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />

      <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.4}>
        <Laptop />
      </Float>

      <ContactShadows
        position={[0, -1.4, 0]}
        opacity={0.25}
        scale={4}
        blur={2.5}
      />

      <Environment preset="city" />
      <ResponsiveCamera isMobile={isMobile} />
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="relative h-[360px] w-full sm:h-[440px] md:h-[500px] lg:h-[560px]">
      <Canvas
  camera={{ position: [5, 8, 10], fov: 32 }}
  dpr={[1, 1.5]}
  gl={{ antialias: true, alpha: true }}
>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/mac-draco.glb");