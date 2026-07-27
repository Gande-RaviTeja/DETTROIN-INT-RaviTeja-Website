import React, { useState, useEffect } from 'react';
import { navLinks, schoolInfo } from '../data/schoolData';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ onOpenLogin }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220 && rect.bottom >= 180) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const navOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-gray-100 text-[#0B2341]'
          : 'bg-gradient-to-b from-[#0B2341]/90 via-[#0B2341]/40 to-transparent py-4 text-white'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-3.5 group"
        >
          <div className="relative flex items-center justify-center p-1 rounded-xl bg-white shadow-lg group-hover:scale-105 transition-transform duration-300 border-2 border-[#D4AF37]">
            <img
              src="/logo.png"
              alt="Vasant Valley School Crest Logo"
              className="h-10 w-auto object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span
              className={`font-serif tracking-wider text-lg md:text-xl font-bold uppercase leading-tight ${
                scrolled ? 'text-[#0B2341]' : 'text-white'
              }`}
            >
              {schoolInfo.name}
            </span>
            <span className="text-[10px] md:text-[11px] tracking-[0.2em] text-[#D4AF37] font-medium uppercase">
              {schoolInfo.tagline}
            </span>
          </div>
        </a>

        <nav className="hidden xl:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative py-1 transition-colors duration-200 ${
                  scrolled
                    ? isActive
                      ? 'text-[#0B2341] font-bold'
                      : 'text-gray-600 hover:text-[#0B2341]'
                    : isActive
                    ? 'text-white font-bold'
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#D4AF37] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="hidden xl:flex items-center gap-4">
          <button
            onClick={onOpenLogin}
            className="px-6 py-2.5 rounded-full bg-[#D4AF37] hover:bg-[#C5A028] text-[#0B2341] font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
          >
            <span>Login / Portal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`xl:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-[#0B2341] hover:bg-gray-100' : 'text-white hover:bg-white/10'
          }`}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-[#0B2341] text-white border-t border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="py-2 text-base font-medium text-gray-200 hover:text-[#D4AF37] border-b border-white/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLogin();
                  }}
                  className="w-full py-3 rounded-full bg-[#D4AF37] hover:bg-[#C5A028] text-[#0B2341] font-bold text-center transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Login / Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
