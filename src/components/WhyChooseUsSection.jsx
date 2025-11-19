'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Gem, Headphones } from 'lucide-react';

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 text-orange-500 text-sm font-semibold uppercase tracking-widest"
        >
          <div className="w-2 h-2 rounded-full border-2 border-orange-500" />
          Why Choose Us
        </motion.div>

        {/* Main Content */}
        <div className="mt-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Crafting experiences,
              <span className="block">delivering success.</span>
            </h2>

            {/* Paragraph */}
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              Our commitment to quality and excellence is unparalleled. From the first 
              brainstorming session to the final product delivery, we ensure that every 
              step of the process is executed to perfection. You are not just getting a 
              service; you are getting a partner who is committed to your growth and success.
            </p>

            {/* Feature Points */}
            <div className="space-y-6">
              {/* Quality Assurance */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-900 bg-opacity-30 rounded-full flex items-center justify-center">
                  <Gem className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Quality Assurance</h3>
                  <p className="mt-1 text-gray-400">
                    Quality isn’t just a buzzword for us. It’s an integral part of our 
                    workflow, ensuring that all our deliverables meet the highest standards.
                  </p>
                </div>
              </div>

              {/* Professional Support */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-900 bg-opacity-30 rounded-full flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Professional Support</h3>
                  <p className="mt-1 text-gray-400">
                    We provide round-the-clock support to ensure smooth operation and 
                    quick resolution of any issues you might encounter.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href="/about"
              whileHover={{ x: 8 }}
              className="inline-flex items-center text-orange-400 font-medium hover:text-orange-300 transition-colors"
            >
              More About Us
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>

          {/* RIGHT: Circular Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px]">
              {/* Circular Cutout */}
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl border-8 border-gray-900">
                {/* Placeholder – Replace with your image */}
                <img
                    src="./images/trusted-by-section.jpg"
                    alt="Designer workspace"
                    className="w-full h-full object-cover"
                  />
              </div>

              {/* Client Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute bottom-8 -left-4 bg-gray-900 text-white px-6 py-4 rounded-lg shadow-xl border-l-4 border-red-600"
              >
                <p className="text-3xl font-bold">800+</p>
                <p className="text-sm text-gray-400">Happy Clients</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}