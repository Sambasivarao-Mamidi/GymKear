"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export default function Location() {
  return (
    <section id="location" className="d2c_gradient_br py-20 lg:py-28 relative" aria-label="Our Location">
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#2ccb99]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-[#2ccb99]/5 rounded-full blur-3xl" />
      
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
            Find <span className="text-[#2ccb99]">Us</span>
          </h2>
          <p 
            className="mt-4 text-white/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed" 
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Visit our state-of-the-art fitness center in the heart of the city.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden border border-[#2e3937]/50 h-[400px] md:h-[500px]"
            role="application"
            aria-label="Google Maps location"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98513098459391!3d40.75889607932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1633023222534!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GymKear Location Map"
              className="grayscale invert hue-rotate-90 brightness-75 contrast-75"
            />
          </motion.div>

          {/* Address Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-6 rounded-xl bg-gradient-to-b from-[#1d2b28]/60 to-[#0d1812]/60 border border-[#2e3937]/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#2ccb99]/10 border border-[#2ccb99]/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#2ccb99]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-2" style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}>
                    GYMKEAR FITNESS CENTER
                  </h4>
                  <p className="text-white/70" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                    123 Fitness Street<br />
                    Times Square, New York, NY 10036<br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-b from-[#1d2b28]/60 to-[#0d1812]/60 border border-[#2e3937]/30">
              <h4 className="text-[#2ccb99] font-semibold mb-4" style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}>
                TRANSPORTATION
              </h4>
              <ul className="space-y-2 text-white/70 text-sm" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                <li>• Subway: 42nd St - Port Authority (2 min walk)</li>
                <li>• Bus: Lines M104, M42, M6 (1 min walk)</li>
                <li>• Parking: Public parking garage on 45th St</li>
              </ul>
            </div>

            <motion.a
              href="https://maps.google.com/?q=123+Fitness+Street+New+York+NY"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#2ccb99] text-[#01100c] font-bold rounded-xl hover:bg-[#25b389] transition-colors"
            >
              <Navigation className="w-5 h-5" />
              Get Directions
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}