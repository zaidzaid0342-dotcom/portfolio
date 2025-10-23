import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import profile from "../assets/pic.jpeg"

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'about', label: 'About', icon: 'user' },
    { id: 'skills', label: 'Skills', icon: 'settings' },
    { id: 'projects', label: 'Projects', icon: 'folder' },
    { id: 'contact', label: 'Contact', icon: 'mail' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-gray-900/98 backdrop-blur-lg py-3 shadow-xl border-b border-gray-800/50' : 'bg-transparent py-6'}`}>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="flex items-center">
          <div className="mr-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center shadow-lg shadow-teal-500/20">
              {/* <span className="text-gray-900 font-bold text-xl">MZ</span> */}
               <img 
              src={profile} 
              alt="Mohammed Zaid - Full Stack Developer" 
              // Using object-contain for placeholder, but object-cover for a real photo
              className="relative w-full h-full rounded-full object-cover shadow-2xl shadow-gray-900 ring-4 ring-gray-800/80 transition duration-500" 
            />
            </div>
          </div>
          <div>
            <div className="text-white font-bold text-2xl tracking-tight">Mohammed Zaid</div>
            <div className="text-teal-400 text-xs font-medium tracking-wider">FULL STACK DEVELOPER</div>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth
              duration={500}
              className={`relative px-5 py-2.5 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
                activeSection === item.id 
                  ? 'text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></span>
              )}
            </Link>
          ))}
          
          <div className="ml-4 pl-4 border-l border-gray-700">
            <a 
              href="mailto:zaidzaid0342@gmail.com" 
              className="relative px-5 py-2.5 bg-gradient-to-r from-teal-500 to-blue-500 text-gray-900 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30 overflow-hidden group cursor-pointer"
            >
              <span className="relative z-10">Hire Me</span>
              <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300 p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-300 cursor-pointer" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <i data-lucide={mobileMenuOpen ? "x" : "menu"} className="w-6 h-6" />
        </button>
      </nav>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-gray-900/98 backdrop-blur-lg border-b border-gray-800/50 transition-all duration-500 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth
              duration={500}
              className={`flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
                activeSection === item.id 
                  ? 'text-white bg-teal-500/10 border-l-4 border-teal-400' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
              }`}
              onClick={closeMobileMenu}
            >
              <span className="mr-3">
                <i data-lucide={item.icon} className="w-5 h-5" />
              </span>
              {item.label}
            </Link>
          ))}
          
          <a 
            href="mailto:zaidzaid0342@gmail.com" 
            className="mt-4 px-4 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-gray-900 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30 flex items-center justify-center cursor-pointer"
          >
            <i data-lucide="briefcase" className="w-5 h-5 mr-2" />
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}