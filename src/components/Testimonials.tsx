"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Kristin Watson",
    role: "Member since 2024",
    text: "GymKear transformed my life! The trainers are incredibly knowledgeable and supportive. I've lost 20 pounds and gained confidence I never had before. The community here is amazing!",
    rating: 5,
  },
  {
    name: "Jordan Mitchell",
    role: "Member since 2023",
    text: "Best gym decision I ever made. The facilities are top-notch, always clean, and the equipment is modern. What really sets GymKear apart is the personal attention from the staff.",
    rating: 5,
  },
  {
    name: "Emily Parker",
    role: "Member since 2024",
    text: "As a beginner, I was nervous about joining a gym. GymKear made me feel welcome from day one. The trainers created a personalized program that challenged me without overwhelming me.",
    rating: 5,
  },
  {
    name: "David Ramirez",
    role: "Member since 2022",
    text: "Five stars isn't enough. The results speak for themselves - I've built muscle, lost fat, and most importantly, found a lifestyle I love. The group classes are addictive.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Member since 2023",
    text: "The group classes are addictive and the results are real. I've tried many gyms, but GymKear is different. The community here keeps me coming back every single week.",
    rating: 5,
  },
  {
    name: "Mike Thompson",
    role: "Member since 2024",
    text: "Joined GymKear 6 months ago and already see incredible results. The trainers really know their stuff and the equipment is always well-maintained. Highly recommend!",
    rating: 5,
  },
  {
    name: "Lisa Anderson",
    role: "Member since 2023",
    text: "The personal trainers here genuinely care about your progress. Best gym experience ever! They remember your name, your goals, and push you to be your best self.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Member since 2022",
    text: "Clean facilities, amazing community, and real results. Couldn't ask for more from a gym. The location is perfect and the hours fit my schedule perfectly.",
    rating: 5,
  },
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-[380px] md:w-[420px] p-4">
      <div className="bg-gradient-to-b from-[#1d2b28]/80 to-[#0d1812]/80 rounded-2xl p-8 border border-[#2e3937]/30 h-full">
        <div className="flex gap-1 mb-5">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-[#2ccb99] fill-[#2ccb99]" />
          ))}
        </div>
        <p className="text-white/80 text-base lg:text-lg leading-relaxed mb-6" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
          &ldquo;{testimonial.text}&rdquo;
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#2ccb99]/20 border-2 border-[#2ccb99]/30 flex items-center justify-center">
            <span className="text-[#2ccb99] text-lg font-bold" style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}>
              {testimonial.name.charAt(0)}
            </span>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold">{testimonial.name}</h4>
            <p className="text-[#2ccb99] text-sm">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, scrollLeft: 0 });
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const extendedTestimonials = [
    ...testimonials,
    ...testimonials,
  ];

  // Pause auto-scroll and resume after 3s of inactivity
  const pauseAutoScroll = useCallback(() => {
    scrollContainerRef.current?.classList.add("paused");
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      scrollContainerRef.current?.classList.remove("paused");
    }, 3000);
  }, []);

  // --- Touch drag support (mobile swipe) ---
  const handleTouchStart = (e: React.TouchEvent) => {
    pauseAutoScroll();
    setIsDragging(true);
    dragStartRef.current = {
      x: e.touches[0].clientX,
      scrollLeft: scrollContainerRef.current?.parentElement?.scrollLeft || 0,
    };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current?.parentElement) return;
    const dx = e.touches[0].clientX - dragStartRef.current.x;
    scrollContainerRef.current.parentElement.scrollLeft = dragStartRef.current.scrollLeft - dx;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // --- Mouse drag support (desktop click-and-drag) ---
  const handleMouseDown = (e: React.MouseEvent) => {
    pauseAutoScroll();
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX,
      scrollLeft: scrollContainerRef.current?.parentElement?.scrollLeft || 0,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current?.parentElement) return;
    e.preventDefault();
    const dx = e.clientX - dragStartRef.current.x;
    scrollContainerRef.current.parentElement.scrollLeft = dragStartRef.current.scrollLeft - dx;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  return (
    <section id="testimonials" className="py-20 lg:py-28 relative overflow-hidden" aria-label="Testimonials">
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

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-[#01100c] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-[#01100c] to-transparent z-10 pointer-events-none" />
          
          <div className="overflow-hidden testimonial-wrapper">
            <div
              ref={scrollContainerRef}
              className={`flex gap-6 testimonial-scroll ${isDragging ? "dragging" : ""}`}
              style={{ willChange: "transform", cursor: isDragging ? "grabbing" : "grab" }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {extendedTestimonials.map((testimonial, i) => (
                <TestimonialCard key={i} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}