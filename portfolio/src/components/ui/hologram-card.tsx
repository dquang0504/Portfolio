// HologramCard.tsx
"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import '../../assets/css/hologram-card.css'
import avatar from '../../assets/images/header-img.png'

export default function HologramCard() {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <div className="hologram-wrapper">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: { color: "transparent" },
          particles: {
            number: { value: 40 },
            size: { value: 2 },
            move: { speed: 1 },
            color: { value: "#00f0ff" },
            links: { enable: true, color: "#00f0ff" }
          }
        }}
        className="particles-canvas"
      />

      {/* Tilt Hologram */}
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.3}
        scale={1.05}
        transitionSpeed={2500}
        className="hologram-card"
      >
        <div className="hologram-inner">
          <img
            src={avatar}
            alt="avatar"
            className="hologram-avatar"
          />
        </div>
      </Tilt>
    </div>
  );
}
