import {useCallback} from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';

export function ParticleComponent () {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadSlim(engine);
      }, []);
      const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
      }, []);
    return (
        <Particles
        className='z-0'
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: '#ffffff',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#000000',
            },
            links: {
              color: '#000000',
              distance: 150,
              enable: true,
              opacity: 0.09,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 30,
            },
            opacity: {
              value: 0.09,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 2, max: 4 },
            },
          },
          detectRetina: true,
        }}
      />
    )
}