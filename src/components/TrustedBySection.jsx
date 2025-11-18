'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function TrustedBySection() {
  // Replace with your real client logos later
  const clients = [
    { name: 'Blake Star', logo: 'src/assets/images/Blake-Star.webp' },
    { name: 'Nick & Joan', logo: 'src/assets/images/Nick-and-Joan.webp' },
    { name: 'Dalton', logo: 'src/assets/images/Dalton.webp' },
    { name: 'Vurnis', logo: 'src/assets/images/Vurnis.webp' },
    { name: 'Tandreas Bike', logo: 'src/assets/images/Andreas-Bike.webp' },
    { name: 'Huston', logo: 'src/assets/images/Huston.webp' },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Trusted By Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm font-medium uppercase tracking-widest"
        >
          We are trusted by thousands of clients
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center items-center gap-12 lg:gap-16 grayscale opacity-70"
        >
          {clients.map((client, i) => (
            <div
              key={i}
              className="h-10 w-auto flex items-center justify-center hover:opacity-100 transition-opacity"
            >
              
              <img src={client.logo} alt={client.name} className="h-12" />
            </div>
          ))}
        </motion.div>

        {/* Key Benefits Panel + Images */}
        <div className="mt-24 grid lg:grid-cols-3 gap-0 relative">

          {/* LEFT: Background Image */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-full lg:w-1/3">
            <img
              src="/trusted-left.jpg"
              alt="Team member"
              className="h-full w-full object-cover"
            />
          </div>

          {/* CENTER: Red-Orange Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative z-10 bg-gradient-to-br from-red-700 to-orange-600 p-10 lg:p-12 text-white col-span-1 lg:col-span-1"
          >
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest mb-6">
              <div className="w-2 h-2 rounded-full border-2 border-white" />
              Key Benefits
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold leading-tight mb-6">
              Competitive pricing for
              <span className="block">exceptional value.</span>
            </h3>

            <p className="text-white text-opacity-90 mb-8 leading-relaxed">
              Our client-centric approach, coupled with our dedication to 
              delivering exceptional results, ensures that your business stands 
              out, attracting attention and driving engagement.
            </p>

            <ul className="space-y-4">
              {[
                'Access to a team of seasoned industry professionals.',
                'High-quality deliverables ensuring client satisfaction.',
                'Timely project completion with no compromise.',
                'Ongoing support and assistance after completion.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm lg:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT: Background Image */}
          <div className="hidden lg:block absolute inset-y-0 right-0 w-full lg:w-1/3">
            <img
              src="src\assets\images\about-teams.jpg"
              alt="Workspace"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}