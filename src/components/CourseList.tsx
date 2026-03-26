import { motion, AnimatePresence } from 'motion/react';
import { courses } from '../constants';
import * as Icons from 'lucide-react';
import { useState } from 'react';

export default function CourseList() {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  return (
    <section id="courses" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-surface relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-secondary rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-secondary font-black tracking-[0.3em] uppercase text-xs"
          >
            Our Curriculum
          </motion.span>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-black text-brand-primary mt-4 tracking-tighter"
          >
            CHOOSE YOUR <span className="text-brand-secondary">PATH</span>
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {courses.map((course, index) => {
            const IconComponent = (Icons as any)[course.icon] || Icons.Code2;
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.05 
                }}
                onClick={() => setSelectedCourse(course)}
                className="group p-8 rounded-[2.5rem] bg-white border border-gray-100 hover:border-brand-secondary hover:shadow-[0_30px_60px_-15px_rgba(249,115,22,0.15)] transition-all duration-500 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-secondary/5 rounded-bl-[3rem] -mr-12 -mt-12 group-hover:bg-brand-secondary/10 transition-colors duration-500"></div>
                
                <div className="w-16 h-16 bg-brand-surface rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-secondary transition-all duration-500 transform group-hover:rotate-6 shadow-sm">
                  <IconComponent className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <h4 className="text-2xl font-black text-brand-primary mb-3 tracking-tight group-hover:text-brand-secondary transition-colors duration-500">{course.name}</h4>
                <p className="text-sm text-brand-muted mb-8 line-clamp-3 leading-relaxed font-medium">
                  {course.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Duration</p>
                    <p className="text-sm font-black text-brand-primary">{course.duration}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Fees</p>
                    <p className="text-sm font-black text-brand-secondary">{course.fees}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Course Detail Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
              className="absolute inset-0 bg-brand-primary/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedCourse(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-brand-secondary hover:text-white transition-all z-10"
              >
                <Icons.X className="w-6 h-6" />
              </button>

              <div className="p-10 md:p-16">
                <div className="flex items-center space-x-6 mb-10">
                  <div className="w-20 h-20 bg-brand-secondary/10 rounded-3xl flex items-center justify-center">
                    {(() => {
                      const Icon = (Icons as any)[selectedCourse.icon] || Icons.Code2;
                      return <Icon className="w-10 h-10 text-brand-secondary" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-brand-primary tracking-tighter leading-none">{selectedCourse.name}</h3>
                    <p className="text-brand-secondary font-bold uppercase tracking-widest text-xs mt-2">Course Details</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4">Overview</h4>
                    <p className="text-gray-600 leading-relaxed font-medium text-lg">
                      {selectedCourse.details || selectedCourse.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-8 pt-8 border-t-2 border-gray-50">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-brand-primary">
                        <Icons.Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Duration</p>
                        <p className="text-xl font-black text-brand-primary">{selectedCourse.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-brand-secondary">
                        <Icons.CreditCard className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Course Fees</p>
                        <p className="text-xl font-black text-brand-secondary">{selectedCourse.fees}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8">
                    <button 
                      onClick={() => {
                        setSelectedCourse(null);
                        window.location.href = '#contact';
                      }}
                      className="w-full bg-brand-primary text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-indigo-900 transition-all shadow-xl shadow-indigo-900/20 active:scale-[0.98]"
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
