"use client";

import { useState } from "react";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Pricing", href: "#pricing" },
  { name: "Team", href: "#trainers" },
  { name: "Testimonial", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "Facebook", href: "#", Icon: Facebook },
  { name: "Twitter", href: "#", Icon: Twitter },
  { name: "LinkedIn", href: "#", Icon: Linkedin },
  { name: "YouTube", href: "#", Icon: Youtube },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter:", email);
    setEmail("");
  };
  return (
    <footer className="bg-[#01100c] border-t border-[#2e3937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter - first (website_clone order) */}
        <div className="text-center w-full md:w-11/12 lg:w-4/5 xl:w-4/5 mx-auto py-10">
          <h2 className="d2c_title mb-4" style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}>
            Subscribe to Our <br />
            <span className="text-outline" data-text="Newsletter">Newsletter</span>
          </h2>
          <p className="text-white/90 w-full md:w-4/5 xl:w-3/4 mx-auto text-base xl:text-xl mb-8" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
            Stay updated with the latest news, events, and promotions from GymKear by subscribing to our newsletter.
          </p>
          <form onSubmit={handleNewsletter} className="flex flex-col md:flex-row items-center max-w-2xl mx-auto gap-4 mt-8">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full md:flex-1 rounded-lg md:rounded-r-none border border-[#2e3937] bg-[#1e2c29] px-5 py-3 text-white placeholder-[#354844] focus:outline-none focus:border-[#2ccb99]"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            />
            <button
              type="submit"
              className="w-full md:w-auto px-10 py-3 rounded-lg md:rounded-l-none border border-[#2ccb99] bg-[#2ccb99] text-[#01100c] font-normal text-xl xl:text-2xl uppercase -ml-0 md:-ml-px"
              style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
            >
              Subscribe Now
            </button>
          </form>
        </div>

        <div className="grid grid-cols-12 gap-6 py-8 border-y border-[#2e3937]">
          <div className="col-span-12 md:col-span-6 lg:col-span-3 flex justify-center md:justify-start">
            <a href="#home" className="text-2xl xl:text-3xl font-bold tracking-tight text-[#2ccb99]" style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}>
              GYMKEAR
            </a>
          </div>
          <div className="col-span-12 lg:col-span-6 flex justify-center">
            <ul className="flex gap-2 md:gap-4 flex-wrap justify-center">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-[#2ccb99] transition-colors text-base xl:text-xl uppercase"
                    style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3 flex justify-center md:justify-end gap-3">
            {socialLinks.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                className="w-10 h-10 rounded border border-[#2ccb99] text-[#2ccb99] flex items-center justify-center hover:bg-[#2ccb99] hover:text-[#01100c] transition-colors"
              >
                <Icon className="w-5 h-5" strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>

        <p className="text-[#354844] text-center py-4 text-sm" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
          All rights reserved by DesignToCodes
        </p>
      </div>
    </footer>
  );
}
