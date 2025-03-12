
import { Scissors, Video, Image, Bot, Sparkles, FileImage } from 'lucide-react';

const services = [
  {
    icon: <Video className="w-10 h-10 text-cutcraze-teal" />,
    title: "Video Editing",
    description: "Professional editing for any type of video content, from social media clips to cinema-quality films."
  },
  {
    icon: <Bot className="w-10 h-10 text-cutcraze-purple" />,
    title: "AI Avatar Creation",
    description: "Create lifelike AI avatars that speak and move naturally, automating both video and audio for personalized content."
  },
  {
    icon: <Sparkles className="w-10 h-10 text-cutcraze-teal" />,
    title: "Graphic Animation",
    description: "Dynamic and eye-catching graphic animations for marketing, presentations, social media, and more."
  },
  {
    icon: <FileImage className="w-10 h-10 text-cutcraze-purple" />,
    title: "Poster Making",
    description: "Professional custom poster designs for events, marketing campaigns, or personal use."
  },
  {
    icon: <Image className="w-10 h-10 text-cutcraze-teal" />,
    title: "Photo Retouching",
    description: "Expert photo enhancement, from basic corrections to advanced beauty and product retouching."
  },
  {
    icon: <Scissors className="w-10 h-10 text-cutcraze-purple" />,
    title: "Color Grading",
    description: "Enhance your footage with professional color grading to set the perfect mood and visual style."
  }
];

const ServicesGrid = () => {
  return (
    <section id="services" className="bg-cutcraze-light-gray py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Our Services</h2>
        <p className="section-subtitle text-center">
          Specialized in AI avatar creation and professional editing services to bring your creative vision to life
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-8 shadow-md card-hover"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
