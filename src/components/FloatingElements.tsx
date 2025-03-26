
import { Scissors, Film, Video, Image } from 'lucide-react';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
  {/* Floating Scissors */}
  <div className="absolute top-[20%] left-[12%] animate-float">
    <Scissors className="w-10 h-10 text-cutcraze-purple/25" />
  </div>
  <div className="absolute bottom-[30%] right-[18%] animate-float [animation-delay:2s]">
    <Scissors className="w-12 h-12 text-cutcraze-teal/25" />
  </div>

  {/* Floating Film Elements */}
  <div className="absolute top-[35%] right-[12%] animate-float [animation-delay:1.2s]">
    <Film className="w-14 h-14 text-cutcraze-purple/25 animate-spin-slow" />
  </div>
  <div className="absolute bottom-[22%] left-[18%] animate-float [animation-delay:3.2s]">
    <Film className="w-16 h-16 text-cutcraze-teal/25 animate-spin-slow" />
  </div>

  {/* Additional Elements */}
  <div className="absolute top-[65%] left-[42%] animate-float [animation-delay:1.8s]">
    <Video className="w-12 h-12 text-cutcraze-purple/25" />
  </div>
  <div className="absolute top-[15%] right-[38%] animate-float [animation-delay:2.8s]">
    <Image className="w-14 h-14 text-cutcraze-teal/25" />
  </div>

  {/* Subtle Glow Effect */}
  <div className="absolute inset-0 opacity-50 pointer-events-none">
    <div 
      className="absolute inset-0 blur-[150px]"
      style={{
        background: `radial-gradient(circle at 50% 50%, rgba(100, 80, 160, 0.2) 0%, transparent 80%)`,
        transition: 'background 0.6s ease-out',
      }}
    />
  </div>
</div>

  );
};

export default FloatingElements;
