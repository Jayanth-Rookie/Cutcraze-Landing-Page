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
  
  // Colors based on the new palette
  // Primary: #6D28D9 (deep purple)
  // Secondary: #D946EF (fuchsia)
  // Accent: #22D3EE (cyan)
  
  // Adjust hue based on scroll position
  const primaryHue = 270 + scrollPosition * 10; // Purple (primary)
  const secondaryHue = 302 + scrollPosition * 15; // Fuchsia (secondary)
  const accentHue = 187 + scrollPosition * 5; // Cyan (accent)
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Primary color orb (deep purple) */}
      <div
        className="absolute -left-1/3 -top-1/3 w-[60vw] h-[60vw] rounded-full blur-[180px] opacity-25 animate-float"
        style={{
          background: `radial-gradient(circle, hsl(${primaryHue}, 80%, 50%) 0%, transparent 90%)`,
          transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
          transition: 'transform 0.25s ease-out'
        }}
      />
      
      {/* Secondary color orb (fuchsia) */}
      <div
        className="absolute left-2/3 top-1/3 w-[40vw] h-[40vw] rounded-full blur-[150px] opacity-20 animate-float [animation-delay:1.5s]"
        style={{
          background: `radial-gradient(circle, hsl(${secondaryHue}, 85%, 60%) 0%, transparent 85%)`,
          transform: `translate(${-mousePosition.x * 20}px, ${mousePosition.y * 10}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />
      
      {/* Accent color orb (cyan) */}
      <div
        className="absolute -right-1/3 -bottom-1/3 w-[50vw] h-[50vw] rounded-full blur-[160px] opacity-25 animate-float [animation-delay:1s]"
        style={{
          background: `radial-gradient(circle, hsl(${accentHue}, 85%, 55%) 0%, transparent 80%)`,
          transform: `translate(${-mousePosition.x * 15}px, ${-mousePosition.y * 15}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />
      
      {/* Background gradient with softer shifts using the color palette */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(circle at ${gradientX}% ${gradientY}%,
            rgba(34, 211, 238, 0.2) 10%, /* accent */
            rgba(217, 70, 239, 0.2) 40%, /* secondary */
            rgba(109, 40, 217, 0.25) 70%, /* primary */
            rgba(15, 23, 42, 0.3) 100%) /* dark */`,
          transition: 'background 0.6s ease-out'
        }}
      />
    </div>
  );
};

export default DynamicBackground;