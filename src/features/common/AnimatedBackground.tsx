'use client';

import { useEffect, useRef } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedBackground({ children, className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      const container = canvas.parentElement;
      if (!container) return;

      // Get the actual rendered height of the container
      const containerRect = container.getBoundingClientRect();
      canvas.width = containerRect.width;
      canvas.height = containerRect.height;
    };
    updateSize();
    window.addEventListener('resize', updateSize);

    // Create gradient circles
    const circles = Array.from({ length: 4 }, (_, index) => {
      // Calculate a consistent radius based on the viewport width
      const baseSize = Math.min(window.innerWidth * (window.innerWidth >= 768 ? 0.25 : 0.3), 300);

      // If it's the last circle (index 3), position it in bottom left corner with no movement
      if (index === 3) {
        return {
          x: baseSize * 0.2, // Half radius from left edge
          y: canvas.height - baseSize * 0.1, // Half radius from bottom edge
          radius: baseSize * 0.9,
          dx: 0, // No movement
          dy: 0, // No movement
        };
      }

      const radiusMultiplier = index === 0 ? 1 : index === 1 ? 0.8 : 0.9;
      const radius = baseSize * radiusMultiplier;

      return {
        x: canvas.width * 0.5 + (Math.random() - 0.5) * canvas.width * (index === 0 ? 0.1 : 0.3),
        y: canvas.height * 0.5 + (Math.random() - 0.5) * canvas.height * (index === 0 ? 0.1 : 0.3),
        radius,
        dx: (Math.random() - 0.5) * (index === 0 ? 0.5 : 1.2),
        dy: (Math.random() - 0.5) * (index === 0 ? 0.5 : 1.2),
      };
    });

    // Animation function
    function animate() {
      if (!ctx || !canvas) return null;
      // Clear canvas
      ctx.fillStyle = '#0a0a1f';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set blend mode for overlapping circles
      ctx.globalCompositeOperation = 'screen';

      // Draw and update circles
      circles.forEach((circle, index) => {
        // Create gradient
        const gradient = ctx.createRadialGradient(circle.x, circle.y, 0, circle.x, circle.y, circle.radius);
        if (index === 0) {
          gradient.addColorStop(0, 'rgba(236, 129, 28, 0.8)');
          gradient.addColorStop(0.2, 'rgba(236, 129, 28, 0.8)');
          gradient.addColorStop(0.6, 'rgba(236, 129, 28, 0.5)');
          gradient.addColorStop(1, 'rgba(236, 129, 28, 0)');
        } else if (index === 1) {
          gradient.addColorStop(0, 'rgba(141, 50, 56, 0.8)');
          gradient.addColorStop(0.2, 'rgba(141, 50, 56, 0.8)');
          gradient.addColorStop(0.6, 'rgba(141, 50, 56, 0.5)');
          gradient.addColorStop(1, 'rgba(141, 50, 56, 0)');
        } else if (index === 2) {
          gradient.addColorStop(0, 'rgba(134, 81, 50, 0.8)');
          gradient.addColorStop(0.2, 'rgba(134, 81, 50, 0.8)');
          gradient.addColorStop(0.6, 'rgba(134, 81, 50, 0.5)');
          gradient.addColorStop(1, 'rgba(134, 81, 50, 0)');
        } else {
          gradient.addColorStop(0, 'rgba(0, 8, 97, 0.8)');
          gradient.addColorStop(0.2, 'rgba(0, 8, 97, 0.8)');
          gradient.addColorStop(0.6, 'rgba(0, 8, 97, 0.5)');
          gradient.addColorStop(1, 'rgba(0, 8, 97, 0)');
        }

        // Draw circle
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fill();

        // Update position
        circle.x += circle.dx;
        circle.y += circle.dy;

        // Bounce off walls with padding
        const padding = circle.radius * 0.5;
        if (circle.x - padding < 0 || circle.x + padding > canvas.width) circle.dx *= -1;
        if (circle.y - padding < 0 || circle.y + padding > canvas.height) circle.dy *= -1;
      });

      // Reset composite operation
      ctx.globalCompositeOperation = 'source-over';

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return (
    <div className={`relative w-full overflow-hidden bg-gradient-to-br from-[#06031f] to-[#01001e] ${className ?? 'h-[65vh] md:h-[40vh]'}`}>
      <canvas
        ref={canvasRef}
        className='absolute inset-0 h-full w-full'
      />
      {children}
    </div>
  );
}
