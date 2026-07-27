import React, { useState } from 'react';
import { testimonials } from '../data/schoolData';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#D4AF37] font-semibold text-xs tracking-[0.2em] uppercase block mb-2">
            VOICES OF OUR COMMUNITY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2341] tracking-tight uppercase">
            TESTIMONIALS
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] rounded-full mx-auto mt-3" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-8 md:p-14 shadow-xl border border-gray-100 relative text-center flex flex-col items-center"
            >
              <Quote className="w-14 h-14 text-[#D4AF37]/20 absolute top-8 left-8" />

              <div className="flex gap-1 text-[#D4AF37] mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4AF37]" />
                ))}
              </div>

              <p className="font-serif text-lg md:text-2xl text-[#0B2341] italic leading-relaxed max-w-2xl mb-8 font-medium">
                "{current.quote}"
              </p>

              <div className="flex flex-col items-center gap-3">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#D4AF37] shadow-md"
                />
                <div>
                  <h4 className="font-bold text-[#0B2341] text-base">{current.name}</h4>
                  <p className="text-xs text-gray-500">{current.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md hover:bg-[#0B2341] hover:text-white flex items-center justify-center text-[#0B2341] transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === i ? 'bg-[#D4AF37] w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md hover:bg-[#0B2341] hover:text-white flex items-center justify-center text-[#0B2341] transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
