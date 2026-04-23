"use client";

import { motion } from "framer-motion";
import { Dumbbell, Utensils, Heart, ClipboardCheck, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Dumbbell,
    title: "Personal Training",
    description: "Our certified personal trainers provide one-on-one coaching tailored to your individual fitness goals.",
  },
  {
    icon: Utensils,
    title: "Nutrition Plan",
    description: "Our expert nutritionists create personalized meal plans to support your fitness and health goals.",
  },
  {
    icon: Heart,
    title: "Wellness Program",
    description: "Engage in comprehensive wellness programs that include mental, physical, and emotional wellbeing.",
  },
  {
    icon: ClipboardCheck,
    title: "Fitness Assessment",
    description: "Track your progress with in-depth fitness assessments to adjust and improve your performance.",
  },
];

export default function Features() {
  return (
    <section id="services" className="d2c_gradient_tl py-20 lg:py-28 relative">
      <div className="absolute top-20 right-0 w-72 h-72 bg-[#2ccb99]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-[#2ccb99]/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <h2 
              className="d2c_title text-4xl md:text-5xl lg:text-6xl" 
              style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
            >
              What We <span className="text-[#2ccb99]">Offer</span>
            </h2>
            <p 
              className="mt-4 text-white/70 text-base md:text-lg max-w-xl leading-relaxed" 
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Explore the range of services offered by GymKear — from Personal Training and Group Classes to Nutrition Plans, Online Coaching, Fitness Assessments, and Wellness Programs.
            </p>
          </motion.div>

          <div className="space-y-4">
            {services.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group rounded-xl border border-[#2e3937]/50 p-5 md:p-6 bg-gradient-to-r from-[#1d2b28]/80 to-[#0d1812]/80 hover:border-[#2ccb99]/50 hover:shadow-lg hover:shadow-[#2ccb99]/10 transition-all cursor-pointer"
              >
                <div className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl bg-[#2ccb99]/10 border border-[#2ccb99]/30 flex items-center justify-center text-[#2ccb99] group-hover:bg-[#2ccb99] group-hover:text-[#01100c] transition-all">
                    <item.icon className="w-7 h-7 md:w-8 md:h-8" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#2ccb99] text-xl md:text-2xl font-bold uppercase tracking-wide mb-2" style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}>
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm md:text-base" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                      {item.description}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#2ccb99] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}