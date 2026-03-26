import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: "Ravi Sir",
    role: "Founder & Lead Instructor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    bio: "Software Developer with 3+ years of experience. Passionate about teaching and building scalable systems."
  },
  {
    name: "Anjali Singh",
    role: "Frontend Specialist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    bio: "Expert in React and modern UI/UX design. Helping students build beautiful web interfaces."
  },
  {
    name: "Vikram Raj",
    role: "Backend Architect",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    bio: "Specializes in Python, Java, and Cloud infrastructure. Focused on teaching robust backend development."
  }
];

export default function Team() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-secondary font-black tracking-[0.3em] uppercase text-xs"
          >
            Our Experts
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-brand-primary mt-4 tracking-tighter"
          >
            MEET THE <span className="text-brand-secondary">TEAM</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative mb-8">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex space-x-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <a href="#" className="text-brand-primary hover:text-brand-secondary transition-colors"><Github className="w-5 h-5" /></a>
                  <a href="#" className="text-brand-primary hover:text-brand-secondary transition-colors"><Linkedin className="w-5 h-5" /></a>
                  <a href="#" className="text-brand-primary hover:text-brand-secondary transition-colors"><Twitter className="w-5 h-5" /></a>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-black text-brand-primary tracking-tight">{member.name}</h3>
                <p className="text-brand-secondary font-bold text-xs uppercase tracking-widest mt-1 mb-4">{member.role}</p>
                <p className="text-brand-muted font-medium text-sm leading-relaxed max-w-[250px] mx-auto">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
