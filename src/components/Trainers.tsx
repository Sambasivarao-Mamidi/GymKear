"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const trainers = [
  { 
    name: "Jeffrey Baley", 
    role: "Personal Trainer", 
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=500&h=500&fit=crop",
    socials: { instagram: "#", facebook: "#", linkedin: "#" }
  },
  { 
    name: "Margaret Ford", 
    role: "Fitness Trainer", 
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500&h=500&fit=crop",
    socials: { instagram: "#", facebook: "#", linkedin: "#" }
  },
  { 
    name: "Steven Archer", 
    role: "Cross-fit Trainer", 
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
    socials: { instagram: "#", facebook: "#", linkedin: "#" }
  },
  { 
    name: "Rebecca Bliss", 
    role: "Personal Trainer", 
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=500&h=500&fit=crop",
    socials: { instagram: "#", facebook: "#", linkedin: "#" }
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="d2c_gradient_br py-20 lg:py-28 relative">
      <div className="absolute top-20 left-0 w-64 h-64 bg-[#2ccb99]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-[#2ccb99]/5 rounded-full blur-3xl" />
      
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
            Meet Our <span className="text-[#2ccb99]">Trainers</span>
          </h2>
<p 
              className="mt-4 text-white/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed" 
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Our expert team of certified trainers is here to guide you on your fitness journey.
            </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-10">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group rounded-xl overflow-hidden h-full min-h-[300px] md:min-h-[350px]"
            >
              <div className="relative w-full h-full min-h-[300px] md:min-h-[350px]">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#01100c] via-transparent to-transparent" />
                
                {/* Name & Role */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h5 
                    className="text-2xl text-[#2ccb99] uppercase" 
                    style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                  >
                    {trainer.name}
                  </h5>
                  <p 
                    className="text-white/80 text-sm mt-1" 
                    style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                  >
                    {trainer.role}
                  </p>
                </div>

                {/* Social Icons - Show on Hover */}
                <div className="absolute inset-0 bg-[#01100c]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.a
                    href={trainer.socials.instagram}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    className="w-11 h-11 rounded-full bg-[#2ccb99]/20 border border-[#2ccb99]/50 flex items-center justify-center text-[#2ccb99] hover:bg-[#2ccb99] hover:text-[#01100c] transition-all"
                  >
                    <Instagram className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={trainer.socials.facebook}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ delay: 0.05 }}
                    className="w-11 h-11 rounded-full bg-[#2ccb99]/20 border border-[#2ccb99]/50 flex items-center justify-center text-[#2ccb99] hover:bg-[#2ccb99] hover:text-[#01100c] transition-all"
                  >
                    <Facebook className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={trainer.socials.linkedin}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ delay: 0.1 }}
                    className="w-11 h-11 rounded-full bg-[#2ccb99]/20 border border-[#2ccb99]/50 flex items-center justify-center text-[#2ccb99] hover:bg-[#2ccb99] hover:text-[#01100c] transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}