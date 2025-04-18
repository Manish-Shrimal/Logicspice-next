// text effects.
// https://app.blackbox.ai/share/v2/EALmtk9-laXTKxma
"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const rotatingPhrases = [
  "Custom Web & Mobile App Solutions",
  "AI-Powered Solutions",
  "Blockchain for Transparency & Trust"
];

export default function HeaderAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingPhrases.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="HomeTextAnimation">
    <div className="text-4xl md:text-5xl font-bold text-center mb-8">
      <h1 className="inline text-xl">
        Empowering Startups & Enterprises with{' '}
      </h1>
      <div className="relative h-16 md:h-20 w-full text-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            className="absolute left-0 top-0 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent w-full text-center  mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {rotatingPhrases[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
    </div>
  );
}