import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to make navbar more solid
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'];

  const handleNavClick = (e, link) => {
    e.preventDefault();
    if (link === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const target = document.querySelector(`#${link.toLowerCase()}`);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHireMe = (e) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isOpen 
          ? 'bg-black/95 border-b border-white/10 py-4 backdrop-blur-md shadow-2xl'
          : isScrolled 
            ? 'bg-black/85 backdrop-blur-md border-b border-white/10 py-4 shadow-lg' 
            : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Left Side: Logo/Name */}
        <div className="flex items-center">
          <a href="#" className="text-white text-2xl font-black tracking-tight whitespace-nowrap">
            {personalInfo.brandName}<span className="text-red-500">.</span>
          </a>
        </div>

        {/* Center: Desktop Menu Links */}
        <div className="hidden md:flex items-center space-x-5 lg:space-x-8 text-sm lg:text-base">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={link === 'Home' ? '#' : `#${link.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, link)}
              className="text-white/80 hover:text-white font-medium relative group transition-colors duration-300 cursor-pointer whitespace-nowrap"
            >
              {link}
              {/* Smooth hover underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="hidden md:block shrink-0">
          <a 
            href="#contact"
            onClick={handleHireMe}
            className="px-5 lg:px-6 py-2 lg:py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 backdrop-blur-md cursor-pointer whitespace-nowrap text-sm lg:text-base inline-block"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 py-4 opacity-100 bg-black/95 border-b border-white/10 shadow-2xl backdrop-blur-md' : 'max-h-0 opacity-0 bg-transparent'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={link === 'Home' ? '#' : `#${link.toLowerCase()}`}
              onClick={(e) => { handleNavClick(e, link); setIsOpen(false); }}
              className="text-white font-bold text-lg border-b border-white/20 pb-2 transition-colors cursor-pointer hover:text-[#52dec5]"
            >
              {link}
            </a>
          ))}
          <div className="pt-4 pb-2">
             <a 
               href="#contact"
               onClick={(e) => { handleHireMe(e); setIsOpen(false); }} 
               className="inline-block px-6 py-3 rounded-full bg-white text-[#187e71] font-black hover:bg-[#52dec5] hover:text-[#0b1220] transition-colors w-full text-center shadow-lg cursor-pointer"
             >
               Hire Me
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
