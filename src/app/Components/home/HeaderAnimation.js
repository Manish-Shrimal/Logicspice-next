// text effects.
// https://app.blackbox.ai/share/v2/EALmtk9-laXTKxma
// "use client";
// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const rotatingPhrases = [
//   "Custom Web & Mobile App Solutions",
//   "AI-Powered Solutions",
//   "Blockchain for Transparency & Trust"
// ];

// export default function HeaderAnimation() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingPhrases.length);
//     }, 3000); // Change every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="HomeTextAnimation">
//     <div className="text-4xl md:text-5xl font-bold text-center mb-8">
//       <h1 className="inline text-xl">
//         Empowering Startups & Enterprises with{' '}
//       </h1>
//       <div className="relative h-16 md:h-20 w-full text-center">
//         <AnimatePresence mode="wait">
//           <motion.span
//             key={currentIndex}
//             className="absolute left-0 top-0 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent w-full text-center  mt-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.5 }}
//           >
//             {rotatingPhrases[currentIndex]}
//           </motion.span>
//         </AnimatePresence>
//       </div>
//     </div>
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const rotatingPhrases1 = {
  heading: "Empowering Startups & Enterprises with",
  text: [
    "Custom Web & Mobile App Solutions",
    "AI to Deliver Intelligent Business Solutions",
    "Blockchain for Transparency & Trust",
  ],
};

const rotatingPhrases2 = {
  heading: "Ready-to-Launch Software Product",
  text: [
    "Robust Solutions to Drive Rapid Digital Transformation",
    "Accelerate Your Business with user-centric & scalable apps",
    "Affordable Solutions, Optimized for Performance and Price",
  ],
};

const rotatingPhrases3 = {
  heading: "Flexible On-Demand IT Manpower Solutions",
  text: [
    "Hire experienced developers & tech talent, fast.",
    "Best for Standard and Custom Development Needs",
    "Strategic IT Staffing to Power Your Digital Transformation",
  ],
};

const allPhrases = [rotatingPhrases1, rotatingPhrases2, rotatingPhrases3];

export default function HeaderAnimation() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevTextIndex) => {
        const currentPhrase = allPhrases[currentPhraseIndex];
        const nextTextIndex = prevTextIndex + 1;

        // If we've reached the end of the current phrase's text array
        if (nextTextIndex >= currentPhrase.text.length) {
          // Move to the next phrase and reset text index
          setCurrentPhraseIndex(
            (prevPhraseIndex) => (prevPhraseIndex + 1) % allPhrases.length
          );
          return 0; // Reset text index for the new phrase
        }

        return nextTextIndex;
      });
    }, 5000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [currentPhraseIndex]);

  const currentPhrase = allPhrases[currentPhraseIndex];

  return (
    <div className="HomeTextAnimation">
      <div className="text-4xl md:text-5xl font-bold text-center mb-8">
        {/* <h1 className="inline text-xl">{currentPhrase.heading} </h1> */}

        <AnimatePresence mode="wait">
          <motion.h1
            key={currentPhraseIndex}
            className="inline text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {currentPhrase.heading}
          </motion.h1>
        </AnimatePresence>
        <div className="relative h-16 md:h-20 w-full text-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={`${currentPhraseIndex}-${currentTextIndex}`}
              className="py-2 absolute left-0 top-0 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent w-full text-center mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {currentPhrase.text[currentTextIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
