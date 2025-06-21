
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Voh's Snacks</h1>
        <p className="text-xl mb-8">Fresh, delicious snacks delivered right to your doorstep</p>
        <a 
          href="https://wa.me/254795846971" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
        >
          Order Now on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
