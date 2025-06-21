
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600">Get in touch for orders and inquiries</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
            <a 
              href="https://wa.me/254795846971" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 font-semibold"
            >
              0795846971
            </a>
            <p className="text-gray-600 mt-2">Click to send us a message on WhatsApp</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <a 
              href="mailto:carlosmarcus050@gmail.com"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              carlosmarcus050@gmail.com
            </a>
            <p className="text-gray-600 mt-2">Send us an email for inquiries</p>
          </div>
          
          <div className="text-center" id="location">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Service Area</h3>
            <p className="text-orange-600 font-semibold">Mobile Snacks Suppliers</p>
            <p className="text-gray-600 mt-2">We deliver fresh snacks to your location</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
