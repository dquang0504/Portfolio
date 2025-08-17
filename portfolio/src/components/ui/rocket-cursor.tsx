"use client";
import { useEffect, useRef } from "react";
import rocket from "../../assets/images/rocket-svgrepo-com.svg";

export const RocketCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // 🚀 Rocket
    const spaceship = new Image();
    spaceship.src = rocket;
    let spaceshipLoaded = false;
    spaceship.onload = () => {
      spaceshipLoaded = true;
    };

    const cursor = { x: width / 2, y: height / 2 };
    const rocketPos = { x: width / 2, y: height / 2 };
    let angle = 0;

    // 🔥 Exhaust
    interface ExhaustParticle {
      x: number;
      y: number;
      dx: number;
      dy: number;
      radius: number;
      alpha: number;
    }
    const exhaust: ExhaustParticle[] = [];

    const createExhaust = (x: number, y: number) => {
      exhaust.push({
        x,
        y,
        dx: (Math.random() - 0.5) * 1,
        dy: Math.random() * 2 + 1,
        radius: Math.random() * 3 + 2,
        alpha: 1,
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // 🎥 Animate
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // rocket easing
      rocketPos.x += (cursor.x - rocketPos.x) * 0.1;
      rocketPos.y += (cursor.y - rocketPos.y) * 0.1;

      // angle rocket hướng về cursor
      angle = Math.atan2(cursor.y - rocketPos.y, cursor.x - rocketPos.x);

      if (spaceshipLoaded && spaceship.complete) {
        ctx.save();
        ctx.translate(rocketPos.x, rocketPos.y);
        ctx.rotate(angle + Math.PI / 2);
        ctx.drawImage(spaceship, -16, -16, 32, 32);
        ctx.restore();

        for (let i = 0; i < 2; i++) {
          const offset = -19; // dịch sang trái 19px
          const offsetX = -Math.sin(angle) * offset;
          const offsetY = Math.cos(angle) * offset;
          createExhaust(
            rocketPos.x - Math.cos(angle) * 20 + offsetX,
            rocketPos.y - Math.sin(angle) * 20 + offsetY
          );
        }
      }

      // draw exhaust
      for (let i = exhaust.length - 1; i >= 0; i--) {
        const p = exhaust[i];
        p.x += p.dx;
        p.y += p.dy;
        p.alpha -= 0.02;

        if (p.alpha <= 0) {
          exhaust.splice(i, 1);
          continue;
        }

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        grad.addColorStop(0, "rgba(255,150,0," + p.alpha + ")");
        grad.addColorStop(0.5, "rgba(255,80,0," + p.alpha * 0.7 + ")");
        grad.addColorStop(1, "rgba(0,0,0,0)");

        ctx.beginPath();
        ctx.fillStyle = grad;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-50 pointer-events-none"
      style={{zIndex:10000}}
    />
  );
};
