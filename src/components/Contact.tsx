import React from 'react';
import { MessageCircle, Phone, MapPin, Clock, Mail } from 'lucide-react';

/**
 * Contact Component
 * Contact information and final CTA
 */
export const Contact: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello, I'm interested in C.A.P. auto parts.");
    window.open(`https://wa.me/971561747182?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:commonautoparts.uae@gmail.com', '_self');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight">
              GET IN <span className="text-red-500">TOUCH</span>
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 font-medium">
              Ready to upgrade your vehicle's performance? Contact us now for expert advice and competitive pricing.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* WhatsApp */}
            <div 
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
            >
              <div className="bg-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:bg-green-500 transition-colors duration-300">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                WhatsApp Orders
              </h3>
              <p className="text-gray-400 mb-4">
                Instant messaging for quick orders and inquiries
              </p>
              <p className="text-green-400 font-semibold">
                +1 (234) 567-8900
              </p>
            </div>

            {/* Email */}
            <div 
              onClick={handleEmailClick}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
            >
              <div className="bg-red-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:bg-red-500 transition-colors duration-300">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                Email Us
              </h3>
              <p className="text-gray-400 mb-4">
                Send us your requirements and inquiries
              </p>
              <p className="text-red-400 font-semibold">
                commonautoparts.uae@gmail.com
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-center justify-center space-x-4 text-gray-400">
              <MapPin className="h-6 w-6 text-red-500" />
              <span className="font-medium">Dubai, United Arab Emirates</span>
            </div>
            <div className="flex items-center justify-center space-x-4 text-gray-400">
              <Clock className="h-6 w-6 text-red-500" />
              <span className="font-medium">Available 24/7 for urgent orders</span>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl lg:text-4xl font-black text-white mb-6">
              EXPERIENCE THE C.A.P. DIFFERENCE
            </h3>
            <p className="text-xl text-red-100 mb-8 font-medium">
              Join thousands of satisfied customers who trust C.A.P. for their automotive needs
            </p>
            <button 
              onClick={handleWhatsAppClick}
              className="bg-white text-red-600 px-12 py-6 rounded-xl font-black text-xl hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 flex items-center space-x-4 mx-auto shadow-2xl"
            >
              <MessageCircle className="h-8 w-8" />
              <span>START YOUR ORDER NOW: +971 56 174 71 82</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <img 
              src="/C.A.P logo.jpg" 
              alt="C.A.P. Logo" 
              className="h-10 w-10 rounded-full object-cover border border-red-600"
            />
            <div>
              <h4 className="text-xl font-bold text-white">C.A.P.</h4>
              <p className="text-sm text-gray-400">Common Auto Parts</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 Common Auto Parts. All rights reserved. | Engineered to Perform. Built to Last.
          </p>
        </div>
      </div>
    </section>
  );
};