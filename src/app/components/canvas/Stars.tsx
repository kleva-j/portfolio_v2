/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unknown-property */
import { PointMaterial, Points, Preload } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef, useState } from 'react';

import * as Random from 'maath/random/dist/maath-random.cjs';

const Stars = (props: any) => {
  const [sphere] = useState(() => Random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  const ref: any = useRef();

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial transparent color="#f272c8" size={0.002} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="absolute w-full h-auto inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
