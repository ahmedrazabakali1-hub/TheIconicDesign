'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function ServicesHeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="src\assets\images\services-bg.jpg"
          alt="Digital solutions team"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-6"
      >
        {/* Small Tag */}
        <div className="flex justify-center items-center gap-2 text-orange-500 text-sm font-semibold uppercase tracking-widest mb-6">
          <Sparkles className="w-5 h-5" />
          Our Services
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Crafting digital solutions
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600">
            tailored to your vision.
          </span>
        </h1>
      </motion.div>
    </section>
  );
}