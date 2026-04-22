"use client";

import { motion } from "framer-motion";
import { Dumbbell, Utensils, Heart, ClipboardCheck } from "lucide-react";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="md:sticky md:top-32"
          >
            <h2 className="d2c_title mb-4" style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}>
              What We <br />
              <span className="text-outline" data-text="offer">offer</span>
            </h2>
            <p className="text-white/90 text-base xl:text-xl max-w-xl" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
              Explore the range of services offered by GymKear — from Personal Training and Group Classes to Nutrition Plans, Online Coaching, Fitness Assessments, and Wellness Programs.
            </p>
          </motion.div>

          <div className="space-y-5">
            {services.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg border border-[#2e3937] p-5 md:p-6 xl:p-9 bg-[#1d2b28] flex gap-6"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-lg border-2 border-[#2ccb99] flex items-center justify-center text-[#2ccb99]">
                  <item.icon className="w-8 h-8" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-[#2ccb99] text-xl md:text-2xl xl:text-3xl font-bold uppercase tracking-wide mb-3" style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-white/90 text-base xl:text-lg" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
