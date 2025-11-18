'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, DollarSign, MessageSquare, ChevronDown } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interest: '',
    budget: '',
    message: '',
    consent: false,
  });

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
};

  const handleCheckbox = () => {
    setFormData(prev => ({ ...prev, consent: !prev.consent }));
  };

  return (
    <section className="py-24 lg:py-32 bg-black">
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
          Contact Us
        </motion.div>

        {/* Main Grid */}
        <div className="mt-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Let’s collaborate to give your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600">
                business meaningful and unforgettable brand identity.
              </span>
            </h2>

            <p className="text-lg text-gray-300">
              Thinking of giving your brand a complete makeover? Talk to our design gurus today and 
              discuss your project in depth.
            </p>

            <form className="mt-10 space-y-5">
              {/* Name & Email */}
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-5 py-3 bg-gray-900 bg-opacity-50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-3 bg-gray-900 bg-opacity-50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              {/* Phone */}
              <div className="flex gap-2">
                <div className="relative">
                  <select
                    name="countryCode"
                    className="appearance-none bg-gray-900 bg-opacity-50 border border-gray-800 rounded-lg pl-4 pr-10 py-3 text-white focus:outline-none focus:border-orange-500"
                  >
                    <option>+92</option>
                    <option>+1</option>
                    <option>+44</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex-1 px-5 py-3 bg-gray-900 bg-opacity-50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              {/* Interest */}
              <select
  name="interest"
  value={formData.interest}
  onChange={handleChange}
  required
  className="w-full px-5 py-3 bg-gray-900 bg-opacity-50 border border-gray-900 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all duration-300 appearance-none cursor-pointer"
>
  <option value="" disabled>I am interested in</option>
  <option value="Logo Design">Logo Design</option>
  <option value="Web Design">Web Design</option>
  <option value="Branding">Branding</option>
  <option value="Full Package">Full Package</option>
</select>

              {/* Budget */}
              <input
                type="text"
                name="budget"
                placeholder="Forecasted Budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-gray-900 bg-opacity-50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Talk about your project"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-5 py-3 bg-gray-900 bg-opacity-50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors resize-none"
              />

              {/* Consent */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={handleCheckbox}
                  className="mt-1 w-5 h-5 text-orange-500 bg-gray-900 border-gray-700 rounded focus:ring-orange-500"
                />
                <span className="text-sm text-gray-400">
                  Please check the box to communicate via SMS or email (PRIVACY POLICY & TERMS & CONDITIONS - Carrier charges may apply for SMS. Reply stop or unsubscribe to stop unsubscribe anytime.)
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                Submit Request
              </button>
            </form>
          </motion.div>



        </div>
      </div>
    </section>
  );
}