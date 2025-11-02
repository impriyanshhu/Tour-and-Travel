import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
  };

  // Variants for container and items
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative p-8 bg-blue-50 min-h-screen">
      <motion.h2
        className="text-3xl font-bold text-center mb-6 text-blue-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Us
      </motion.h2>

      <motion.p
        className="text-center text-gray-600 mb-10 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Have questions or want to book a tour? Reach out to us anytime — we’d love to hear from you!
      </motion.p>

      <motion.div
        className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-2xl p-6"
          variants={itemVariants}
        >
          <label className="block mb-3">
            <span className="text-gray-700 font-semibold">Full Name</span>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            />
          </label>

          <label className="block mb-3">
            <span className="text-gray-700 font-semibold">Email</span>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            />
          </label>

          <label className="block mb-3">
            <span className="text-gray-700 font-semibold">Phone</span>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            />
          </label>

          <label className="block mb-3">
            <span className="text-gray-700 font-semibold">Message</span>
            <textarea
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </label>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-xl hover:bg-blue-800 transition"
          >
            Send Message
          </button>

          {status && (
            <p className="text-center text-sm text-gray-700 mt-3">{status}</p>
          )}
        </motion.form>

        {/* Info + Map */}
        <motion.div className="flex flex-col justify-center" variants={itemVariants}>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Get in Touch</h3>
            <p className="text-gray-700">
              📍 Halifax, Nova Scotia
              <br />
              📞 (902) 402-7263
              <br />
              ✉️ info@safiseasidetours.ca
            </p>
          </div>

          <a
            href="https://web.whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-6 bg-green-500 text-white px-5 py-2 rounded-xl hover:bg-green-600 transition"
          >
            Message Us on WhatsApp
          </a>

          <iframe
            title="Halifax Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11126.049353926755!2d-63.5738!3d44.6488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a21b1e92d21f5%3A0x6b1c4ea4e528f2c9!2sHalifax%2C%20Nova%20Scotia!5e0!3m2!1sen!2sca!4v1706562039158!5m2!1sen!2sca"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
