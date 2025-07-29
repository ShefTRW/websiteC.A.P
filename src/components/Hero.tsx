import React from 'react';
import { MessageCircle, ArrowDown, Instagram } from 'lucide-react';

/**
 * Hero Component
 * Bold, masculine hero section with premium automotive styling
 */
export const Hero: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello, I'm interested in C.A.P. auto parts.");
    window.open(`https://wa.me/971561747182?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark Automotive Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Metallic texture overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #ef4444 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, #dc2626 0%, transparent 50%),
              linear-gradient(45deg, transparent 40%, rgba(239, 68, 68, 0.1) 50%, transparent 60%)
            `,
            backgroundSize: '200px 200px, 300px 300px, 100px 100px'
          }}></div>
        </div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo Section */}
        <div className="mb-8">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-red-600/20 rounded-full blur-xl scale-110"></div>
            <img 
              src="/C.A.P logo.jpg" 
              alt="C.A.P. Common Auto Parts" 
              className="relative h-28 w-28 lg:h-36 lg:w-36 rounded-full object-cover border-4 border-red-600 shadow-2xl"
            />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white mb-8 leading-tight tracking-tight">
          <span className="block text-red-500 text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-widest">
            C.A.P.
          </span>
          <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            ENGINEERED TO PERFORM
          </span>
        </h1>

        {/* Tagline */}
        <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mb-8 font-bold tracking-wide">
          BUILT TO LAST
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
          Premium engine oils, high-performance filters, and essential auto parts. 
          When quality matters, professionals choose C.A.P. for superior performance and reliability.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button 
            onClick={handleWhatsAppClick}
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-5 rounded-lg font-black text-xl hover:from-red-700 hover:to-red-800 transition-all duration-200 transform hover:scale-105 flex items-center space-x-3 shadow-2xl border border-red-500"
          >
            <MessageCircle className="h-6 w-6" />
            <span>WHATSAPP: +971 56 174 71 82</span>
          </button>
          <a 
            href="https://www.instagram.com/commonautoparts?igsh=YWNzZjUxOXFlMTA3"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-gray-500 text-gray-300 px-10 py-5 rounded-lg font-bold text-xl hover:bg-gray-500 hover:text-black transition-all duration-200 transform hover:scale-105 flex items-center space-x-3"
          >
            <Instagram className="h-6 w-6" />
            <span>FOLLOW US</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-8 w-8 text-gray-500" />
        </div>
      </div>
    </section>
  );
};