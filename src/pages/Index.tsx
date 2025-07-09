// import { useEffect, useState } from 'react';
// import Navbar from '@/components/Navbar';
// import Hero from '@/components/Hero';
// import BeforeAfterSlider from '@/components/BeforeAfterSlider';
// import TestimonialsCarousel from '@/components/TestimonialsCarousel';
// import ContactSection from '@/components/ContactSection';
// import Footer from '@/components/Footer';
// import FloatingElements from '@/components/FloatingElements';
// import VantaBackground from '@/components/VantaBackground';
// import DynamicBackground from '@/components/DynamicBackground';

// const Index = () => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   useEffect(() => {
//     // Simulate content loading
//     setTimeout(() => {
//       setIsLoaded(true);
//     }, 100);

//     const handleEscape = (event) => {
//       if (event.key === 'Escape') {
//         setSelectedVideo(null);
//       }
//     };
//     window.addEventListener('keydown', handleEscape);
//     return () => {
//       window.removeEventListener('keydown', handleEscape);
//     };
//   }, []);

//   return (
//     <div className={`min-h-screen transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
//       {/* Dynamic backgrounds with layering */}
//       <DynamicBackground />
//       <VantaBackground />
//       <FloatingElements />
      
//       <Navbar />
//       <Hero />
      
//       {/* Before/After Showcase */}
//       <section className="py-20 bg-white/90 backdrop-blur-sm">
//         <div className="container mx-auto px-4">
//           <h2 className="section-title text-center">See the Difference</h2>
//           <p className="section-subtitle text-center">
//             Drag the slider to reveal how our editing transforms ordinary content into extraordinary visuals
//           </p>
          
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
//             <BeforeAfterSlider 
//               beforeImage="/before.jpeg" 
//               afterImage="/psoter done.png" 
//             />
         
//           </div>
//         </div>
//       </section>
      
//       {/* Portfolio Section */}
//       <section id="portfolio" className="py-20 bg-white/90 backdrop-blur-sm">
//         <div className="container mx-auto px-4">
//           <h2 className="section-title text-center">Our Portfolio</h2>
//           <p className="section-subtitle text-center">
//             Browse through our latest work and see how we've helped clients achieve their creative vision
//           </p>
          
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
//             {[1, 2, 3, 4].map((item) => (
//               <div
//                 key={item}
//                 className="group relative overflow-hidden rounded-xl shadow-lg aspect-[9/16] w-64 h-96 mx-auto cursor-pointer transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl"
//                 onClick={() => setSelectedVideo(`/videos/video${item}.mp4`)}
//               >
//                 <video
//                   src={`/videos/video${item}.mp4`} // Videos in public/videos folder
//                   autoPlay
//                   loop
//                   muted
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <h3 className="text-base font-bold text-white mb-1">Project {item}</h3>
//                   <p className="text-gray-200 text-sm">Vertical Video Showcase</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {selectedVideo && (
//             <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
//               <div className="relative w-full max-w-4xl">
//                 <button
//                   className="absolute top-4 right-4 text-white text-3xl cursor-pointer z-10"
//                   onClick={() => setSelectedVideo(null)} // Ensure this works
//                 >
//                   &times;
//                 </button>
//                 <video
//                   src={selectedVideo}
//                   controls
//                   autoPlay
//                   className="w-full h-auto max-h-[80vh]" // Ensure the video fits within the viewport
//                 />
//               </div>
//             </div>
//           )}
          
//           <div className="text-center mt-12">
//             <a href="#contact" className="btn-primary inline-block">View More Projects</a>
//           </div>
//         </div>
//       </section>
      
//       <ContactSection />
//       <Footer />
//     </div>
//   );
// };

// export default Index;

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import VantaBackground from '@/components/VantaBackground';
import DynamicBackground from '@/components/DynamicBackground';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // YouTube video data
  const youtubeVideos = [
    {
      id: 'Y2SkH77VMNQ',
      title: 'Creative Project 1',
      description: 'Professional Edit'
    },
    {
      id: 's3ia1qDx3RM',
      title: 'Creative Project 2',
      description: 'Short Form Content'
    },
    {
      id: 'bUCeagmx6Zw',
      title: 'Creative Project 3',
      description: 'Dynamic Editing'
    },
    {
      id: 'wKSzr9Bz3T8',
      title: 'Creative Project 4',
      description: 'Visual Storytelling'
    },
    {
      id: 'LR4jMJHDPhs',
      title: 'Creative Project 5',
      description: 'Engaging Content Creation'
    },

    {
      id: 'eiY-vmDvROM',
      title: 'Creative Project 6',
      description: 'Innovative Editing Techniques'
    }
  ];

  useEffect(() => {
    // Simulate content loading
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedVideo(null);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Dynamic backgrounds with layering */}
      <DynamicBackground />
      <VantaBackground />
      <FloatingElements />
      
      <Navbar />
      <Hero />
      
      {/* Before/After Showcase */}
      {/* <section className="py-20 bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">See the Difference</h2>
          <p className="section-subtitle text-center">
            Drag the slider to reveal how our editing transforms ordinary content into extraordinary visuals
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <BeforeAfterSlider 
              beforeImage="/before.jpeg" 
              afterImage="/psoter done.png" 
            />
         
          </div>
        </div>
      </section> */}
      
      {/* Portfolio Section - Updated with YouTube Videos */}
      <section id="portfolio" className="py-20 bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Our Portfolio</h2>
          <p className="section-subtitle text-center">
            Browse through our latest work and see how we've helped clients achieve their creative vision
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
            {youtubeVideos.map((video, index) => (
              <div
                key={video.id}
                className="group relative overflow-hidden rounded-xl shadow-lg aspect-video cursor-pointer transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl bg-white"
                onClick={() => setSelectedVideo(video)}
              >
                {/* YouTube Thumbnail */}
                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback to standard quality thumbnail if maxres fails
                    e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                  }}
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Video Info Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-base font-bold text-white mb-1 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-200 text-sm">{video.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* YouTube Video Modal */}
          {selectedVideo && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
              <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white text-xl font-bold transition-colors duration-200"
                >
                  ×
                </button>
                
                {/* YouTube Embed */}
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1&rel=0`}
                  title={selectedVideo.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}
          
          <div className="text-center mt-12">
            <a href="https://linktr.ee/cutcrazemedia" className="btn-primary inline-block">View More Projects</a>
          </div>
        </div>
      </section>
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;