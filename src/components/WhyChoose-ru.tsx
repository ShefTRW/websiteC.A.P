import React from 'react';
import { CreditCard, Truck, Award, Users } from 'lucide-react';

/**
 * WhyChoose Component - Russian Version
 * Highlights key advantages and trust factors
 */
export const WhyChooseRu: React.FC = () => {
  const reasons = [
    {
      icon: CreditCard,
      title: "Удобная Оплата",
      description: "Принимаем оплату через Alif и DC, а также другие удобные способы оплаты для вашего комфорта"
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
            За высокий уровень сервиса, конкурирующие цены для вашего рынка, быстрая доставка.
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

      </div>
    </section>
  );
};