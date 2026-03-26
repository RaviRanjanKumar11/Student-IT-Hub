import { motion } from 'motion/react';
import { testimonials } from '../constants';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-secondary font-bold tracking-widest uppercase text-sm"
          >
            Student Success
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-brand-primary mt-4 tracking-tighter"
          >
            WHAT OUR <span className="text-brand-secondary">STUDENTS SAY</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-xl shadow-indigo-100/50 relative group"
            >
              <div className="absolute top-8 right-8 text-brand-secondary/20 group-hover:text-brand-secondary/40 transition-colors">
                <Quote className="w-12 h-12" />
              </div>
              
              <div className="flex items-center space-x-4 mb-8">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-2xl object-cover ring-4 ring-brand-secondary/10"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-black text-brand-primary text-lg tracking-tight">{testimonial.name}</h4>
                  <p className="text-brand-secondary text-sm font-bold uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed font-medium italic">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
