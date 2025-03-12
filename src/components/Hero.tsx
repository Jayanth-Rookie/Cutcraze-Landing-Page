import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-cutcraze-dark-charcoal">
      {/* Video Background - we're keeping this but at reduced opacity */}
      <div className="absolute inset-0 z-0">
        <video 
          className="w-full h-full object-cover opacity-20" 
          autoPlay 
          muted 
          loop
          playsInline
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-editing-a-video-in-a-studio-23493-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div className="mb-6 font-['Poppins'] animate-fade-in-up [animation-delay:0.2s] opacity-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
              <span className="block">Sculpting</span>
              <span className="text-cutcraze-teal">Visual</span>
              <span className="relative inline-block">
                <span className="text-cutcraze-light-purple">Magic</span>
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-cutcraze-teal" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,0 L100,5 L0,10" fill="currentColor" />
                </svg>
              </span>
            </h1>
            <p className="text-sm uppercase tracking-widest mt-3 text-white/60 font-light">where your footage transforms into art</p>
          </div>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in-up [animation-delay:0.4s] opacity-0 font-['Poppins'] font-light leading-relaxed">
            Professional video and photo editing services that elevate your content. 
            Stand out with cinema-quality edits tailored to your creative needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:0.6s] opacity-0">
            <a href="#contact" className="btn-primary flex items-center justify-center gap-2 text-lg">
              Get Started <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#portfolio" className="btn-secondary flex items-center justify-center gap-2 text-lg">
              View Our Work
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
