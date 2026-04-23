"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Kristin Watson",
    role: "Member since 2024",
    text: "GymKear transformed my life! The trainers are incredibly knowledgeable and supportive. I've lost 20 pounds and gained confidence I never had before. The community here is amazing - everyone pushes each other to be better every day.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop"
  },
  {
    name: "Jordan Mitchell",
    role: "Member since 2023",
    text: "Best gym decision I ever made. The facilities are top-notch, always clean, and the equipment is modern. What really sets GymKear apart is the personal attention from the staff. They actually care about your progress.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop"
  },
  {
    name: "Emily Parker",
    role: "Member since 2024",
    text: "As a beginner, I was nervous about joining a gym. GymKear made me feel welcome from day one. The trainers created a personalized program that challenged me without overwhelming me. Now I'm stronger than ever!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop"
  },
  {
    name: "David Ramirez",
    role: "Member since 2022",
    text: "Five stars isn't enough. The results speak for themselves - I've built muscle, lost fat, and most importantly, found a lifestyle I love. The group classes are addictive and the results are real. Highly recommend!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const handlePrev = useCallback(() => {
    setIsAutoPlaying(false);
    setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }, []);

  const handleNext = useCallback(() => {
    setIsAutoPlaying(false);
    setActiveIndex((i) => (i + 1) % testimonials.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const t = setInterval(() => {
      setActiveIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(t);
  }, [isAutoPlaying]);

  return (
    <section id="testimonials" className="py-20 lg:py-28 relative overflow-hidden" aria-label="Testimonials">
      <div className="absolute top-20 left-0 w-64 h-64 bg-[#2ccb99]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-[#2ccb99]/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl" 
            style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
          >
            What Our <span className="text-[#2ccb99]">Members</span> Say
          </h2>
          <p 
            className="mt-4 text-white/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed" 
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Real stories from real people who transformed their lives with GymKear
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-b from-[#1d2b28]/60 to-[#0d1812]/60 rounded-2xl p-6 md:p-10 lg:p-12 border border-[#2e3937]/30"
            >
              <div className="grid lg:grid-cols-[300px_1fr] gap-8 lg:gap-12 items-center">
                {/* Profile Image */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mx-auto max-w-[250px] lg:max-w-none">
                    <Image
                      src={testimonials[activeIndex].image}
                      alt={`Photo of ${testimonials[activeIndex].name}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 300px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1812]/60 to-transparent" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="text-center lg:text-left">
                  <Quote className="w-12 h-12 text-[#2ccb99]/30 mb-4 mx-auto lg:mx-0" aria-hidden="true" />
                  
                  {/* Stars */}
                  <div className="flex gap-1 justify-center lg:justify-start mb-4" role="img" aria-label={`${testimonials[activeIndex].rating} out of 5 stars`}>
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#2ccb99] fill-[#2ccb99]" aria-hidden="true" />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed mb-6"
                    style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                  >
                    &ldquo;{testimonials[activeIndex].text}&rdquo;
                  </motion.p>

                  {/* Name & Role */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h4 className="text-white font-semibold text-xl">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-[#2ccb99] text-sm mt-1">
                      {testimonials[activeIndex].role}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8" role="navigation" aria-label="Testimonial navigation">
            {/* Previous */}
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-[#2e3937] flex items-center justify-center text-white hover:bg-[#2ccb99] hover:text-[#01100c] hover:border-[#2ccb99] transition-all focus:outline-none focus:ring-2 focus:ring-[#2ccb99] focus:ring-offset-2 focus:ring-offset-[#01100c]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>

            {/* Dots */}
            <div className="flex gap-2" role="tablist">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveIndex(i);
                    setIsAutoPlaying(false);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2ccb99] focus:ring-offset-2 focus:ring-offset-[#01100c] ${
                    activeIndex === i 
                      ? "w-8 bg-[#2ccb99]" 
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  role="tab"
                  aria-selected={activeIndex === i}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-[#2e3937] flex items-center justify-center text-white hover:bg-[#2ccb99] hover:text-[#01100c] hover:border-[#2ccb99] transition-all focus:outline-none focus:ring-2 focus:ring-[#2ccb99] focus:ring-offset-2 focus:ring-offset-[#01100c]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}