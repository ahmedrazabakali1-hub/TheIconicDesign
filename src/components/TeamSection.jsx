'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Star } from 'lucide-react';

export default function TeamSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white overflow-hidden">
      {/* ---------- MAIN CONTENT ---------- */}
      <div className="relative py-16 lg:py-24">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* LEFT – TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Meet the
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600">
                  Iconic Crew
                </span>
                behind every masterpiece.
              </h1>

              <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
                Designers, developers, strategists, and visionaries united by one goal:
                turning bold ideas into digital realities that dominate markets.
              </p>

              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all"
                >
                  Work With Us
                  <Zap className="ml-2 w-5 h-5" />
                </a>
              </div>

              <div className="mt-12">
                <div className="flex justify-center lg:justify-start space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <blockquote className="mt-6 max-w-lg mx-auto lg:mx-0">
                  <p className="text-lg font-semibold">
                    “The most creative and reliable team I’ve ever partnered with.”
                  </p>
                  <p className="mt-2 text-sm text-gray-400">
                    — Maya Patel, CEO of PixelPulse
                  </p>
                </blockquote>
                <div className="flex items-center justify-center lg:justify-start mt-4">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img 
                    src="src/assets/images/Maya-Patel.jpg"
                    alt="Maya Patel"
                    className="w-full h-full object-cover"
                  />
                </div>
                    <p className="ml-3 font-medium">Maya Patel</p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT – STACKED IMAGE TILES */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >
              <div className="space-y-6 max-w-md w-full">
                {/* TOP IMAGE */}
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="src\assets\images\teams-section.jpg"
                    alt="Team working together"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* BOTTOM IMAGE */}
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="src\assets\images\teams-section-two.jpg"
                    alt="Designer workspace"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
