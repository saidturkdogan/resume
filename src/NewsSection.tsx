import React from "react";

const NewsSection = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {/* News Item 1 */}
        <div className="group cursor-pointer">
          <div className="aspect-video bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg mb-3 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              alt="ProcTHOR"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="text-sm text-gray-700 mb-2">
            Extremely excited to release{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ProcTHOR
            </a>
            ! Using procedural generation to scale up the diversity of data
            leads to remarkable generalization.
          </p>
          <p className="text-xs text-gray-500">Jun, 2022</p>
        </div>

        {/* News Item 2 */}
        <div className="group cursor-pointer">
          <div className="aspect-video bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg mb-3 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              alt="Embodied AI"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="text-sm text-gray-700 mb-2">
            Excited to release a retrospectives on the{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Embodied AI workshops
            </a>
            ! We discuss common approaches, its scope, and future directions.
          </p>
          <p className="text-xs text-gray-500">Oct, 2022</p>
        </div>

        {/* News Item 3 */}
        <div className="group cursor-pointer">
          <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg mb-3 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              alt="AI2-THOR"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="text-sm text-gray-700 mb-2">
            Co-Organizing the{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Embodied AI Workshop
            </a>{" "}
            and the{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              AI2-THOR Rearrangement Challenge
            </a>{" "}
            at CVPR 2022 in New Orleans.
          </p>
          <p className="text-xs text-gray-500">Jun, 2022</p>
        </div>

        {/* News Item 4 */}
        <div className="group cursor-pointer">
          <div className="aspect-video bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg mb-3 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              alt="AI2-THOR Update"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="text-sm text-gray-700 mb-2">
            We released an updated revision of the{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              AI2-THOR paper
            </a>{" "}
            covering its impact and new features!
          </p>
          <p className="text-xs text-gray-500">Aug, 2022</p>
        </div>

        {/* News Item 5 */}
        <div className="group cursor-pointer">
          <div className="aspect-video bg-gradient-to-br from-amber-400 to-orange-600 rounded-lg mb-3 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              alt="NeurIPS 2023"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="text-sm text-gray-700 mb-2">
            Reviewing at{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              NeurIPS 2023
            </a>
            ,{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              CVPR 2023
            </a>
            ,{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ICLR 2023
            </a>
            .
          </p>
          <p className="text-xs text-gray-500">Aug, 2022</p>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
