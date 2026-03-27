import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { courses } from '../constants';
import { toast } from 'sonner';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      toast.success('Enquiry sent successfully! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', course: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-black text-brand-secondary uppercase tracking-[0.4em] mb-4">Get In Touch</h2>
            <h3 className="text-5xl font-black text-brand-primary mb-10 tracking-tighter">START YOUR JOURNEY</h3>
            <p className="text-xl text-gray-600 mb-12 font-medium">
              Have questions about our courses or teaching methodology? Fill out the form and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-10">
              <div className="flex items-center space-x-6">
                <div className="bg-brand-secondary/10 p-5 rounded-2xl">
                  <Phone className="w-8 h-8 text-brand-secondary" />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-300 uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-xl font-black text-brand-primary">+91 6200771962</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="bg-brand-accent/10 p-5 rounded-2xl">
                  <Mail className="w-8 h-8 text-brand-accent" />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-300 uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-xl font-black text-brand-primary">ravi.r.kr.9199@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="bg-brand-primary/10 p-5 rounded-2xl">
                  <MapPin className="w-8 h-8 text-brand-primary" />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-300 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-xl font-black text-brand-primary">Online / Virtual Classes</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 sm:p-14 rounded-[40px] border-4 border-gray-50 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-black text-brand-primary uppercase tracking-widest mb-3">Name</label>
                  <input 
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-brand-secondary outline-none transition-all font-bold text-brand-primary"
                    placeholder="Mr Kumar"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-brand-primary uppercase tracking-widest mb-3">Email</label>
                  <input 
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-brand-secondary outline-none transition-all font-bold text-brand-primary"
                    placeholder="ravi.r.kr.9199@gmail.com"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-black text-brand-primary uppercase tracking-widest mb-3">Phone</label>
                  <input 
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-brand-secondary outline-none transition-all font-bold text-brand-primary"
                    placeholder="+91 6200771962"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-brand-primary uppercase tracking-widest mb-3">Course</label>
                  <select 
                    required
                    value={formData.course}
                    onChange={(e) => setFormData({...formData, course: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-brand-secondary outline-none transition-all font-bold text-brand-primary appearance-none bg-white"
                  >
                    <option value="">Select a course</option>
                    {courses.map(c => (
                      <option key={c.id} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-black text-brand-primary uppercase tracking-widest mb-3">Message</label>
                <textarea 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-brand-secondary outline-none transition-all font-bold text-brand-primary resize-none"
                  placeholder="Tell us about your learning goals..."
                ></textarea>
              </div>
              <button 
                disabled={status === 'submitting'}
                type="submit"
                className="w-full bg-brand-primary text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-indigo-900 transition-all flex items-center justify-center space-x-3 disabled:opacity-50 shadow-xl shadow-indigo-200"
              >
                {status === 'submitting' ? (
                  <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : status === 'success' ? (
                  <span>Sent Successfully!</span>
                ) : (
                  <>
                    <span>Submit Enquiry</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
