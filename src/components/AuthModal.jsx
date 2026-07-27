import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, GraduationCap, UserCheck, Lock, Mail, User, BookOpen, KeyRound, CheckCircle2, ArrowRight, Shield } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export default function AuthModal({ isOpen, onClose }) {
  const [userRole, setUserRole] = useState('student');
  const [authMode, setAuthMode] = useState('login');
  const [submittedMessage, setSubmittedMessage] = useState('');

  const [studentLoginForm, setStudentLoginForm] = useState({ studentId: '', password: '', remember: false });
  const [studentSignupForm, setStudentSignupForm] = useState({ fullName: '', admissionNo: '', grade: 'Grade 10', email: '', password: '', confirmPassword: '' });

  const [teacherLoginForm, setTeacherLoginForm] = useState({ staffId: '', department: 'Science', password: '', remember: false });
  const [teacherSignupForm, setTeacherSignupForm] = useState({ fullName: '', employeeId: '', department: 'Mathematics', email: '', phone: '', password: '', confirmPassword: '' });

  if (!isOpen) return null;

  const handleStudentLogin = (e) => {
    e.preventDefault();
    setSubmittedMessage(`Welcome back, Student (${studentLoginForm.studentId || 'Aarav Sharma'})! Logging into Student Dashboard...`);
    setTimeout(() => {
      setSubmittedMessage('');
      onClose();
    }, 2500);
  };

  const handleStudentSignup = (e) => {
    e.preventDefault();
    setSubmittedMessage(`Registration successful for ${studentSignupForm.fullName || 'Student'}! Verification email sent.`);
    setTimeout(() => {
      setSubmittedMessage('');
      setAuthMode('login');
    }, 2500);
  };

  const handleTeacherLogin = (e) => {
    e.preventDefault();
    setSubmittedMessage(`Welcome back, Professor / Mentor (${teacherLoginForm.staffId || 'Dr. Sharma'})! Accessing Faculty Portal...`);
    setTimeout(() => {
      setSubmittedMessage('');
      onClose();
    }, 2500);
  };

  const handleTeacherSignup = (e) => {
    e.preventDefault();
    setSubmittedMessage(`Faculty Account Created for ${teacherSignupForm.fullName || 'Teacher'}! Pending Admin Verification.`);
    setTimeout(() => {
      setSubmittedMessage('');
      setAuthMode('login');
    }, 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md p-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative max-w-xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 my-6"
        >
          <div className="bg-[#0B2341] text-white p-6 md:p-8 relative">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-2">
              <div className="p-1 bg-white rounded-lg border border-[#D4AF37]">
                <img src="/logo.png" alt="Logo" className="h-7 w-auto object-contain" />
              </div>
              <span className="text-xs text-[#D4AF37] tracking-[0.2em] uppercase font-bold">
                VASANT VALLEY SCHOOL PORTAL
              </span>
            </div>

            <h3 className="font-serif text-2xl md:text-3xl font-bold uppercase tracking-wide">
              {userRole === 'student' ? 'Student Portal' : 'Faculty Portal'}
            </h3>
            <p className="text-xs text-gray-300 font-light mt-1">
              {userRole === 'student'
                ? authMode === 'login'
                  ? 'Sign in to access your student dashboard, class schedules, assignments, and exam results.'
                  : 'Register your student profile to access learning resources and official school updates.'
                : authMode === 'login'
                  ? 'Sign in to manage gradebooks, attendance, lesson plans, and faculty communications.'
                  : 'Create your faculty account for academic management and department access.'}
            </p>

            <div className="flex rounded-2xl bg-white/10 p-1.5 mt-6 border border-white/15">
              <button
                type="button"
                onClick={() => {
                  setUserRole('student');
                  setSubmittedMessage('');
                }}
                className={`flex-1 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 ${userRole === 'student'
                  ? 'bg-[#D4AF37] text-[#0B2341] shadow-md'
                  : 'text-gray-300 hover:text-white'
                  }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>Student Portal</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setUserRole('teacher');
                  setSubmittedMessage('');
                }}
                className={`flex-1 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 ${userRole === 'teacher'
                  ? 'bg-[#D4AF37] text-[#0B2341] shadow-md'
                  : 'text-gray-300 hover:text-white'
                  }`}
              >
                <UserCheck className="w-4 h-4" />
                <span>Teacher / Faculty</span>
              </button>
            </div>
          </div>

          <div className="px-8 pt-6 flex items-center justify-between border-b border-gray-100 pb-3">
            <div className="flex gap-6">
              <button
                onClick={() => {
                  setAuthMode('login');
                  setSubmittedMessage('');
                }}
                className={`pb-2 text-sm font-bold transition-all relative ${authMode === 'login' ? 'text-[#0B2341]' : 'text-gray-400 hover:text-gray-600'
                  }`}
              >
                <span>Sign In</span>
                {authMode === 'login' && (
                  <motion.div layoutId="authSubTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37]" />
                )}
              </button>

              <button
                onClick={() => {
                  setAuthMode('signup');
                  setSubmittedMessage('');
                }}
                className={`pb-2 text-sm font-bold transition-all relative ${authMode === 'signup' ? 'text-[#0B2341]' : 'text-gray-400 hover:text-gray-600'
                  }`}
              >
                <span>Create Account</span>
                {authMode === 'signup' && (
                  <motion.div layoutId="authSubTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37]" />
                )}
              </button>
            </div>

            <span className="text-[11px] font-semibold text-[#D4AF37] uppercase tracking-wider">
              {userRole === 'student' ? 'Student ID Access' : 'Staff Credentials'}
            </span>
          </div>

          <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto">
            {submittedMessage ? (
              <div className="py-10 text-center space-y-4">
                <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto animate-bounce" />
                <h4 className="font-serif text-xl font-bold text-[#0B2341]">{submittedMessage}</h4>
              </div>
            ) : (
              <>
                {userRole === 'student' && authMode === 'login' && (
                  <form onSubmit={handleStudentLogin} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">
                        Student ID / Admission No. *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          value={studentLoginForm.studentId}
                          onChange={(e) => setStudentLoginForm({ ...studentLoginForm, studentId: e.target.value })}
                          placeholder="e.g. VVS-2024-8912"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2341]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">
                        Password *
                      </label>
                      <div className="relative">
                        <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                        <input
                          type="password"
                          required
                          value={studentLoginForm.password}
                          onChange={(e) => setStudentLoginForm({ ...studentLoginForm, password: e.target.value })}
                          placeholder="••••••••"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2341]"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1">
                      <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                        <input
                          type="checkbox"
                          checked={studentLoginForm.remember}
                          onChange={(e) => setStudentLoginForm({ ...studentLoginForm, remember: e.target.checked })}
                          className="rounded border-gray-300 text-[#0B2341] focus:ring-[#0B2341]"
                        />
                        <span>Remember Student Session</span>
                      </label>
                      <a href="#forgot" className="text-[#0B2341] font-semibold hover:underline">
                        Forgot Password?
                      </a>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-[#0B2341] hover:bg-[#07172B] text-white font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2 mt-2"
                    >
                      <span>Sign In as Student</span>
                      <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                    </button>
                  </form>
                )}

                {userRole === 'student' && authMode === 'signup' && (
                  <form onSubmit={handleStudentSignup} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">
                          Student Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={studentSignupForm.fullName}
                          onChange={(e) => setStudentSignupForm({ ...studentSignupForm, fullName: e.target.value })}
                          placeholder="e.g. Aarav Poorie"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2341]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">
                          Admission / Roll No. *
                        </label>
                        <input
                          type="text"
                          required
                          value={studentSignupForm.admissionNo}
                          onChange={(e) => setStudentSignupForm({ ...studentSignupForm, admissionNo: e.target.value })}
                          placeholder="e.g. VVS-1049"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2341]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">
                          Current Grade / Section
                        </label>
                        <select
                          value={studentSignupForm.grade}
                          onChange={(e) => setStudentSignupForm({ ...studentSignupForm, grade: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2341]"
                        >
                          <option>Nursery / Prep</option>
                          <option>Primary (Grades 1-5)</option>
                          <option>Middle School (Grades 6-8)</option>
                          <option>Grade 9</option>
                          <option>Grade 10</option>
                          <option>Grade 11</option>
                          <option>Grade 12</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">
                          Student Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={studentSignupForm.email}
                          onChange={(e) => setStudentSignupForm({ ...studentSignupForm, email: e.target.value })}
                          placeholder="aarav@vasantvalley.edu.in"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2341]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">
                          Create Password *
                        </label>
                        <input
                          type="password"
                          required
                          value={studentSignupForm.password}
                          onChange={(e) => setStudentSignupForm({ ...studentSignupForm, password: e.target.value })}
                          placeholder="••••••••"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2341]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">
                          Confirm Password *
                        </label>
                        <input
                          type="password"
                          required
                          value={studentSignupForm.confirmPassword}
                          onChange={(e) => setStudentSignupForm({ ...studentSignupForm, confirmPassword: e.target.value })}
                          placeholder="••••••••"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2341]"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-[#D4AF37] hover:bg-[#C5A028] text-[#0B2341] font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2 mt-2"
                    >
                      <span>Create Student Account</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}

                {userRole === 'teacher' && authMode === 'login' && (
                  <form onSubmit={handleTeacherLogin} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">
                        Staff Employee ID / Official Email *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          value={teacherLoginForm.staffId}
                          onChange={(e) => setTeacherLoginForm({ ...teacherLoginForm, staffId: e.target.value })}
                          placeholder="e.g. staff.sharma@vasantvalley.edu.in"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2341]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">
                          Faculty Department
                        </label>
                        <select
                          value={teacherLoginForm.department}
                          onChange={(e) => setTeacherLoginForm({ ...teacherLoginForm, department: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2341]"
                        >
                          <option>Sciences & Research</option>
                          <option>Mathematics & Computing</option>
                          <option>English & Literature</option>
                          <option>Social Sciences & MUN</option>
                          <option>Performing Arts & Music</option>
                          <option>Physical Education & Sports</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">
                          Faculty Password *
                        </label>
                        <div className="relative">
                          <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                          <input
                            type="password"
                            required
                            value={teacherLoginForm.password}
                            onChange={(e) => setTeacherLoginForm({ ...teacherLoginForm, password: e.target.value })}
                            placeholder="••••••••"
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2341]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1">
                      <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                        <input
                          type="checkbox"
                          checked={teacherLoginForm.remember}
                          onChange={(e) => setTeacherLoginForm({ ...teacherLoginForm, remember: e.target.checked })}
                          className="rounded border-gray-300 text-[#0B2341] focus:ring-[#0B2341]"
                        />
                        <span>Keep Teacher Session Active</span>
                      </label>
                      <a href="#forgot-staff" className="text-[#0B2341] font-semibold hover:underline">
                        Reset Faculty Access
                      </a>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-[#0B2341] hover:bg-[#07172B] text-white font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2 mt-2"
                    >
                      <span>Sign In to Teacher Portal</span>
                      <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                    </button>
                  </form>
                )}

                {userRole === 'teacher' && authMode === 'signup' && (
                  <form onSubmit={handleTeacherSignup} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">
                          Full Name with Title *
                        </label>
                        <input
                          type="text"
                          required
                          value={teacherSignupForm.fullName}
                          onChange={(e) => setTeacherSignupForm({ ...teacherSignupForm, fullName: e.target.value })}
                          placeholder="e.g. Dr. Rajeshwari Sen"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2341]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">
                          Staff / Employee Code *
                        </label>
                        <input
                          type="text"
                          required
                          value={teacherSignupForm.employeeId}
                          onChange={(e) => setTeacherSignupForm({ ...teacherSignupForm, employeeId: e.target.value })}
                          placeholder="e.g. VVS-FAC-209"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2341]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">
                          Teaching Subject / Dept
                        </label>
                        <select
                          value={teacherSignupForm.department}
                          onChange={(e) => setTeacherSignupForm({ ...teacherSignupForm, department: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2341]"
                        >
                          <option>Physics & Chemistry</option>
                          <option>Biology & Biotechnology</option>
                          <option>Mathematics & Statistics</option>
                          <option>Computer Science & AI</option>
                          <option>Economics & Business Studies</option>
                          <option>History & Political Science</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">
                          Official School Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={teacherSignupForm.email}
                          onChange={(e) => setTeacherSignupForm({ ...teacherSignupForm, email: e.target.value })}
                          placeholder="faculty@vasantvalley.edu.in"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2341]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">
                          Create Staff Password *
                        </label>
                        <input
                          type="password"
                          required
                          value={teacherSignupForm.password}
                          onChange={(e) => setTeacherSignupForm({ ...teacherSignupForm, password: e.target.value })}
                          placeholder="••••••••"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2341]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">
                          Confirm Password *
                        </label>
                        <input
                          type="password"
                          required
                          value={teacherSignupForm.confirmPassword}
                          onChange={(e) => setTeacherSignupForm({ ...teacherSignupForm, confirmPassword: e.target.value })}
                          placeholder="••••••••"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2341]"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-[#D4AF37] hover:bg-[#C5A028] text-[#0B2341] font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2 mt-2"
                    >
                      <span>Register Faculty Account</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
