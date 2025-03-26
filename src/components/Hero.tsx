import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, Video, Edit, PenTool, ImageIcon } from 'lucide-react';
import VantaBackground from './VantaBackground';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen">
      <VantaBackground />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video or Animation (Placeholder with gradient) */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-hero-pattern"></div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            <span className="text-cutcraze-purple font-semibold">
            Revolutionizing Video
              </span>{" "}
              with AI-Powered Avatars
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl text-balance">
            "We at CutCraze, use AI to craft stunning videos, graphics, and designs—helping bring your creative vision to life with style, precision, and a touch of magic."
            </p>
            
            <Button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-cutcraze-purple to-cutcraze-blue hover:opacity-90 transition-opacity text-white px-8 py-6 text-lg rounded-full"
            >
              Contact Us
            </Button>
            
            {/* Glassmorphic Service Cards */}
            <div className="mt-16 w-full">
              <div className="glass p-6 md:p-8 animate-float">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cutcraze-purple/20 mb-3">
                      <Video size={20} className="text-cutcraze-purple" />
                    </div>
                    <h3 className="text-sm md:text-base font-medium">AI Avatar Videos</h3>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cutcraze-blue/20 mb-3">
                      <Edit size={20} className="text-cutcraze-blue" />
                    </div>
                    <h3 className="text-sm md:text-base font-medium">Video Editing</h3>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cutcraze-purple/20 mb-3">
                      <PenTool size={20} className="text-cutcraze-purple" />
                    </div>
                    <h3 className="text-sm md:text-base font-medium">Graphic Animation</h3>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cutcraze-blue/20 mb-3">
                      <ImageIcon size={20} className="text-cutcraze-blue" />
                    </div>
                    <h3 className="text-sm md:text-base font-medium">Poster Design</h3>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown size={32} className="text-foreground/60" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
