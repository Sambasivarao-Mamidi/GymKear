"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const trainers = [
  { name: "Jeffrey Baley", role: "Personal Trainer", image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=500&h=500&fit=crop" },
  { name: "Margaret Ford", role: "Fitness Trainer", image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500&h=500&fit=crop" },
  { name: "Steven Archer", role: "Cross-fit Trainer", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop" },
  { name: "Rebecca Bliss", role: "Personal Trainer", image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=500&h=500&fit=crop" },
];

export default function Trainers() {
  return (
    <section id="trainers" className="d2c_gradient_br py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center w-full md:w-11/12 lg:w-4/5 xl:w-3/5 mx-auto mb-10"
        >
          <h2 className="d2c_title mb-4" style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}>
            Our Expert <br />
            <span className="text-outline" data-text="trainees">trainees</span>
          </h2>
          <p className="text-white/90 text-base xl:text-xl w-full md:w-4/5 xl:w-3/4 mx-auto" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
            Where been dedicated to transforming lives through fitness for over 10 years. Our state-of-the-art facility offers
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-6 xl:mt-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group rounded-lg border border-[#2e3937] overflow-hidden h-full min-h-[250px] xl:min-h-[330px]"
            >
              <div className="relative w-full h-full min-h-[250px] xl:min-h-[330px]">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 p-7 flex items-end bg-gradient-to-b from-transparent from-0% via-[#01100c]/85 to-[#01100c] to-90%">
                  <div>
                    <h5 className="text-2xl font-normal text-[#2ccb99] uppercase" style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}>{trainer.name}</h5>
                    <p className="text-base text-white" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>{trainer.role}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-[#2ccb99] opacity-15 group-hover:opacity-0 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
