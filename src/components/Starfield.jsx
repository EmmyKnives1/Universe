// src/components/Starfield/Starfield.jsx
import React from 'react';
import Particles from 'react-tsparticles';
import './Starfield.css';

export default function Starfield() {
  const newLocal = '#0';
  return (
    <Particles
      className="starfield"
      options={{
        background: { color: { value: newLocal } },
        particles: {
          number: { value: 200, density: { enable: true, area: 800 } },
          color: { value: '#f1eafa' },
          shape: { type: 'circle' },
          opacity: { value: 0.8 },
          size: { value: 1.5 },
          move: { enable: true, speed: 0.2, out_mode: 'bounce' }
        },
        interactivity: {
          events: { onHover: { enable: true, mode: 'repulse' } },
          modes: { repulse: { distance: 100 } }
        },
        retina_detect: true
      }}
    />
  );
}
