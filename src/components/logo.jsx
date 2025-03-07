import React from "react";
import { useTexture } from "@react-three/drei";
import { useScroll } from "@react-three/drei";
import { useEffect } from "react";

export const Logo = ({ visible, scale = [1, 1, 1], onClick }) => {
  const texture = useTexture("../models/kit.png");

  const scrollData = useScroll();

  const handleClick = () => {
    if (scrollData.offset >= 0.3) {
      if (onClick) onClick();
    } else {
      console.log("disabled click.");
    }
  };

  return (
    <group visible={visible} scale={scale}>
      {" "}
      {/* ✅ scale 적용 */}
      <mesh
        position={[0, 1, 0]}
        rotation={[-Math.PI / 1, 1, 1]}
        onClick={handleClick}
        onPointerDown={handleClick}
      >
        <cylinderGeometry args={[1.5, 1.5, 0.1, 32]} />
        <meshStandardMaterial map={texture} transparent />
      </mesh>
    </group>
  );
};
