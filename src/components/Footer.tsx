import React from 'react';
import { Scissors } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        {/* Decorative elements */}
        <div className="relative">
          <div className="absolute -top-24 left-1/4 w-64 h-64 rounded-full bg-violet-600/10 blur-3xl"></div>
          <div className="absolute -top-16 right-1/4 w-48 h-48 rounded-full bg-fuchsia-500/10 blur-3xl"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          {/* Company Info */}
          <div>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <img
    src="/Artboard 8.svg"
    alt="CutCraze Logo"
    className="h-12 w-auto"
    />
</a>
            <p className="text-slate-400 mb-6">
              Professional video and photo editing services to elevate your content to the next level with AI-powered precision.
            </p>
            <div className="flex gap-4">
              <SocialIcon href="#" icon="facebook" />
              <SocialIcon href="https://www.instagram.com/cutcraze.media/profilecard/?igsh=MTkwd3JhZHZ4Y3lkNA==" icon="instagram" />
              <SocialIcon href="#" icon="twitter" />
              <SocialIcon href="https://youtube.com/@cutcrazemedia?si=p_MJOUkpLsEdcGVb" icon="youtube" />
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-cutcraze-purple to-cutcraze-blue-50 hover:opacity-90 bg-clip-text text-transparent">Services</h3>
            <ul className="space-y-3">
              <FooterLink href="#portfolio" text="AI Avatars" />
              <FooterLink href="#portfolio" text="Video Editing" />
              <FooterLink href="#portfolio" text="Color Grading" />
              <FooterLink href="#portfolio" text="Motion Graphics" />
              <FooterLink href="#portfolio" text="Creative Effects" />
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-cutcraze-purple to-cutcraze-blue-50 hover:opacity-90 bg-clip-text text-transparent">Company</h3>
            <ul className="space-y-3">
              <FooterLink href="#" text="About Us" />
              <FooterLink href="#portfolio" text="Portfolio" />
              <FooterLink href="#" text="Terms of Service" />
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-cutcraze-purple to-cutcraze-blue-50 hover:opacity-90 bg-clip-text text-transparent">Get In Touch</h3>
            <p className="text-slate-400 mb-4">
              Ready to elevate your content? Let's create something amazing together.
            </p>
            <button className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-orange-500/20 transition-all duration-300 hover:shadow-orange-500/30">

              Contact Us
            </button>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; {currentYear} CutCraze. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Reusable components for cleaner code
const SocialIcon = ({ href, icon }) => {
  const icons = {
    facebook: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
    instagram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    ),
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
    youtube: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
      </svg>
    ),
  };

  return (
    <a 
      href={href} 
      className="bg-slate-800 text-slate-400 p-2 rounded-lg hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-400 hover:text-white transition-all duration-300
"
      target="_blank" 
      rel="noopener noreferrer"
    >
      {icons[icon]}
    </a>
  );
};

const FooterLink = ({ href, text }) => (
  <li>
    <a 
      href={href} 
      className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
    >
      <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
      {text}
    </a>
  </li>
);

export default Footer;