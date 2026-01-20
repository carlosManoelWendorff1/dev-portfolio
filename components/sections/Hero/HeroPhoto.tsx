"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Points,
  PointMaterial,
  Sphere,
  Text,
  Float,
  Stars,
  Sparkles,
} from "@react-three/drei";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { BlendFunction, KernelSize } from "postprocessing";

function RotatingPlanet() {
  const planetRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.001;
      planetRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={planetRef} args={[1.5, 64, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#0ff"
          roughness={0.1}
          metalness={0.7}
          emissive="#000"
          emissiveIntensity={0.3}
        />
      </Sphere>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <ringGeometry args={[2, 2.5, 64]} />
        <meshStandardMaterial
          color="#4fc3f7"
          emissive="#4fc3f7"
          emissiveIntensity={0.2}
          transparent
          opacity={0.6}
          side={THREE.DoubleSide}
        />
      </mesh>
    </Float>
  );
}

function OrbitingSatellites() {
  const satellites = useRef<THREE.Group>(null);

  useFrame(() => {
    if (satellites.current) {
      satellites.current.rotation.y += 0.004;
    }
  });

  return (
    <group ref={satellites}>
      {[...Array(3)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i * Math.PI * 2) / 3) * 5,
            Math.sin((i * Math.PI * 2) / 3) * 0.7,
            Math.sin((i * Math.PI * 2) / 3) * 2,
          ]}
        >
          <icosahedronGeometry args={[0.2, 1]} />
          <meshStandardMaterial
            color={"#53eafd"}
            emissive={"#53eafd"}
            emissiveIntensity={15}
            metalness={10}
            roughness={0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

function Nebula() {
  const nebulaRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const count = 1500;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 4 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      positions[i * 3 + 0] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.cos(phi) * 0.5;
      positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);

      colors[i * 3 + 0] = Math.random() * 0.5 + 0.5;
      colors[i * 3 + 1] = Math.random() * 0.3 + 0.2;
      colors[i * 3 + 2] = Math.random() * 0.8 + 0.2;
    }
    return { positions, colors };
  }, []);

  useFrame(() => {
    if (nebulaRef.current) {
      nebulaRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <Points
      ref={nebulaRef}
      positions={particles.positions}
      colors={particles.colors}
    >
      <PointMaterial
        size={0.05}
        vertexColors
        sizeAttenuation
        transparent
        opacity={0.4}
        depthWrite={false}
      />
    </Points>
  );
}

function AsteroidField() {
  const asteroids = useMemo(() => {
    const count = 100;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return arr;
  }, []);

  return (
    <Points positions={asteroids} stride={3}>
      <PointMaterial
        size={0.03}
        color="#888"
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </Points>
  );
}

function Constellations() {
  const groupRef = useRef<THREE.Group>(null);
  const [currentConstellation, setCurrentConstellation] = useState(0);
  const [fadeOpacity, setFadeOpacity] = useState(1);
  const [fadeDirection, setFadeDirection] = useState(1);

  const constellations = useMemo(() => {
    const generateConstellation = () => {
      const starCount = 15;
      const stars: THREE.Vector3[] = [];

      for (let i = 0; i < starCount; i++) {
        stars.push(
          new THREE.Vector3(
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 8
          )
        );
      }

      const connections: number[] = [];
      stars.forEach((star1, i) => {
        stars.slice(i + 1).forEach((star2) => {
          const dist = Math.sqrt(
            Math.pow(star1.x - star2.x, 2) +
              Math.pow(star1.y - star2.y, 2) +
              Math.pow(star1.z - star2.z, 2)
          );

          if (dist < 3) {
            connections.push(
              star1.x,
              star1.y,
              star1.z,
              star2.x,
              star2.y,
              star2.z
            );
          }
        });
      });

      const positions = new Float32Array(connections);
      return { positions, stars };
    };

    return [generateConstellation()];
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeDirection(-1);
    }, 25000);

    return () => clearInterval(interval);
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      const speed = 0.005;
      groupRef.current.rotation.x += speed * 0.2;
      groupRef.current.rotation.y += speed * 0.3;
      groupRef.current.rotation.z += speed * 0.1;
    }

    setFadeOpacity((prev) => {
      const newOpacity = prev + fadeDirection * 0.001;

      if (newOpacity <= 0) {
        setFadeDirection(1);
        setCurrentConstellation((prev) => (prev + 1) % constellations.length);
        return 0;
      }

      if (newOpacity >= 1) {
        setFadeDirection(-1);
        return 1;
      }

      return newOpacity;
    });
  });

  const { positions, stars } = constellations[currentConstellation];

  if (positions.length === 0) return null;

  return (
    <group ref={groupRef}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            args={[positions, 3]}
            attach="attributes-position"
            count={positions.length / 3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#4fc3f7"
          transparent
          opacity={fadeOpacity * 0.3}
        />
      </lineSegments>

      {stars.map((star, i) => (
        <mesh key={i} position={[star.x, star.y, star.z]}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial
            color="#4fc3f7"
            transparent
            opacity={fadeOpacity}
          />
        </mesh>
      ))}
    </group>
  );
}

