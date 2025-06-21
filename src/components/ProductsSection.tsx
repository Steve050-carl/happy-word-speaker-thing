import React from 'react';

const ProductsSection = () => {
  const products = [
    { name: 'Mandazi', price: '10 KSh', description: 'Traditional Kenyan fried bread, sweet and fluffy', image: '/lovable-uploads/8c975e31-eb1a-4ca6-8542-e65540a47d0d.png' },
    { name: 'Ngumu', price: '10 KSh', description: 'Crispy and crunchy traditional snack', image: null },
    { name: 'Doughnuts', price: '10 KSh', description: 'Soft, sweet doughnuts with various toppings', image: '/lovable-uploads/85af19d3-b3e4-4b92-ad3a-58e4f04b99b6.png' },
    { name: 'Sweet Cakes', price: '20 KSh', description: 'Moist and delicious individual cakes', image: '/lovable-uploads/ffea2b06-5d11-4108-a21a-bb886168956a.png' },
    { name: 'Cakes', price: '50 KSh', description: 'Perfect portion cakes for any occasion', image: '/lovable-uploads/209e7403-bee7-4608-827b-3df5b3f4b5a4.png' },
    { name: 'Birthday Cakes', price: '1000 KSh', description: 'Custom birthday cakes to make your day special', image: '/lovable-uploads/61c5a8fa-0231-42ff-8c2f-621981990570.png' }
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
              {product.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
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
