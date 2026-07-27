import React, { useState } from 'react';
import { schoolInfo } from '../data/schoolData';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: 'Nursery / Prep',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', grade: 'Nursery / Prep', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <span className="text-[#D4AF37] font-semibold text-xs tracking-[0.2em] uppercase block mb-2">
                GET IN TOUCH
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2341] tracking-tight uppercase">
                CONTACT US
              </h2>
              <div className="w-16 h-1 bg-[#D4AF37] rounded-full mt-3" />
            </div>

            <div className="space-y-6 text-gray-600">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 flex items-center justify-center text-[#0B2341] shrink-0">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B2341] text-base mb-1">School Location</h4>
                  <p className="text-sm font-light leading-relaxed">{schoolInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 flex items-center justify-center text-[#0B2341] shrink-0">
                  <Phone className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B2341] text-base mb-1">Call Us</h4>
                  <p className="text-sm font-light leading-relaxed">{schoolInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 flex items-center justify-center text-[#0B2341] shrink-0">
                  <Mail className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B2341] text-base mb-1">Email Enquiries</h4>
                  <p className="text-sm font-light leading-relaxed">{schoolInfo.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 flex items-center justify-center text-[#0B2341] shrink-0">
                  <Clock className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B2341] text-base mb-1">Visiting Hours</h4>
                  <p className="text-sm font-light leading-relaxed">
                    Monday – Saturday: 8:00 AM – 3:30 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md h-52 relative">
              <iframe
                title="Vasant Valley School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.5786196238836!2d77.1558231!3d28.5223019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1e1fa4662d5f%3A0xcf958f2fb2bc5312!2sVasant%20Valley%20School!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter grayscale shadow-inner"
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-[#F8FAFC] p-8 md:p-12 rounded-3xl border border-gray-200 shadow-lg"
          >
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#0B2341] mb-2">
              Send us a Message
            </h3>
            <p className="text-gray-500 text-sm mb-8 font-light">
              Fill out the form below and our admissions team will respond within 24 hours.
            </p>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-8 rounded-2xl text-center space-y-3"
              >
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-serif text-xl font-bold">Thank You!</h4>
                <p className="text-sm text-emerald-700">
                  Your enquiry has been received. Our team will contact you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2341] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rahul@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2341] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2341] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">
                      Grade Seeking Admission
                    </label>
                    <select
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2341] focus:border-transparent transition-all"
                    >
                      <option>Nursery / Early Years</option>
                      <option>Primary School (Grades 1-5)</option>
                      <option>Middle School (Grades 6-8)</option>
                      <option>Senior School (Grades 9-12)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">
                    Message / Special Requirements
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your query here..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2341] focus:border-transparent transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#0B2341] hover:bg-[#07172B] text-white font-bold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Submit Enquiry</span>
                  <Send className="w-4 h-4 text-[#D4AF37]" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
