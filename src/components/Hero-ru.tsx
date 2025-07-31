import React from 'react';
import { MessageCircle, ArrowDown, Instagram } from 'lucide-react';

/**
 * Hero Component - Russian Version
 * Bold, masculine hero section with premium automotive styling
 */
export const HeroRu: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Здравствуйте, меня интересуют автозапчасти C.A.P.");
    window.open(`https://wa.me/971561747182?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Dark Automotive Background */}
      <div className="absolute inset-0">
        {/* Motor Oil Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Фон с моторным маслом"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        
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

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white mb-8 leading-tight tracking-tight animate-fade-in">
          <span className="block text-blue-500 text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-widest animate-slide-up">
            C.A.P
          </span>
          <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-slide-left">
            СОЗДАНО ДЛЯ ПРОИЗВОДИТЕЛЬНОСТИ
          </span>
        </h1>

        {/* Tagline */}
        <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mb-8 font-bold tracking-wide animate-slide-right">
          ПОСТРОЕНО НА ВЕКА
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-medium animate-fade-in" style={{ animationDelay: '0.5s' }}>
          Премиальные моторные масла, высокопроизводительные фильтры и основные автозапчасти. 
          Когда качество имеет значение, профессионалы выбирают C.A.P для превосходной производительности и надежности.
        </p>

        {/* CTA Buttons */}
        <div className="mb-16"></div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" style={{ animationDelay: '1s' }}>
          <ArrowDown className="h-8 w-8 text-blue-400" />
        </div>
      </div>
    </section>
  );
};