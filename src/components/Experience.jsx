import { Environment, OrbitControls, Float } from "@react-three/drei";

import { Crow } from "./crow";
export const Experience = () => {
  return (
    <>
      <OrbitControls enableZoom={false} />
      <Float floatIntensity={0.1} speed={2}>
        <Crow scale={0.06} />
      </Float>
      <Environment preset="sunset" background blur={0.4} />
    </>
  );
};
