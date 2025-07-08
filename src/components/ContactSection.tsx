
import React from 'react';
import { Mail, Phone, MessageCircle, MapPin, Clock, Shield } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to support you throughout your health journey. Reach out for questions, support, or guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 font-display">
              Multiple Ways to Connect
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">WhatsApp Support</h4>
                  <p className="text-gray-600 mb-2">Get instant help from our health advisors</p>
                  <a href="https://wa.me/919876543210" className="text-primary font-semibold hover:underline">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-100 rounded-xl">
                  <Phone className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone Support</h4>
                  <p className="text-gray-600 mb-2">Speak directly with our team</p>
                  <a href="tel:+918001234567" className="text-teal-600 font-semibold hover:underline">
                    1800-123-4567 (Toll Free)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email Support</h4>
                  <p className="text-gray-600 mb-2">Detailed queries and support</p>
                  <a href="mailto:support@bcellbiologics.com" className="text-blue-600 font-semibold hover:underline">
                    support@bcellbiologics.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-xl">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Office Address</h4>
                  <p className="text-gray-600">
                    B-Cell Biologics Pvt. Ltd.<br />
                    123 Health Innovation Park<br />
                    Bangalore, Karnataka 560001
                  </p>
                </div>
              </div>
            </div>

            {/* Support Hours */}
            <div className="mt-8 bg-gradient-to-r from-primary/5 to-teal-50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h4 className="font-semibold text-gray-900">Support Hours</h4>
              </div>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>WhatsApp Support:</span>
                  <span className="font-medium">24/7 Available</span>
                </div>
                <div className="flex justify-between">
                  <span>Phone Support:</span>
                  <span className="font-medium">Mon-Sat, 9 AM - 7 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Email Response:</span>
                  <span className="font-medium">Within 2-4 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-display">
              Quick Contact Form
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How can we help you?
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                  <option value="">Select a topic</option>
                  <option value="product-info">Product Information</option>
                  <option value="order-support">Order Support</option>
                  <option value="result-interpretation">Result Interpretation</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="healthcare-guidance">Healthcare Guidance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                  placeholder="Tell us more about your question or concern..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>

            <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
              <Shield className="w-4 h-4" />
              <span>Your information is secure and will never be shared with third parties.</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-4 font-display">B-Cell Biologics</h4>
              <p className="text-gray-600 text-sm">
                Revolutionizing women's health through innovative at-home diagnostic solutions. 
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
                <li><a href="#" className="hover:text-primary transition-colors">Return Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
            <p>&copy; 2024 B-Cell Biologics Pvt. Ltd. All rights reserved.</p>
            <p className="mt-2">Registered in India | CIN: U85110KA2024PTC123456</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
