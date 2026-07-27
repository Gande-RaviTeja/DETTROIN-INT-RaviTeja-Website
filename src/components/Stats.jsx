import React, { useEffect, useState } from 'react';
import { statsData } from '../data/schoolData';
import { Calendar, Users, GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  Calendar: Calendar,
  Users: Users,
  GraduationCap: GraduationCap,
  Award: Award,
};

export default function Stats() {
  return (
    <div className="relative z-30 max-w-[1240px] mx-auto px-4 -mt-14 md:-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-stats-card rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl shadow-[#0B2341]/30 border border-[#D4AF37]/30 text-white"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {statsData.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Calendar;
            return (
              <div
                key={item.id}
                className={`flex items-center gap-4 ${
                  idx !== 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0 shadow-inner">
                  <IconComponent className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <div className="flex items-baseline font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                    <Counter target={item.number} />
                    <span className="text-[#D4AF37]">{item.suffix}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300 font-medium tracking-wide mt-0.5">
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

function Counter({ target }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count.toLocaleString()}</span>;
}
