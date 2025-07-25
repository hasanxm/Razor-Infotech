import React from "react";
import Navbar from "./Navbar";
import WaveDivider from "./WaveDivider";
import ParticlesBackground from "./components/ParticlesBackground";
import { motion } from "framer-motion";
import VerticalMarquee from "./components/VerticalMarquee";

const services = [
  { title: "App Development", image: "/AD.png" },
  { title: "Software Development", image: "/SD.png" },
  { title: "Back Office Services", image: "/BOS.png" },
  { title: "Web Hosting", image: "/WH.png" },
  { title: "IT Help Desk", image: "/ITHD.png" },
];

const HomePage = () => {
  return (
    <div className="w-full relative bg-[#020917] text-white overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Hero Section & Service Cards */}
      <div className="pt-[100px] px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col lg:flex-row justify-between items-center gap-4">
        {/* Left: Text */}
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-transparent font-extrabold text-2xl sm:text-3xl md:text-4xl px-1 lg:text-5xl [-webkit-text-stroke:1px_white] [font-family:'Poppins',sans-serif]"
          >
            Started to Serve & Building More of Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-amber-50 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mt-6"
          >
            Every great business begins with a vision. At Razor Infotech, we
            bring ideas to life with smart, scalable IT and HR solutions. From
            automation to advanced business intelligence, we empower
            organizations to innovate, simplify operations, and accelerate
            growth. Our expertise helps you build a strong foundation, ensuring
            long-term success in a fast-evolving digital world. Let’s grow
            together!
          </motion.p>
        </div>

        {/* Right: Scrolling Service Cards */}
     
<div className="flex-1 w-full">
  {/* Show horizontal marquee only on small screens */}
  <div className="block lg:hidden">
    <VerticalMarquee items={services} direction="left" speed={20} horizontal />
  </div>

  {/* Show vertical marquees side-by-side on large screens */}
  <div className="hidden lg:grid lg:grid-cols-2 gap-4">
    <VerticalMarquee items={services} direction="up" speed={30} />
    <VerticalMarquee items={services} direction="down" speed={30} />
  </div>
</div>

      </div>

      <WaveDivider />
    </div>
  );
};

export default HomePage;
