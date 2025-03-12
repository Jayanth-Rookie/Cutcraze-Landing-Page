
import { useEffect, useRef } from 'react';

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
        speed: 1.40
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <div 
      id="vanta-background" 
      ref={vantaRef} 
      className="absolute inset-0 z-0 opacity-70"
    />
  );
};

export default VantaBackground;
