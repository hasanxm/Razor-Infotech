import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "What is a total compensation statement?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
  },
  {
    question: "Who is Employee Community for?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
  },
  {
    question: "What is the employee database in HR?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
  },
  {
    question: "What is HCM database?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
  },
  {
    question: "What is a HCM data role?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#002647] mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-2">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-400 rounded-md overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center font-medium text-[#002647] text-base sm:text-lg bg-gray-50 hover:bg-gray-100 transition"
              >
                {faq.question}
                {openIndex === index ? (
                  <FaChevronUp className="text-sm" />
                ) : (
                  <FaChevronDown className="text-sm" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-sm text-gray-700 bg-white">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
