"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setIsVisible(false);
    }, 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#01100c]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <div
              className="max-w-[300px] mb-6 mx-auto text-4xl md:text-5xl font-bold tracking-tight text-[#2ccb99]"
              style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
            >
              GYMKEAR
            </div>
            <div className="custom-loader mx-auto" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
