import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { useRef } from 'react';

export function Hero({ onOpenModal }: { onOpenModal?: () => void }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 origin-top">
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent z-10 backdrop-blur-[2px]" />
        <img 
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80" 
          alt="Dental clinic" 
          className="w-full h-full object-cover object-right opacity-80 scale-110 origin-top"
        />
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl bg-white/40 backdrop-blur-xl border border-white/60 p-8 sm:p-10 md:p-12 rounded-[2.5rem] shadow-2xl shadow-blue-900/5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/80 text-blue-800 text-sm font-semibold mb-6 shadow-sm"
          >
            <Star size={16} className="fill-blue-700" />
            <span>#1 Rated Clinic in the City</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6"
          >
            Your Smile, Our <span className="text-blue-600 relative inline-block">
              Masterpiece
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-700 mb-10 max-w-lg leading-relaxed font-medium"
          >
            Experience world-class dental care in a relaxing, modern environment. We combine advanced technology with a gentle touch.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button onClick={onOpenModal} className="inline-flex justify-center items-center gap-2 bg-blue-600/90 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-blue-600/30 border border-blue-500/50 backdrop-blur-md">
              Book Appointment <ArrowRight size={18} />
            </button>
            <a href="#services" className="inline-flex justify-center items-center gap-2 bg-white/60 backdrop-blur-md hover:bg-white/80 text-gray-900 px-8 py-4 rounded-full font-semibold transition-all border border-white/80 shadow-sm">
              Explore Services
            </a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex items-center gap-6"
          >
            <div className="flex -space-x-4">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100" className="w-12 h-12 rounded-full border-2 border-white object-cover" alt="Patient" />
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100" className="w-12 h-12 rounded-full border-2 border-white object-cover" alt="Patient" />
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100" className="w-12 h-12 rounded-full border-2 border-white object-cover" alt="Patient" />
              <div className="w-12 h-12 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm">
                5k+
              </div>
            </div>
            <div>
              <div className="flex gap-1 text-blue-500 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-current" />)}
              </div>
              <p className="text-sm text-gray-600 font-medium">Trusted by 5,000+ patients</p>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats Cards */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute top-1/4 right-10 hidden lg:flex flex-col gap-6 pointer-events-none"
        >
          <div className="bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-xl shadow-blue-900/10 border border-white flex items-center gap-4 translate-x-12">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <p className="font-bold text-gray-900 leading-tight">Fast Booking</p>
              <p className="text-sm text-gray-500">Same day available</p>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-xl shadow-blue-900/10 border border-white flex items-center gap-4 -translate-x-8">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <p className="font-bold text-gray-900 leading-tight">Top Rated</p>
              <p className="text-sm text-gray-500">5.0 average review</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
