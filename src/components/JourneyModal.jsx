import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, CheckCircle2, Star } from 'lucide-react';

export default function JourneyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const timeline = [
    { year: '1990', title: 'Foundation', detail: 'Founded by eminent educationists under the guidance of Mr. Arun Poorie and the Today Group, establishing a pioneering vision for experiential education in New Delhi.' },
    { year: '1998', title: 'First Batch Graduated', detail: 'Achieved 100% distinction in CBSE Board Examinations, sending scholars to top global universities.' },
    { year: '2008', title: 'STEAM & Innovation Expansion', detail: 'Built state-of-the-art robotics, environmental research, and multimedia art studios.' },
    { year: '2018', title: 'Ranked No. 1 Day School', detail: 'Recognized as India’s top Co-Ed Day School by EducationWorld for academic excellence and student care.' },
    { year: '2026', title: 'Global Future-Ready Campus', detail: 'Pioneering AI literacy, sustainable green energy, and international student exchange programs.' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md p-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 my-8"
        >
          <div className="bg-[#0B2341] text-white p-8 relative">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-12 h-1 bg-[#D4AF37] rounded-full mb-3" />
            <h3 className="font-serif text-3xl font-bold uppercase tracking-wide">
              OUR 35-YEAR LEGACY
            </h3>
            <p className="text-gray-300 text-xs font-light mt-1">
              Shaping confident, compassionate and capable leaders since 1990.
            </p>
          </div>

          <div className="p-8 max-h-[60vh] overflow-y-auto space-y-6">
            {timeline.map((item) => (
              <div key={item.year} className="flex items-start gap-4 relative">
                <div className="px-3 py-1.5 rounded-xl bg-[#0B2341] text-[#D4AF37] font-bold text-sm shrink-0 shadow-md">
                  {item.year}
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-lg text-[#0B2341]">{item.title}</h4>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-gray-50 border-t border-gray-100 text-center">
            <button
              onClick={onClose}
              className="px-8 py-2.5 rounded-full bg-[#0B2341] text-white text-xs font-semibold uppercase tracking-wider"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
