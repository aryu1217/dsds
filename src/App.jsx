import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls } from "@react-three/drei";

function App() {
  return (
    <Canvas shadows camera={{ position: [8, 4, 8], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <ScrollControls pages={4}>
        <Experience />
      </ScrollControls>
    </Canvas>
  );
}

export default App;
