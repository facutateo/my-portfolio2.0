import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import { Group } from "three";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const MODEL_URL = `${import.meta.env.BASE_URL}character.glb`;

const ACTION_BY_SECTION: Record<string, string> = {
  about: "saludo",
  projects: "show",
  skills: "typing",
  contact: "contacto",
};

export default function Character() {
  const group = useRef<Group>(null!);
  const { scene, animations } = useGLTF(MODEL_URL);
  const { actions } = useAnimations(animations, group);
  const activeSection = useActiveSection();

  // Materiales del notebook: se calculan una vez y se animan en cada frame sin recorrer la escena.
  const notebookRef = useRef<{ node?: THREE.Object3D; materials: THREE.Material[] }>({ materials: [] });
  useEffect(() => {
    const node = scene.getObjectByName("notebook");
    const materials: THREE.Material[] = [];
    node?.traverse((child) => {
      const mesh = child as THREE.Mesh;
      if (mesh.isMesh) {
        const m = mesh.material as THREE.Material;
        m.transparent = true;
        m.opacity = 0;
        materials.push(m);
      }
    });
    if (node) node.visible = false;
    notebookRef.current = { node, materials };
  }, [scene]);

  useEffect(() => {
    const next = actions[ACTION_BY_SECTION[activeSection] ?? "stay"];
    if (!next) return;
    next.reset().setLoop(THREE.LoopRepeat, Infinity).setEffectiveWeight(1).fadeIn(0.5).play();
    return () => {
      next.fadeOut(0.5);
    };
  }, [activeSection, actions]);

  useFrame((_, delta) => {
    const { node, materials } = notebookRef.current;
    if (!node) return;
    const show = activeSection === "skills";
    if (!show && !node.visible) return;
    const speed = Math.min(1, delta * (show ? 3 : 15));
    materials.forEach((m) => (m.opacity = THREE.MathUtils.lerp(m.opacity, show ? 1 : 0, speed)));
    if (show) node.visible = true;
    else if (materials.every((m) => m.opacity < 0.01)) {
      materials.forEach((m) => (m.opacity = 0));
      node.visible = false;
    }
  });

  return (
    <primitive
      object={scene}
      ref={group}
      scale={0.2}
      position={[-0.1, 0, 0]}
      rotation={[0, Math.PI, 0]}
    />
  );
}

useGLTF.preload(MODEL_URL);
