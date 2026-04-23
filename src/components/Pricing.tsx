"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import GlareHover from "./GlareHover";

const plans = [
  {
    name: "Monthly",
    duration: "1 Month",
    price: 49,
    perMonth: 49,
    total: "$49",
    planId: "monthly",
    popular: false,
    features: [
      { text: "Full Gym Access", included: true },
      { text: "Cardio Zone", included: true },
      { text: "Locker Room", included: true },
      { text: "Group Classes", included: false },
      { text: "Personal Training", included: false },
    ],
    cta: "Join Now",
  },
  {
    name: "Quarterly",
    duration: "3 Months",
    price: 117,
    perMonth: 39,
    total: "$117",
    planId: "quarterly",
    popular: true,
    features: [
      { text: "Full Gym Access", included: true },
      { text: "Cardio Zone", included: true },
      { text: "Locker Room", included: true },
      { text: "Group Classes", included: true },
      { text: "Personal Training", included: false },
    ],
    cta: "Join Now",
  },
  {
    name: "Yearly",
    duration: "1 Year",
    price: 348,
    perMonth: 29,
    total: "$348",
    planId: "yearly",
    popular: false,
    features: [
      { text: "Full Gym Access", included: true },
      { text: "Cardio Zone", included: true },
      { text: "Premium Locker Room", included: true },
      { text: "Unlimited Group Classes", included: true },
      { text: "Personal Training", included: true },
    ],
    cta: "Join Now",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="d2c_gradient_lb py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute top-10 left-1/4 w-64 h-64 bg-[#2ccb99]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-[#2ccb99]/5 rounded-full blur-3xl" />
      
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
            Choose Your <span className="text-[#2ccb99]">Plan</span>
          </h2>
          <p 
            className="mt-4 text-white/70 text-base md:text-lg max-w-xl mx-auto" 
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Flexible plans for every fitness journey. Save more with longer commitments.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-stretch gap-6 lg:gap-8 mt-10">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative w-full max-w-sm ${plan.popular ? 'lg:scale-105 lg:z-10' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
                  <span className="flex items-center gap-1 px-4 py-1.5 bg-[#2ccb99] text-[#01100c] text-sm font-bold rounded-full">
                    <Star className="w-4 h-4 fill-current" />
                    Best Value
                  </span>
                </div>
              )}

              <GlareHover 
                glareColor="#2ccb99" 
                glareOpacity={0.15}
                className={`h-full rounded-2xl ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-[#1d2b28] to-[#0d1812] border-2 border-[#2ccb99] shadow-lg shadow-[#2ccb99]/10' 
                    : 'bg-gradient-to-b from-[#1d2b28]/80 to-[#0d1812]/80 border border-[#2e3937]/30'
                }`}
              >
                <div className="p-6 lg:p-8 flex flex-col h-full">
                  <div className="text-center mb-2">
                    <div className="inline-block px-4 py-1 rounded-full bg-[#2ccb99]/10 text-[#2ccb99] text-sm font-semibold mb-3">
                      {plan.duration}
                    </div>
                    <h3 
                      className="text-2xl font-bold text-white" 
                      style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                    >
                      {plan.name}
                    </h3>
                  </div>

                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-[#2ccb99] text-3xl font-bold">$</span>
                      <span 
                        className="text-5xl lg:text-6xl font-bold text-white" 
                        style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                      >
                        {plan.perMonth}
                      </span>
                      <span className="text-white/50 text-lg">/mo</span>
                    </div>
                    <p className="text-white/40 text-sm mt-1">
                      {plan.total} billed {plan.duration === "1 Month" ? "today" : `every ${plan.duration.toLowerCase()}`}
                    </p>
                  </div>

                  <div className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, i) => (
                      <div 
                        key={i} 
                        className={`flex items-center gap-3 ${feature.included ? 'text-white' : 'text-white/30'}`}
                      >
                        {feature.included ? (
                          <Check className="w-5 h-5 text-[#2ccb99] shrink-0" />
                        ) : (
                          <div className="w-5 h-5 flex items-center justify-center">
                            <div className="w-3 h-0.5 bg-white/30" />
                          </div>
                        )}
                        <span className="text-sm">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <motion.a
                    href={`#contact?plan=${plan.planId}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3.5 text-center font-bold rounded-xl transition-all ${
                      plan.popular
                        ? "bg-[#2ccb99] text-[#01100c] hover:bg-[#25b389]"
                        : "bg-transparent border-2 border-[#2ccb99] text-[#2ccb99] hover:bg-[#2ccb99] hover:text-[#01100c]"
                    }`}
                  >
                    {plan.cta}
                  </motion.a>
                </div>
              </GlareHover>

              {plan.popular && (
                <div className="absolute inset-0 -z-10 bg-[#2ccb99]/20 blur-3xl rounded-2xl" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}