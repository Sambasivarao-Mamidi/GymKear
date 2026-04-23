"use client";

import { motion } from "framer-motion";
import { Users, Dumbbell, Heart, ArrowRight, Award } from "lucide-react";
import Image from "next/image";

const values = [
  {
    title: "Expert Guidance",
    desc: "Certified trainers with 10+ years experience",
    icon: Award,
  },
  {
    title: "State-of-the-Art",
    desc: "Modern equipment and premium facilities",
    icon: Dumbbell,
  },
  {
    title: "Supportive Community",
    desc: "Join thousands on their fitness journey",
    icon: Users,
  },
  {
    title: "Personal Growth",
    desc: "Transform both body and mind",
    icon: Heart,
  },
];

const stats = [
  { value: "8", suffix: "+", label: "years experience" },
  { value: "10", suffix: "k", label: "happy members" },
  { value: "30", suffix: "+", label: "expert trainers" },
];

export default function Mission() {
  return (
    <section id="about" className="d2c_gradient_lb pt-14 md:pt-24 pb-20 lg:pb-28 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-72 h-72 bg-[#2ccb99]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#2ccb99]/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="d2c_title text-4xl md:text-5xl lg:text-6xl" 
              style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
            >
              Discover Our <br />
              <span className="text-[#2ccb99]">Mission</span>
            </h2>
            <p 
              className="mt-6 text-white/80 text-base md:text-lg leading-relaxed max-w-xl" 
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              At GymKear, we believe fitness is more than lifting weights — it&apos;s about lifting your spirit. 
              Our mission is to empower every member to unlock their full potential through personalized training, 
              cutting-edge equipment, and a community that pushes you to be better every day.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              {values.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group p-4 rounded-xl bg-[#1d2b28]/50 border border-[#2e3937]/50 hover:border-[#2ccb99]/50 transition-colors"
                >
                  <item.icon className="w-6 h-6 text-[#2ccb99] mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                  <p className="text-white/60 text-xs mt-1">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-[#2ccb99] text-[#01100c] rounded-lg font-semibold hover:bg-[#25b389] transition-colors cursor-pointer"
            >
              Start Your Journey
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/hero_group.jpg"
                alt="Gym trainers team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#01100c]/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="p-4 rounded-xl bg-[#01100c]/80 backdrop-blur-md border border-[#2e3937]/50">
                  <p className="text-white/80 text-sm italic">&ldquo;Transform your body, elevate your life — one rep at a time.&rdquo;</p>
                  <p className="text-[#2ccb99] text-xs mt-2">— GymKear Founder</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-3 gap-4 md:gap-6 mt-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="text-center p-6 rounded-2xl bg-gradient-to-b from-[#1d2b28]/80 to-[#0d1812]/80 border border-[#2e3937]/30"
            >
              <div className="flex items-baseline justify-center">
                <span 
                  className="text-4xl md:text-5xl font-bold text-[#2ccb99]" 
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  {stat.value}
                </span>
                <span className="text-[#2ccb99] text-2xl">{stat.suffix}</span>
              </div>
              <p className="text-white/70 text-sm mt-2 uppercase tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}