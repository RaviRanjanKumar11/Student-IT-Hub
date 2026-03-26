import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { faqs } from '../constants';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-primary">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-3xl mb-6">
            <HelpCircle className="w-8 h-8 text-brand-secondary" />
          </div>
          <h2 className="text-sm font-black text-brand-secondary uppercase tracking-[0.4em] mb-4">Common Questions</h2>
          <h3 className="text-5xl font-black text-white tracking-tighter">FREQUENTLY ASKED</h3>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden transition-all duration-300 hover:bg-white/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between transition-colors"
              >
                <span className="text-lg font-black text-white pr-8 tracking-tight">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-brand-secondary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-white/40 flex-shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-8 pb-8 text-indigo-100 leading-relaxed border-t border-white/5 pt-6 font-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
