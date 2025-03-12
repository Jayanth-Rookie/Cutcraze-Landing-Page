
import { useEffect, useState } from 'react';
import { Sparkles, Atom, Waves } from 'lucide-react';

const AnimatedParticles = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top layer particles with parallax effect */}
      <div 
        className="absolute inset-0"
        style={{ 
          transform: `translateY(${scrollY * 0.2}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        {/* Dynamic particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`particle-a-${i}`}
            className="absolute animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.4 + (Math.random() * 0.3),
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          >
            <Sparkles 
              className="text-cutcraze-teal" 
              size={10 + Math.random() * 15}
              strokeWidth={1}
            />
          </div>
        ))}
      </div>

      {/* Middle layer particles with different parallax effect */}
      <div 
        className="absolute inset-0"
        style={{ 
          transform: `translateY(${scrollY * 0.1}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={`particle-b-${i}`}
            className="absolute animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3 + (Math.random() * 0.4),
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 7}s`,
            }}
          >
            <Atom 
              className="text-cutcraze-purple" 
              size={15 + Math.random() * 20}
              strokeWidth={1}
            />
          </div>
        ))}
      </div>

      {/* Bottom waves with subtle movement */}
      <div className="absolute bottom-0 left-0 right-0 h-48 opacity-10">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={`wave-${i}`}
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: `${20 + i * 15}%`,
              animation: `wave ${8 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
              opacity: 0.3 - (i * 0.05),
            }}
          >
            <Waves 
              className="text-cutcraze-light-purple w-full h-full" 
              strokeWidth={1}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedParticles;
