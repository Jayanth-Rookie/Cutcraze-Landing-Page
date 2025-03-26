
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
  {/* Gradient orbs that follow the mouse smoothly */}
  <div 
    className="absolute -left-1/3 -top-1/3 w-[60vw] h-[60vw] rounded-full blur-[180px] opacity-25 animate-float"
    style={{ 
      background: `radial-gradient(circle, hsl(${purpleHue}, 80%, 65%) 0%, transparent 90%)`,
      transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
      transition: 'transform 0.25s ease-out'
    }}
  />
  
  <div 
    className="absolute -right-1/3 -bottom-1/3 w-[60vw] h-[60vw] rounded-full blur-[180px] opacity-25 animate-float [animation-delay:1s]"
    style={{ 
      background: `radial-gradient(circle, hsl(${tealHue}, 85%, 65%) 0%, transparent 80%)`,
      transform: `translate(${-mousePosition.x * 15}px, ${-mousePosition.y * 15}px)`,
      transition: 'transform 0.3s ease-out'
    }}
  />

  {/* Background gradient with softer shifts */}
  <div 
    className="absolute inset-0 opacity-50"
    style={{
      background: `radial-gradient(circle at ${gradientX}% ${gradientY}%, 
        rgba(51, 195, 240, 0.2) 10%, 
        rgba(110, 89, 165, 0.25) 50%, 
        rgba(26, 31, 44, 0.3) 100%)`,
      transition: 'background 0.6s ease-out'
    }}
  />
</div>

  );
};

export default DynamicBackground;
