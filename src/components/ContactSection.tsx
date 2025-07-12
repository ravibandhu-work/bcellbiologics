
import React from 'react';
import { Mail, Phone, MessageCircle, MapPin, Clock, Shield } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 pb-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to support you throughout your health journey. Reach out for questions, support, or guidance.
          </p> */}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-teal-100 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <a href="tel:+918001234567" className="text-teal-600 font-semibold hover:underline">
                Speak directly with our team 
              </a>
            </div>

            <div className="text-center">
              <div className="p-4 bg-blue-100 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <a href="mailto:info@bcellbiologics.com" className="text-blue-600 font-semibold hover:underline">
              info@bcellbiologics.com
              </a>
            </div>

            <div className="text-center">
              <div className="p-4 bg-green-100 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">
                258/A, Hosur Rd, Bommasandra Industrial Area<br />
                Bangalore, Karnataka 560099
              </p>
            </div>
          </div>
        </div>


        {/* Footer */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-4 font-display">B-Cell Biologics</h4>
              <p className="text-gray-600 text-sm">
                Revolutionizing women's health through innovative diagnostic solutions. 
                Making cervical cancer screening accessible, affordable, and comfortable for every woman.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
            <p>&copy; 2024 B-Cell Biologics Pvt. Ltd. All rights reserved.</p>
            {/* <p className="mt-2">Registered in India | CIN: U85110KA2024PTCXXXXXX</p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
