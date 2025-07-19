"use client";
import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@workspace/ui/lib/utils";
import { PointerHighlight } from "@workspace/ui/components/ui/pointer-highlight"; // adjust path as needed

export interface SplitTextAnimationProps {
  children: string | React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div" | "li";
  duration?: number;
  bounce?: number;
  delay?: number;
  staggerDelay?: number;
  animationType?: "spring" | "tween";
  initialOpacity?: number;
  initialY?: number;
  whileInView?: boolean;
  highlightWord?: string;
  onAnimationComplete?: () => void;
}

export function SplitTextAnimation({
  children,
  className,
  as: Component = "h1",
  duration = 2,
  bounce = 0,
  delay = 0,
  staggerDelay = 0.05,
  animationType = "spring",
  initialOpacity = 0,
  initialY = 10,
  whileInView = false,
  highlightWord,
  onAnimationComplete,
  ...props
}: SplitTextAnimationProps) {
  const containerRef = useRef<any>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!whileInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [whileInView, isInView]);

  useEffect(() => {
    const startAnimation = () => {
      if (!containerRef.current) return;

      containerRef.current.style.visibility = "visible";

      const { words } = splitText(containerRef.current);

      animate(
        words,
        {
          opacity: [initialOpacity, 1],
          y: [initialY, 0],
        },
        {
          type: animationType,
          duration,
          bounce,
          delay: stagger(staggerDelay),
        }
      ).finished.then(() => {
        // Post-animation: highlight specific word
        if (highlightWord) {
          words.forEach((wordEl) => {
            if (
              wordEl.textContent?.trim().toLowerCase() ===
              highlightWord.trim().toLowerCase()
            ) {;

              // Dynamically render React component into DOM
              import("react-dom/client").then(({ createRoot }) => {
                const root = createRoot(wordEl);
                root.render(<PointerHighlight pointerClassName="text-primary">{wordEl.textContent}</PointerHighlight>);
              });
            }
          });
        }

        onAnimationComplete?.();
      });
    };

    const shouldAnimate = whileInView ? isInView : true;

    if (shouldAnimate) {
      const animateWithFontCheck = () => {
        if (document.fonts) {
          document.fonts.ready.then(startAnimation);
        } else {
          setTimeout(startAnimation, 100);
        }
      };

      if (delay > 0) {
        setTimeout(animateWithFontCheck, delay * 1000);
      } else {
        animateWithFontCheck();
      }
    }
  }, [
    children,
    duration,
    bounce,
    delay,
    staggerDelay,
    animationType,
    initialOpacity,
    initialY,
    onAnimationComplete,
    whileInView,
    isInView,
    highlightWord,
  ]);

  return (
    <Component
      ref={containerRef}
      className={cn("split-text-container", className)}
      style={{ visibility: "hidden" }}
      {...props}
    >
      {children}
    </Component>
  );
}
