import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/clerk-react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LOGO_URL } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-18 items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-secondary/20 rounded-2xl blur-lg group-hover:bg-brand-secondary/40 transition-all"></div>
              <img src={LOGO_URL} alt="Logo" className="w-20 h-20 object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-brand-primary tracking-tighter leading-none">STUDENT <span className="text-brand-secondary">IT HUB</span></span>
              <span className="text-[9px] font-black text-brand-muted uppercase tracking-[0.3em] mt-1">Connecting Students to Tech</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            {[
              { name: 'Home', href: '/' },
              { name: 'Courses', href: '#courses' },
              { name: 'About', href: '#about' },
              { name: 'Gallery', href: '#gallery' },
              { name: 'Testimonials', href: '#testimonials' },
              { name: 'Contact', href: '#contact' },
            ].map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-primary hover:text-brand-secondary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-secondary transition-all group-hover:w-full"></span>
              </a>
            ))}
            
            <div className="flex items-center space-x-6 pl-6 border-l border-gray-100">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="brand-button-primary !px-8 !py-3 !text-xs !uppercase !tracking-widest">
                    Login
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton 
                  afterSignOutUrl="/" 
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "w-10 h-10 border-2 border-brand-secondary"
                    }
                  }}
                />
              </SignedIn>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-6">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="w-12 h-12 flex items-center justify-center rounded-2xl bg-brand-surface text-brand-primary hover:bg-brand-primary hover:text-white transition-all"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-10 space-y-6">
              {[
                { name: 'Home', href: '/' },
                { name: 'Courses', href: '#courses' },
                { name: 'About', href: '#about' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-black text-brand-primary hover:text-brand-secondary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="w-full brand-button-primary justify-center">
                    Login to Portal
                  </button>
                </SignInButton>
              </SignedOut>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
