import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { LOGO_URL } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="flex items-center space-x-1">
            <img src={LOGO_URL} alt="Logo" className="w-24 h-24 object-contain" referrerPolicy="no-referrer" />
            <span className="text-2xl font-black tracking-tighter">STUDENT <span className="text-brand-secondary">IT HUB</span></span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed font-medium">
            Empowering students with industry-level programming skills. Learn from experts and build your future in tech.
          </p>
          <div className="flex space-x-5">
            <a href="#" className="bg-white/5 p-3 rounded-xl text-gray-400 hover:text-brand-secondary hover:bg-white/10 transition-all"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="bg-white/5 p-3 rounded-xl text-gray-400 hover:text-brand-secondary hover:bg-white/10 transition-all"><Github className="w-5 h-5" /></a>
            <a href="#" className="bg-white/5 p-3 rounded-xl text-gray-400 hover:text-brand-secondary hover:bg-white/10 transition-all"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="bg-white/5 p-3 rounded-xl text-gray-400 hover:text-brand-secondary hover:bg-white/10 transition-all"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#courses" className="hover:text-white transition-colors">Courses</a></li>
            <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
            <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About Instructor</a></li>
            <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider mb-6">Popular Courses</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#courses" className="hover:text-white transition-colors">React.js & Next.js</a></li>
            <li><a href="#courses" className="hover:text-white transition-colors">Python Development</a></li>
            <li><a href="#courses" className="hover:text-white transition-colors">Java Full Stack</a></li>
            <li><a href="#courses" className="hover:text-white transition-colors">Web Designing</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider mb-6">Newsletter</h4>
          <p className="text-sm text-gray-400 mb-6">Get the latest updates on new courses and workshops.</p>
          <form className="flex space-x-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-gray-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <button className="bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-2 pt-2 border-t border-gray-800 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Student IT Hub. All rights reserved. Designed by Ravi Sir.</p>
      </div>
    </footer>
  );
}
