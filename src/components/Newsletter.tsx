"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <section className="py-20 lg:py-28 bg-[#162C2C] border-y border-[#2dd4bf]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-heading-line mb-2">Subscribe to Our</p>
          <h2 className="mb-6">
            <span className="glitch section-heading-accent" data-text="Newsletter">
              Newsletter
            </span>
          </h2>
          <p className="text-[#bebebe] text-base lg:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Stay updated with the latest news, events, and promotions from GymKear by subscribing to our newsletter.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 bg-[#1F3333] border border-[#2a4040] rounded-lg px-4 py-3.5 text-white placeholder-[#bebebe]/60 focus:border-[#2dd4bf] focus:outline-none transition-colors"
              required
            />
            <motion.button
              type="submit"
              className="bg-[#2dd4bf] text-[#0d1f1f] font-semibold px-8 py-3.5 rounded-lg hover:bg-[#5eead4] transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Subscribe Now
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
