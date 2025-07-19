"use client"
import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef, useState } from "react";
import { cn } from "@workspace/ui/lib/utils";
export interface SplitTextAnimationProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"|"li";
  duration?: number;
  bounce?: number;
  delay?: number;
  staggerDelay?: number;
  animationType?: "spring" | "tween";
  initialOpacity?: number;
  initialY?: number;
  whileInView?: boolean;
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
  onAnimationComplete,
  ...props
}: SplitTextAnimationProps) {
  const containerRef = useRef<any>(null);
  const [isInView, setIsInView] = useState(false);

  // Intersection Observer for whileInView functionality
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

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [whileInView, isInView]);

  useEffect(() => {
    const startAnimation = () => {
      if (!containerRef.current) return;

      // Show the container
      containerRef.current.style.visibility = "visible";

      const { words } = splitText(containerRef.current);

      // Animate the words with stagger
      animate(
        words,
        { 
          opacity: [initialOpacity, 1], 
          y: [initialY, 0] 
        },
        {
          type: animationType,
          duration,
          bounce,
          delay: stagger(staggerDelay),
        }
      ).finished.then(() => {
        onAnimationComplete?.();
      });
    };

    const shouldAnimate = whileInView ? isInView : true;

    if (shouldAnimate) {
      // Handle delay
      if (delay > 0) {
        setTimeout(() => {
          // Wait for fonts to load before starting animation
          if (document.fonts) {
            document.fonts.ready.then(startAnimation);
          } else {
            // Fallback for browsers without document.fonts
            setTimeout(startAnimation, 100);
          }
        }, delay * 1000);
      } else {
        // Wait for fonts to load before starting animation
        if (document.fonts) {
          document.fonts.ready.then(startAnimation);
        } else {
          // Fallback for browsers without document.fonts
          setTimeout(startAnimation, 100);
        }
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