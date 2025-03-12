
import { useEffect, useRef, useState } from 'react';

// Define the VANTA global for TypeScript
declare global {
  interface Window {
    VANTA: {
      CLOUDS2: (options: any) => any;
    };
  }
}

const VantaBackground = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current && window.VANTA) {
      vantaEffect.current = window.VANTA.CLOUDS2({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        backgroundColor: 0x1A1F2C, // dark charcoal background
        skyColor: 0x6E59A5, // purple tint
        cloudColor: 0x33C3F0, // teal tint
        speed: 1.40 + (mousePosition.x * 0.8), // Dynamic speed based on mouse position
        cloudShadowColor: 0x000000,
        sunColor: 0xff9919,
        sunGlareColor: 0xff6633,
        sunlightColor: 0xff9933,
      });
    }

    // Update vanta effect when mouse position changes
    if (vantaEffect.current) {
      vantaEffect.current.options.speed = 1.40 + (mousePosition.x * 0.8);
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, [mousePosition]);

  return (
    <div 
      id="vanta-background" 
      ref={vantaRef} 
      className="absolute inset-0 z-0 opacity-80"
    />
  );
};

export default VantaBackground;
