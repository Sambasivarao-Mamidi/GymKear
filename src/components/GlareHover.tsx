"use client";

import { ReactNode } from "react";
import { useMobileDetection } from "./MagicBento";

interface GlareHoverProps {
  width?: string;
  height?: string;
  children: ReactNode;
  glareColor?: string;
  glareOpacity?: number;
  glareAngle?: number;
  glareSize?: number;
  transitionDuration?: number;
  className?: string;
  style?: React.CSSProperties;
}

const GlareHover = ({
  width = '100%',
  height = '100%',
  children,
  glareColor = '#2ccb99',
  glareOpacity = 0.4,
  glareAngle = -30,
  glareSize = 300,
  transitionDuration = 800,
  className = '',
  style = {}
}: GlareHoverProps) => {
  const isMobile = useMobileDetection();
  
  const vars = {
    '--gh-width': width,
    '--gh-height': height,
    '--gh-angle': `${glareAngle}deg`,
    '--gh-duration': `${transitionDuration}ms`,
    '--gh-size': `${glareSize}%`,
    '--gh-rgba': glareColor,
    '--gh-opacity': glareOpacity
  };

  // Mobile: use auto-sweep animation, Desktop: use hover effect
  const autoClass = isMobile ? 'glare-auto' : '';

  return (
    <div
      className={`glare-hover ${autoClass} ${className}`}
      style={{ ...vars, ...style, width, height }}
    >
      {children}
    </div>
  );
};

export default GlareHover;