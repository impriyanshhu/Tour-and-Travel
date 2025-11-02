import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="bg-white text-gray-800">

      <section
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=60')",
        }}
        className="relative bg-cover bg-center bg-no-repeat text-white text-center"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center py-32 px-6 md:py-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            About Safi Seaside Tours
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Guiding Unforgettable Journeys Along Nova Scotia’s Coast
          </p>
        </motion.div>
      </section>

      <motion.section
        className="max-w-5xl mx-auto px-6 py-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">
          Welcome to Safi Seaside Tours
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          At <span className="font-semibold">Safi Seaside Tours</span>, we
          believe that travel is more than just sightseeing — it’s about
          connecting with people, stories, and the spirit of a place. Based in{" "}
          <span className="font-semibold">Halifax, Nova Scotia</span>, we offer
          private and small-group tours that highlight the breathtaking beauty
          and coastal charm of our region.
        </p>
        <p className="text-lg leading-relaxed">
          Whether you’re admiring the iconic{" "}
          <span className="font-semibold">Peggy’s Cove Lighthouse</span>,
          strolling through the colorful streets of{" "}
          <span className="font-semibold">Lunenburg</span>, or savoring fresh
          Nova Scotia lobster rolls by the ocean, every moment is crafted to be
          memorable.
        </p>
      </motion.section>

      <motion.section
        className="bg-gray-50 py-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Our Story</h2>
          <p className="text-lg leading-relaxed mb-4">
            Safi Seaside Tours was founded by <span className="font-semibold">Asif Safi</span>, a passionate
            traveler and multilingual guide with over <span className="font-semibold">15 years of global tourism experience</span>.
            His goal was to create a tour company that blends local insight, comfort, and genuine hospitality — showcasing Nova
            Scotia through a personal lens.
          </p>
          <p className="text-lg leading-relaxed">
            Today, Safi Seaside Tours has grown through word-of-mouth and guest
            referrals. Each tour is designed with care and delivered with
            warmth, ensuring that every visitor feels like a local and leaves
            with lasting memories.
          </p>
        </div>
      </motion.section>

      <motion.section
        className="max-w-5xl mx-auto px-6 py-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">Our Mission</h2>
        <p className="text-lg leading-relaxed mb-4">
          Our mission is simple: <span className="italic">To guide unforgettable journeys that celebrate the beauty, history,
          and spirit of Nova Scotia.</span>
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Authentic local experiences highlighting culture and community.</li>
          <li>Comfortable, safe travel with professional drivers.</li>
          <li>Personalized service tailored to your interests and pace.</li>
        </ul>
      </motion.section>

      <motion.section
        className="bg-gray-50 py-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1504807959081-3dafd3871909?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1176"
              alt="Asif Safi - Tour Guide"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">
              Meet Your Guide – Asif Safi
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Asif Safi is not just a tour guide — he’s your storyteller, local
              friend, and travel companion. Fluent in multiple languages, Asif
              has guided travelers from around the world with warmth, humor, and
              deep knowledge of Nova Scotia’s culture and history.
            </p>
            <p className="text-lg leading-relaxed">
              Guests often describe his tours as <span className="italic">fun, insightful, and full of local flavor</span>,
              making every trip feel like a journey with a trusted friend.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="max-w-5xl mx-auto px-6 py-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">
          Why Choose Safi Seaside Tours
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 text-lg">
          <li>Personalized Private Tours</li>
          <li>Local Expertise and Hidden Gems</li>
          <li>Comfortable SUVs and Door-to-Door Service</li>
          <li>Complimentary Nova Scotia Lobster Rolls</li>
          <li>Memorable, Authentic Experiences</li>
        </ul>
      </motion.section>

      <motion.section
        className="bg-blue-500 text-white py-16 text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">Join Us on the Journey</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Discover Nova Scotia with comfort, culture, and a touch of coastal
          magic. Let us show you the best of our home — one unforgettable moment
          at a time.
        </p>
        <Link
          to={"/tours"}
          onClick={()=>scrollTo(0,0)}
          className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Book Your Tour
        </Link>
      </motion.section>

    </div>
  );
};

export default About;
