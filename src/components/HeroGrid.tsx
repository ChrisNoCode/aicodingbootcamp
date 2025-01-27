import { useEffect, useRef } from 'react';

export function HeroGrid() {
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

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cellSize = 40;
      const rows = Math.ceil(canvas.offsetHeight / cellSize);
      const cols = Math.ceil(canvas.offsetWidth / cellSize);

      // Subtle pulse animation
      const time = Date.now() / 3000; // Even slower pulse
      const pulse = Math.sin(time) * 0.15 + 0.85; // More subtle pulse

      // Create a more dramatic gradient fade
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.offsetHeight);
      gradient.addColorStop(0, `rgba(157, 78, 221, ${0.7 * pulse})`);
      gradient.addColorStop(0.05, `rgba(157, 78, 221, ${0.5 * pulse})`);
      gradient.addColorStop(0.15, `rgba(157, 78, 221, ${0.2 * pulse})`);
      gradient.addColorStop(0.3, `rgba(157, 78, 221, ${0.1 * pulse})`);
      gradient.addColorStop(1, 'rgba(157, 78, 221, 0)');
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 0.75;

      // Draw vertical lines
      for (let x = 0; x <= cols; x++) {
        ctx.beginPath();
        ctx.moveTo(x * cellSize, 0);
        ctx.lineTo(x * cellSize, canvas.offsetHeight);
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let y = 0; y <= rows; y++) {
        ctx.beginPath();
        ctx.moveTo(0, y * cellSize);
        ctx.lineTo(canvas.offsetWidth, y * cellSize);
        ctx.stroke();

        // Add subtle dots at intersections
        for (let x = 0; x <= cols; x++) {
          ctx.beginPath();
          ctx.arc(x * cellSize, y * cellSize, 1 * pulse, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      }
    };

    drawGrid();
    
    // Animate the grid
    const animate = () => { drawGrid(); requestAnimationFrame(animate); };
    animate();
    window.addEventListener('resize', drawGrid);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('resize', drawGrid);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
      style={{ height: '100vh' }}
    />
  );
}