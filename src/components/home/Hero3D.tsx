import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const Particles = () => {
    const ref = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
            ref.current.rotation.x = state.clock.getElapsedTime() * 0.02;
        }
    });

    return (
        <group ref={ref}>
            {Array.from({ length: 150 }).map((_, i) => (
                <Float
                    key={i}
                    speed={1.5}
                    rotationIntensity={1}
                    floatIntensity={2}
                    position={[
                        (Math.random() - 0.5) * 15,
                        (Math.random() - 0.5) * 15,
                        (Math.random() - 0.5) * 10
                    ]}
                >
                    <mesh>
                        <sphereGeometry args={[0.03 + Math.random() * 0.03, 8, 8]} />
                        <meshStandardMaterial
                            color={Math.random() > 0.5 ? "#FFD700" : "#FFFFFF"}
                            emissive={Math.random() > 0.5 ? "#DAA520" : "#FFFFFF"}
                            emissiveIntensity={0.5}
                            roughness={0.2}
                            metalness={0.8}
                        />
                    </mesh>
                </Float>
            ))}
        </group>
    );
};

const Hero3D = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#FFD700" />
                <Particles />
                <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
            </Canvas>
        </div>
    );
};

export default Hero3D;
