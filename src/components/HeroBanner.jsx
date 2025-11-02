import React from 'react'
import { motion } from "framer-motion";
import banner from '../assets/herobanner.jpg'
import { Link } from 'react-router-dom';

const HeroBanner = () => {
    return (
        <section
            className="bg-cover bg-center h-[80vh] flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${banner})` }}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative text-center p-8 rounded-lg z-10"
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-sky-800">
                    Guiding Unforgettable Journeys
                </h1>
                <p className="text-lg md:text-2xl mb-6 text-slate-600">
                    Explore the beauty, history, and charm of Nova Scotia with Safi Seaside Tours.
                </p>

                <Link
                    to="/tours"
                    onClick={() => scrollTo(0, 0)}
                    className="bg-transparent px-6 py-3 rounded-sm border-2 border-sky-700 text-sky-900 hover:text-white hover:bg-sky-700 transition-colors"
                >
                    Explore Tours
                </Link>
            </motion.div>
        </section>

    )
}

export default HeroBanner
