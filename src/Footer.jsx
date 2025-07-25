import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-[#062f4f] text-white">
      {/* Main content */}
      <div className="max-w-8xl mx-auto py-16 px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Left Logo + Text + Bubbles */}
        <div className="max-w-full p-7 rounded-lg bg-cover bg-no-repeat" style={{ backgroundImage: "url('/footer-v1-shape1.png')" }}>
          <img src="/footerlogo.png" alt="Logo" className="-mt-4 h-auto transform scale-125 mb-6" />
          <p className="text-base font-semibold leading-relaxed mb-4">
            At Razor Infotech, we believe in leveling the playing field for startups and emerging businesses.
          </p>
          <div className="flex gap-4 text-xl mt-6">
            <FaFacebookF className="cursor-pointer hover:text-gray-300" />
            <FaInstagram className="cursor-pointer hover:text-gray-300" />
            <FaTwitter className="cursor-pointer hover:text-gray-300" />
            <FaLinkedinIn className="cursor-pointer hover:text-gray-300" />
          </div>
        </div>

        {/* Services */}
        <div className="px-2">
          <h3 className="text-2xl font-semibold mb-5 border-b border-gray-500 inline-block pr-6">Services</h3>
          <ul className="space-y-3 font-medium">
            {['About Company', 'IT Solution', 'BPO Services', 'Contact Us', 'Blogs', 'Career'].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <HiOutlineChevronDoubleRight className="text-xl" style={{ strokeWidth: 3 }} /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Official Info */}
        <div className="px-2">
          <h3 className="text-2xl font-semibold mb-5 border-b border-gray-500 inline-block pr-6">Official Info:</h3>
          <ul className="space-y-4 font-medium text-base">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className=" text-5xl" />
              <span>627, F/F, Westend Marg, Saidulajab Extension, Sainik Farm, New Delhi, Delhi-110030</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt /> 011 4503 4631
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope /> business@razorinfotech.com
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="px-2">
          <h3 className="text-2xl font-semibold mb-5 border-b border-gray-500 inline-block pr-6">Newsletter</h3>
          <p className="mb-4 text-base font-medium leading-relaxed">
            Subscribe our newsletter to get our latest update & news
          </p>
          <div className="flex flex-col sm:flex-col sm:items-center gap-2">
            <input
              type="email"
              placeholder="Your E-mail"
              className="bg-amber-50 text-black px-4 py-2 rounded-md outline-none w-full"
            />
            <button className="bg-[#1f3ffe] hover:bg-blue-800 text-white py-2 px-4 rounded-md font-semibold text-sm w-full sm:w-full">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#05243d] text-sm text-white border-t border-gray-600 px-5 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-center md:text-left">
          Copyright © 2025 <span className="underline">Razor Infotech</span>. All Rights Reserved by <span className="font-bold">Razor Infotech</span>
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">FAQ</a>
          <a href="#" className="hover:underline">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
