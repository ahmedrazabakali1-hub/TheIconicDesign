'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function ContactHeroSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="src\assets\images\contact-bg.jpg"
          alt="Team collaboration"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90" />
      </div>

      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center"
      >
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Let's Start Something
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600">
            Great Together
          </span>
        </h1>
      </motion.div>

      {/* Contact Cards */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="relative z-10 mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {/* Phone */}
        <div className="p-6 bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl border border-gray-800 text-center hover:bg-gray-800 hover:bg-opacity-80 transition-all duration-300">
          <div className="inline-flex p-4 bg-gradient-to-br from-red-600 to-orange-600 rounded-full text-white shadow-lg mb-4">
            <Phone className="w-6 h-6" />
          </div>
          <p className="text-white font-semibold">(765) 203-1409 ext. 800</p>
          <p className="text-gray-400 text-sm mt-1">Phone Number</p>
        </div>

        {/* Email */}
        <div className="p-6 bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl border border-gray-800 text-center hover:bg-gray-800 hover:bg-opacity-80 transition-all duration-300">
          <div className="inline-flex p-4 bg-gradient-to-br from-red-600 to-orange-600 rounded-full text-white shadow-lg mb-4">
            <Mail className="w-6 h-6" />
          </div>
          <p className="text-white font-semibold">contact@theiconicdesign.com</p>
          <p className="text-gray-400 text-sm mt-1">Email Address</p>
        </div>

        {/* Business Hours */}
        <div className="p-6 bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl border border-gray-800 text-center hover:bg-gray-800 hover:bg-opacity-80 transition-all duration-300">
          <div className="inline-flex p-4 bg-gradient-to-br from-red-600 to-orange-600 rounded-full text-white shadow-lg mb-4">
            <Clock className="w-6 h-6" />
          </div>
          <p className="text-white font-semibold">Mon - Fri. 9:00pm - 6:00am</p>
          <p className="text-gray-400 text-sm mt-1">Business Hours</p>
        </div>

        {/* Office Address */}
        <div className="p-6 bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl border border-gray-800 text-center hover:bg-gray-800 hover:bg-opacity-80 transition-all duration-300">
          <div className="inline-flex p-4 bg-gradient-to-br from-red-600 to-orange-600 rounded-full text-white shadow-lg mb-4">
            <MapPin className="w-6 h-6" />
          </div>
          <p className="text-white font-semibold"> 17350 State Hwy 249, Suite-220 Houston, TX 77064</p>
          <p className="text-gray-400 text-sm mt-1">Office Address</p>
        </div>
      </motion.div>
    </section>
  );
}