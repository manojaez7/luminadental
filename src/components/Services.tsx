import { motion } from 'motion/react';
import { Sparkles, Activity, ShieldCheck, Smile, Syringe, HeartPulse, Stethoscope, Baby } from 'lucide-react';

const services = [
  {
    icon: <Smile className="text-blue-600" size={32} />,
    colorClass: "bg-blue-100/60 group-hover:bg-blue-600",
    title: "General Dentistry",
    description: "Comprehensive checkups, cleanings, and preventive care for the whole family."
  },
  {
    icon: <Sparkles className="text-purple-600" size={32} />,
    colorClass: "bg-purple-100/60 group-hover:bg-purple-600",
    title: "Cosmetic Dentistry",
    description: "Veneers, teeth whitening, and complete smile makeovers to boost your confidence."
  },
  {
    icon: <ShieldCheck className="text-emerald-600" size={32} />,
    colorClass: "bg-emerald-100/60 group-hover:bg-emerald-600",
    title: "Dental Implants",
    description: "Permanent, natural-looking solutions to replace missing teeth and restore function."
  },
  {
    icon: <Activity className="text-rose-600" size={32} />,
    colorClass: "bg-rose-100/60 group-hover:bg-rose-600",
    title: "Orthodontics",
    description: "Clear aligners and traditional braces to perfectly align your teeth."
  },
  {
    icon: <Syringe className="text-indigo-600" size={32} />,
    colorClass: "bg-indigo-100/60 group-hover:bg-indigo-600",
    title: "Root Canals",
    description: "Painless endodontic therapy to save infected or severely damaged teeth."
  },
  {
    icon: <HeartPulse className="text-red-600" size={32} />,
    colorClass: "bg-red-100/60 group-hover:bg-red-600",
    title: "Emergency Care",
    description: "Same-day appointments for urgent dental issues to provide immediate relief."
  },
  {
    icon: <Stethoscope className="text-teal-600" size={32} />,
    colorClass: "bg-teal-100/60 group-hover:bg-teal-600",
    title: "Oral Surgery",
    description: "Expert wisdom teeth removal and advanced surgical procedures."
  },
  {
    icon: <Baby className="text-orange-600" size={32} />,
    colorClass: "bg-orange-100/60 group-hover:bg-orange-600",
    title: "Pediatric Care",
    description: "Gentle and fun dental experiences designed specifically for children."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Care for Your Smile</h3>
          <p className="text-gray-700 font-medium">We offer a full spectrum of dental treatments using state-of-the-art technology to ensure your comfort and optimal results.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/40 backdrop-blur-xl rounded-[2rem] p-8 hover:bg-white/60 hover:shadow-2xl shadow-lg shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 border border-white/60 group"
            >
              <div className={`${service.colorClass} backdrop-blur-md border border-white/80 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:text-white transition-colors duration-300 shadow-sm`}>
                <div className="transition-colors duration-300 group-hover:text-white">
                  {service.icon}
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-700 font-medium leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
