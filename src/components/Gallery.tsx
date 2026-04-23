"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    alt: "Modern gym equipment area",
    title: "Equipment Zone",
    description: "State-of-the-art fitness equipment"
  },
  {
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
    alt: "Personal training session",
    title: "Personal Training",
    description: "One-on-one coaching sessions"
  },
  {
    src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=400&fit=crop",
    alt: "Group fitness class",
    title: "Group Classes",
    description: "Energizing group workouts"
  },
  {
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
    alt: "Weight training area",
    title: "Weight Room",
    description: "Free weights and machines"
  },
  {
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=400&fit=crop",
    alt: "Cardio equipment area",
    title: "Cardio Zone",
    description: "Latest cardio machines"
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 lg:py-28 relative" aria-label="Gallery">
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#2ccb99]/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Our <span className="text-[#2ccb99]">Gallery</span>
          </h2>
          <p 
            className="mt-4 text-white/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed" 
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            A visual showcase of the gym facilities, equipment, group classes, and events.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-10">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${
                index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <div 
                className={`relative w-full bg-[#1d2b28] overflow-hidden ${
                  index === 0 ? "aspect-[4/5] sm:min-h-[500px]" : "aspect-[4/3] min-h-[280px]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                
                {/* Dark overlay - appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#01100c] via-[#01100c]/70 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Content - slides up on hover */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <h3 
                    className="text-white text-xl md:text-2xl font-bold uppercase mb-2 transform text-center"
                    style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p 
                    className="text-white/70 text-sm text-center px-4"
                    style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Bottom indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#2ccb99] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}