import React from 'react';
import { pillarCards } from '../data/schoolData';
import { GraduationCap, UserCheck, Users, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  GraduationCap: GraduationCap,
  UserCheck: UserCheck,
  Users: Users,
  ShieldCheck: ShieldCheck,
};

export default function Pillars({ onSelectPillar }) {
  return (
    <section id="pillars" className="pb-20 bg-[#F8FAFC]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillarCards.map((card, idx) => {
            const IconComp = iconMap[card.icon] || GraduationCap;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => onSelectPillar(card)}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center cursor-pointer group hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#0B2341] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="w-16 h-16 rounded-full bg-[#F8FAFC] border border-gray-200 flex items-center justify-center text-[#0B2341] group-hover:bg-[#0B2341] group-hover:text-[#D4AF37] group-hover:border-[#0B2341] transition-all duration-300 mb-6 shadow-inner">
                  <IconComp className="w-7 h-7 stroke-[1.5]" />
                </div>

                <h3 className="font-serif font-bold text-lg md:text-xl text-[#0B2341] mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {card.title}
                </h3>

                <p className="text-[#64748B] text-sm leading-relaxed font-light">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
