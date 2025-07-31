import React from 'react';
import { Settings, Cog, Droplets, Car, Package, Wrench } from 'lucide-react';

/**
 * Products Component - Russian Version
 * Showcases key product categories with bold, masculine styling
 */
export const ProductsRu: React.FC = () => {
  const products = [
    {
      icon: Settings,
      title: "Моторные части",
      description: "Поршни, кольца, клапаны, распредвалы и другие важные компоненты двигателя для оптимальной работы.",
      image: "https://images.pexels.com/photos/279949/pexels-photo-279949.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
    },
    {
      icon: Cog,
      title: "Ходовые части",
      description: "Амортизаторы, пружины, стойки стабилизатора и подшипники для комфортной и безопасной езды.",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
    },
    {
      icon: Droplets,
      title: "Моторное масло",
      description: "Высококачественные синтетические и полусинтетические масла для защиты двигателя и продления его срока службы.",
      image: "https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
    },
    {
      icon: Car,
      title: "Кузовные части",
      description: "Бамперы, фары, зеркала, крылья и другие элементы кузова для восстановления внешнего вида автомобиля.",
      image: "https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
    }
  ];

  const additionalProducts = [
    {
      icon: Package,
      title: "Оригинальные автозапчасти",
      description: "Сертифицированные OEM запчасти от официальных производителей для гарантированного качества и совместимости.",
      image: "https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: Wrench,
      title: "Автомаркет запчасти",
      description: "Качественные аналоги и запчасти aftermarket по доступным ценам с гарантией качества.",
      image: "https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight animate-slide-up">
            ПРЕМИАЛЬНЫЕ <span className="text-blue-500">АВТОЗАПЧАСТИ</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-medium animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Профессиональные компоненты, созданные для производительности, 
            надежности и долговечности. Доверьтесь C.A.P для ваших самых важных автомобильных потребностей.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product, index) => (
            <div 
              key={product.title}
              className="group relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-blue-500 animate-slide-up"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                
                {/* Icon Overlay */}
                <div className="absolute top-4 right-4 bg-blue-600 p-3 rounded-full group-hover:bg-blue-500 transition-colors duration-300">
                  <product.icon className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-xl transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Additional Products - Horizontal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {additionalProducts.map((product, index) => (
            <div 
              key={product.title}
              className="group relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-blue-500 animate-slide-up"
              style={{ animationDelay: `${0.9 + index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                
                {/* Icon Overlay */}
                <div className="absolute top-4 right-4 bg-blue-600 p-3 rounded-full group-hover:bg-blue-500 transition-colors duration-300">
                  <product.icon className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-xl transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};