import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, Trophy, GraduationCap, Medal } from 'lucide-react';
import { achievementsData } from '../data/schoolData';

export default function AchievementsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

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
              STUDENT ACHIEVEMENTS
            </h3>
            <p className="text-gray-300 text-xs font-light mt-1">
              Celebrating excellence in Academics, Sports, Olympiads and Placements.
            </p>
          </div>

          <div className="p-8 max-h-[60vh] overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievementsData.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8FAFC] border border-gray-200 p-6 rounded-2xl flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center shrink-0 border border-[#D4AF37]/30">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg text-[#0B2341]">{item.title}</h4>
                    <p className="text-xs text-gray-600 font-light mt-1 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
