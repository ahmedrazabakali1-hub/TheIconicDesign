'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Alex Morgan',
      role: 'CEO, TechFlow',
      content: 'The Iconic Design transformed our outdated platform into a sleek, high-performance system. Our user engagement increased by 180% in just 3 months.',
      rating: 5,
      image: "./images/Alex-Morgan.webp"
    },
    {
      name: 'Sofia Chen',
      role: 'Creative Director, Nova Studio',
      content: 'Working with this team feels like having an in-house design and dev powerhouse. They don’t just deliver — they overdeliver with creativity and precision.',
      rating: 5,
      image: "./images/Sofia-Chen.jpg"
    },
    {
      name: 'James Carter',
      role: 'Founder, Pulse Analytics',
      content: 'From strategy to launch, every step was seamless. Their attention to detail and proactive communication made all the difference.',
      rating: 5,
      image: "./images/James-Carter.webp"
    },
  ];

  return (
    <section className="py-24 lg:py-36 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Tag – Matches "Our Services" */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-3 text-orange-500 text-sm font-bold uppercase tracking-widest"
        >
          <div className="w-2 h-2 rounded-full border-2 border-orange-500" />
          Testimonials
        </motion.div>

        {/* Testimonial Cards – 3-Column Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
              className={`
                group relative p-8 rounded-2xl bg-gray-900 bg-opacity-50 backdrop-blur-sm 
                border border-gray-800 
                hover:bg-gray-800 hover:bg-opacity-70 
                transition-all duration-300 cursor-default
              `}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-gray-700 opacity-50" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-orange-400 text-orange-400"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 leading-relaxed italic">
                "{t.content}"
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src={t.image} 
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                  <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}