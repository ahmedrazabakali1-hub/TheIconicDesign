import React from 'react';
import { motion } from 'framer-motion';
import { Tag, Crown, Target } from 'lucide-react';

export default function AboutSection() {
  // Define features array (was missing!)
  const features = [
    {
      icon: <Tag className="w-6 h-6" />,
      title: 'Smart Pricing',
      desc: 'Premium quality doesn’t mean premium cost. We deliver exceptional value that fits your budget.',
      color: 'bg-orange-600',
    },
    {
      icon: <Crown className="w-6 h-6" />,
      title: 'Custom-Crafted Plans',
      desc: 'Every business is unique. That’s why we build strategies tailored specifically to your goals.',
      color: 'bg-orange-600',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Client-First Mindset',
      desc: 'Your success is our mission. We listen, adapt, and design to win your audience.',
      color: 'bg-orange-600',
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-gray-900 to-black">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Big Statement */}
          

          {/* Right: Animated Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: 'easeOut',
                }}
                viewport={{ once: true, margin: '-100px' }}
                className="group flex items-start space-x-4 p-5 rounded-xl bg-white bg-opacity-5 backdrop-blur-sm border border-gray-800 hover:border-orange-600 transition-all duration-300"
              >
                <div
                  className={`${feature.color} p-3 rounded-full text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Let’s shape your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
                vision into reality
              </span>
              .
            </h2>

            <p className="mt-6 text-base lg:text-lg text-gray-300 leading-relaxed max-w-lg">
              In today’s fast-moving digital landscape, staying relevant means staying ahead. 
              We’re obsessed with innovation — constantly exploring new tools, trends, and tactics 
              to give you a real edge. You’re not just hiring a service. You’re gaining a growth partner 
              fully invested in your long-term success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}