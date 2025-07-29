import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { WhatsAppCTA } from './components/WhatsAppCTA';
import { WhyChoose } from './components/WhyChoose';
import { Contact } from './components/Contact';

/**
 * Main App Component
 * Premium auto parts website for C.A.P. (Common Auto Parts)
 * Bold, masculine design focused on engine oils and quality parts
 */
function App() {
  return (
    <div className="min-h-screen bg-black font-sans">
      <Header />
      <main>
        <Hero />
        <Products />
        <WhatsAppCTA />
        <WhyChoose />
        <Contact />
      </main>
    </div>
  );
}

export default App;