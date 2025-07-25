import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowRight } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      className="py-40 px-4 overflow-x-hidden relative overflow-visible bg-[#11561a70] [clip-path:polygon(1.5%_0,_70%_3%,_70%_13%,_97%_9%,_97.5%_95%,_40%_100%,_39.9%_95%,_1%_94%)]"
    >
      <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-2 items-start">
        {/* Contact Form */}
        <div className="bg-white ml-0 lg:ml-20 rounded-2xl p-4 sm:p-6 shadow-md w-full max-w-md mx-auto lg:mx-0">
          <div className="text-center mb-4">
            <div className="h-[2px] w-12 bg-sky-700 mx-auto mb-2"></div>
            <p className="text-xs text-gray-700 font-semibold tracking-wide uppercase">
              Get in Touch
            </p>
            <h2 className="text-xl font-bold text-gray-800 mt-1">
              Free Consultation!
            </h2>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full border border-gray-500 px-3 py-2 rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-sky-600"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email:</label>
              <input
                type="email"
                placeholder="yourcompany@gmail.com"
                className="w-full border border-gray-500 px-3 py-2 rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-sky-600"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Subject:</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-500 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-600"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Message:</label>
              <textarea
                placeholder="Your Message"
                className="w-full border border-gray-300 px-3 py-2 rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-sky-600"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-sky-900 text-white py-2 rounded hover:bg-sky-800 transition flex items-center justify-center gap-2"
            >
              Free Consultant <FaArrowRight />
            </button>
          </form>
        </div>

        {/* Text + Contact Info */}
        <div className="text-white space-y-8 lg:-mr-10 w-full">
          <div>
            <h3 className="text-4xl font-bold leading-snug">
              We Transform Ideas Into <span className="text-sky-900">Successful Startups</span>
            </h3>
            <p className="mt-4 text-sm sm:text-lg text-black">
              We specialize in building powerful websites and intuitive mobile apps tailored to your business goals. Whether you're launching a startup or scaling your enterprise, we deliver custom digital solutions that stand out and perform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-100 text-gray-900 text-lg w-full rounded-lg p-6 shadow-md flex flex-col gap-4">
              <div className="flex items-center gap-2 text-sky-900 font-semibold">
                <FaMapMarkerAlt className="text-xl" />
                Corporate Office:
              </div>
              <p className="text-sm">
                627, F/F, Westend Marg, Saidulajab Extension, Sainik Farm, New Delhi,Delhi-110030
              </p>
            </div>

            <div className="bg-gray-100 text-gray-900 rounded-lg p-6 shadow-md flex flex-col gap-4 items-center text-center">
              <div className="flex items-center gap-2 text-sky-900 justify-center font-semibold text-lg">
                <FaPhoneAlt className="text-xl" />
                Give us a call:
              </div>
              <p className="text-sm">011 4503 4631</p>
            </div>

            <div className="bg-gray-100 text-gray-900 text-lg w-full rounded-lg p-6 shadow-md flex flex-col gap-4 items-center text-center z-10 relative">
              <div className="flex items-center justify-center gap-2 text-sky-900 font-semibold">
                <FaEnvelope className="text-xl" />
                Write Us:
              </div>
              <p className="text-sm break-words">business@razorinfotech.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
