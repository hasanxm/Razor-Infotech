import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="w-full h-[100vh] absolute top-0 left-0 -z-10 border-none">
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="w-full h-full"
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          particles: {
            number: { value: 60, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.3 },
            size: { value: 3, random: true },
            move: { enable: true, speed: 2 },
            links: {
              enable: true,
              distance: 120,
              color: "#ffffff",
              opacity: 0.2,
              width: 1,
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 1,
                },
              },
              push: {
                quantity: 4,
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
