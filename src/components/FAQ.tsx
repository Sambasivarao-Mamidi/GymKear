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
    <section id="faq" className="d2c_gradient_lb py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center w-full md:w-11/12 lg:w-4/5 xl:w-3/5 mx-auto mb-10"
        >
          <h2 className="d2c_title mb-4" style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}>
            Frequently Asked <br />
            <span className="text-outline" data-text="Questions">Questions</span>
          </h2>
          <p className="text-white/90 text-base xl:text-xl w-full md:w-4/5 xl:w-3/4 mx-auto" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
            We provide clear and concise answers to help users understand more about the gym's services, policies.
          </p>
        </motion.div>

        <div className="border border-[#2e3937] rounded-lg p-5 md:py-14 md:px-20 mt-6 md:mt-10">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#2e3937] last:border-b-0">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="accordion-header w-full flex items-center gap-4 py-4 text-left cursor-pointer"
              >
                <span className="text-[#2ccb99] flex-shrink-0">
                  {openIndex === index ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                </span>
                <h4 className="text-[#2ccb99] text-xl md:text-2xl xl:text-3xl uppercase font-normal" style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}>
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
                    <p className="text-white/90 py-4 text-base xl:text-lg md:pl-16" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
