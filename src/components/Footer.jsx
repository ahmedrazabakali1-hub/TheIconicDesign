'use client';

import React from 'react';
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-12 border-b border-gray-700 pb-10">

        {/* ---------- BRAND INFO ---------- */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img 
            src="src/assets/images/logo.png" 
            alt="Logo" 
            className="w-8 h-8 object-contain"
          />
            <h2 className="text-xl font-bold text-white">The Iconic Design</h2>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            We blend creativity & precision to craft exceptional digital experiences. From design to strategy — we elevate your brand identity with passion and innovation.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-5">
            <a href="#" className="hover:text-white transition"><Facebook size={18} /></a>
            <a href="#" className="hover:text-white transition"><Twitter size={18} /></a>
            <a href="#" className="hover:text-white transition"><Linkedin size={18} /></a>
            <a href="#" className="hover:text-white transition"><Instagram size={18} /></a>
          </div>
        </div>

        {/* ---------- USEFUL INFO ---------- */}
        <div>
          <h3 className="text-white font-semibold mb-4">USEFUL INFO</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="/about" className="hover:text-white flex items-center space-x-2">
                <span className="text-pink-500">›</span>
                <span>About us</span>
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white flex items-center space-x-2">
                <span className="text-pink-500">›</span>
                <span>Services</span>
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white flex items-center space-x-2">
                <span className="text-pink-500">›</span>
                <span>Contact us</span>
              </a>
            </li>
          </ul>
        </div>

        {/* ---------- CONTACT INFO ---------- */}
        <div>
          <h3 className="text-white font-semibold mb-4">CONTACT INFO</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2">
              <Phone size={16} className="text-pink-500" />
              <span>(765) 203-1409 ext. 800</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={16} className="text-pink-500" />
              <span>contact@theiconicdesign.com</span>
            </li>
            <li className="flex items-start space-x-2">
              <MapPin size={16} className="text-pink-500 mt-1" />
              <span> 17350 State Hwy 249, Suite-220 Houston, TX 77064</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ---------- COPYRIGHT ---------- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6 flex justify-between items-center text-sm text-gray-400">
        <p>© 2025 The Iconic Design. All rights reserved.</p>
        <a href="#" className="hover:text-white transition">
          ↑
        </a>
      </div>
    </footer>
  );
}
