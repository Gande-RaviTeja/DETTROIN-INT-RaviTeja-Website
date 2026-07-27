import React from 'react';
import { motion } from 'framer-motion';

export default function AdmissionsBanner({ onOpenEnquire }) {
  return (
    <section id="admissions" className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-[#0B2341] rounded-3xl overflow-hidden shadow-2xl border border-white/10 text-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[340px]">
            <div className="lg:col-span-6 p-8 md:p-14 space-y-6 z-10">
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase leading-tight text-white">
                  ADMISSIONS OPEN 2025–26
                </h2>
                <div className="w-16 h-1 bg-[#D4AF37] rounded-full mt-3" />
              </div>

              <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed max-w-lg">
                Join a community that inspires excellence and shapes the leaders of tomorrow.
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenEnquire}
                  className="px-9 py-3.5 rounded-full bg-[#D4AF37] hover:bg-[#C5A028] text-[#0B2341] font-bold text-base shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  Enquire Now
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-[260px] lg:h-full min-h-[300px]">
              <div className="absolute inset-0 lg:clip-angled-right overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
                  alt="Vasant Valley School Students Reading Book"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B2341] via-transparent to-transparent lg:hidden" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
