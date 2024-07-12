import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';
import useLights from './components/LightsManager';
import Lights from './components/Lights';
import LightControls from './components/LightControls';
import { Experience } from './components/Experience';
import { Overlay } from './components/Overlay';

function App() {
  const {
    lights,
    globalExposure,
    addLight,
    updateLight,
    deleteLight,
    resetLights,
    toggleGlobalShadows,
    globalShadows,
    updateGlobalExposure,
    expandedLightId,
    setExpandedLightId,
  } = useLights();

  return (
    <>
      <Leva hidden />
      <Overlay />
      <Canvas
        gl={{ logarithmicDepthBuffer: true, antialias: false }}
        dpr={[1, 1.5]}
      >
        <Experience />
        <Lights lights={lights} globalExposure={globalExposure} />
      </Canvas>
      <LightControls
        lights={lights}
        updateLight={updateLight}
        setExpandedLightId={setExpandedLightId} // Correctly pass this prop
        expandedLightId={expandedLightId} // Ensure this prop is also passed
        addLight={addLight}
        deleteLight={deleteLight}
        resetLights={resetLights}
        toggleGlobalShadows={toggleGlobalShadows}
        globalShadows={globalShadows}
        globalExposure={globalExposure}
        updateGlobalExposure={updateGlobalExposure}
      />
    </>
  );
}

export default App;
