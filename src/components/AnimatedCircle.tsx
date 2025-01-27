import { useEffect, useRef } from 'react';

export function AnimatedCircle() {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!circleRef.current) return;
      
      const startPos = 0;
      const endPos = window.innerHeight * 1.2;
      const scrollPos = window.scrollY;
      
      if (scrollPos <= endPos) {
        const progress = Math.min(1, Math.max(0, scrollPos / endPos));
        const opacity = Math.max(0, 1 - progress);
        circleRef.current.style.opacity = opacity.toString();
        circleRef.current.style.transform = `translate(-50%, ${progress * 100}px)`;
      } else {
        circleRef.current.style.opacity = '0';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={circleRef}
      className="fixed left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-blue-600/30 blur-[120px] pointer-events-none"
      style={{
        top: '50%',
        zIndex: 1,
      }}
    />
  );
}