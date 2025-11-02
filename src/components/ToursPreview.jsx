import React from 'react';
import { tours } from '../assets/data/tours.js';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ToursPreview = () => {

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
    }),
    hover: { scale: 1.05, boxShadow: "0 15px 25px rgba(0,0,0,0.2)" }
  };

  return (
    <div className="container mx-auto py-16 px-6 md:px-20 bg-white">
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-600">
        Tours & Experiences
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {tours.map((tour, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="p-4 bg-white rounded-lg shadow text-sm max-w-80 cursor-pointer"
          >
            <img
              className="rounded-md max-h-40 w-full object-cover"
              src={tour.image}
              alt={tour.title}
            />
            <p className="text-gray-900 text-xl font-semibold ml-2 mt-2">{tour.title}</p>
            <p className="text-gray-500 my-3 ml-2">{tour.description}</p>
            <Link
              to="/book-now"
              onClick={() => window.scrollTo(0, 0)}
              state={{ tour: tour.title }}
              className="inline-block bg-indigo-600 px-6 py-2 font-medium rounded text-white hover:bg-indigo-700 transition"
            >
              Book Now
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ToursPreview;
