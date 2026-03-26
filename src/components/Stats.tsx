import { motion } from 'motion/react';
import { stats } from '../constants';
import { Users, BookOpen, TrendingUp, Award } from 'lucide-react';

const iconMap: Record<string, any> = {
  Users,
  BookOpen,
  TrendingUp,
  Award
};

export default function Stats() {
  return (
    <section className="py-24 bg-brand-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  delay: index * 0.1 
                }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-[2rem] bg-white/10 text-brand-secondary mb-6 group-hover:bg-brand-secondary group-hover:text-white transition-all duration-500 transform group-hover:rotate-12">
                  <Icon className="w-10 h-10" />
                </div>
                <div className="text-5xl font-black text-white tracking-tighter mb-2">
                  {stat.value}
                </div>
                <div className="text-brand-secondary font-black uppercase tracking-[0.2em] text-[10px]">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
