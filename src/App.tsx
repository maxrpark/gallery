import { Suspense, useEffect } from "react";
import ThreeCanvas from "./ThreeCanvas";

import {
  Customize,
  Hero,
  Loader,
  SectionFeatures,
  SectionTitle,
  SectionTitleAndDescription,
} from "./components";
import {
  camera_position_2,
  camera_position_2_mobile,
  cameraLookAt_2,
  cameraLookAt_2_mobile,
  camera_position_3,
  camera_position_3_mobile,
  cameraLookAt_3,
  cameraLookAt_3_mobile,
  camera_position_4,
  camera_position_4_mobile,
  cameraLookAt_4,
  cameraLookAt_4_mobile,
  camera_position_5,
  camera_position_5_mobile,
  cameraLookAt_5,
  cameraLookAt_5_mobile,
  camera_position_6,
  camera_position_6_mobile,
  cameraLookAt_6,
  cameraLookAt_6_mobile,
  camera_position_7,
  camera_position_7_mobile,
  cameraLookAt_7,
  cameraLookAt_7_mobile,
  camera_position_8,
  camera_position_8_mobile,
  cameraLookAt_8,
  cameraLookAt_8_mobile,
  camera_position_9,
  camera_position_9_mobile,
  cameraLookAt_9,
  cameraLookAt_9_mobile,
  camera_position_10,
  camera_position_10_mobile,
  cameraLookAt_10,
  cameraLookAt_10_mobile,
  camera_position_1,
  camera_position_1_mobile,
  cameraLookAt_1,
  cameraLookAt_1_mobile,
} from "./utils/modelPositions";
import { useProgress } from "@react-three/drei";
import useLocoScroll from "./hooks/useSmoothScroll";

const App: React.FC = () => {
  const { progress } = useProgress();
  useLocoScroll(true);

  return (
    <main>
      <Suspense fallback={<Loader progress={progress} />}>
        <ThreeCanvas />
        <div data-scroll className='main-content-wrapper'>
          {/* <Hero
            cameraPositionDesktop={camera_position_2}
            cameraPositionMobile={camera_position_2_mobile}
            cameraLookAtDesktop={cameraLookAt_2}
            cameraLookAtMobile={cameraLookAt_2_mobile}
          /> */}
          <SectionTitleAndDescription
            cameraPositionDesktop={camera_position_1}
            cameraPositionMobile={camera_position_1_mobile}
            cameraLookAtDesktop={cameraLookAt_1}
            cameraLookAtMobile={cameraLookAt_1_mobile}
          />
          <SectionTitleAndDescription
            cameraPositionDesktop={camera_position_2}
            cameraPositionMobile={camera_position_2_mobile}
            cameraLookAtDesktop={cameraLookAt_2}
            cameraLookAtMobile={cameraLookAt_2_mobile}
          />
          <SectionTitle
            cameraPositionDesktop={camera_position_3}
            cameraPositionMobile={camera_position_3_mobile}
            cameraLookAtDesktop={cameraLookAt_3}
            cameraLookAtMobile={cameraLookAt_3_mobile}
          />
          <SectionTitleAndDescription
            cameraPositionDesktop={camera_position_4}
            cameraPositionMobile={camera_position_4_mobile}
            cameraLookAtDesktop={cameraLookAt_4}
            cameraLookAtMobile={cameraLookAt_4_mobile}
          />
          <SectionTitleAndDescription
            cameraPositionDesktop={camera_position_5}
            cameraPositionMobile={camera_position_5_mobile}
            cameraLookAtDesktop={cameraLookAt_5}
            cameraLookAtMobile={cameraLookAt_5_mobile}
          />
          <SectionTitleAndDescription
            cameraPositionDesktop={camera_position_6}
            cameraPositionMobile={camera_position_6_mobile}
            cameraLookAtDesktop={cameraLookAt_6}
            cameraLookAtMobile={cameraLookAt_6_mobile}
          />
        </div>
      </Suspense>
    </main>
  );
};

export default App;
