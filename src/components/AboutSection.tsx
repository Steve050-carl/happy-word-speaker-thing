
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Voh's Snacks</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are passionate about bringing you the freshest and most delicious snacks. 
            As a mobile snacks supplier, we pride ourselves on quality ingredients, 
            traditional recipes, and exceptional customer service.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🥖</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Fresh Daily</h3>
            <p className="text-gray-600">All our snacks are made fresh daily with the finest ingredients</p>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚚</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Mobile Service</h3>
            <p className="text-gray-600">We come to you! Mobile snacks delivery service</p>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Affordable Prices</h3>
            <p className="text-gray-600">Quality snacks at prices that won't break the bank</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
