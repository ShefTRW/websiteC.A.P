import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

/**
 * Header Component
 * Premium navigation with bold styling and WhatsApp CTA
 */
export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello, I'm interested in C.A.P. auto parts.");
    window.open(`https://wa.me/971561747182?text=${message}`, '_blank');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-2xl' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between h-16">
          {/* Empty space for logo positioning */}
          <div className="flex-1"></div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-red-500 font-semibold transition-all duration-300 relative group tracking-wide transform hover:scale-105"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="hidden lg:block flex-1 flex justify-end">
            <button 
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              <span>ORDER NOW</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Logo Section - Below Navigation */}
        <div className="flex items-center justify-center py-4 animate-fade-in">
          <div className="flex items-center space-x-4 transform transition-all duration-500 hover:scale-105">
            <div className="relative">
              <div className="absolute inset-0 bg-red-600/20 rounded-full blur-md"></div>
              <img 
                src="/C.A.P logo.jpg" 
                alt="C.A.P. Logo" 
                className="relative h-16 w-16 rounded-full object-cover border-2 border-red-600 shadow-xl transition-all duration-300 hover:border-red-400"
              />
            </div>
            <div>
              <h1 className="text-3xl font-black text-white tracking-tight animate-slide-left">
                C.A.P.
              </h1>
              <p className="text-sm text-gray-400 font-medium tracking-wider animate-slide-right">
                COMMON AUTO PARTS
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-gray-800 animate-slide-up">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-red-500 font-semibold py-2 transition-all duration-300 transform hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={handleWhatsAppClick}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center justify-center space-x-2 mt-4 transform hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
                <span>ORDER NOW</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};