import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

/**
 * WhatsApp CTA Component
 * Prominent call-to-action section for WhatsApp orders
 */
export const WhatsAppCTA: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello, I'm interested in C.A.P. auto parts. Please send me your catalog and pricing.");
    window.open(`https://wa.me/971561747182?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-red-600 via-red-700 to-red-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, white 2px, transparent 2px),
            radial-gradient(circle at 80% 80%, white 2px, transparent 2px)
          `,
          backgroundSize: '100px 100px, 120px 120px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 tracking-tight">
            READY TO ORDER?
          </h2>
          
          {/* Subheading */}
          <p className="text-2xl lg:text-3xl text-red-100 mb-6 font-bold">
            Contact us now on WhatsApp for instant orders and inquiries
          </p>
          
          {/* Description */}
          <p className="text-lg text-red-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Get immediate assistance, product recommendations, and competitive pricing. 
            Our experts are ready to help you find the perfect parts for your vehicle.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center">
            <button 
              onClick={handleWhatsAppClick}
              className="bg-white text-red-600 px-12 py-6 rounded-xl font-black text-xl hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 flex items-center space-x-4 shadow-2xl border-2 border-white"
            >
              <MessageCircle className="h-8 w-8" />
              <span>MESSAGE ON WHATSAPP: +971 56 174 71 82</span>
            </button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-red-100">
            <p className="text-lg font-semibold mb-2">Available 24/7 for urgent orders</p>
            <p className="text-red-200">Response time: Usually within 5 minutes</p>
          </div>
        </div>
      </div>
    </section>
  );
};