import { useState, useEffect } from 'react';
import { Phone, Menu, X, Syringe, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';

export function Header({ onOpenModal }: { onOpenModal?: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/40 backdrop-blur-xl border-b border-white/40 shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600/90 backdrop-blur-sm text-white p-2 rounded-xl shadow-lg shadow-blue-600/20">
            <Syringe size={24} />
          </div>
          <span className="text-xl font-display font-bold text-gray-900">Lumina<span className="text-blue-600">Dental</span></span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-600">
          <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#doctors" className="hover:text-blue-600 transition-colors">Doctors</a>
          <a href="#gallery" className="hover:text-blue-600 transition-colors">Before & After</a>
          <a href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-blue-600 font-medium bg-white/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/60">
            <Phone size={18} />
            <span>1800-1234</span>
          </div>
          <button onClick={onOpenModal} className="bg-blue-600/90 backdrop-blur-sm hover:bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-lg shadow-blue-600/20 border border-blue-500/50">
            Book Now
          </button>
        </div>

        <button className="md:hidden text-gray-900 bg-white/50 p-2 rounded-full backdrop-blur-md border border-white/60" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/70 backdrop-blur-xl shadow-xl py-4 px-4 flex flex-col gap-4 border-t border-white/50">
          <a href="#services" className="text-gray-800 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#doctors" className="text-gray-800 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Doctors</a>
          <a href="#gallery" className="text-gray-800 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Before & After</a>
          <a href="#pricing" className="text-gray-800 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
          <button onClick={() => { setMobileMenuOpen(false); onOpenModal && onOpenModal(); }} className="bg-blue-600/90 text-white text-center px-6 py-3 rounded-xl font-medium shadow-lg w-full">
            Book Appointment
          </button>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-white/30 backdrop-blur-xl border-t border-white/50 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-blue-600/90 text-white p-1.5 rounded-lg shadow-md">
              <Syringe size={20} />
            </div>
            <span className="text-xl font-display font-bold text-gray-900">Lumina<span className="text-blue-600">Dental</span></span>
          </div>
          <p className="text-sm text-gray-600 mb-6">Premium dental care with a gentle touch. Your smile is our masterpiece.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 bg-white/50 hover:bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-blue-600 transition-colors border border-white/60 shadow-sm hover:scale-110 duration-300">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/50 hover:bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-blue-600 transition-colors border border-white/60 shadow-sm hover:scale-110 duration-300">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/50 hover:bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-blue-600 transition-colors border border-white/60 shadow-sm hover:scale-110 duration-300">
              <Twitter size={18} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-gray-900 font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#services" className="hover:text-blue-600">Services</a></li>
            <li><a href="#doctors" className="hover:text-blue-600">Our Team</a></li>
            <li><a href="#pricing" className="hover:text-blue-600">Pricing</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-gray-900 font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#services" className="hover:text-blue-600">General Dentistry</a></li>
            <li><a href="#services" className="hover:text-blue-600">Teeth Whitening</a></li>
            <li><a href="#services" className="hover:text-blue-600">Dental Implants</a></li>
            <li><a href="#services" className="hover:text-blue-600">Orthodontics</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-gray-900 font-semibold mb-4">Newsletter</h4>
          <p className="text-sm text-gray-600 mb-4">Subscribe for tips and special offers.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Email address" className="bg-white/50 text-gray-900 px-4 py-2 rounded-lg text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-600 border border-white/60 placeholder-gray-500 backdrop-blur-sm" />
            <button className="bg-blue-600/90 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm text-white font-medium transition-colors shadow-md border border-blue-500/50">Join</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/40 text-sm text-center text-gray-500">
        &copy; {new Date().getFullYear()} Lumina Dental. All rights reserved.
      </div>
    </footer>
  );
}
