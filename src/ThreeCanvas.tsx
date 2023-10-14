import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { Leva } from "leva";
import { Perf } from "r3f-perf";
import {
  camera_position_1,
  camera_position_1_mobile,
} from "./utils/modelPositions";
import { useEffect, useState } from "react";

const locationHash = window.location.hash;
const ThreeCanvas: React.FC = () => {
  const [cameraPosition, setCameraPosition] = useState(camera_position_1);
  // useEffect(() => {
  //   if (window.innerWidth > 800) {
  //     setCameraPosition(camera_position_1);
  //   } else {
  //     setCameraPosition(camera_position_1_mobile);
  //   }
  //   console.log(camera_position_1);
  // }, []);

  return (
    <div className='webgl-wrapper'>
      <div>
        <Leva collapsed hidden={locationHash !== "#debug"} />
      </div>
      <Canvas
        className='canvas'
        shadows
        camera={{
          fov: 25,
          near: 0.02,
          far: 1000,
          position: [cameraPosition.x, cameraPosition.y, cameraPosition.z],
        }}
        gl={{
          antialias: true,
        }}
      >
        {locationHash === "#debug" && <Perf position='top-left' />}
        <Experience />
        <color args={["#000000"]} attach={"background"} />
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;
