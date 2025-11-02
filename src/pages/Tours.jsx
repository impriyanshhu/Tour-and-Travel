import React from 'react';
import { tours } from '../assets/data/tours.js';
import { motion } from 'framer-motion';

const Tours = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
    hover: { scale: 1.05, boxShadow: '0 20px 30px rgba(0,0,0,0.2)' },
  };

  return (
    <div className="bg-white text-gray-800">

      <section
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80')",
        }}
        className="relative bg-cover bg-center text-white text-center"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 py-32 px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Tours</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Explore Nova Scotia’s most breathtaking destinations with expert
            local guides.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="bg-white border rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 flex flex-col justify-between h-[300px]">
              <div>
                <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                  {tour.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Duration: {tour.duration}
                </p>
                <p className="text-gray-700 mb-4">{tour.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-lg text-gray-800">
                  {tour.price}
                </span>
                <a
                  href="/contact"
                  className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
                >
                  Book Now
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Tours;
