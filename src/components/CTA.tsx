"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


export default function CTA() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute top-10 left-1/4 w-64 h-64 bg-[#2ccb99]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-[#2ccb99]/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glare-auto rounded-2xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 lg:p-16 rounded-2xl border border-[#2e3937]/50 text-center bg-gradient-to-br from-[#1d2b28]/60 to-[#0d1812]/60 backdrop-blur-sm"
          >
            <div className="w-full md:w-[85%] xl:w-3/4 mx-auto space-y-4">
              <h2 
                className="text-4xl md:text-5xl lg:text-6xl text-white" 
                style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
              >
                Take the First Step <span className="text-[#2ccb99]">Today</span>
              </h2>
              <p 
                className="text-white/70 w-full md:w-[90%] xl:w-3/4 mx-auto text-base md:text-lg leading-relaxed" 
                style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
              >
                Ready to transform your life? Join GymKear today and start your fitness journey with the best trainers and equipment in town.
              </p>
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 mt-6 px-8 py-4 bg-[#2ccb99] text-[#01100c] font-bold text-lg rounded-xl hover:bg-[#25b389] transition-colors shadow-lg shadow-[#2ccb99]/20 cursor-pointer"
              >
                Sign Up Now
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}