import { useState } from 'react';
import { motion, useScroll, AnimatePresence } from 'motion/react';
import { Calendar } from 'lucide-react';
import { Header, Footer } from './components/Layout';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Doctors, Testimonials, Gallery } from './components/About';
import { Pricing, FAQ, Contact } from './components/Info';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const { scrollYProgress } = useScroll();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans relative overflow-hidden">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-300/30 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-300/30 blur-[100px]" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-indigo-300/20 blur-[100px]" />
      </div>
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <Services />
        <Doctors />
        <Testimonials />
        <Gallery />
        <Pricing onOpenModal={() => setIsModalOpen(true)} />
        <FAQ />
        <Contact />
      </main>
      <Footer />

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Floating Action Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600/90 backdrop-blur-md hover:bg-blue-600 text-white p-4 rounded-full shadow-2xl shadow-blue-600/40 border border-blue-500/50 flex items-center justify-center group"
      >
        <Calendar size={24} className="group-hover:scale-110 transition-transform" />
      </motion.button>
    </div>
  );
}
