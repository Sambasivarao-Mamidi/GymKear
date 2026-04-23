"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Check } from "lucide-react";

const trainingHours = [
  { day: "Monday", time: "05:00 - 22:00" },
  { day: "Tuesday", time: "05:00 - 22:00" },
  { day: "Wednesday", time: "05:00 - 22:00" },
  { day: "Thursday", time: "05:00 - 22:00" },
  { day: "Friday", time: "05:00 - 22:00" },
  { day: "Saturday", time: "07:00 - 20:00" },
  { day: "Sunday", time: "07:00 - 20:00" },
];

const packages = ["monthly", "quarterly", "yearly"] as const;

interface FormData {
  name: string;
  phone: string;
  email: string;
  package: typeof packages[number] | "";
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    package: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const planParam = params.get("plan");
    if (planParam && packages.includes(planParam as typeof packages[number])) {
      setFormData((prev) => ({ ...prev, package: planParam as typeof packages[number] }));
    }
  }, []);

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.length < 2) return "Name must be at least 2 characters";
        return undefined;
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email";
        return undefined;
      case "phone":
        if (value && !/^[\d\s\-\+\(\)]+$/.test(value)) return "Please enter a valid phone number";
        return undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: FormErrors = {};
    newErrors.name = validateField("name", formData.name) || undefined;
    newErrors.email = validateField("email", formData.email) || undefined;
    newErrors.phone = validateField("phone", formData.phone) || undefined;
    
    setErrors(newErrors);
    setTouched({ name: true, email: true, phone: true });
    
    // Check if there are any errors
    if (newErrors.name || newErrors.email || newErrors.phone) {
      return;
    }

    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    
    // Reset form
    setFormData({ name: "", phone: "", email: "", package: "", message: "" });
    setTouched({});
    setErrors({});
  };

  const getPackageLabel = (pkg: string) => {
    switch (pkg) {
      case "monthly": return "Monthly";
      case "quarterly": return "Quarterly";
      case "yearly": return "Yearly";
      default: return pkg;
    }
  };

  return (
    <section id="contact" className="d2c_gradient_tl py-20 lg:py-28 relative" aria-label="Contact Us">
      <div className="absolute top-20 left-0 w-64 h-64 bg-[#2ccb99]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-[#2ccb99]/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 
            className="d2c_title text-4xl md:text-5xl lg:text-6xl" 
            style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
          >
            Get In <span className="text-[#2ccb99]">Touch</span>
          </h2>
          <p 
            className="mt-4 text-white/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed" 
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 mt-10">
          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-gradient-to-b from-[#1d2b28]/60 to-[#0d1812]/60 border border-[#2e3937]/30"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#2ccb99]/10 border border-[#2ccb99]/30 flex items-center justify-center" aria-hidden="true">
                  <MapPin className="w-5 h-5 text-[#2ccb99]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Visit Us</h4>
                  <p className="text-white/60 text-sm">123 Fitness Street, NYC</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-b from-[#1d2b28]/60 to-[#0d1812]/60 border border-[#2e3937]/30"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#2ccb99]/10 border border-[#2ccb99]/30 flex items-center justify-center" aria-hidden="true">
                  <Phone className="w-5 h-5 text-[#2ccb99]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Call Us</h4>
                  <p className="text-white/60 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-xl bg-gradient-to-b from-[#1d2b28]/60 to-[#0d1812]/60 border border-[#2e3937]/30"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#2ccb99]/10 border border-[#2ccb99]/30 flex items-center justify-center" aria-hidden="true">
                  <Mail className="w-5 h-5 text-[#2ccb99]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email Us</h4>
                  <p className="text-white/60 text-sm">hello@gymkear.com</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-xl bg-gradient-to-b from-[#1d2b28]/60 to-[#0d1812]/60 border border-[#2e3937]/30"
            >
              <div className="flex items-center gap-3 mb-4" aria-hidden="true">
                <Clock className="w-5 h-5 text-[#2ccb99]" />
                <h4 className="text-white font-semibold">Training Hours</h4>
              </div>
              <div className="space-y-2">
                {trainingHours.map((item, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="text-white/60">{item.day}</span>
                    <span className="text-[#2ccb99]">{item.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-6 md:p-8 rounded-2xl bg-gradient-to-b from-[#1d2b28]/60 to-[#0d1812]/60 border border-[#2e3937]/30 space-y-6"
              aria-label="Contact form"
            >
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-lg bg-[#2ccb99]/20 border border-[#2ccb99]/50 text-[#2ccb99]"
                  role="alert"
                >
                  <Check className="w-5 h-5" aria-hidden="true" />
                  <span>Message sent successfully! We'll get back to you soon.</span>
                </motion.div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm text-white/70" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="John Doe"
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`w-full bg-[#0d1812]/50 rounded-lg px-4 py-3 text-white placeholder-[#354844] border transition-colors focus:outline-none focus:ring-2 focus:ring-[#2ccb99] ${
                      errors.name && touched.name ? "border-red-500" : "border-[#2e3937] focus:border-[#2ccb99]"
                    }`}
                    style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                  />
                  {errors.name && touched.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-400" role="alert">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm text-white/70" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="+1 (555) 000-0000"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className={`w-full bg-[#0d1812]/50 rounded-lg px-4 py-3 text-white placeholder-[#354844] border transition-colors focus:outline-none focus:ring-2 focus:ring-[#2ccb99] ${
                      errors.phone && touched.phone ? "border-red-500" : "border-[#2e3937] focus:border-[#2ccb99]"
                    }`}
                    style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                  />
                  {errors.phone && touched.phone && (
                    <p id="phone-error" className="mt-1 text-sm text-red-400" role="alert">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm text-white/70" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>Email *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="john@example.com"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`w-full bg-[#0d1812]/50 rounded-lg px-4 py-3 text-white placeholder-[#354844] border transition-colors focus:outline-none focus:ring-2 focus:ring-[#2ccb99] ${
                    errors.email && touched.email ? "border-red-500" : "border-[#2e3937] focus:border-[#2ccb99]"
                  }`}
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                />
                {errors.email && touched.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-400" role="alert">{errors.email}</p>
                )}
              </div>

              <fieldset>
                <legend className="block mb-3 text-sm text-white/70" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>Interested Plan</legend>
                <div className="flex flex-wrap gap-3" role="group" aria-label="Select a plan">
                  {packages.map((pkg) => (
                    <button
                      key={pkg}
                      type="button"
                      onClick={() => setFormData({ ...formData, package: pkg })}
                      className={`px-5 py-2.5 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-[#2ccb99] focus:ring-offset-2 focus:ring-offset-[#01100c] ${
                        formData.package === pkg
                          ? "bg-[#2ccb99] border-[#2ccb99] text-[#01100c] font-medium"
                          : "border-[#2e3937] text-white/70 hover:border-[#2ccb99]/50"
                      }`}
                      aria-pressed={formData.package === pkg}
                    >
                      {getPackageLabel(pkg)}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm text-white/70" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  placeholder="Tell us about your fitness goals..."
                  className="w-full bg-[#0d1812]/50 rounded-lg px-4 py-3 text-white placeholder-[#354844] border border-[#2e3937] focus:outline-none focus:border-[#2ccb99] transition-colors resize-none"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-[#2ccb99] text-[#01100c] font-bold text-lg rounded-xl hover:bg-[#25b389] transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#2ccb99] focus:ring-offset-2 focus:ring-offset-[#01100c]"
              >
                {submitted ? (
                  <>
                    <Check className="w-5 h-5" aria-hidden="true" />
                    Sent Successfully
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" aria-hidden="true" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}