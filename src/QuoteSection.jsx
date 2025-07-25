import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CallToAction = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row h-auto md:h-[350px] w-full overflow-hidden">
        
        {/* LEFT: Image with Diagonal Cut + Blue Overlay */}
        <div className="relative w-full md:w-1/2 h-[250px] md:h-full">
          <div
            className="w-full h-full bg-cover bg-center clip-diagonal-left relative"
            style={{ backgroundImage: "url('/NeedOurService.png')" }} // Replace with your image path
          >
            {/* Blue overlay */}
            <div className="absolute inset-0 bg-[#03233e] opacity-30"></div>
          </div>
        </div>

        {/* RIGHT: Text Block */}
        <div className="w-full md:w-1/2 bg-[#03233e] text-white flex items-center px-6 md:px-12 py-6">
          <div className="w-full">
            <p className="text-sm tracking-widest text-gray-300 mb-2 uppercase">
              Quality Services provider
            </p>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Need Our Services?
              </h2>

              <button className="inline-flex items-center border border-white px-6 py-2 text-sm font-semibold text-white hover:bg-white hover:text-[#03233e] transition">
                GET FREE QUOTE <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
