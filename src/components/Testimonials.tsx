"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  { name: "Kristin Watson", text: "The Starter Package was just what I needed to kickstart my fitness journey. The basic group classes are fun and engaging, and the monthly progress assessments help me stay on track. The gym's atmosphere is welcoming, and the staff is always ready to help.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=416&h=482&fit=crop" },
  { name: "Jordan Mitchell", text: "GymKear's Starter Package gave me exactly what I was looking for—a well-rounded introduction to fitness. The group classes are energizing and perfectly suited for beginners, and I love that they keep me excited to come back.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=416&h=482&fit=crop" },
  { name: "Emily Parker", text: "I was a bit nervous about starting my fitness journey, but GymKear made it easy! The Starter Package gave me access to everything I needed, from group classes that are fun and challenging to one-on-one monthly check-ins that keep me on track.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=416&h=482&fit=crop" },
  { name: "David Ramirez", text: "As someone new to fitness, GymKear's Starter Package exceeded my expectations. The group classes are always exciting, with instructors who make each session enjoyable while pushing you to your limits. The monthly progress reports are great for motivation.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=416&h=482&fit=crop" },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="d2c_gradient_tr py-20 lg:py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center w-full md:w-11/12 lg:w-4/5 xl:w-3/5 mx-auto mb-10"
        >
          <h2 className="d2c_title mb-4" style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}>
            our clients <br />
            <span className="text-outline" data-text="feedback">feedback</span>
          </h2>
          <p className="text-white/90 text-base xl:text-xl w-full md:w-4/5 xl:w-3/4 mx-auto" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
            We provide clear and concise answers to help users understand more about the gym's services, policies.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-col items-center">
          <div className="flex gap-4 mb-8 flex-wrap justify-center">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`relative w-14 h-14 rounded-lg overflow-hidden border-2 transition-colors flex-shrink-0 ${
                  activeIndex === i ? "border-[#2ccb99]" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={t.image} alt={t.name} width={56} height={56} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto text-center"
            >
              <p className="text-white/90 text-base xl:text-lg leading-relaxed mb-6" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                &ldquo;{testimonials[activeIndex].text}&rdquo;
              </p>
              <h5 className="text-[#2ccb99] uppercase text-2xl xl:text-3xl mt-6" style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}>
                {testimonials[activeIndex].name}
              </h5>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
