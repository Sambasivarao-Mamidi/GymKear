"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ArrowUpRight } from "lucide-react";
import "./CardNav.css";

const CardNav = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const items = [
    {
      label: "Explore",
      bgColor: "#1d2b28",
      textColor: "#fff",
      links: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" }
      ]
    },
    {
      label: "Programs",
      bgColor: "#1d2b28",
      textColor: "#fff",
      links: [
        { label: "Gallery", href: "#gallery" },
        { label: "Pricing", href: "#pricing" }
      ]
    },
    {
      label: "Help",
      bgColor: "#1d2b28",
      textColor: "#fff",
      links: [
        { label: "Contact", href: "#contact" },
        { label: "FAQ", href: "#faq" }
      ]
    }
  ];

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 280;

    const contentEl = navEl.querySelector(".card-nav-content");
    if (contentEl) {
      const wasVisible = (contentEl as HTMLElement).style.visibility;
      const wasPointerEvents = (contentEl as HTMLElement).style.pointerEvents;
      const wasPosition = (contentEl as HTMLElement).style.position;
      const wasHeight = (contentEl as HTMLElement).style.height;

      (contentEl as HTMLElement).style.visibility = "visible";
      (contentEl as HTMLElement).style.pointerEvents = "auto";
      (contentEl as HTMLElement).style.position = "static";
      (contentEl as HTMLElement).style.height = "auto";

      contentEl.getBoundingClientRect();

      const topBar = 60;
      const padding = 16;
      const contentHeight = contentEl.scrollHeight;

      (contentEl as HTMLElement).style.visibility = wasVisible;
      (contentEl as HTMLElement).style.pointerEvents = wasPointerEvents;
      (contentEl as HTMLElement).style.position = wasPosition;
      (contentEl as HTMLElement).style.height = wasHeight;

      return topBar + contentHeight + padding;
    }
    return 280;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: "hidden" });
    gsap.set(cardsRef.current, { y: 30, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight(),
      duration: 0.3,
      ease: "power3.out"
    });

    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.25, ease: "power3.out", stagger: 0.05 }, "-=0.1");

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, []);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;

    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback("onReverseComplete", () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const handleLinkClick = (href: string) => {
    setIsHamburgerOpen(false);
    setIsExpanded(false);
    if (tlRef.current) {
      tlRef.current.kill();
      const newTl = createTimeline();
      if (newTl) {
        tlRef.current = newTl;
      }
    }

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      // Instant scroll for fast navigation
      window.scrollTo(0, top);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isExpanded && navRef.current && !navRef.current.contains(e.target as Node)) {
        toggleMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isExpanded]);

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    cardsRef.current[i] = el;
  };

  return (
    <div className="card-nav-container">
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? "open" : ""}`}
      >
        <div className="card-nav-top">
          <div
            className={`hamburger-menu ${isHamburgerOpen ? "open" : ""}`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? "Close menu" : "Open menu"}
            tabIndex={0}
          >
            <div className="hamburger-line" />
            <div className="hamburger-line" />
          </div>

          <div className="logo-container">
            <span className="logo-text">GYMKEAR</span>
          </div>

          <button
            type="button"
            className="card-nav-cta-button"
            onClick={() => handleLinkClick("#pricing")}
          >
            Join Now
          </button>
        </div>

        <div className="card-nav-content" aria-hidden={!isExpanded}>
          {items.slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label">{item.label}</div>
              <div className="nav-card-links">
                {item.links?.map((lnk, i) => (
                  <button
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link"
                    onClick={() => handleLinkClick(lnk.href)}
                  >
                    <ArrowUpRight className="nav-card-link-icon" aria-hidden="true" />
                    {lnk.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;