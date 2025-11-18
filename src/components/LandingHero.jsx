'use client';

import React from 'react';

export default function LandingEffect() {
  return (
    <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-transparent text-white">
      {/* Shooting Stars – Mostly right */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-0.5 bg-white opacity-80 transform rotate-[-45deg] animate-shoot"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${50 + Math.random() * 50}%`, // Mostly right (50-100%)
              animationDelay: `${i * 1}s`,
              animationDuration: '3s',
            }}
          />
        ))}
      </div>

      {/* Spheres – Mostly right */}
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-pink-400 to-red-500 shadow-2xl animate-float" />
      <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-gradient-to-br from-pink-400 to-red-500 shadow-2xl animate-float animation-delay-2000" />
      <div className="absolute bottom-20 right-20 w-54 h-54 rounded-full bg-gradient-to-br from-pink-400 to-red-500 shadow-2xl animate-float animation-delay-2000" />
      <div className="absolute top-40 right-5 w-24 h-24 rounded-full bg-gradient-to-br from-pink-400 to-red-500 shadow-2xl animate-float animation-delay-1000" />
      <div className="absolute bottom-10 right-40 w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-red-500 shadow-2xl animate-float animation-delay-3000" />

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        @keyframes shoot {
          0% { transform: translateX(-200px) translateY(200px) rotate(-45deg); opacity: 1; }
          100% { transform: translateX(200px) translateY(-200px) rotate(-45deg); opacity: 0; }
        }
        .animate-shoot {
          animation: shoot 3s linear infinite;
        }
      `}</style>
    </section>
  );
}