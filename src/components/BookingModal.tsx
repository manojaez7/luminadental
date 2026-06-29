import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar as CalendarIcon, Clock, User, Mail, Phone, CheckCircle2 } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setTimeout(() => {
          setStep(1);
          setIsSuccess(false);
          setFormData({
            service: '', date: '', time: '', firstName: '', lastName: '', email: '', phone: '', notes: ''
          });
        }, 500);
      }, 3000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white/80 backdrop-blur-2xl border border-white/60 shadow-2xl rounded-[2rem] z-[101] overflow-hidden max-h-[90vh] flex flex-col"
          >
            <div className="flex justify-between items-center p-6 sm:p-8 border-b border-gray-200/50">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Book Appointment</h3>
                {!isSuccess && <p className="text-gray-600 mt-1">Step {step} of 2</p>}
              </div>
              <button
                onClick={onClose}
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h4>
                  <p className="text-gray-600">We've sent a confirmation email with your appointment details.</p>
                </motion.div>
              ) : (
                <form onSubmit={step === 2 ? handleSubmit : (e) => { e.preventDefault(); setStep(2); }}>
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="space-y-6"
                      >
                        <div>
                          <label className="block text-sm font-semibold text-gray-800 mb-2">Select Service *</label>
                          <select
                            required
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-white/60 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white/50 backdrop-blur-sm shadow-sm appearance-none"
                          >
                            <option value="">Choose a service...</option>
                            <option value="General Checkup">General Checkup</option>
                            <option value="Teeth Whitening">Teeth Whitening</option>
                            <option value="Dental Implants">Dental Implants</option>
                            <option value="Orthodontics">Orthodontics</option>
                            <option value="Cosmetic Consultation">Cosmetic Consultation</option>
                          </select>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-800 mb-2">Preferred Date *</label>
                            <div className="relative">
                              <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                              <input
                                required
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-white/60 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white/50 backdrop-blur-sm shadow-sm"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-800 mb-2">Preferred Time *</label>
                            <div className="relative">
                              <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                              <select
                                required
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-white/60 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white/50 backdrop-blur-sm shadow-sm appearance-none"
                              >
                                <option value="">Select time...</option>
                                <option value="09:00 AM">09:00 AM</option>
                                <option value="10:00 AM">10:00 AM</option>
                                <option value="11:00 AM">11:00 AM</option>
                                <option value="01:00 PM">01:00 PM</option>
                                <option value="02:00 PM">02:00 PM</option>
                                <option value="03:00 PM">03:00 PM</option>
                                <option value="04:00 PM">04:00 PM</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-blue-600/90 backdrop-blur-md hover:bg-blue-600 text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20 mt-8 border border-blue-500/50"
                        >
                          Continue to Details
                        </button>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-800 mb-2">First Name *</label>
                            <div className="relative">
                              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                              <input
                                required
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="John"
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-white/60 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white/50 backdrop-blur-sm shadow-sm"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-800 mb-2">Last Name *</label>
                            <input
                              required
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              placeholder="Doe"
                              className="w-full px-4 py-3 rounded-xl border border-white/60 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white/50 backdrop-blur-sm shadow-sm"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-800 mb-2">Email Address *</label>
                            <div className="relative">
                              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                              <input
                                required
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-white/60 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white/50 backdrop-blur-sm shadow-sm"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-800 mb-2">Phone Number *</label>
                            <div className="relative">
                              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                              <input
                                required
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="(555) 123-4567"
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-white/60 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white/50 backdrop-blur-sm shadow-sm"
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-800 mb-2">Additional Notes</label>
                          <textarea
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            rows={3}
                            placeholder="Any specific concerns or questions?"
                            className="w-full px-4 py-3 rounded-xl border border-white/60 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white/50 backdrop-blur-sm shadow-sm resize-none"
                          />
                        </div>

                        <div className="flex gap-4 mt-8">
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="w-1/3 bg-white/60 hover:bg-white/80 text-gray-700 font-semibold py-4 rounded-xl transition-all shadow-sm border border-white/80 backdrop-blur-md"
                          >
                            Back
                          </button>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-2/3 flex items-center justify-center gap-2 bg-blue-600/90 backdrop-blur-md hover:bg-blue-600 text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20 border border-blue-500/50 disabled:opacity-70"
                          >
                            {isSubmitting ? (
                              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                              'Confirm Booking'
                            )}
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
