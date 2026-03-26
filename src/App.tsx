import { ClerkProvider } from '@clerk/clerk-react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseList from './components/CourseList';
import AboutInstructor from './components/AboutInstructor';
import WhyChooseUs from './components/WhyChooseUs';
import Team from './components/Team';
import FAQSection from './components/FAQSection';
import Gallery from './components/Gallery';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import TawkChat from './components/TawkChat';
import { Toaster } from 'sonner';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <CourseList />
      <WhyChooseUs />
      <Team />
      <AboutInstructor />
      <Gallery />
      <Testimonials />
      <Newsletter />
      <FAQSection />
      <ContactForm />
    </main>
  );
}

function ClerkProviderWithNavigate({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  if (!PUBLISHABLE_KEY) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl text-center">
          <h1 className="text-2xl font-black text-brand-primary mb-4">Configuration Required</h1>
          <p className="text-gray-600 mb-6">Please add <code className="bg-gray-100 px-2 py-1 rounded">VITE_CLERK_PUBLISHABLE_KEY</code> to your environment variables to enable authentication.</p>
          <div className="text-sm text-gray-400">You can find this in your Clerk Dashboard.</div>
        </div>
      </div>
    );
  }

  return (
    <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY}
      navigate={(to) => navigate(to)}
      afterSignInUrl="/"
      afterSignUpUrl="/"
      signInUrl="/"
      signUpUrl="/"
    >
      {children}
    </ClerkProvider>
  );
}

export default function App() {
  return (
    <Router>
      <ClerkProviderWithNavigate>
        <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
          <Toaster position="top-center" richColors />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
          <TawkChat />
        </div>
      </ClerkProviderWithNavigate>
    </Router>
  );
}
