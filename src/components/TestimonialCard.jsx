import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ text, name }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md"
      whileHover={{ scale: 1.05, boxShadow: "0 15px 25px rgba(0,0,0,0.2)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <p className="italic text-gray-700 mb-4">“{text}”</p>
      <p className="font-semibold text-blue-700">– {name}</p>
    </motion.div>
  );
};

export default TestimonialCard;
