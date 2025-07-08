
import React from 'react';
import { Quote, Star } from 'lucide-react';

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-teal-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Quote className="w-16 h-16 text-primary mx-auto mb-8 opacity-50" />
          
          <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 mb-8 leading-relaxed font-display">
            "B-Cell's test kit opens new doors for community health programs, mobile clinics, 
            and outreach initiatives where conventional screening is inaccessible. This technology 
            has the potential to save thousands of lives across India."
          </blockquote>
          
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          
          <cite className="not-italic">
            <div className="font-semibold text-gray-900 text-lg">
              Dr. Shalini Verma
            </div>
            <div className="text-gray-600">
              Lead Scientist at B-Cell Biologics & Former Senior Researcher, AIIMS
            </div>
          </cite>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-4 italic">
              "I was hesitant about cervical screening for years due to discomfort and embarrassment. 
              B-Cell's at-home kit gave me the confidence to finally get tested. The results were clear 
              and the process was completely private."
            </p>
            <div className="text-sm text-gray-500">
              — Priya S., Mumbai (Age 34)
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-4 italic">
              "As a healthcare worker in rural areas, I've seen how difficult it is for women to access 
              cervical screening. B-Cell's solution is a game-changer for preventive women's health in India."
            </p>
            <div className="text-sm text-gray-500">
              — Dr. Meera Patel, Community Health Officer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
