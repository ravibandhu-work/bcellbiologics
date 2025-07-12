
import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const VideoSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
            See How <span className="text-gradient">B-Cell</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch our detailed demonstration of the self-sampling process and understand the science behind our technology
          </p>
        </div>

        <div className="relative">
          {/* Video thumbnail/placeholder */}
          <div 
            className="relative bg-gradient-to-br from-primary/10 to-teal-50 rounded-2xl overflow-hidden cursor-pointer group"
            onClick={() => setIsVideoOpen(true)}
          >
            <div className="aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <Play className="w-8 h-8 text-primary ml-1" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-display">
                  Complete Product Demo
                </h3>
                <p className="text-gray-600">
                  2-minute walkthrough of the entire testing process
                </p>
              </div>
            </div>
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          {/* Additional video topics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover-lift cursor-pointer">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Sample Collection</h4>
              <p className="text-sm text-gray-600">Step-by-step collection guide</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center hover-lift cursor-pointer">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-6 h-6 text-teal-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Result Interpretation</h4>
              <p className="text-sm text-gray-600">Understanding your results</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center hover-lift cursor-pointer">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Science Explained</h4>
              <p className="text-sm text-gray-600">E6/E7 detection technology</p>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {isVideoOpen && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl w-full">
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="bg-white rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">
                  Video Coming Soon
                </h3>
                <p className="text-gray-600 mb-6">
                  We're currently producing high-quality educational videos to help you understand 
                  our product better. These will be available soon!
                </p>
                <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-gray-400">Video placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
