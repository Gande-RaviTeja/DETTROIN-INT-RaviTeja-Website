import React from 'react';
import { motion } from 'framer-motion';
import ScratchRevealLogo from './ScratchRevealLogo';

export default function WelcomeAbout({ onExploreMore }) {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <span className="text-[#D4AF37] font-semibold text-sm tracking-[0.25em] uppercase block mb-2">
                WELCOME TO
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2341] tracking-tight uppercase leading-tight">
                VASANT VALLEY SCHOOL
              </h2>
            </div>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl font-light">
              At Vasant Valley School, we believe in nurturing each child's unique potential through a holistic education that blends academic excellence with creativity, critical thinking and strong values.
            </p>

            <div className="pt-2">
              <button
                onClick={onExploreMore}
                className="px-8 py-3 rounded-full bg-[#0B2341] hover:bg-[#07172B] text-white font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                Explore More
              </button>
            </div>
          </motion.div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ScratchRevealLogo
              imageSrc="/welcome-scratchpad-bg.png"
              maskColor="#C8CCD4"
              brushRadius={28}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
