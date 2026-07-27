import React from 'react';
import { motion } from 'framer-motion';

export default function HighlightBanners({ onOpenJourney, onOpenAchievements }) {
  return (
    <section className="pb-20 bg-[#F8FAFC]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative min-h-[340px] rounded-3xl overflow-hidden shadow-xl group cursor-pointer flex items-center"
            onClick={onOpenJourney}
          >
            <img
              src="/dalai-lama-event.png"
              alt="A Legacy of Excellence - His Holiness Dalai Lama at Vasant Valley School"
              className="absolute inset-0 w-full h-full object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B2341]/95 via-[#0B2341]/80 to-transparent" />

            <div className="relative z-10 p-8 sm:p-10 md:p-12 max-w-md space-y-4 text-left my-auto">
              <div>
                <h3 className="font-serif font-bold text-2xl md:text-3xl text-white tracking-wide uppercase leading-tight">
                  A LEGACY OF EXCELLENCE
                </h3>
                <div className="w-12 h-1 bg-[#D4AF37] rounded-full mt-2.5" />
              </div>

              <p className="text-gray-200 text-sm md:text-base font-light leading-relaxed">
                Over three decades of shaping confident, compassionate and capable leaders who make a difference.
              </p>

              <div className="pt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenJourney();
                  }}
                  className="px-8 py-3 rounded-full bg-white hover:bg-gray-100 text-[#0B2341] font-bold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Our Journey
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative min-h-[340px] rounded-3xl bg-white border border-gray-200 p-8 sm:p-10 shadow-xl flex items-center justify-between overflow-hidden group cursor-pointer"
            onClick={onOpenAchievements}
          >
            <div className="relative z-10 space-y-4 max-w-[65%] text-left">
              <div>
                <h3 className="font-serif font-bold text-2xl md:text-3xl text-[#0B2341] tracking-wide uppercase leading-tight">
                  STUDENT ACHIEVEMENTS
                </h3>
                <div className="w-12 h-1 bg-[#D4AF37] rounded-full mt-2.5" />
              </div>

              <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed">
                Celebrating the accomplishments that make us proud every day.
              </p>

              <div className="pt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenAchievements();
                  }}
                  className="px-8 py-3 rounded-full bg-[#0B2341] hover:bg-[#07172B] text-white font-bold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  View Achievements
                </button>
              </div>
            </div>

            <div className="relative w-36 h-36 md:w-44 md:h-44 shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <svg viewBox="0 0 200 240" className="w-full h-full drop-shadow-2xl">
                <defs>
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FCE074" />
                    <stop offset="50%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#8A6E10" />
                  </linearGradient>
                  <linearGradient id="woodGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#4A2511" />
                    <stop offset="100%" stopColor="#241005" />
                  </linearGradient>
                </defs>
                <rect x="45" y="190" width="110" height="35" rx="5" fill="url(#woodGradient)" stroke="#110500" strokeWidth="2" />
                <rect x="35" y="215" width="130" height="15" rx="3" fill="#1A0A03" />
                <rect x="75" y="175" width="50" height="15" fill="url(#goldGradient)" />

                <path d="M50 70 C15 70 15 130 55 140" fill="none" stroke="url(#goldGradient)" strokeWidth="12" strokeLinecap="round" />
                <path d="M150 70 C185 70 185 130 145 140" fill="none" stroke="url(#goldGradient)" strokeWidth="12" strokeLinecap="round" />

                <path d="M50 45 L150 45 C150 120 125 160 100 175 C75 160 50 120 50 45 Z" fill="url(#goldGradient)" />

                <polygon points="100,70 105,85 120,85 107,95 112,110 100,100 88,110 93,95 80,85 95,85" fill="#FFFFFF" opacity="0.9" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
