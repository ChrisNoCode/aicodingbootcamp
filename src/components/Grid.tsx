import { useEffect, useRef } from 'react';

interface GridProps {
  opacity?: number;
  height?: string;
  fadeStart?: number;
  fadeEnd?: number;
}

export function Grid({ opacity = 0.6, height = '100%', fadeStart = 0.05, fadeEnd = 0.15 }: GridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const drawGrid = () => {
      if (!canvas || !ctx) return;

      // Reduce number of grid lines for better performance
      const perspective = {
        vanishingPointY: canvas.offsetHeight * 0.5,
        spacing: {
          start: 40,
          end: 10
        }
      };

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const rows = 15;
      const cols = Math.ceil(canvas.offsetWidth / perspective.spacing.start);

      // Subtle pulse animation
      const time = performance.now() / 4000;
      const pulse = Math.sin(time) * 0.15 + 0.85;

      // Enhanced gradient fade for depth
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.offsetHeight);
      gradient.addColorStop(0, `rgba(160, 160, 160, ${0.8 * pulse})`);
      gradient.addColorStop(0.05, `rgba(160, 160, 160, ${0.6 * pulse})`);
      gradient.addColorStop(0.15, `rgba(160, 160, 160, ${0.3 * pulse})`);
      gradient.addColorStop(0.3, `rgba(160, 160, 160, ${0.1 * pulse})`);
      gradient.addColorStop(1, 'rgba(160, 160, 160, 0)');

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 0.5;

      // Draw vertical lines with perspective
      for (let x = 0; x <= cols; x++) {
        const xPos = x * perspective.spacing.start;
        ctx.beginPath();
        ctx.moveTo(xPos, 0);
        const endX = xPos * 0.7; // Converge lines towards center
        ctx.lineTo(endX + (canvas.offsetWidth * 0.15), canvas.offsetHeight);
        ctx.stroke();
      }

      // Draw horizontal lines with perspective
      for (let y = 0; y <= rows; y++) {
        const progress = y / rows;
        const yPos = y * (canvas.offsetHeight / rows);
        
        // Calculate spacing that gets smaller as lines go down
        const currentSpacing = perspective.spacing.start * (1 - (progress * 0.7));
        
        ctx.beginPath();
        ctx.moveTo(0, yPos);
        ctx.lineTo(canvas.offsetWidth, yPos);
        ctx.stroke();

        // Add perspective dots at intersections
        for (let x = 0; x <= cols; x++) {
          const xPos = x * perspective.spacing.start;
          const dotSize = 1 * (1 - (progress * 0.7)) * pulse;
          
          ctx.beginPath();
          const dotX = xPos * (1 - (progress * 0.3)) + (canvas.offsetWidth * progress * 0.15);
          ctx.arc(dotX, yPos, dotSize, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      }
    };

    drawGrid();
    
    // Animate the grid
    let lastDrawTime = 0;
    const FRAME_RATE = 1000 / 30; // Limit to 30 FPS
    
    const animate = (currentTime: number) => {
      if (currentTime - lastDrawTime >= FRAME_RATE) {
        drawGrid();
        lastDrawTime = currentTime;
      }
      requestAnimationFrame(animate);
    };
    
    animate();
    window.addEventListener('resize', drawGrid);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('resize', drawGrid);
    };
  }, [fadeStart, fadeEnd]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full pointer-events-none"
      style={{ 
        height,
        opacity 
      }}
    />
  );
}