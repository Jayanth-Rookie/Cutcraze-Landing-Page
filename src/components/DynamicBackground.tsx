
import { useEffect, useState } from 'react';

const DynamicBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    const handleScroll = () => {
      setScrollPosition(window.scrollY / (document.body.scrollHeight - window.innerHeight));
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Calculate dynamic gradient position based on mouse
  const gradientX = 50 + (mousePosition.x - 0.5) * 30;
  const gradientY = 50 + (mousePosition.y - 0.5) * 30;
  
  // Change colors based on scroll position
  const purpleHue = 262 + scrollPosition * 20;
  const tealHue = 180 + scrollPosition * 15;
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Gradient orbs that follow mouse */}
      <div 
        className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 rounded-full blur-[150px] opacity-20 animate-float"
        style={{ 
          background: `radial-gradient(circle, hsl(${purpleHue}, 70%, 60%) 0%, transparent 70%)`,
          transform: `translate(${mousePosition.x * 20}%, ${mousePosition.y * 20}%)`,
          transition: 'transform 0.3s ease-out'
        }}
      />
      
      <div 
        className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 rounded-full blur-[150px] opacity-20 animate-float [animation-delay:1s]"
        style={{ 
          background: `radial-gradient(circle, hsl(${tealHue}, 70%, 60%) 0%, transparent 70%)`,
          transform: `translate(${-mousePosition.x * 20}%, ${-mousePosition.y * 20}%)`,
          transition: 'transform 0.5s ease-out'
        }}
      />
      
      {/* Background gradient that subtly shifts */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(51, 195, 240, 0.15) 0%, rgba(110, 89, 165, 0.15) 50%, rgba(26, 31, 44, 0.2) 100%)`,
          transition: 'background 0.5s ease-out'
        }}
      />
    </div>
  );
};

export default DynamicBackground;
