import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-orange-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">Voh's Snacks</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <div className="relative group">
              <a href="#about" className="hover:text-orange-200 transition-colors cursor-pointer">
                About Us
              </a>
            </div>
            
            <div className="relative group">
              <a href="#contact" className="hover:text-orange-200 transition-colors cursor-pointer">
                Contacts
              </a>
              <div className="absolute top-full left-0 bg-white text-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-48">
                <div className="py-2">
                  <a 
                    href="https://wa.me/254795846971" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2 text-green-600" />
                    WhatsApp: 0795846971
                  </a>
                  <a 
                    href="mailto:carlosmarcus050@gmail.com"
                    className="flex items-center px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2 text-blue-600" />
                    Email: carlosmarcus050@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <a href="#products" className="hover:text-orange-200 transition-colors cursor-pointer">
                Products
              </a>
              <div className="absolute top-full left-0 bg-white text-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-56">
                <div className="py-2">
                  <div className="px-4 py-2 hover:bg-gray-100 flex justify-between">
                    <span>Mandazi</span>
                    <span className="font-semibold text-orange-600">10 KSh</span>
                  </div>
                  <div className="px-4 py-2 hover:bg-gray-100 flex justify-between">
                    <span>Ngumu</span>
                    <span className="font-semibold text-orange-600">10 KSh</span>
                  </div>
                  <div className="px-4 py-2 hover:bg-gray-100 flex justify-between">
                    <span>Doughnuts</span>
                    <span className="font-semibold text-orange-600">10 KSh</span>
                  </div>
                  <div className="px-4 py-2 hover:bg-gray-100 flex justify-between">
                    <span>Sweet Cakes</span>
                    <span className="font-semibold text-orange-600">20 KSh</span>
                  </div>
                  <div className="px-4 py-2 hover:bg-gray-100 flex justify-between">
                    <span>Cakes</span>
                    <span className="font-semibold text-orange-600">50 KSh</span>
                  </div>
                  <div className="px-4 py-2 hover:bg-gray-100 flex justify-between">
                    <span>Birthday Cakes</span>
                    <span className="font-semibold text-orange-600">1000 KSh</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <a href="#location" className="hover:text-orange-200 transition-colors cursor-pointer">
                Location
              </a>
              <div className="absolute top-full left-0 bg-white text-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-64">
                <div className="py-2">
                  <div className="px-4 py-2">
                    <p className="font-semibold text-orange-600">Mobile Snacks Suppliers</p>
                    <p className="text-sm text-gray-600">We deliver fresh snacks to your location!</p>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
