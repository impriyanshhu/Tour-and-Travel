import React from 'react';
import ToursPreview from '../components/ToursPreview.jsx';

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

      <ToursPreview/>
      
    </div>
  );
};

export default Tours;
