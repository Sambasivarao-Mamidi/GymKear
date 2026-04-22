"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="d2c_gradient_tl py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-5 md:p-10 lg:p-20 rounded-lg border border-[#2e3937] text-center d2c_card_bg"
        >
          <div className="w-full md:w-[85%] xl:w-3/4 mx-auto space-y-3">
            <h2 className="d2c_title" style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}>
              Take the First Step Today
            </h2>
            <p className="text-white/90 w-full md:w-[90%] xl:w-3/4 mx-auto text-base xl:text-xl" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
              A compelling call-to-action section designed to motivate visitors to take the next step in their fitness journey
            </p>
            <a href="#contact" className="d2c_btn d2c_btn_secondary mt-3 lg:mt-7 inline-block">
              Sign Up Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
