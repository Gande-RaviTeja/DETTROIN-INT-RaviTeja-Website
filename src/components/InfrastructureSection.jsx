import React from 'react';
import { motion } from 'framer-motion';

export default function InfrastructureSection({ onExploreInfrastructure }) {
  return (
    <section id="infrastructure" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2341] tracking-tight uppercase">
                INFRASTRUCTURE
              </h2>
              <div className="w-12 h-1 bg-[#D4AF37] rounded-full mt-3" />
            </div>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light">
              State-of-the-art facilities designed to inspire innovation and support well-being.
            </p>

            <div className="pt-2">
              <button
                onClick={onExploreInfrastructure}
                className="px-8 py-3 rounded-full bg-[#0B2341] hover:bg-[#07172B] text-white font-semibold text-sm transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                Explore More
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group border-4 border-white">
              <div className="relative h-[320px] sm:h-[420px] md:h-[480px] w-full overflow-hidden">
                <img
                  src="/auditorium-infrastructure.png"
                  alt="State-of-the-Art Auditorium and Lecture Hall Infrastructure"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0B2341]/20 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
