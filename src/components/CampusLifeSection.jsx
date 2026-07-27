import React from 'react';
import { campusLifeCategories } from '../data/schoolData';
import { motion } from 'framer-motion';

export default function CampusLifeSection({ onExploreLife }) {
  return (
    <section id="campus-life" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 space-y-6"
          >
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2341] tracking-tight uppercase">
                CAMPUS LIFE
              </h2>
              <div className="w-12 h-1 bg-[#D4AF37] rounded-full mt-3" />
            </div>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light">
              A vibrant campus that offers endless opportunities to explore, create and excel.
            </p>

            <div className="pt-2">
              <button
                onClick={onExploreLife}
                className="px-8 py-3 rounded-full bg-[#0B2341] hover:bg-[#07172B] text-white font-semibold text-sm transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                Explore Life at VVS
              </button>
            </div>
          </motion.div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {campusLifeCategories.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                onClick={onExploreLife}
                className="relative h-[360px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg group cursor-pointer border border-gray-200"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2341]/90 via-[#0B2341]/30 to-transparent flex flex-col justify-end p-6" />

                <div className="relative z-10 text-center">
                  <h3 className="font-serif text-xl font-bold text-white tracking-wide drop-shadow-md">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
