import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import PixelBlast from './PixelBlast';


export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-900">
      {/* Full-screen GIF Background */}
      <div className="absolute inset-0">
 
<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <div className="relative h-full flex items-center justify-center overflow-hidden bg-transparent text-white">
      {/* Shooting Stars – Close to right of text */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-0.5 bg-white opacity-80 transform rotate-[-45deg] animate-shoot"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${40 + Math.random() * 20}%`, // Close to right of text (40-60%)
              animationDelay: `${i * 1}s`,
              animationDuration: '3s',
            }}
          />
        ))}
      </div>

      {/* Spheres – Close to right of text */}
      <div className="absolute top-10 left-[70%] w-32 h-32 rounded-full bg-gradient-to-br from-pink-400 to-red-500 shadow-2xl animate-float" />
      <div className="absolute bottom-20 left-[60%] w-48 h-48 rounded-full bg-gradient-to-br from-pink-400 to-red-500 shadow-2xl animate-float animation-delay-2000" />
      <div className="absolute bottom-21 left-[68%] w-60 h-60 rounded-full bg-gradient-to-br from-pink-400 to-red-500 shadow-2xl animate-float animation-delay-2000" />
      <div className="absolute top-40 left-[60%] w-24 h-24 rounded-full bg-gradient-to-br from-pink-400 to-red-500 shadow-2xl animate-float animation-delay-1000" />
      <div className="absolute bottom-10 left-[50%] w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-red-500 shadow-2xl animate-float animation-delay-3000" />

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
    </div>
</div>
        <div className="absolute inset-0 bg-black bg-opacity-70" />
      </div>

      {/* Left-aligned Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-md text-left">
          {/* Pre-title */}
          <p className="text-xs font-semibold text-orange-400 tracking-widest uppercase flex items-center">
            <Zap className="w-3.5 h-3.5 mr-1.5 animate-pulse" />
            Power Your Growth
          </p>

          {/* Main Headline */}
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Unified
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">
              Digital Solutions
            </span>
            Under One Roof.
          </h1>

          {/* Subtext */}
          <p className="mt-5 text-base text-gray-300 leading-relaxed">
            Collaborate with innovators to turn vision into reality. Build faster, scale smarter, and dominate digitally.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="/contact"
              className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-medium text-sm rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <Zap className="w-4 h-4 mr-2" />
              Get Started Now
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/services"
              className="inline-flex items-center px-6 py-3 text-white font-medium text-sm border border-gray-500 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300"
            >
              View Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-9 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}