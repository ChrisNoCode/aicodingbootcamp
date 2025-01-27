import { useEffect, useRef } from 'react';

interface Blur {
  x: number;
  y: number;
  rotation: number;
  scale: number;
}

export function FloatingBlurs() {
  const blur1Ref = useRef<HTMLDivElement>(null);
  const blur2Ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const positionRef = useRef<{ blur1: Blur; blur2: Blur }>({
    blur1: { x: -20, y: 30, rotation: 0, scale: 1 },
    blur2: { x: 20, y: -30, rotation: 45, scale: 0.8 }
  });

  useEffect(() => {
    const startTime = performance.now();
    let lastTime = startTime;
    const FRAME_RATE = 1000 / 24; // Limit to 24 FPS for better performance

    const getScrollProgress = () => {
      if (!sectionRef.current) return { start: 0, end: 0 };
      
      const sectionBounds = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Start appearing earlier (200px before entering viewport)
      const startProgress = Math.max(0, Math.min(1,
        1 - (sectionBounds.top - 200) / (viewportHeight * 0.5)
      ));
      
      // Find the curriculum section for end fade out
      const curriculumSection = document.querySelector('.curriculum-section');
      const endProgress = curriculumSection ? Math.max(0, Math.min(1,
        1 - (curriculumSection.getBoundingClientRect().top - viewportHeight * 0.5) / (viewportHeight * 0.5)
      )) : 0;
      
      return { start: startProgress, end: endProgress };
    };

    const handleScroll = () => {
      if (!blur1Ref.current || !blur2Ref.current || !sectionRef.current) return;

      const { start, end } = getScrollProgress();

      // Calculate opacity based on both start and end progress
      const opacity = Math.max(0, Math.min(0.3, start * 0.3 * (1 - end)));
      blur1Ref.current.style.opacity = opacity.toString();
      blur2Ref.current.style.opacity = opacity.toString();

      // Move down based on scroll
      const translateY = start * 150;
      blur1Ref.current.style.transform = `translateY(${translateY}px)`;
      blur2Ref.current.style.transform = `translateY(${translateY}px)`;
    };

    const animate = () => {
      const currentTime = performance.now();
      const deltaTime = currentTime - lastTime;
      
      // Throttle animation frame rate
      if (deltaTime < FRAME_RATE) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      
      lastTime = currentTime;
      const elapsed = (currentTime - startTime) / 1000;

      if (!blur1Ref.current || !blur2Ref.current) return;

      // Update positions using sine waves for smooth, random-looking motion
      positionRef.current.blur1 = {
        x: -20 + Math.sin(elapsed * 0.5) * 10,
        y: 30 + Math.cos(elapsed * 0.3) * 15,
        rotation: Math.sin(elapsed * 0.2) * 15,
        scale: 1 + Math.sin(elapsed * 0.4) * 0.1
      };

      positionRef.current.blur2 = {
        x: 20 + Math.cos(elapsed * 0.4) * 15,
        y: -30 + Math.sin(elapsed * 0.6) * 10,
        rotation: 45 + Math.cos(elapsed * 0.3) * 20,
        scale: 0.8 + Math.cos(elapsed * 0.5) * 0.1
      };

      // Apply transforms while preserving scroll-based translation
      const currentTranslateY = blur1Ref.current.style.transform.match(/translateY\(([^)]+)\)/)?.[1] || '0px';
      
      const { x: x1, y: y1, rotation: rot1, scale: scale1 } = positionRef.current.blur1;
      blur1Ref.current.style.transform = 
        `translate(${x1}%, ${y1}%) rotate(${rot1}deg) scale(${scale1}) translateY(${currentTranslateY})`;

      const { x: x2, y: y2, rotation: rot2, scale: scale2 } = positionRef.current.blur2;
      blur2Ref.current.style.transform = 
        `translate(${x2}%, ${y2}%) rotate(${rot2}deg) scale(${scale2}) translateY(${currentTranslateY})`;

      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', handleScroll);
    animate();
    handleScroll(); // Initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="absolute inset-0 overflow-hidden">
      <div
        ref={blur1Ref}
        className="absolute w-[400px] h-[400px] bg-gradient-to-r from-[#9D4EDD] via-[#FF69B4] to-[#FF7F50] blur-[80px] rounded-[100px] opacity-0 pointer-events-none"
        style={{
          left: '20%',
          top: '10%',
          transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
          animation: 'blur-appear 1s ease-out',
        }}
      />
      <div
        ref={blur2Ref}
        className="absolute w-[300px] h-[300px] bg-gradient-to-r from-[#FF7F50] via-[#FF69B4] to-[#9D4EDD] blur-[60px] rounded-[80px] opacity-0 pointer-events-none"
        style={{
          right: '20%',
          top: '20%',
          transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
          animation: 'blur-appear 1s ease-out 0.2s',
        }}
      />
    </div>
  );
}

// Add the appear animation to the global styles
const style = document.createElement('style');
style.textContent = `
  @keyframes blur-appear {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 0.3;
    }
  }
`;
document.head.appendChild(style);