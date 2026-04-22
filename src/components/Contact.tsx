"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const trainingHours = [
  { day: "Monday", time: "07.00 - 21.00" },
  { day: "Tuesday", time: "07.00 - 21.00" },
  { day: "Wednesday", time: "07.00 - 21.00" },
  { day: "Thursday", time: "07.00 - 21.00" },
  { day: "Friday", time: "07.00 - 21.00" },
  { day: "Saturday", time: "07.00 - 21.00" },
];

const packages = ["Basic", "Standard", "Premium"] as const;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    package: "" as "" | (typeof packages)[number],
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="d2c_gradient_tl py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center w-full md:w-11/12 lg:w-4/5 xl:w-3/5 mx-auto mb-10"
        >
          <h2 className="d2c_title mb-4" style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}>
            get in <br />
            <span className="text-outline" data-text="Touch">Touch</span>
          </h2>
          <p className="text-white/90 text-base xl:text-xl w-full md:w-4/5 xl:w-3/4 mx-auto" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
            We provide clear and concise answers to help users understand more about the gym's services, policies.
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-4 md:gap-6 mt-10 xl:mt-14">
          <div className="col-span-12 lg:col-span-8">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-6 gap-8">
                <div className="sm:col-span-3">
                  <label className="block mb-2 text-xl uppercase bg-gradient-to-b from-[#2ccb99] to-[#01100c] bg-clip-text text-transparent" style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}>Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full d2c_card_bg rounded-lg px-5 py-3 text-white placeholder-[#354844] border border-[#2e3937] focus:outline-none focus:border-[#2ccb99]"
                    style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                    required
                  />
                </div>
                <div className="sm:col-span-3">
                  <label className="block mb-2 text-xl uppercase bg-gradient-to-b from-[#2ccb99] to-[#01100c] bg-clip-text text-transparent" style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}>Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter your number"
                    className="w-full d2c_card_bg rounded-lg px-5 py-3 text-white placeholder-[#354844] border border-[#2e3937] focus:outline-none focus:border-[#2ccb99]"
                    style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-6 gap-8">
                <div className="sm:col-span-3">
                  <label className="block mb-2 text-xl uppercase bg-gradient-to-b from-[#2ccb99] to-[#01100c] bg-clip-text text-transparent" style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}>Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email"
                    className="w-full d2c_card_bg rounded-lg px-5 py-3 text-white placeholder-[#354844] border border-[#2e3937] focus:outline-none focus:border-[#2ccb99]"
                    style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                    required
                  />
                </div>
                <div className="sm:col-span-3">
                  <label className="block mb-2 text-xl uppercase bg-gradient-to-b from-[#2ccb99] to-[#01100c] bg-clip-text text-transparent" style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}>Select your package</label>
                  <div className="grid grid-cols-3 pt-4 gap-2">
                    {packages.map((pkg) => (
                      <label key={pkg} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="package"
                          value={pkg}
                          checked={formData.package === pkg}
                          onChange={() => setFormData({ ...formData, package: pkg })}
                          className="w-4 h-4 rounded-full border-2 border-[#2e3937] bg-transparent checked:border-[#2ccb99] checked:bg-[#2ccb99] accent-[#2ccb99]"
                        />
                        <span className="text-white text-base xl:text-xl capitalize" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>{pkg}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <label className="block mb-2 text-xl uppercase bg-gradient-to-b from-[#2ccb99] to-[#01100c] bg-clip-text text-transparent" style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}>Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  placeholder="Enter your message"
                  className="w-full d2c_card_bg rounded-lg px-5 py-3 text-white placeholder-[#354844] border border-[#2e3937] focus:outline-none focus:border-[#2ccb99] resize-none"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                />
              </div>
              <button type="submit" className="d2c_btn d2c_btn_secondary lowercase">
                send message now
              </button>
            </motion.form>
          </div>

          <div className="col-span-12 lg:col-span-4 mt-5 md:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="py-8 px-6 border border-[#2e3937] rounded-lg space-y-10"
            >
              <h4 className="text-2xl xl:text-3xl uppercase font-normal bg-gradient-to-b from-[#2ccb99] to-[#5eead4] bg-clip-text text-transparent border-b border-[#2e3937] pb-2" style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}>
                Training Hours
              </h4>
              <ul>
                {trainingHours.map((item, i) => (
                  <li key={i} className="border-b border-[#2e3937] pt-4 pb-2 flex gap-3 justify-between text-white text-base xl:text-xl" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                    <span className="w-3/5">{item.day}</span>
                    <span className="w-2/5 text-end text-[#2ccb99]">{item.time}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
