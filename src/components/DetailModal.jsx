import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, CheckCircle, Shield } from 'lucide-react';
import { academicsDetail } from '../data/schoolData';

export default function DetailModal({ isOpen, type, data, onClose, onOpenEnquire }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md p-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 my-8"
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
              {type === 'academics' && 'ACADEMIC PROGRAMMES & CURRICULUM'}
              {type === 'campus-life' && 'LIFE AT VASANT VALLEY SCHOOL'}
              {type === 'infrastructure' && 'WORLD-CLASS INFRASTRUCTURE'}
              {type === 'news' && data?.title}
              {type === 'about' && 'ABOUT VASANT VALLEY SCHOOL'}
            </h3>
          </div>

          <div className="p-8 max-h-[65vh] overflow-y-auto space-y-6">
            {type === 'academics' && (
              <div className="space-y-8">
                {academicsDetail.map((section, idx) => (
                  <div key={idx} className="bg-[#F8FAFC] border border-gray-200 p-6 rounded-2xl space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                        {section.tag}
                      </span>
                    </div>
                    <h4 className="font-serif font-bold text-xl text-[#0B2341]">{section.level}</h4>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">{section.description}</p>
                    <div className="pt-2">
                      <h5 className="text-xs font-bold text-[#0B2341] uppercase mb-2">Key Subjects & Focus Areas:</h5>
                      <div className="flex flex-wrap gap-2">
                        {section.subjects.map((sub) => (
                          <span key={sub} className="px-3 py-1 bg-white border border-gray-200 text-xs text-gray-700 rounded-full font-medium">
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {type === 'campus-life' && (
              <div className="space-y-6">
                <p className="text-gray-600 text-base font-light leading-relaxed">
                  Life at Vasant Valley School extends beyond textbooks. Students participate in inter-house drama competitions, annual music festivals, robotics championships, Model United Nations, and state-level athletic leagues.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-200">
                    <h4 className="font-bold text-[#0B2341] mb-2">Arts & Performing Studios</h4>
                    <p className="text-xs text-gray-500 font-light">Dedicated spaces for Indian classical dance, western instrumental music, pottery, and contemporary theater.</p>
                  </div>
                  <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-200">
                    <h4 className="font-bold text-[#0B2341] mb-2">Sports Academies</h4>
                    <p className="text-xs text-gray-500 font-light">Professional coaching in Lawn Tennis, Football, Basketball, Swimming, Cricket, and Athletics.</p>
                  </div>
                </div>
              </div>
            )}

            {type === 'infrastructure' && (
              <div className="space-y-6">
                <p className="text-gray-600 text-base font-light leading-relaxed">
                  Our 8-acre eco-friendly campus features modern architecture, air-filtered interactive smart classrooms, zero-emission green power generation, and comprehensive student safety protocols.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-gray-200 text-center">
                    <h4 className="font-bold text-[#0B2341] text-sm">Central Library</h4>
                    <p className="text-xs text-gray-500 mt-1">25,000+ physical volumes & digital research archives.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-gray-200 text-center">
                    <h4 className="font-bold text-[#0B2341] text-sm">STEAM Innovation Lab</h4>
                    <p className="text-xs text-gray-500 mt-1">3D Printers, Robotics Kits, and AI workstations.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-gray-200 text-center">
                    <h4 className="font-bold text-[#0B2341] text-sm">Medical Center</h4>
                    <p className="text-xs text-gray-500 mt-1">24/7 trained pediatric nursing staff and emergency protocols.</p>
                  </div>
                </div>
              </div>
            )}

            {type === 'news' && data && (
              <div className="space-y-4">
                <img src={data.image} alt={data.title} className="w-full h-64 object-cover rounded-2xl shadow-md" />
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-md bg-[#0B2341] text-white text-xs font-bold">{data.category}</span>
                  <span className="text-xs text-gray-500">{data.date}</span>
                </div>
                <p className="text-gray-700 text-base font-light leading-relaxed">
                  {data.fullContent || data.description}
                </p>
              </div>
            )}

            {type === 'about' && (
              <div className="space-y-4 text-gray-600 font-light leading-relaxed">
                <p>
                  Vasant Valley School was established in 1990 as a self-financing day school with a commitment to offering holistic education. The school aims to encourage intellectual curiosity and foster critical thinking skills in every student.
                </p>
                <h4 className="font-bold text-[#0B2341] text-base pt-2">Mission & Vision</h4>
                <p>
                  Our vision is to empower learners to be compassionate, innovative, and future-ready global citizens. We maintain small class sizes to ensure personalized attention and mentorship for every child.
                </p>
              </div>
            )}
          </div>

          <div className="p-6 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-full border border-gray-300 text-xs font-semibold text-gray-600 hover:bg-gray-100"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenEnquire();
              }}
              className="px-8 py-2.5 rounded-full bg-[#D4AF37] hover:bg-[#C5A028] text-[#0B2341] font-bold text-xs shadow-md"
            >
              Enquire For Admission
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
