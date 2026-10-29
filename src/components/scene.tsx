import { Canvas } from "@react-three/fiber";
import Character from "./Character";

export default function Scene() {
    return (
    <Canvas camera={{ position: [0, 1.5, 4], fov: 65 }} dpr={[1, 1.75]} gl={{ antialias: true, powerPreference: "low-power" }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Character />
    </Canvas>
    );
}
