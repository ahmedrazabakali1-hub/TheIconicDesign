'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Code2, 
  Rocket, 
  Target, 
  Zap, 
  Shield 
} from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: <Palette className="w-7 h-7" />,
      title: 'UI/UX Design',
      desc: 'Stunning, user-centric interfaces that captivate and convert.',
      gradient: 'from-pink-500 to-purple-600',
      height: 'lg:h-64',
    },
    {
      icon: <Code2 className="w-7 h-7" />,
      title: 'Web Development',
      desc: 'Blazing-fast, scalable websites built with modern frameworks.',
      gradient: 'from-blue-500 to-cyan-600',
      height: 'lg:h-72',
    },
    {
      icon: <Rocket className="w-7 h-7" />,
      title: 'Digital Strategy',
      desc: 'Data-driven growth plans to dominate your market.',
      gradient: 'from-orange-500 to-red-600',
      height: 'lg:h-60',
    },
    {
      icon: <Target className="w-7 h-7" />,
      title: 'SEO & Marketing',
      desc: 'Rank higher, attract more, convert better.',
      gradient: 'from-green-500 to-emerald-600',
      height: 'lg:h-68',
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: 'Performance Optimization',
      desc: 'Lightning-speed load times and flawless UX.',
      gradient: 'from-yellow-500 to-amber-600',
      height: 'lg:h-64',
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: 'Security & Maintenance',
      desc: 'Rock-solid protection and 24/7 support.',
      gradient: 'from-indigo-500 to-purple-600',
      height: 'lg:h-72',
    },
  ];

  return (
    <section className="py-24 lg:py-36 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">

        {/* Section Tag – Animated Underline */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 text-orange-500 text-sm font-bold uppercase tracking-widest"
        >
          <div className="w-10 h-px bg-orange-500" />
          Our Services
          <div className="w-10 h-px bg-orange-500" />
        </motion.div>

        {/* Main Headline – Centered, Glowing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Crafting digital solutions
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 
              drop-shadow-lg">
              tailored to your unique business needs.
            </span>
          </h2>
        </motion.div>

        {/* Subtext – Italic, Faded */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 max-w-3xl mx-auto text-lg text-gray-400 italic"
        >
          We believe technology and design can transform businesses and propel them into the future. 
          We are your digital excellence partners, not just a digital agency.
        </motion.p>

        {/* Masonry Grid – 6 Cards, Random Heights */}
        <div className="mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
              className={`
                group relative p-8 rounded-2xl bg-gray-900 bg-opacity-50 backdrop-blur-sm 
                border border-gray-800 
                hover:bg-gray-800 hover:bg-opacity-70 
                transition-all duration-300 cursor-pointer
                flex flex-col justify-between
                ${service.height}
              `}
            >
              <div>
                {/* Icon */}
                <div
                  className={`
                    inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} 
                    text-white shadow-md
                  `}
                >
                  {service.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center text-sm font-medium text-orange-400 
                  hover:text-orange-300 transition-colors self-start"
              >
                Learn more
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}