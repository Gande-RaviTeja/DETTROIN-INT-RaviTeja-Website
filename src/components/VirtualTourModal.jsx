import React from 'react';
import { X, Play, MapPin, Compass } from 'lucide-react';

export default function VirtualTourModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between px-6 py-4 bg-[#0B2341] text-white">
          <div className="flex items-center gap-2">
            <Compass className="w-6 h-6 text-[#D4AF37]" />
            <h2 className="text-xl font-bold font-serif">360° Interactive Campus Virtual Tour</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-gray-300 rounded-full hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6">
          <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900 flex items-center justify-center group border border-slate-200">
            <img
              src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80"
              alt="Campus View"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2341]/80 via-transparent to-transparent flex flex-col justify-end p-6">
              <span className="text-[#D4AF37] font-semibold text-sm flex items-center gap-1">
                <MapPin className="w-4 h-4" /> Main Academic Block & Central Courtyard
              </span>
              <h3 className="text-white text-xl font-bold">Vasant Valley School Campus</h3>
            </div>
            <button className="absolute p-4 rounded-full bg-[#D4AF37] text-[#0B2341] shadow-lg hover:scale-110 transition-transform flex items-center justify-center">
              <Play className="w-8 h-8 fill-current ml-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="font-semibold text-[#0B2341] mb-1">Science & Tech Labs</h4>
              <p className="text-xs text-gray-600">Advanced robotics, chemistry, and physics labs equipped with modern instruments.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="font-semibold text-[#0B2341] mb-1">Sports Complex</h4>
              <p className="text-xs text-gray-600">Olympic-size swimming pool, basketball courts, and indoor sports arena.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="font-semibold text-[#0B2341] mb-1">Central Library</h4>
              <p className="text-xs text-gray-600">Over 25,000+ titles, quiet study bays, and digital research terminals.</p>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#0B2341] text-white hover:bg-[#061528] font-medium transition-colors"
          >
            Close Tour
          </button>
        </div>
      </div>
    </div>
  );
}
