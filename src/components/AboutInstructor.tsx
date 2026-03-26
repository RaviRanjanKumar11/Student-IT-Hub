import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import raviImage from '../images/Rv.png';

export default function AboutInstructor() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl -ml-32"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-4/5 rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
              <img 
                src={raviImage} 
                alt="Ravi Sir" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-gradient from-brand-primary/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-10 -right-10 bg-brand-primary text-white p-10 rounded-[2.5rem] shadow-2xl border-4 border-white z-20">
              <p className="text-3xl font-black tracking-tight">Ravi Sir</p>
              <p className="text-brand-secondary font-bold uppercase tracking-widest text-xs mt-2">Software Developer (SDE)</p>
            </div>
            {/* Decorative dots */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-brand-secondary/10 rounded-full blur-2xl"></div>
          </motion.div>

          <div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-secondary font-black tracking-[0.3em] uppercase text-xs"
            >
              Meet Your Mentor
            </motion.span>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-black text-brand-primary mt-4 mb-8 tracking-tighter"
            >
              PASSIONATE ABOUT <span className="text-brand-secondary">TECH</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-brand-muted mb-12 leading-relaxed font-medium"
            >
              With over 3 years of industry experience as a Software Developer, I bring real-world insights to the classroom. My goal is to bridge the gap between academic learning and industry requirements.
            </motion.p>

            <div className="grid gap-6">
              {[
                {
                  icon: GraduationCap,
                  title: "Qualification",
                  desc: "MCA (2025 Passout)",
                  color: "bg-blue-50 text-blue-600"
                },
                {
                  icon: Briefcase,
                  title: "Experience",
                  desc: "3+ Years in Software Development",
                  color: "bg-orange-50 text-orange-600"
                },
                {
                  icon: Award,
                  title: "Teaching Mode",
                  desc: "Interactive Online Virtual Classes",
                  color: "bg-cyan-50 text-cyan-600"
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center space-x-6 p-6 rounded-4xl bg-brand-surface border border-gray-100 hover:border-brand-secondary transition-all duration-500 group"
                >
                  <div className={`${item.color} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-500`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-brand-primary uppercase tracking-widest mb-1">{item.title}</h4>
                    <p className="text-brand-muted font-bold">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
