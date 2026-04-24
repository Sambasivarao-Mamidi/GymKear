"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Navigation, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import LightRays from "./LightRays";
import ShinyText from "./ShinyText";

const socialLinks = [
  { name: "Facebook", href: "#", Icon: Facebook },
  { name: "Twitter", href: "#", Icon: Twitter },
  { name: "LinkedIn", href: "#", Icon: Linkedin },
  { name: "YouTube", href: "#", Icon: Youtube },
];

const trainingHours = [
  { day: "Monday - Friday", time: "05:00 - 22:00" },
  { day: "Saturday", time: "07:00 - 20:00" },
  { day: "Sunday", time: "07:00 - 20:00" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#01100c] pt-24 lg:pt-32">
      <div className="relative min-h-[500px] lg:min-h-[650px] overflow-hidden py-16 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d251f] via-[#0a1f18] to-[#01100c] z-0" />
        
        <div className="absolute inset-0 z-10">
          <LightRays
            raysOrigin="top-center"
            raysColor="#2ccb99"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.15}
            noiseAmount={0}
            distortion={0}
            saturation={1}
          />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <ShinyText
            text="GYMKEAR"
            speed={2}
            color="#ffffff"
            shineColor="#2ccb99"
            spread={120}
            className="text-8xl md:text-[10rem] lg:text-[12rem] font-bold tracking-tight"
            style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#01100c]/60 via-transparent to-transparent z-10 pointer-events-none" />
      </div>

      <div className="max-w-full px-0">
        <div className="grid lg:grid-cols-2 gap-0 mt-20 lg:mt-28">
          <div className="p-10 lg:p-14 flex flex-col justify-start space-y-8 bg-gradient-to-b from-[#0d1812] to-[#01100c]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <h3 
                className="text-5xl lg:text-6xl text-[#2ccb99]" 
                style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
              >
                GYMKEAR
              </h3>
              <p className="text-white/70 text-base lg:text-lg leading-relaxed" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                Premium Fitness Center dedicated to helping you achieve your fitness goals with state-of-the-art equipment and expert trainers.
              </p>
              <div className="flex gap-4">
                {socialLinks.map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    aria-label={name}
                    className="w-12 h-12 rounded-full border-2 border-[#2ccb99] text-[#2ccb99] flex items-center justify-center hover:bg-[#2ccb99] hover:text-[#01100c] transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl bg-[#1d2b28]/60 border border-[#2e3937]/40 space-y-3"
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-[#2ccb99]" />
                <h4 className="text-white font-semibold text-xl" style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}>
                  TRAINING HOURS
                </h4>
              </div>
              <div className="space-y-2">
                {trainingHours.map((item, i) => (
                  <div key={i} className="flex justify-between text-base">
                    <span className="text-white/60">{item.day}</span>
                    <span className="text-[#2ccb99] font-medium">{item.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl bg-[#1d2b28]/60 border border-[#2e3937]/40 space-y-4"
            >
              <h4 className="text-[#2ccb99] text-xl font-semibold mb-2" style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}>
                CONTACT US
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#2ccb99] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold text-sm">123 Fitness Street</p>
                    <p className="text-white/60 text-sm">Times Square, NYC 10036</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-[#2ccb99] flex-shrink-0" />
                  <p className="text-white/70 text-sm">+1 (555) 123-4567</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-[#2ccb99] flex-shrink-0" />
                  <p className="text-white/70 text-sm">hello@gymkear.com</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col p-10 lg:p-14 bg-[#01100c] justify-center space-y-6 mt-20 lg:mt-28">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-[#2e3937]/50 h-[250px] lg:h-[300px]"
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

            <motion.a
              href="https://maps.google.com/?q=123+Fitness+Street+New+York+NY"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#2ccb99] text-[#01100c] font-bold text-xl rounded-xl hover:bg-[#25b389] transition-colors shadow-lg shadow-[#2ccb99]/20"
              style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
            >
              <Navigation className="w-6 h-6" />
              GET DIRECTIONS
            </motion.a>
          </div>
        </div>

        <div className="bg-[#01100c] border-t border-[#2e3937] py-8 text-center">
          <p className="text-[#354844] text-base" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
            © 2024 GymKear. All rights reserved by DesignToCodes
          </p>
        </div>
      </div>
    </footer>
  );
}