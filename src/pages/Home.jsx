import React from 'react';
import HeroBanner from '../components/HeroBanner';
import { Link } from 'react-router-dom';
import ToursPreview from '../components/ToursPreview';
import { testimonials } from '../assets/data/testimonials.js';
import TestimonialCard from '../components/TestimonialCard.jsx';
import Gallery from '../components/Gallery.jsx';
import { motion } from 'framer-motion';

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div>
      <HeroBanner />

      <motion.section
        className="py-16 px-6 md:px-20 bg-gray-50 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-700">
          Welcome to Safi Seaside Tours
        </h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          Experience the beauty, history, and charm of Nova Scotia with Safi
          Seaside Tours — your trusted local guide for private and small-group
          adventures. Each trip is crafted with care, offering genuine
          hospitality, local insight, and unforgettable coastal views.
        </p>
      </motion.section>

      <ToursPreview />

      <motion.section
        className="py-16 px-6 md:px-20 bg-gray-50 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold text-blue-700 mb-8">
          Why Choose Safi Seaside Tours
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-semibold mb-2">Expert Local Guide</h3>
            <p>
              Led by Asif Safi, an experienced multilingual guide with over 15
              years of global tourism experience.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-semibold mb-2">Comfort & Quality</h3>
            <p>
              Enjoy door-to-door pickup, comfortable vehicles, and complimentary
              Nova Scotia Lobster Rolls.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-semibold mb-2">Authentic Experiences</h3>
            <p>
              Discover the true charm of Nova Scotia through scenic, personalized
              tours made with care and passion.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <Gallery />

      <motion.section
        className="py-16 px-6 md:px-20 bg-gray-100 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold text-blue-700 mb-12">
          What Our Guests Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((review, idx) => (
            <motion.div key={idx} variants={fadeInUp}>
              <TestimonialCard text={review.text} name={review.name} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
