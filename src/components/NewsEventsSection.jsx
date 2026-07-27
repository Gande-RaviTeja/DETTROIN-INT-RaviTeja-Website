import React from 'react';
import { newsEvents } from '../data/schoolData';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NewsEventsSection({ onSelectNews, onViewAllNews }) {
  return (
    <section id="news" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2341] tracking-tight uppercase">
              LATEST NEWS & EVENTS
            </h2>
            <div className="w-12 h-1 bg-[#D4AF37] rounded-full mt-3" />
          </div>

          <button
            onClick={onViewAllNews}
            className="flex items-center gap-2 text-sm font-semibold text-[#0B2341] hover:text-[#D4AF37] transition-colors group"
          >
            <span>View All</span>
            <div className="w-8 h-8 rounded-full border border-gray-300 group-hover:border-[#D4AF37] flex items-center justify-center transition-colors">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsEvents.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              onClick={() => onSelectNews(item)}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer hover:-translate-y-1"
            >
              <div className="relative h-60 sm:h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover ${item.objectPosition || 'object-top'} group-hover:scale-105 transition-transform duration-500`}
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-md bg-[#0B2341] text-white text-[11px] font-bold tracking-wider uppercase shadow-md">
                  {item.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="font-serif font-bold text-xl text-[#0B2341] group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-light line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 text-xs font-semibold text-[#0B2341] group-hover:text-[#D4AF37] flex items-center gap-1.5 transition-colors">
                  <span>Read Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
