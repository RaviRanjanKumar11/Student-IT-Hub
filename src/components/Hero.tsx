import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 bg-brand-surface relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center space-x-3 bg-white border border-gray-100 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-10 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-secondary"></span>
            </span>
            <span className="text-brand-primary">Live Interactive Classes</span>
          </div>
          <h1 className="text-7xl sm:text-8xl font-black text-brand-primary leading-[0.85] mb-10 tracking-tighter">
            MASTER <br />
            <span className="text-brand-secondary">TECH</span> <br />
            WITH <span className="brand-gradient-text">EXPERTS</span>
          </h1>
          <p className="text-xl text-brand-muted mb-12 max-w-lg leading-relaxed font-medium">
            Join Student IT Hub and learn from Ravi Sir (SDE). Get hands-on training, real-time projects, and doubt sessions to kickstart your tech career.
          </p>
          
          <div className="flex flex-wrap gap-6 mb-16">
            <a href="#courses" className="brand-button-secondary group">
              Explore Courses
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="brand-button-primary">
              Enquire Now
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {[
              "Weekly Tests",
              "Doubt Sessions",
              "Real-Time Projects",
              "Hands-on Practice"
            ].map((item) => (
              <div key={item} className="flex items-center space-x-4 text-xs font-black text-brand-primary uppercase tracking-widest">
                <div className="bg-brand-accent/10 p-2 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="aspect-square rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(15,23,42,0.25)] relative z-10 border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000" 
              alt="Coding" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-transparent"></div>
          </div>
          
          {/* Floating Stats Card */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute -bottom-10 -right-4 glass-card p-8 rounded-[2rem] z-20 max-w-[220px]"
          >
            <p className="text-4xl font-black text-brand-primary tracking-tighter">3+ Years</p>
            <p className="text-[10px] font-black text-brand-muted uppercase tracking-[0.2em] mt-2">Industry Experience</p>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-brand-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -right-20 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
}
