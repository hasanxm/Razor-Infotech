import React from "react";
import { Link } from "react-router-dom";
import ParticlesBackground from "./ParticlesBackground";
import WaveDivider from "../WaveDivider";
import { BsLightbulb, BsPeople, BsLightningCharge } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AboutCompanyFAQ from "./AboutCompanyFAQ";
import TestimonialSection from "../TestimonialSection";
import QuoteSection from "../QuoteSection";
import Footer from "../Footer";
import HomeContactSection from "../HomeContactSection"
const services = [
  {
    title: "Software Development",
    image: "/SD.png",
    link: "/software-development",
  },
  { title: "App Development", image: "AD.png", link: "/app-development" },
  {
    title: "Back Office Services",
    image: "/BOS.png",
    link: "/back-office-services",
  },
  {
    title: "Backend Outsourcing Services",
    image: "/backend-outsourcing.png",
    link: "/backend-outsourcing",
  },
  {
    title: "Content Management Services",
    image: "/cms.png",
    link: "/content-management",
  },
  {
    title: "Customer Support Services",
    image: "/customer-support-services.png",
    link: "/customer-support",
  },
  { title: "Web Hosting", image: "/WH.png", link: "/web-hosting" },
  {
    title: "Website Development",
    image: "/website-developemt.png",
    link: "/website-development",
  },
];

const philosophies = [
  {
    icon: <BsLightbulb className="text-3xl text-blue-700 mb-2" />,
    title: "Innovative Learning",
    description:
      "We believe in embracing new technologies and teaching methods to create engaging and effective learning experiences.",
  },
  {
    icon: <BsPeople className="text-3xl text-blue-700 mb-2" />,
    title: "Inclusive Education",
    description:
      "Education should be accessible to everyone regardless of background, learning style, or individual needs.",
  },
  {
    icon: <BsLightningCharge className="text-3xl text-blue-700 mb-2" />,
    title: "Lifelong Growth",
    description:
      "Learning is a continuous journey that extends beyond the classroom and throughout all stages of life.",
  },
];

const AboutCompany = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#002647] text-white text-center py-24 sm:py-32 md:py-40 relative overflow-hidden">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
          About Our Company
        </h1>
        <p className="text-xs sm:text-sm md:text-base">
          Home &gt; <span className="font-semibold">About Us</span>
        </p>
        <div className="absolute inset-0 z-0">
          <ParticlesBackground />
        </div>
        <div className="absolute bottom-0 w-full overflow-hidden leading-[0] -mb-[1px]">
          <WaveDivider />
        </div>
      </div>

      {/* About Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="rounded-3xl overflow-hidden shadow-lg w-full max-w-sm sm:max-w-md">
            <img
              src="/HomeAboutCompany.png"
              alt="About Razor"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Overlay image */}
          <div className="hidden sm:block absolute -bottom-6 right-4 sm:right-10 w-40 sm:w-56 md:w-64 rounded-[30px] overflow-hidden shadow-xl border border-gray-200">
            <img
              src="./aboutHometoplogo.png"
              alt="Overlay"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Top circle */}
          <div className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-gradient-to-br from-blue-600 to-purple-700 text-white text-center rounded-full w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center shadow-lg">
            <div>
              <p className="text-lg sm:text-2xl font-bold">8+</p>
              <p className="text-[10px] sm:text-xs">Years of Experience</p>
            </div>
          </div>

          {/* Bottom circle */}
          <div className="absolute -bottom-8 left-2 sm:left-6 bg-gradient-to-br from-purple-600 to-blue-600 text-white text-center rounded-full w-24 h-24 sm:w-36 sm:h-36 flex items-center justify-center shadow-lg">
            <div className="text-[10px] sm:text-sm leading-tight px-2">
              <p className="text-lg sm:text-2xl font-bold">150k</p>
              <p className="text-[10px] sm:text-xs">
                Clients Satisfaction Survey
              </p>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h4 className="text-sm sm:text-base text-blue-800 font-semibold uppercase flex items-center gap-2">
            <span className="w-6 sm:w-8 h-0.5 bg-blue-800"></span> Know Your
            Company
          </h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a2540] mt-4 leading-tight">
            Our Company Provide High Quality Solutions
          </h2>
          <p className="mt-6 text-gray-900 text-sm sm:text-base leading-relaxed">
            At Razor Infotech, we understand that great ideas drive success. We
            are committed to delivering innovative, high-quality solutions that
            empower businesses and individuals to achieve their goals.
          </p>
          <p className="mt-4 text-gray-700 text-sm sm:text-base">
            Our expert team blends creativity, technology, and industry insights
            to transform challenges into opportunities. Whether it’s through
            advanced technology solutions, strategic consulting, or creative
            problem-solving, Razor Infotech ensures every idea is tailored to
            meet your unique needs and deliver exceptional results.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-6 bg-[#002e5b] text-white font-semibold px-6 py-3 rounded shadow-md hover:bg-[#003b75] transition"
          >
            Read More
          </Link>
        </div>
      </div>

      {/* Philosophy Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-20 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 text-sm uppercase mb-2">Our Philosophy</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a2540] mb-10">
            What We Believe in
          </h2>

          <div className="flex flex-col items-center justify-center gap-10">
            {philosophies.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center max-w-xl text-center"
              >
                {item.icon}
                <h3 className="text-xl font-semibold text-[#0a2540] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-20 py-16 bg-white relative">
        <div className="max-w-8xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#0a2540]">Our Services</h2>
            
          </div>

          {/* Horizontal Scrollable Service Cards */}
          <div
            id="serviceScroll"
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="min-w-[305px] max-w-[305px] bg-[#deeae1] rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="overflow-hidden rounded-t-xl group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-70 h-70 object-cover mt-3 mx-auto transform transition duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>

                <div className="p-4 text-center">
                  <Link
                    to={service.link}
                    className="text-blue-800 font-semibold hover:underline text-sm sm:text-base"
                  >
                    {service.title}
                  </Link>
                </div>
                
              </div>
            ))}
          </div>
          <div className="flex gap-2">
              <button
                onClick={() =>
                  document.getElementById("serviceScroll").scrollBy({
                    left: -300,
                    behavior: "smooth",
                  })
                }
                className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={() =>
                  document.getElementById("serviceScroll").scrollBy({
                    left: 300,
                    behavior: "smooth",
                  })
                }
                className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300"
              >
                <FaChevronRight />
              </button>
            </div>
        </div>
      </section>
      <AboutCompanyFAQ />
      <HomeContactSection />
      <TestimonialSection />
      <QuoteSection />
      <Footer />
    </div>
  );
};

export default AboutCompany;
