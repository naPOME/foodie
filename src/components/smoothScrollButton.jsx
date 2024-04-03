// components/SmoothScrollButton.js

import React from 'react';
import { motion } from 'framer-motion';
import { smoothScrollTo } from '../util/smoothScroll'

const SmoothScrollButton = () => {
  const handleSmoothScroll = () => {
    const target = document.getElementById('targetElement'); // Replace with the ID of your target element
    smoothScrollTo(target, 1000); // 1000ms duration for smooth scroll
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleSmoothScroll}
      className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary"
    >
      Scroll to Section
    </motion.button>
  );
};

export default SmoothScrollButton;
