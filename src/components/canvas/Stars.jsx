/*eslint-disable */
import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import CanvasLoader from "../Loader";
import { Group } from "three";

const Stars = (props) => {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 20;
  });

  // const sphere = random.inSphere(new Float32Array(6000), { radius: 1.2 });
  const sphere = random.inSphere(new Float32Array(4000), { radius: 1.2 });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.001}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};
const StartCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      {/* <Canvas camera={{ position: [0, 0, 1] }} >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas> */}
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]} // مهم جداً للتسريع
      >
        <Suspense fallback={<CanvasLoader />}>  
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StartCanvas;