function GlowingParticles() {
  const particles = useMemo(() => {
    const count = 50;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  return (
    <Points positions={particles}>
      <PointMaterial
        transparent
        color="#0ff"
        size={0.1}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function Hero3D({ t }: { t: any }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", checkMobile);
    checkMobile();

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const defaultText = {
    hello: "Hello World!",
    role: "Full Stack Developer",
    desc: "Creating amazing digital experiences with modern technologies",
    ...t,
  };

  return (
    <div className="relative w-full h-full rounded-3xl border border-white/10 bg-linear-to-br from-cyan-400/10 via-purple-500/10 to-pink-500/10 overflow-hidden">
      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 50,
          near: 0.1,
          far: 1000,
        }}
        shadows
      >
        <EffectComposer>
          <Bloom
            intensity={0.5}
            kernelSize={KernelSize.LARGE}
            luminanceThreshold={0.9}
            luminanceSmoothing={0.025}
          />
          <ChromaticAberration
            blendFunction={BlendFunction.NORMAL}
            offset={[0.001, 0.001]}
          />
        </EffectComposer>

        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.8}
          color="#0ff"
          castShadow
        />
        <pointLight position={[-5, -5, -5]} intensity={0.3} color="#ff4081" />

        <Nebula />
        <AsteroidField />
        <GlowingParticles />
        <Constellations />

        <Stars
          radius={100}
          depth={50}
          count={3000}
          factor={4}
          saturation={0}
          fade
          speed={0.5}
        />

        <OrbitingSatellites />

        <Sparkles
          count={80}
          speed={0.1}
          opacity={0.6}
          color="#0ff"
          size={1}
          scale={10}
        />

        <group position={[0, 0, 0]}>
          {/* <Text
            fontSize={0.2}
            color="#fff"
            position={[0, 2.2, 0]}
            anchorX="center"
            anchorY="middle"
            letterSpacing={0.05}
          >
            {defaultText.hello}
          </Text> */}

          <Float speed={3} rotationIntensity={0.5} floatIntensity={0.5}>
            <Text
              fontSize={1.5}
              fontWeight={"bold"}
              color="#fff"
              position={[0, 0.0, 0]}
              anchorX="center"
              anchorY="middle"
            >
              Carlos Wendorff
            </Text>

            <Text
              fontSize={0.3}
              color="#fff"
              position={[0, -1.0, 0.1]}
              anchorX="center"
              anchorY="middle"
            >
              {defaultText.role}
            </Text>
          </Float>
          {/* <Text
            fontSize={0.15}
            color="#ccc"
            position={[0, 0.1, 0]}
            maxWidth={3}
            anchorX="center"
            anchorY="middle"
            textAlign="center"
          >
            {defaultText.desc}
          </Text> */}
        </group>

        <OrbitControls
          enableZoom={!isMobile}
          enablePan={!isMobile}
          autoRotate
          autoRotateSpeed={0.01}
          enableDamping
          dampingFactor={0.05}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
          maxDistance={12}
          minDistance={4}
        />
      </Canvas>

      <div className="absolute bottom-4 left-4 text-white/60 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <span>3D Interactive Space</span>
        </div>
      </div>
    </div>
  );
}
