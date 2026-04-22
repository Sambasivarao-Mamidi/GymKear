"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic Plan",
    price: "$20",
    period: "month",
    features: ["Staffed Hours Only", "Fitness Floor & Cardio", "30-Minute Consultation", "Club 360 Class", "50% Off on Guest Passes"],
  },
  {
    name: "Standard Plan",
    price: "$35.99",
    period: "month",
    features: ["Access to All CLUB4 Locations", "Fitness Floor & Cardio", "Studio Fitness & Les Mills Classes", "Tanning/Red-Light Therapy", "Guest Passes & Bottled Water", "30-Minute Fitness Consultation"],
  },
  {
    name: "Premium Plan",
    price: "$45.99",
    period: "month",
    features: ["Access to All CLUB4 Locations", "Fitness Floor & Cardio", "Studio Fitness & Les Mills Classes", "Tanning/Red-Light Therapy", "Hydro Massage", "Guest Passes & Bottled Water", "Unlimited CLUB360 Classes"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="d2c_gradient_lb py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center w-full md:w-11/12 lg:w-4/5 xl:w-3/5 mx-auto mb-10"
        >
          <h2 className="d2c_title mb-4" style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}>
            Choose Your <br />
            <span className="text-outline" data-text="Pricing">Pricing</span>
          </h2>
          <p className="text-white/90 text-base xl:text-xl w-full md:w-4/5 xl:w-3/4 mx-auto" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
            Join the GymKear family by choosing the membership plan that best suits your lifestyle and goals
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mt-6 lg:mt-10">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] p-3"
            >
              <div className="d2c_card_bg rounded-lg p-6 xl:p-10 h-full flex flex-col justify-between group hover:border-[#2ccb99]/50 transition-colors">
                <div>
                  <p className="text-xl text-white mb-2" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>{plan.name}</p>
                  <h4 className="text-[#2ccb99] lowercase flex items-baseline gap-1 mb-4">
                    <span className="text-5xl xl:text-7xl" style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}>{plan.price}/</span>
                    <label className="text-xl" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>{plan.period}</label>
                  </h4>
                  <ul className="space-y-2 mt-4">
                    {plan.features.map((f, i) => (
                      <li key={i} className="text-white text-base xl:text-xl" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#contact"
                  className="d2c_btn d2c_btn_secondary mt-8 text-center cursor-pointer group-hover:!bg-[#2ccb99] group-hover:!text-[#01100c]"
                >
                  Get Membership Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
