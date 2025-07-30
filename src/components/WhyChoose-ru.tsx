import React from 'react';
import { Shield, Truck, Award, Users } from 'lucide-react';

/**
 * WhyChoose Component - Russian Version
 * Highlights key advantages and trust factors
 */
export const WhyChooseRu: React.FC = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Высокопроизводительные Масла",
      description: "Премиальные синтетические и обычные масла от проверенных производителей"
    },
    {
      icon: Award,
      title: "Проверенные Автобренды",
      description: "Авторизованный дилер крупных автомобильных брендов и OEM запчастей"
    },
    {
      icon: Truck,
      title: "Быстрые Заказы через WhatsApp",
      description: "Мгновенное оформление заказов и быстрая доставка по региону"
    },
    {
      icon: Users,
      title: "Профессиональный Сервис",
      description: "Экспертные советы и персональные рекомендации для вашего автомобиля"
    }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight animate-slide-up">
            ПОЧЕМУ ВЫБИРАЮТ <span className="text-blue-500">C.A.P</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-medium animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Когда производительность и надежность имеют значение, профессионалы доверяют C.A.P 
            за превосходное качество и непревзойденный сервис.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={reason.title}
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full mb-6 group-hover:from-blue-700 group-hover:to-blue-800 transition-all duration-300 transform group-hover:scale-110 shadow-xl">
                <reason.icon className="h-10 w-10" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 lg:p-12 border border-gray-800 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="border-r border-gray-700 last:border-r-0">
              <div className="text-4xl lg:text-6xl font-black text-blue-500 mb-2 animate-pulse-slow">15+</div>
              <div className="text-gray-400 font-semibold tracking-wide">ЛЕТ ОПЫТА</div>
            </div>
            <div className="border-r border-gray-700 last:border-r-0">
              <div className="text-4xl lg:text-6xl font-black text-blue-500 mb-2 animate-pulse-slow" style={{ animationDelay: '0.2s' }}>50K+</div>
              <div className="text-gray-400 font-semibold tracking-wide">ДОВОЛЬНЫХ КЛИЕНТОВ</div>
            </div>
            <div>
              <div className="text-4xl lg:text-6xl font-black text-blue-500 mb-2 animate-pulse-slow" style={{ animationDelay: '0.4s' }}>24/7</div>
              <div className="text-gray-400 font-semibold tracking-wide">ПОДДЕРЖКА WHATSAPP</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};