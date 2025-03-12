
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import PricingSection from '@/components/PricingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import VantaBackground from '@/components/VantaBackground';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate content loading
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <VantaBackground />
      <FloatingElements />
      <Navbar />
      <Hero />
      
      {/* Before/After Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">See the Difference</h2>
          <p className="section-subtitle text-center">
            Drag the slider to reveal how our editing transforms ordinary content into extraordinary visuals
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <BeforeAfterSlider 
              beforeImage="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900&q=80" 
              afterImage="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900&q=80" 
            />
            <BeforeAfterSlider 
              beforeImage="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900&q=80" 
              afterImage="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900&q=80" 
            />
          </div>
        </div>
      </section>
      
      <ServicesGrid />
      
      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Our Portfolio</h2>
          <p className="section-subtitle text-center">
            Browse through our latest work and see how we've helped clients achieve their creative vision
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item}
                className="group relative overflow-hidden rounded-xl shadow-lg aspect-video cursor-pointer"
              >
                <img 
                  src={`https://source.unsplash.com/random/600x400?film,edit&sig=${item}`} 
                  alt={`Portfolio item ${item}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">Project {item}</h3>
                  <p className="text-gray-200">Video Editing & Color Grading</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="#contact" className="btn-primary inline-block">View More Projects</a>
          </div>
        </div>
      </section>
      
      <TestimonialsCarousel />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
