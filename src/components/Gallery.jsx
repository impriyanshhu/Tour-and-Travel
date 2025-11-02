import React from 'react'
import { motion } from "framer-motion";
import { galleryImages } from '../assets/data/gallery.js'

const Gallery = () => {
  return (
    <section className="container mx-auto pt-24 pb-16">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
        Scenic Moments & Experiences
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {galleryImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl shadow-lg group"
          >
            <img
              src={img.src}
              alt={img.caption}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {img.caption}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Gallery;
