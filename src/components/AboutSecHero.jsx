'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, ArrowRight, Sparkles } from 'lucide-react';

export default function AboutSecHero() {
  return (
    <>
      {/* HERO BANNER */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image (replace later) */}
        <div className="absolute inset-0">
          <img
            src="src/assets/images/about-hero.jpg"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70" />
        </div>

        {/* Overlay Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white">
            About Us
          </h1>
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-24 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT: Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="src\assets\images\about-section.jpg"
                  alt="The Iconic Design team"
                  className="w-full h-auto object-cover"
                />
                {/* Optional overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />
              </div>
            </motion.div>

            {/* RIGHT: Text + Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-10"
            >
              {/* Headline */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Experience a new dimension of
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600">
                  digital excellence.
                </span>
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-300 leading-relaxed">
                Since our inception, we have been driven by one mission — to empower 
                businesses to achieve their full potential in the digital era. We’ve worked 
                with hundreds of clients across industries, delivering tailor-made solutions 
                that drive growth, boost engagement, and generate real value.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 py-8">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-orange-900 bg-opacity-30 rounded-xl">
                    <Star className="w-6 h-6 text-orange-400 fill-orange-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">400+</p>
                    <p className="text-sm text-gray-400">Five-star rating!</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-3 bg-pink-900 bg-opacity-30 rounded-xl">
                    <Users className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">98%</p>
                    <p className="text-sm text-gray-400">Client retention!</p>
                  </div>
                </div>
              </div>

              {/* Feature List */}
              <ul className="space-y-5">
                {[
                  'We provide a range of top-tier digital services under one roof.',
                  'Our team of professionals brings a wealth of industry experience.',
                  'We are dedicated to delivering superior quality in every project.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <ArrowRight className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Sparkles */}
              <div className="flex items-center gap-2 text-orange-400">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium">Excellence is not an act, but a habit.</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}