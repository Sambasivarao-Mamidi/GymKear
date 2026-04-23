"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { question: "What are your operating hours?", answer: "GymKear is open from 5:00 AM to 10:00 PM on weekdays, and 7:00 AM to 8:00 PM on weekends." },
  { question: "Do I need to book classes in advance?", answer: "Yes, we recommend booking classes in advance through our online portal or mobile app to secure your spot." },
  { question: "What should I bring for my first visit?", answer: "Please bring a valid ID, workout clothes, a towel, and a water bottle. If you have signed up for personal training, bring any necessary documentation." },
  { question: "Are there any membership contracts?", answer: "We offer both contract and no-contract membership options. You can choose a plan that best suits your commitment preference." },
  { question: "Do you offer trial memberships?", answer: "Yes, we offer a one-week trial membership for new members to experience our facilities and services." },
  { question: "What types of payment do you accept?", answer: "We accept cash, credit/debit cards, and online payments through our secure portal." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="d2c_gradient_lb py-20 lg:py-28 relative">
      <div className="absolute top-20 right-0 w-64 h-64 bg-[#2ccb99]/5 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            Frequently <span className="text-[#2ccb99]">Asked</span>
          </h2>
          <p 
            className="mt-4 text-white/70 text-base md:text-lg max-w-xl mx-auto" 
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            We provide clear and concise answers to help you understand more about GymKear.
          </p>
        </motion.div>

        <div className="space-y-3 mt-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`rounded-xl border transition-all duration-300 ${
                openIndex === index 
                  ? "bg-gradient-to-b from-[#1d2b28] to-[#0d1812] border-[#2ccb99]/50" 
                  : "bg-[#1d2b28]/50 border-[#2e3937]/30 hover:border-[#2ccb99]/30"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center gap-4 p-5 md:p-6 text-left"
              >
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  openIndex === index ? "bg-[#2ccb99] text-[#01100c]" : "bg-[#2e3937]/50 text-[#2ccb99]"
                }`}>
                  {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
                <h4 className="text-white text-base md:text-lg font-medium flex-1" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                  {faq.question}
                </h4>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/70 pb-5 px-5 md:pl-16 md:pr-6 text-sm md:text-base" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}