import React from "react";

const PublicationsSection = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Publications</h2>
      <div className="space-y-6">
        {/* Publication Item */}
        <div className="flex space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
          <div className="flex-shrink-0">
            <img
              src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop"
              alt="Molmo and PixMo"
              className="w-32 h-24 object-cover rounded-lg"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Molmo and PixMo: Open Weights and Open Data for State-of-the-Art
              Vision-Language Models
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              <span className="font-medium">Matt Deitke*</span>, Christopher
              Clark*, Sangho Lee, Rohun Tripathi, Yue Yang, Jae Sung Park,
              Mohammadreza Salehi, Niklas Muennighoff, Kyle Lo, Luca Soldaini,
              Jiasen Lu, Taira Anderson, Erin Bransom, Kiana Ehsani, Huong Ngo,
              YenSung Chen, Ajay Patel, Mark Yatskar, Chris Callison-Burch,
              Andrew Head, Rose Hendrix, Favyen Bastani, Eli VanderBilt, Nathan
              Lambert, Yvonne Chou, Arnavi Chheda, Jenna Sparks, Sam Skjonsberg,
              Michael Schmitz, Aaron Sarnat, Byron Bischoff, Pete Walsh, Chris
              Newell, Piper Wolters, Tanmay Gupta, Kuo-Hao Zeng, Jon Borchardt,
              Dirk Groeneveld, Crystal Nam, Sophie Lebrecht, Caitlin Wittlif,
              Carissa Schoenick, Oscar Michel, Ranjay Krishna, Luca Weihs, Noah
              A. Smith, Hannaneh Hajishirzi, Ross Girshick, Ali Farhadi,
              Aniruddha Kembhavi
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full font-medium">
                CVPR 2025
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium">
                🏆 Best Paper Honorable Mention
              </span>
            </div>
            <p className="text-sm text-gray-700 mt-3">
              <span className="font-medium">TL;DR</span> We release Molmo, a new
              family of state-of-the-art open vision-language models built
              entirely from scratch, featuring our novel PixMo datasets that
              include detailed image captions, Q&A pairs, and 2D pointing data.
              Our 72B model outperforms most proprietary models like Claude 3.5
              Sonnet and Gemini 1.5, ranking second only to GPT-4o in both
              academic benchmarks and human evaluations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationsSection;
