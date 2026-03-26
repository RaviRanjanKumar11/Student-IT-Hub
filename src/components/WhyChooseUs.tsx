import React from 'react';
import { motion } from 'motion/react';
import { Zap, ShieldCheck, Target, Users2, Clock, Headphones } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Fast-Track Learning",
    description: "Our curriculum is designed to get you industry-ready in the shortest possible time without compromising on depth."
  },
  {
    icon: ShieldCheck,
    title: "Verified Certification",
    description: "Get a recognized certificate upon completion of your course and projects, signed by Ravi Sir."
  },
  {
    icon: Target,
    title: "Project-Based Approach",
    description: "We don't just teach theory. You'll build real-world projects that you can showcase in your portfolio."
  },
  {
    icon: Users2,
    title: "Expert Mentorship",
    description: "Learn directly from Ravi Sir (SDE) who brings years of industry experience to the classroom."
  },
  {
    icon: Clock,
    title: "Flexible Batches",
    description: "We offer multiple batch timings to suit your schedule, whether you're a student or a working professional."
  },
  {
    icon: Headphones,
    title: "Lifetime Support",
    description: "Join our exclusive community and get lifetime access to doubt-clearing sessions and career guidance."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 bg-brand-surface relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-secondary font-black tracking-[0.3em] uppercase text-xs"
          >
            Why Choose Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-brand-primary mt-4 tracking-tighter"
          >
            ELEVATE YOUR <span className="text-brand-secondary">TECH JOURNEY</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-muted mt-6 max-w-2xl mx-auto font-medium"
          >
            We provide more than just coding classes. We provide a path to excellence in the tech industry.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-10 rounded-[2.5rem] hover:bg-white transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-primary/5 flex items-center justify-center mb-8 group-hover:bg-brand-secondary group-hover:text-white transition-colors duration-500">
                <feature.icon className="w-7 h-7 text-brand-secondary group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-black text-brand-primary mb-4 tracking-tight group-hover:text-brand-secondary transition-colors duration-500">
                {feature.title}
              </h3>
              <p className="text-brand-muted leading-relaxed font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
