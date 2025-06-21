
import React from 'react';

const ProductsSection = () => {
  const products = [
    { name: 'Mandazi', price: '10 KSh', description: 'Traditional Kenyan fried bread, sweet and fluffy' },
    { name: 'Ngumu', price: '10 KSh', description: 'Crispy and crunchy traditional snack' },
    { name: 'Doughnuts', price: '10 KSh', description: 'Soft, sweet doughnuts with various toppings' },
    { name: 'Sweet Cakes', price: '20 KSh', description: 'Moist and delicious individual cakes' },
    { name: 'Cakes', price: '50 KSh', description: 'Perfect portion cakes for any occasion' },
    { name: 'Birthday Cakes', price: '600 KSh', description: 'Custom birthday cakes to make your day special' }
  ];

  return (
    <section id="products" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h2>
          <p className="text-xl text-gray-600">Delicious snacks made with love and care</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600">{product.price}</span>
                  <a 
                    href="https://wa.me/254795846971" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
