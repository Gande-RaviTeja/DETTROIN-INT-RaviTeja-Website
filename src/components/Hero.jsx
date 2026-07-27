import React, { useState, useEffect } from 'react';
import { FileText, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
  { url: '/hero-1-gate.jpg', alt: 'Vasant Valley School Entrance Gate Archway' },
  { url: '/hero-2-art-room-new.jpg', alt: 'Vasant Valley Humanity Unmuted Art Studio' },
  { url: '/hero-3-vasant-mural-new.png', alt: 'Vasant Valley Students at Campus Ribbon Installation' },
  { url: '/hero-4-assembly-new.jpg', alt: 'Vasant Valley School Assembly Grounds & Students' },
  { url: '/hero-5-science-lab.png', alt: 'Vasant Valley Synapse Science Quiz & Lab' },
];

export default function Hero({ onOpenEnquire, onDiscoverClick }) {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#071527]">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentBgIndex}
            src={heroImages[currentBgIndex].url}
            alt={heroImages[currentBgIndex].alt}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="w-full h-full object-cover object-center absolute inset-0 filter brightness-95 contrast-105"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2341]/90 via-[#0B2341]/45 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2341]/80 via-transparent to-black/30 z-10" />
      </div>

      <div className="relative z-20 max-w-[1400px] w-full mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="max-w-2xl text-left text-white pt-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase leading-[0.95] text-white drop-shadow-lg mb-6">
              IGNITING <br />
              <span className="text-white">EXCELLENCE</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-100 font-light leading-relaxed max-w-xl mb-10 border-l-2 border-[#D4AF37] pl-4 drop-shadow">
              Empowering learners to be compassionate, innovative and future-ready global citizens.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onDiscoverClick}
                className="px-8 py-3.5 rounded-full bg-[#D4AF37] hover:bg-[#C5A028] text-[#0B2341] font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Discover VVS
              </button>

              <button
                onClick={onOpenEnquire}
                className="px-6 py-3.5 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-md border border-white/40 text-white font-medium text-base transition-all duration-300 flex items-center gap-3 group hover:-translate-y-1 shadow-lg"
              >
                <span>Admission Enquiry</span>
                <div className="w-7 h-7 rounded-full bg-white text-[#0B2341] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 fill-none stroke-[#0B2341] stroke-[2.5]" />
                </div>
              </button>
            </div>
          </motion.div>
        </div>

        <div className="hidden md:flex flex-col items-center gap-2 z-20">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentBgIndex(idx)}
              className={`w-2.5 transition-all duration-500 rounded-full ${
                currentBgIndex === idx
                  ? 'h-8 bg-[#D4AF37] shadow-lg shadow-[#D4AF37]/50'
                  : 'h-2.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/80 hover:text-white transition-colors"
      >
        <span className="text-xs tracking-widest uppercase font-medium drop-shadow">Scroll</span>
        <ChevronDown className="w-5 h-5 text-[#D4AF37]" />
      </motion.a>
    </section>
  );
}
