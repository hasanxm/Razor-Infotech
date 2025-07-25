import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const VerticalMarquee = ({ items, direction = "up", speed = 10, horizontal = false }) => {
  const [isClient, setIsClient] = useState(false);

  // Enable client-side rendering for safe DOM checks
  useEffect(() => {
    setIsClient(true);
  }, []);

  const animateProps = horizontal
    ? { x: [0, -1000] }
    : direction === "up"
    ? { y: [0, -1000] }
    : { y: [-1000, 0] };

  if (!isClient) return null; // Avoid hydration mismatch for SSR

  return (
    <div
      className={`overflow-hidden ${
        horizontal ? "w-full h-[240px]" : "h-[450px] w-full"
      } relative`}
    >
      <motion.div
        className={`${
          horizontal
            ? "flex flex-row space-x-4 items-center"
            : "flex flex-col space-y-4 items-center absolute top-0 left-1/2 -translate-x-1/2"
        }`}
        animate={animateProps}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((item, index) => (
          <div
  key={index}
  className="shrink-0 w-[220px] sm:w-[250px] bg-[#0a0f1a] border border-gray-500 overflow-hidden rounded"
>
  <div className="w-full h-36 sm:h-40">

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-2 text-center">
              <h3 className="text-sm font-medium text-white font-[Poppins]">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default VerticalMarquee;


// import { motion } from "framer-motion";
// import React from "react";

// const VerticalMarquee = ({ items, direction = "up", speed = 30 }) => {
//   const translateY = direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"];

//   return (
//     <div className="overflow-hidden h-[450px] relative">
//       <motion.div
//         className="flex flex-col absolute top-0 left-10 w-full space-y-4 items-center"
//         animate={{ y: translateY }}
//         transition={{
//           repeat: Infinity,
//           duration: speed,
//           ease: "linear",
//         }}
//       >
//         {[...items, ...items].map((item, index) => (
//           <div
//             key={index}
//             className="w-[200px] bg-[#0a0f1a] border border-gray-500 overflow-hidden"
//           >
//             <div className="w-full h-32">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="p-2 text-center">
//               <h3 className="text-sm font-medium text-white font-[Poppins]">
//                 {item.title}
//               </h3>
//             </div>
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default VerticalMarquee;
