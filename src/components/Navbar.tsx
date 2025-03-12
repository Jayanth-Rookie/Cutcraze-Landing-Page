
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Scissors } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-8",
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-2xl font-bold text-cutcraze-purple">
          <Scissors className="w-7 h-7" />
          <span>CutCraze</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          <a href="#services" className="hover:text-cutcraze-purple transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-cutcraze-purple transition-colors">Portfolio</a>
          <a href="#testimonials" className="hover:text-cutcraze-purple transition-colors">Testimonials</a>
          <a href="#pricing" className="hover:text-cutcraze-purple transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-cutcraze-purple transition-colors">Contact</a>
        </div>
        
        {/* CTA Button */}
        <a href="#contact" className="hidden md:block btn-primary">Get Started</a>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-cutcraze-dark-charcoal"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-4 flex flex-col space-y-4">
          <a href="#services" className="hover:text-cutcraze-purple transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#portfolio" className="hover:text-cutcraze-purple transition-colors" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
          <a href="#testimonials" className="hover:text-cutcraze-purple transition-colors" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
          <a href="#pricing" className="hover:text-cutcraze-purple transition-colors" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
          <a href="#contact" className="hover:text-cutcraze-purple transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <a href="#contact" className="btn-primary text-center" onClick={() => setMobileMenuOpen(false)}>Get Started</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
