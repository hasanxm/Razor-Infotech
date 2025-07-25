import React from "react";

const AboutCompany = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Section (Image + Circles) */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="rounded-3xl overflow-hidden shadow-lg w-full max-w-md sm:max-w-lg">
            <img
              src="/HomeAboutCompany.png"
              alt="Illustration"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Top-right overlay image */}
          <div className="hidden sm:block absolute bottom-[-20px] right-[40px] w-[200px] sm:w-[250px] md:w-[280px] rounded-[30px] overflow-hidden shadow-xl border border-gray-200">
            <img
              src="./aboutHometoplogo.png"
              alt="Overlay"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Top circle (8+ years) */}
          <div className="absolute top-6 right-6 sm:top-10 sm:right-10 bg-gradient-to-br from-blue-600 to-purple-700 text-white text-center rounded-full w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center shadow-lg">
            <div>
              <p className="text-xl sm:text-2xl font-bold">8+</p>
              <p className="text-[10px] sm:text-xs">Years of Experience</p>
            </div>
          </div>

          {/* Bottom circle (150k clients) */}
          <div className="absolute bottom-[-40px] left-2 sm:left-6 bg-gradient-to-br from-purple-600 to-blue-600 text-white text-center rounded-full w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center shadow-lg">
            <div className="text-[10px] sm:text-sm leading-tight px-2">
              <p className="text-xl sm:text-2xl font-bold">150k</p>
              <p>Clients Satisfaction Survey</p>
            </div>
          </div>
        </div>

        {/* Right Section (Text) */}
        <div className="w-full lg:w-1/2">
          <h4 className="text-base sm:text-lg text-blue-800 font-semibold uppercase flex items-center gap-2">
            <span className="w-8 h-0.5 bg-blue-800"></span> About Company
          </h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a2540] mt-4 leading-tight">
            We Create a Culture That Inspires Us To Work Smart Together
          </h2>
          <p className="mt-6 text-gray-900 text-sm sm:text-base leading-relaxed">
            At Razor Infotech, we believe in leveling the playing field for startups and emerging businesses.
            We are a full-spectrum service provider, combining technology-driven solutions with industry expertise
            to help our clients scale sustainably. From advanced BPO services to strategic RPO, IT solutions,
            business consultancy, legal and compliance (LPO), and financial services (FPO), we deliver tailored
            support designed to meet the unique challenges faced by modern businesses.
          </p>
          <p className="mt-4 text-gray-700 text-sm sm:text-base">
            Driven by our purpose to foster long-term growth and our commitment to innovation, we stand as a
            partner invested in the success of each client. We don’t just serve businesses; we empower them to
            thrive independently, free from the constraints of monopolistic giants.
            <strong> Razor Infotech: Started to Serve & Building More of Us</strong>
          </p>

          {/* Button */}
          <button className="mt-6 bg-[#002e5b] text-white font-semibold px-6 py-3 rounded shadow-md hover:bg-[#003b75] transition flex items-center gap-2">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
