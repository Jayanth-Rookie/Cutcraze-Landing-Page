
import { Scissors, Film, Video, Image } from 'lucide-react';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Scissors */}
      <div className="absolute top-1/4 left-[10%] animate-float">
        <Scissors className="w-8 h-8 text-cutcraze-purple/20" />
      </div>
      <div className="absolute bottom-1/3 right-[15%] animate-float [animation-delay:2s]">
        <Scissors className="w-10 h-10 text-cutcraze-teal/20" />
      </div>
      
      {/* Floating Film Elements */}
      <div className="absolute top-1/3 right-[10%] animate-float [animation-delay:1s]">
        <Film className="w-12 h-12 text-cutcraze-purple/20 animate-spin-slow" />
      </div>
      <div className="absolute bottom-1/4 left-[15%] animate-float [animation-delay:3s]">
        <Film className="w-14 h-14 text-cutcraze-teal/20 animate-spin-slow" />
      </div>
      
      {/* Additional Elements */}
      <div className="absolute top-2/3 left-[40%] animate-float [animation-delay:1.5s]">
        <Video className="w-10 h-10 text-cutcraze-purple/20" />
      </div>
      <div className="absolute top-1/5 right-[40%] animate-float [animation-delay:2.5s]">
        <Image className="w-12 h-12 text-cutcraze-teal/20" />
      </div>
    </div>
  );
};

export default FloatingElements;
