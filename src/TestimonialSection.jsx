import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TestimonialSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left panel */}
        <div className="bg-[#0a1a2f] text-white p-10 rounded-md relative z-10 clip-right-shape">
          <h5 className="uppercase text-sm text-gray-400 mb-2">Clients</h5>
          <h2 className="text-4xl font-bold leading-snug mb-6">
            Happy with <br />
            <span className="font-extrabold">Customers & Clients</span>
          </h2>
          <div className="w-16 border-b-2 border-white mb-6" />
          <p className="text-base mb-6">
            If you need any industrial solution we are available for you. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a
            href="#"
            className="text-white underline font-semibold hover:text-green-400 transition"
          >
            Contact Us
          </a>
        </div>

        {/* Right panel (testimonial) */}
        
        <div className="relative flex flex-col items-center lg:flex-row lg:items-start bg-white shadow-xl rounded-md p-6 md:p-10">
          <div className="absolute top-0 right-0 w-20 h-full bg-white z-0">
  <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
    <polygon points="0,0 100,0 100,100 0,100" fill="white" />
  </svg>
</div>

          {/* Testimonial image */}
          <img
            src="/testimonials/kyser.jpg"
            alt="Kyser Shah"
            className="w-24 h-24 rounded-md border-4 border-white shadow-lg -mt-20 lg:-mt-0 lg:-ml-28 lg:mr-6 object-cover"
          />

          {/* Testimonial content */}
          <div className="text-center lg:text-left mt-6 lg:mt-0">
            <h3 className="text-xl font-bold text-[#0a1a2f]">Kyser Shah</h3>
            <div className="w-10 h-0.5 bg-green-300 my-2 mx-auto lg:mx-0" />
            <p className="italic text-gray-600 text-sm sm:text-base max-w-lg">
              I was thoroughly impressed with Razor Info Tech’s commitment to
              excellence and positive candidate experience. If you're looking
              for professionalism and transparency, I highly recommend them.
            </p>
          </div>

          {/* Arrows (positioned absolutely) */}
          <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 flex flex-col gap-2">
            <button className="w-8 h-8 bg-[#96b59a] text-white flex items-center justify-center hover:bg-[#0a1a2f] transition">
              <FaChevronLeft />
            </button>
            <button className="w-8 h-8 bg-[#96b59a] text-white flex items-center justify-center hover:bg-[#0a1a2f] transition">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
