import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'sonner';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      toast.success('Successfully subscribed to our newsletter!');
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl shadow-indigo-900/20"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-brand-secondary font-bold tracking-widest uppercase text-sm"
              >
                Stay Updated
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-black text-white mt-4 tracking-tighter leading-none"
              >
                JOIN OUR <span className="text-brand-secondary">NEWSLETTER</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-indigo-100 mt-6 text-lg font-medium max-w-md"
              >
                Get the latest tech news, course updates, and career tips delivered straight to your inbox.
              </motion.p>
            </div>

            <div>
              {subscribed ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl text-center"
                >
                  <div className="w-16 h-16 bg-brand-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Send className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-white text-2xl font-black tracking-tight mb-2">Thank You!</h3>
                  <p className="text-indigo-100 font-medium">You've successfully subscribed to our newsletter.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-6 py-5 text-white placeholder:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-brand-secondary transition-all font-bold"
                  />
                  <button
                    type="submit"
                    className="bg-brand-secondary text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-orange-600/20 active:scale-95"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
