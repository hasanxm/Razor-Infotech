import React from "react";
import { Link } from "react-router-dom";
import ParticlesBackground from "./ParticlesBackground";
import WaveDivider from "../WaveDivider";
import QuoteSection from "../QuoteSection";
import Footer from "../Footer";

const CareerPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#002647] text-white text-center py-24 sm:py-32 md:py-40 relative overflow-hidden">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
          Career With Us
        </h1>
        <p className="text-xs sm:text-sm md:text-base">
          Home &gt; <span className="font-semibold">Career</span>
        </p>
        <div className="absolute inset-0 z-0">
          <ParticlesBackground />
        </div>
        <div className="absolute bottom-0 w-full overflow-hidden leading-[0] -mb-[1px]">
          <WaveDivider />
        </div>
      </div>

      {/* Apply Section */}
      <section className="px-4 sm:px-6 lg:px-20 py-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a2540] mb-4">
              Shape the Future with Us – <br />
              Join Razor Infotech Today!
            </h2>
            <p className="text-gray-700 text-sm sm:text-base mb-6">
              We don’t just build solutions – we build careers. We’re on a mission to
              empower innovation and transform industries, and we’re looking for
              passionate, creative, and driven individuals to join us.
            </p>
            <button className="bg-[#002647] text-white px-6 py-3 rounded shadow hover:bg-[#003860] transition font-semibold flex items-center gap-2">
              View All Openings <span>↗</span>
            </button>
          </div>

          {/* Right Form */}
          <div className="bg-gray-100 p-6 rounded-md shadow-md">
            <h3 className="text-2xl text-center font-bold text-[#0a2540] mb-16">Apply Now!</h3>

            <form className="space-y-4 text-sm sm:text-base">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block font-semibold mb-1">
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    className="w-full border px-3 py-2 rounded outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="yourmail@gmail.com"
                    className="w-full border px-3 py-2 rounded outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+91-9008756320"
                    className="w-full border px-3 py-2 rounded outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block font-semibold mb-1">
                    Current Designation<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Full Stack Developer"
                    className="w-full border px-3 py-2 rounded outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">
                    Current CTC<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="15K"
                    className="w-full border px-3 py-2 rounded outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">
                    Apply for the post<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Manager"
                    className="w-full border px-3 py-2 rounded outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1">
                  Key Skills<span className="text-red-500">*</span>
                </label>
                <textarea
                  placeholder="Your Key Skills"
                  className="w-full border px-3 py-2 rounded outline-none"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div>
                  <label className="block font-semibold mb-1">
                    Total Experience<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Fresher"
                    className="w-full border px-3 py-2 rounded outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">
                    Upload Your Resume<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    className="w-full border border-dashed px-3 py-2 rounded outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 bg-[#002647] text-white px-6 py-3 rounded shadow hover:bg-[#003860] transition font-semibold"
              >
                APPLY NOW
              </button>
            </form>
          </div>
        </div>
      </section>

      <QuoteSection />
      <Footer />
    </div>
  );
};

export default CareerPage;
