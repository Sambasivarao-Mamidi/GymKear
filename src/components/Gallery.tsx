"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=612&h=716&fit=crop",
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=306&h=358&fit=crop",
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=306&h=358&fit=crop",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=306&h=358&fit=crop",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=306&h=358&fit=crop",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center w-full md:w-11/12 lg:w-4/5 xl:w-3/5 mx-auto mb-10"
        >
          <h2 className="d2c_title mb-4" style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}>
            View our <br />
            <span className="text-outline" data-text="Gallery">Gallery</span>
          </h2>
          <p className="text-white/90 text-base xl:text-xl w-full md:w-4/5 xl:w-3/4 mx-auto" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
            A visual showcase of the gym facilities, equipment, group classes, and events.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 xl:mt-16">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative rounded-lg border border-[#2e3937] overflow-hidden group ${
                index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <div className={`relative bg-[#1d2b28] ${index === 0 ? "aspect-[4/5] sm:min-h-[358px]" : "aspect-[4/3] min-h-[250px] xl:min-h-[358px]"}`}>
                <Image
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-[#2ccb99] opacity-15 group-hover:opacity-0 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
