import { useEffect } from 'react';

export function useScrollAnimation() {
  useEffect(() => {
    const handleScroll = () => {
      // Removed previous blur animation code since we're using FloatingBlurs component
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}