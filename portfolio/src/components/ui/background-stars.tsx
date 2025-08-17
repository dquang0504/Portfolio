"use client";
import { useEffect, useRef } from "react";

export const BackgroundStars = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // ⭐ Stars
    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.2,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
    }));

    // 🌠 Shooting stars
    interface ShootingStar {
      x: number;
      y: number;
      dx: number;
      dy: number;
      length: number;
      radius: number;
    }
    const shootingStars: ShootingStar[] = [];

    const createShootingStar = () => {
      shootingStars.push({
        x: Math.random() * width,
        y: 0,
        dx: -2,
        dy: 2,
        length: 250,
        radius: 2.5,
      });
    };

    setInterval(() => {
      if (shootingStars.length < 2 && Math.random() < 0.7) {
        createShootingStar();
      }
    }, 3000);

    // 🎥 Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Stars
      stars.forEach((star) => {
        star.x += star.dx;
        star.y += star.dy;
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
      });

      // Shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        const grad = ctx.createLinearGradient(
          s.x,
          s.y,
          s.x - s.dx * s.length,
          s.y - s.dy * s.length
        );
        grad.addColorStop(0, "rgba(255,255,255,1)");
        grad.addColorStop(0.5, "rgba(150,100,255,0.6)");
        grad.addColorStop(1, "rgba(255,255,255,0)");

        ctx.strokeStyle = grad;
        ctx.lineWidth = s.radius;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.dx * s.length, s.y - s.dy * s.length);
        ctx.stroke();

        // head glow
        const headGradient = ctx.createRadialGradient(
          s.x,
          s.y,
          0,
          s.x,
          s.y,
          s.radius * 2
        );
        headGradient.addColorStop(0, "white");
        headGradient.addColorStop(0.5, "rgba(255,200,255,0.8)");
        headGradient.addColorStop(1, "rgba(255,0,200,0)");

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = headGradient;
        ctx.fill();

        s.x += s.dx;
        s.y += s.dy;
        // 👇 Thêm margin để cho phép đi ra khỏi màn hình
        const margin = 200;
        if (
          s.x < -s.length - margin ||
          s.y > height + s.length + margin ||
          s.x > width + s.length + margin ||
          s.y < -s.length - margin
        ) {
          shootingStars.splice(i, 1);
        }
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
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};
