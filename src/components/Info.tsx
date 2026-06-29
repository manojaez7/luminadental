import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Plus, Minus, MapPin, Phone, Mail } from 'lucide-react';

export function Pricing({ onOpenModal }: { onOpenModal?: () => void }) {
  const plans = [
    {
      name: "Basic Checkup",
      price: "$99",
      features: ["Comprehensive oral exam", "Digital X-rays", "Professional cleaning", "Oral cancer screening"]
    },
    {
      name: "Premium Whitening",
      price: "$299",
      popular: true,
      features: ["In-office laser whitening", "Custom take-home trays", "Desensitizing treatment", "Post-care kit"]
    },
    {
      name: "Clear Aligners",
      price: "$3,500+",
      features: ["Free 3D consultation", "Custom clear aligners", "Monthly progress checks", "Retainers included"]
    }
  ];

  return (
    <section id="pricing" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Transparent Pricing</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Simple & Straightforward</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`rounded-[2.5rem] p-8 bg-white/40 backdrop-blur-xl border ${plan.popular ? 'border-blue-400 shadow-2xl shadow-blue-900/10 relative lg:scale-105 z-10 py-10 bg-white/60' : 'border-white/60 shadow-lg shadow-blue-900/5'}`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide shadow-md border border-blue-500">Most Popular</span>
              )}
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h4>
              <div className="text-4xl font-bold text-gray-900 mb-8">{plan.price}</div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 font-medium">
                    <Check size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button onClick={onOpenModal} className={`w-full py-4 rounded-xl font-semibold transition-all shadow-md ${plan.popular ? 'bg-blue-600/90 hover:bg-blue-600 text-white shadow-blue-600/20 border border-blue-500/50 backdrop-blur-md' : 'bg-white/60 hover:bg-white/80 text-blue-700 border border-white/80 backdrop-blur-md'}`}>
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const faqs = [
    { q: "Do you accept new patients?", a: "Yes, we are currently accepting new patients! You can book your first appointment online or by calling our office directly." },
    { q: "What insurances do you take?", a: "We accept most major PPO dental insurance plans. Please contact our front desk with your insurance details to verify your coverage before your visit." },
    { q: "Do you offer payment plans?", a: "Yes, we offer flexible financing options through CareCredit to help make your treatment more affordable with convenient monthly payments." },
    { q: "What should I expect on my first visit?", a: "Your first visit will include a comprehensive exam, digital X-rays, a professional cleaning, and a one-on-one consultation with the dentist to discuss any concerns." },
    { q: "How often should I get a dental checkup?", a: "We recommend visiting the dentist for a checkup and cleaning every six months to maintain optimal oral health and catch any potential issues early." },
    { q: "Do you treat children?", a: "Absolutely! We are a family-friendly practice and provide gentle, comprehensive dental care for patients of all ages, including children." },
    { q: "What do I do in a dental emergency?", a: "If you have a dental emergency, please call our office immediately. We offer same-day emergency appointments to address severe pain, broken teeth, or infections." },
    { q: "Are your whitening treatments safe?", a: "Yes, our professional teeth whitening treatments are completely safe and highly effective, providing better and safer results than over-the-counter alternatives." }
  ];
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">FAQ</h2>
          <h3 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h3>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-white/60 rounded-2xl overflow-hidden transition-all duration-300 bg-white/40 backdrop-blur-md shadow-lg shadow-blue-900/5">
              <button 
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-white/20 text-left font-semibold text-gray-900 text-lg transition-colors"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                {faq.q}
                {openIdx === idx ? <Minus size={20} className="text-blue-600 flex-shrink-0" /> : <Plus size={20} className="text-blue-600 flex-shrink-0" />}
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-5 text-gray-700 font-medium leading-relaxed bg-white/20">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/40 backdrop-blur-xl rounded-[2.5rem] shadow-xl shadow-blue-900/5 overflow-hidden border border-white/60 flex flex-col lg:flex-row">
          <div className="lg:w-5/12 p-10 md:p-14 bg-blue-600/90 backdrop-blur-md text-white flex flex-col justify-between border-r border-white/20">
            <div>
              <h3 className="text-3xl font-bold mb-4">Book Your Visit</h3>
              <p className="text-blue-100 mb-12 text-lg">Fill out the form and our team will get back to you within 24 hours to confirm your appointment.</p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl mt-1 border border-white/30"><MapPin size={24} /></div>
                  <div>
                    <p className="font-semibold text-xl mb-1">Clinic Location</p>
                    <p className="text-blue-100 leading-relaxed text-sm">123 Health Avenue, Suite 200<br/>Medical District, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl mt-1 border border-white/30"><Phone size={24} /></div>
                  <div>
                    <p className="font-semibold text-xl mb-1">Phone Number</p>
                    <p className="text-blue-100 text-sm">1800-1234</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl mt-1 border border-white/30"><Mail size={24} /></div>
                  <div>
                    <p className="font-semibold text-xl mb-1">Email Address</p>
                    <p className="text-blue-100 text-sm">hello@luminadental.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-7/12 p-10 md:p-14">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Request an Appointment</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-white/60 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all bg-white/50 backdrop-blur-sm shadow-sm" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-white/60 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all bg-white/50 backdrop-blur-sm shadow-sm" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-white/60 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all bg-white/50 backdrop-blur-sm shadow-sm" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Service of Interest</label>
                <select className="w-full px-4 py-3 rounded-xl border border-white/60 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all bg-white/50 backdrop-blur-sm shadow-sm appearance-none">
                  <option>General Checkup</option>
                  <option>Teeth Whitening</option>
                  <option>Dental Implants</option>
                  <option>Orthodontics</option>
                  <option>Other</option>
                </select>
              </div>
              <button disabled={isSubmitting} className="w-full bg-blue-600/90 backdrop-blur-md hover:bg-blue-600 text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20 mt-4 text-lg border border-blue-500/50 disabled:opacity-70 flex items-center justify-center">
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : isSuccess ? (
                  "Message Sent!"
                ) : (
                  "Submit Request"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
