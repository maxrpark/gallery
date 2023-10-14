import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useThreeContext } from "../context/useThreeContext";
import { useEffect, useRef } from "react";

const GalleryModel: React.FC = () => {
  const { modelRef, selectedColor } = useThreeContext();
  const { scene } = useGLTF("/main-model.glb");

  scene.traverse((child: any) => {
    if (
      child instanceof THREE.Mesh &&
      child.material instanceof THREE.MeshStandardMaterial
    ) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return <primitive ref={modelRef} object={scene}></primitive>;
};

export default GalleryModel;
