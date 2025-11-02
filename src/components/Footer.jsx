import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white" role="contentinfo">
      
      <motion.div
        className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <motion.div
          className="flex items-center space-x-3 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-sky-200">Safi Seaside Tours</h2>
        </motion.div>

        <motion.p
          className="text-center max-w-xl text-sm md:text-base font-normal leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Empowering creators worldwide with the most advanced AI content creation tools. Transform your ideas into reality.
        </motion.p>
        
      </motion.div>

      <motion.div
        className="border-t border-[#3B1A7A]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
          Safi Seaside Tours ©2025. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
