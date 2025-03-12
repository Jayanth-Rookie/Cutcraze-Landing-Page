
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Filmmaker",
    content: "CutCraze transformed my documentary footage into a cinematic masterpiece. Their attention to detail and creative vision exceeded all my expectations.",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    name: "David Chen",
    role: "YouTuber",
    content: "Working with CutCraze has been a game-changer for my channel. The quality of edits and quick turnaround time have helped me grow my audience significantly.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Emma Williams",
    role: "Wedding Photographer",
    content: "I was blown away by how CutCraze enhanced my wedding photos. They preserved the emotion of each moment while adding a magical touch to the entire collection.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Michael Rodriguez",
    role: "Marketing Director",
    content: "Our product videos have never looked better. CutCraze brought a level of polish and professionalism that has significantly improved our conversion rates.",
    avatar: "https://randomuser.me/api/portraits/men/59.jpg"
  }
];

const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextSlide = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay, activeIndex]);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-r from-cutcraze-purple/5 to-cutcraze-teal/5">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">What Our Clients Say</h2>
        
        <div 
          className="relative max-w-4xl mx-auto mt-16 px-4"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          {/* Testimonial Card */}
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-cutcraze-purple text-white rounded-full p-3">
              <Quote className="w-6 h-6" />
            </div>
            
            <div className="text-center">
              <p className="text-lg md:text-xl mb-8 italic text-gray-700">{testimonials[activeIndex].content}</p>
              
              <div className="flex items-center justify-center mt-6">
                <img 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].name} 
                  className="w-16 h-16 rounded-full object-cover border-4 border-cutcraze-purple/20"
                />
                <div className="ml-4 text-left">
                  <p className="font-bold text-lg">{testimonials[activeIndex].name}</p>
                  <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevSlide}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-cutcraze-purple" />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex ? 'bg-cutcraze-purple scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-cutcraze-purple" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
