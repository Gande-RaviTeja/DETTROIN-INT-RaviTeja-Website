import React from 'react';
import { schoolInfo, navLinks } from '../data/schoolData';
import { Shield, ArrowUp, Send } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#061528] text-white border-t border-white/10 relative pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="flex items-center gap-3.5 group">
              <div className="p-1 rounded-xl bg-white border-2 border-[#D4AF37] shadow-lg group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/logo.png"
                  alt="Vasant Valley School Crest Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-wider text-lg font-bold uppercase text-white">
                  {schoolInfo.name}
                </span>
                <span className="text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase font-medium">
                  {schoolInfo.tagline}
                </span>
              </div>
            </a>

            <p className="text-gray-400 text-sm font-light leading-relaxed max-w-sm">
              Established in 1990, Vasant Valley School is dedicated to nurturing holistic growth, academic excellence, and ethical leadership in every student.
            </p>

            <div className="pt-2">
              <label className="block text-xs font-semibold text-[#D4AF37] uppercase mb-2">
                Subscribe to Newsletter
              </label>
              <div className="flex items-center gap-2 max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="w-full px-4 py-2.5 rounded-full bg-white/10 border border-white/15 text-white text-xs placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                />
                <button
                  aria-label="Subscribe"
                  className="w-10 h-10 rounded-full bg-[#D4AF37] hover:bg-[#C5A028] text-[#0B2341] flex items-center justify-center shrink-0 transition-all shadow-md"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-base text-white uppercase tracking-wider border-b border-[#D4AF37]/30 pb-2 inline-block">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300 font-light">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
                  >
                    <span>›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-base text-white uppercase tracking-wider border-b border-[#D4AF37]/30 pb-2 inline-block">
              CONTACT US
            </h4>
            <div className="space-y-3 text-xs text-gray-300 font-light leading-relaxed">
              <p>{schoolInfo.address}</p>
              <p>Phone: {schoolInfo.phone}</p>
              <p>Email: {schoolInfo.email}</p>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif font-bold text-base text-white uppercase tracking-wider border-b border-[#D4AF37]/30 pb-2 inline-block">
              FOLLOW US
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#0B2341] flex items-center justify-center text-gray-300 transition-all"
              >
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#0B2341] flex items-center justify-center text-gray-300 transition-all"
              >
                <FaInstagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#0B2341] flex items-center justify-center text-gray-300 transition-all"
              >
                <FaYoutube className="w-3.5 h-3.5" />
              </a>
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#0B2341] flex items-center justify-center text-gray-300 transition-all"
              >
                <FaLinkedinIn className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-light">
          <p>© 2026 Vasant Valley School. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-gray-200">Privacy Policy</a>
            <a href="#terms" className="hover:text-gray-200">Terms of Use</a>
            <a href="#sitemap" className="hover:text-gray-200">Sitemap</a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#0B2341] border border-[#D4AF37] text-[#D4AF37] shadow-xl hover:bg-[#D4AF37] hover:text-[#0B2341] flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Back to Top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
