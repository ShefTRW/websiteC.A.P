import React from 'react';
import { MessageCircle, Phone, MapPin, Clock, Mail, Instagram, Send } from 'lucide-react';

/**
 * Contact Component - Russian Version
 * Contact information and final CTA
 */
export const ContactRu: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Здравствуйте, меня интересуют автозапчасти C.A.P.");
    window.open(`https://wa.me/971561747182?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:commonautoparts.uae@gmail.com', '_self');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/commonautoparts?igsh=YWNzZjUxOXFlMTA3', '_blank');
  };

  const handleTelegramClick = () => {
    window.open('https://t.me/+971561747182', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight animate-slide-up">
              СВЯЖИТЕСЬ С НАМИ
            </h2>
            <h3 className="text-3xl lg:text-5xl font-black text-blue-500 mb-6 tracking-tight animate-slide-up" style={{ animationDelay: '0.2s' }}>
              ЧЕРЕЗ
            </h3>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* WhatsApp */}
            <div 
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group animate-slide-left"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="bg-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-green-500 transition-colors duration-300">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                WhatsApp
              </h3>
              <p className="text-2xl text-gray-400 font-bold tracking-widest animate-slide-right" style={{ letterSpacing: '0.2em' }}>
              </p>
              <p className="text-green-400 font-semibold">
                +971 56 174 7182
              </p>
            </div>

            {/* Instagram */}
            <div 
              onClick={handleInstagramClick}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-pink-500 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group animate-slide-left"
              style={{ animationDelay: '0.6s' }}
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:from-purple-600 group-hover:to-pink-600 transition-colors duration-300">
                <Instagram className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors duration-300">
                Instagram
              </h3>
              <p className="text-gray-400 mb-4">
                Наши новости и продукты
              </p>
              <p className="text-pink-400 font-semibold">
                @commonautoparts
              </p>
            </div>

            {/* Telegram */}
            <div 
              onClick={handleTelegramClick}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group animate-slide-right"
              style={{ animationDelay: '0.7s' }}
            >
              <div className="bg-blue-500 p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:bg-blue-400 transition-colors duration-300">
                <Send className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                Telegram
              </h3>
              <p className="text-gray-400 mb-4">
                Быстрые сообщения
              </p>
              <p className="text-blue-400 font-semibold">
                +971 56 174 7182
              </p>
            </div>

            {/* Email */}
            <div 
              onClick={handleEmailClick}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group animate-slide-right"
              style={{ animationDelay: '0.8s' }}
            >
              <div className="bg-red-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:bg-red-500 transition-colors duration-300">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                Электронная почта
              </h3>
              <p className="text-gray-400 mb-4">
                Официальные запросы
              </p>
              <p className="text-red-400 font-semibold">
                commonautoparts.uae@gmail.com
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="flex items-center justify-center space-x-4 text-gray-400">
              <MapPin className="h-6 w-6 text-blue-500" />
              <span className="font-medium">Дубай, Объединенные Арабские Эмираты</span>
            </div>
            <div className="flex items-center justify-center space-x-4 text-gray-400">
              <Clock className="h-6 w-6 text-blue-500" />
              <span className="font-medium">Доступны 24/7 для срочных заказов</span>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 animate-slide-up" style={{ animationDelay: '1.2s' }}>
            <h3 className="text-3xl lg:text-4xl font-black text-white mb-6 animate-pulse-slow">
              ПОЧУВСТВУЙТЕ РАЗНИЦУ C.A.P
            </h3>
            <p className="text-xl text-blue-100 mb-8 font-medium">
              Присоединяйтесь к тысячам довольных клиентов, которые доверяют C.A.P для своих автомобильных потребностей
            </p>
            <button 
              onClick={handleWhatsAppClick}
              className="bg-white text-blue-600 px-12 py-6 rounded-xl font-black text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center space-x-4 mx-auto shadow-2xl hover:shadow-white/25"
            >
              <MessageCircle className="h-8 w-8" />
              <span>НАЧАТЬ ЗАКАЗ СЕЙЧАС</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-center animate-fade-in" style={{ animationDelay: '1.4s' }}>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <img 
              src="/C.A.P logo.jpg" 
              alt="C.A.P Логотип" 
              className="h-10 w-10 rounded-full object-cover border border-blue-600"
            />
            <div>
              <h4 className="text-xl font-bold text-white">C.A.P</h4>
              <p className="text-sm text-gray-400">Common Auto Parts</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 Common Auto Parts. Все права защищены. | Создано для Производительности. Построено на Века.
          </p>
        </div>
      </div>
    </section>
  );
};