import React, { useRef, useEffect } from 'react';

export default function StarfieldCanvas() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const numStars = 140;
    const stars = [];
    const shootingStars = [];

    // 🌟 Criação de estrelas fixas
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.2 + 0.5,
        dx: (Math.random() - 0.5) * 0.1,
        dy: (Math.random() - 0.5) * 0.1
      });
    }

    function createShootingStar() {
      shootingStars.push({
        x: Math.random() * width,
        y: 0,
        length: Math.random() * 80 + 50,
        speed: Math.random() * 4 + 6,
        angle: Math.PI / 4, // 45 graus
        opacity: 1
      });
    }

    function updateShootingStars() {
      for (let i = 0; i < shootingStars.length; i++) {
        const star = shootingStars[i];
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        star.opacity -= 0.01;

        if (star.opacity <= 0) {
          shootingStars.splice(i, 1);
          i--;
        }
      }
    }

    function drawShootingStar(star) {
      const xEnd = star.x + Math.cos(star.angle) * star.length;
      const yEnd = star.y + Math.sin(star.angle) * star.length;

      ctx.beginPath();
      ctx.moveTo(star.x, star.y);
      ctx.lineTo(xEnd, yEnd);
      ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity})`;
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // estrelas fixas
      for (let star of stars) {
        star.x += star.dx;
        star.y += star.dy;
        if (star.x < 0 || star.x > width) star.dx *= -1;
        if (star.y < 0 || star.y > height) star.dy *= -1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = '#f1eafa';
        ctx.fill();
      }

      // 💫 estrelas cadentes
      if (Math.random() < 0.01) {
        createShootingStar();
      }

      updateShootingStars();
      shootingStars.forEach(drawShootingStar);

      requestAnimationFrame(animate);
    }

    animate();

    // 🪐 Responsividade
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
}
