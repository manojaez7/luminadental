import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Star, Instagram, Linkedin, Twitter, ChevronLeft, ChevronRight } from 'lucide-react';

export function Doctors() {
  const doctors = [
    {
      name: "Dr. Sarah Jenkins",
      role: "Lead Cosmetic Dentist",
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600&h=600"
    },
    {
      name: "Dr. Michael Chen",
      role: "Orthodontist",
      img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600&h=600"
    },
    {
      name: "Dr. Emily Ramirez",
      role: "Implantologist",
      img: "https://images.unsplash.com/photo-1594824436998-058b231b6fae?auto=format&fit=crop&q=80&w=600&h=600"
    }
  ];

  return (
    <section id="doctors" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Meet The Team</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Expert Care by Specialists</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doc, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/40 backdrop-blur-xl rounded-[2rem] overflow-hidden shadow-lg shadow-blue-900/5 border border-white/60 group hover:shadow-2xl hover:bg-white/60 transition-all duration-300 relative"
            >
              <div className="relative h-[350px] overflow-hidden m-4 rounded-[1.5rem]">
                <img src={doc.img} alt={doc.name} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors border border-white/30">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors border border-white/30">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors border border-white/30">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-gray-900">{doc.name}</h4>
                <p className="text-blue-600 font-medium mt-2">{doc.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Patient Stories</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Patients Say</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              text: "The most comfortable dental experience I've ever had. The staff is incredibly friendly and the results are amazing. Highly recommended!",
              name: "Michael T."
            },
            {
              text: "I used to have terrible dental anxiety, but Dr. Jenkins and the team changed that. The clinic feels like a spa and the care is exceptional.",
              name: "Amanda R."
            },
            {
              text: "Getting implants was a big decision, but Lumina Dental made the process so smooth and painless. I can finally smile with confidence again.",
              name: "James W."
            },
            {
              text: "Incredible attention to detail. Dr. Chen perfected my smile with aligners, and the journey was seamless from day one.",
              name: "Sarah L."
            },
            {
              text: "State of the art equipment and a team that genuinely cares. I've never felt so taken care of at a dentist's office before.",
              name: "David K."
            },
            {
              text: "The teeth whitening results exceeded my expectations. I can't stop smiling now. Thank you to the whole Lumina team!",
              name: "Elena M."
            }
          ].map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/40 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/60 shadow-lg shadow-blue-900/5 hover:bg-white/60 transition-colors duration-300 flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(star => <Star key={star} size={18} className="fill-blue-500 text-blue-500" />)}
              </div>
              <p className="text-lg font-medium leading-relaxed mb-8 text-gray-800">"{review.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center font-bold text-xl text-blue-700 border border-white/80 shadow-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{review.name}</p>
                  <p className="text-blue-600 text-sm font-medium">Verified Patient</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  return (
    <section id="gallery" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Transformations</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Before & After Makeovers</h3>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] overflow-hidden shadow-xl shadow-blue-900/10 border-4 border-white/50 backdrop-blur-sm relative cursor-ew-resize h-[400px] sm:h-[500px]"
            ref={sliderRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
          >
            {/* After Image */}
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1200&h=800" 
              alt="After makeover" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
            />
            
            {/* Before Image */}
            <div 
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1200&h=800" 
                alt="Before makeover" 
                className="absolute inset-0 w-[100vw] max-w-none h-full object-cover" 
                style={{ 
                  width: sliderRef.current?.getBoundingClientRect().width || '100%',
                  filter: 'brightness(0.85) sepia(0.6) hue-rotate(-15deg) saturate(1.4)'
                }}
              />
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.5)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600 border border-gray-200">
                <ChevronLeft size={16} />
                <ChevronRight size={16} />
              </div>
            </div>

            <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold pointer-events-none">
              Before
            </div>
            <div className="absolute top-6 right-6 bg-blue-600/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold pointer-events-none">
              After
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
