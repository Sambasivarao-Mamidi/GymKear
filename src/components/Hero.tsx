"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";

const marqueeItems = [
  "Welcome to GymKear",
  "where your fitness transformation begins",
  "Premium Equipment",
  "Expert Trainers",
  "State-of-the-Art Facilities",
  "Join the Community",
];

/* ---------- Floating particles data ---------- */
const particles = [
  { size: 3, x: "10%", y: "20%", delay: 0, duration: 6 },
  { size: 2, x: "25%", y: "70%", delay: 1.2, duration: 8 },
  { size: 4, x: "45%", y: "15%", delay: 0.5, duration: 7 },
  { size: 2, x: "60%", y: "80%", delay: 2, duration: 9 },
  { size: 3, x: "80%", y: "35%", delay: 0.8, duration: 6.5 },
  { size: 2, x: "15%", y: "55%", delay: 1.5, duration: 7.5 },
  { size: 5, x: "70%", y: "50%", delay: 0.3, duration: 8.5 },
  { size: 2, x: "90%", y: "25%", delay: 2.5, duration: 6 },
  { size: 3, x: "35%", y: "90%", delay: 1, duration: 7 },
  { size: 2, x: "55%", y: "40%", delay: 1.8, duration: 9 },
  { size: 4, x: "5%", y: "85%", delay: 0.7, duration: 8 },
  { size: 2, x: "75%", y: "10%", delay: 2.2, duration: 7 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col overflow-hidden relative pt-24 md:pt-8 pb-0"
      style={{
        background:
          "radial-gradient(ellipse at 80% 20%, #0d3b2e 0%, transparent 50%), " +
          "radial-gradient(ellipse at 20% 80%, #0a2f24 0%, transparent 50%), " +
          "radial-gradient(ellipse at 50% 50%, #061f18 0%, transparent 70%), " +
          "linear-gradient(160deg, #030f0b 0%, #071e16 30%, #0b2920 60%, #04120e 100%)",
      }}
    >
      {/* ── Wavy light trails (SVG) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <svg
          className="hero-wave-svg absolute inset-0 w-full h-full"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            className="hero-wave hero-wave-1"
            d="M-100,320 C200,220 400,420 720,280 S1100,380 1540,260"
            fill="none"
            stroke="rgba(44,203,153,0.25)"
            strokeWidth="2.5"
            filter="url(#glow)"
          />
          <path
            className="hero-wave hero-wave-2"
            d="M-50,400 C250,300 500,500 800,350 S1150,450 1500,330"
            fill="none"
            stroke="rgba(44,203,153,0.2)"
            strokeWidth="2"
            filter="url(#glow)"
          />
          <path
            className="hero-wave hero-wave-3"
            d="M0,180 C300,100 600,280 900,160 S1200,250 1500,140"
            fill="none"
            stroke="rgba(44,203,153,0.15)"
            strokeWidth="1.5"
            filter="url(#glow)"
          />
        </svg>
      </div>

      {/* ── Floating particles ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((p, i) => (
          <span
            key={i}
            className="hero-particle"
            style={{
              width: p.size,
              height: p.size,
              left: p.x,
              top: p.y,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      {/* ── Main content ── */}
      <div className="order-2 lg:order-1 relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center min-h-[70vh]">
          <div className="text-center lg:text-left">
            <h2
              className="d2c_title"
              style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
            >
              Get Fit, Strong and
            </h2>
            <p
              className="mt-4 text-white/90 text-base xl:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Welcome to GymKear, where your fitness transformation begins. Featuring a high-energy background image of individuals pushing their limits.
            </p>
            <div className="flex justify-center lg:justify-start items-center gap-6 mt-6 md:mt-8 lg:mt-10">
              <a 
                href="#pricing" 
                className="d2c_btn d2c_btn_primary w-full md:w-auto text-center"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Join Now
              </a>
              <a 
                href="#contact" 
                className="d2c_btn d2c_btn_secondary w-full md:w-auto text-center"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Started
              </a>
            </div>
          </div>

          <div className="relative order-first lg:order-none -ml-0 lg:-ml-20 -mt-0 lg:-mt-24">
            <div className="hero-image-container relative aspect-[3/4] max-h-[700px] mx-auto">
              <Image
                src="/man_dumbbells_transparent.png"
                alt="Man performing bicep curl"
                fill
                className="object-contain"
                priority
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Marquee Notification Strip ── */}
      <div className="order-1 lg:order-2 relative z-20 w-full mb-8 lg:mb-0 mt-0 lg:mt-20 overflow-hidden">
        <div className="bg-gradient-to-r from-[#2ccb99]/20 via-[#2ccb99]/10 to-[#2ccb99]/20 py-4 border-y border-[#2ccb99]/30">
          <div className="animate-marquee-left flex whitespace-nowrap">
            <div className="flex items-center gap-8 px-4">
              {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
                <span key={i} className="flex items-center gap-4">
                  <span
                    className="text-white/90 text-base md:text-lg font-medium"
                    style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                  >
                    {item}
                  </span>
                  <Star className="w-4 h-4 text-[#2ccb99] fill-[#2ccb99] flex-shrink-0" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}