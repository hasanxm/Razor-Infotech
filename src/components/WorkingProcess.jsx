import React from "react";
import {
  FaUsersCog,
  FaListAlt,
  FaHandshake,
  FaHeadset,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUsersCog className="text-5xl text-blue-900" />,
    title: "Understanding Needs",
    description:
      "Every business is unique. We begin by analyzing your objectives, industry challenges, and growth ambitions to craft customized solutions that align with your vision.",
  },
  {
    icon: <FaListAlt className="text-5xl text-blue-900" />,
    title: "Strategizing Solutions",
    description:
      "With a deep understanding of your needs, we design comprehensive, scalable strategies that combine our expertise in BPO, IT, finance, compliance, and more.",
  },
  {
    icon: <FaHandshake className="text-5xl text-blue-900" />,
    title: "Implementing With Precision",
    description:
      "Our experienced teams deploy the solutions with precision and adaptability, ensuring seamless integration and immediate impact on your business operations.",
  },
  {
    icon: <FaHeadset className="text-5xl text-blue-900" />,
    title: "Continuous Support & Optimization",
    description:
      "We don’t stop at implementation. Our support teams monitor, optimize, and innovate to keep your business agile, efficient, and prepared for future growth.",
  },
];

const WorkingProcess = () => {
  return (
    <section className="bg-[#f5f9fc] py-20 relative">
      <div className="text-center mb-12">
        <h4 className="text-sm text-slate-700 uppercase font-medium tracking-wider">
          How It Works
        </h4>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
          Our Working Process
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Horizontal dashed line behind icons */}
        <div className="absolute top-[120px] left-[10%] right-[10%] border-t border-dashed border-gray-600 z-0 hidden lg:block" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
          {steps.map((step, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              {/* Icon Circle */}
              <div className="relative w-35 h-35 bg-white shadow-md rounded-full flex items-center justify-center z-10">
                <div className="w-24 h-24 rounded-full border border-dashed border-gray-600 flex items-center justify-center">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 bg-blue-800 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                  0{index + 1}
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mt-4 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-700 px-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
