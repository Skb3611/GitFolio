"use client"
import { useEffect, useRef, useState } from "react";

import { TemplateData } from "@workspace/types";
import { Badge } from "@workspace/ui/components/badge";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { Safari } from "@workspace/ui/components/magicui/safari";
import {  Gem, Gift, MoveRight } from "@workspace/ui/icons";
import { motion } from "motion/react";
import { BASE_URL } from "../config";
import { useIsMobile } from "@workspace/ui/hooks/use-mobile";
import Link from "next/link";
export const Card = ({ template, idx }: { template: TemplateData; idx: number }) => {
  const isMobile = useIsMobile();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const handleClick = (e: React.MouseEvent) => {
    console.log(e);
    // Don't toggle if clicking on buttons or their children
    // if ((e.target as HTMLElement).closest("button")) {
    //   return;
    // }
    console.log(isMobile);
    isMobile ? setIsActive(!isActive) : null;
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    };

    if (isActive) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive]);
  return (
    <motion.div
      ref={cardRef}
      className="w-full h-full relative group overflow-hidden flex flex-col-reverse"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.15 }}
      viewport={{ once: true }}
      // whileHover="hover"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end"
        variants={overlayVariants}
        initial="initial"
        whileHover="hover"
        animate={isActive ? "hover" : "initial"}
        // whileTap={isMobile?"hover":""}
        onClick={handleClick}
      >
        <div className="p-6 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <div className="space-y-1 flex flex-col">
            <div className="text-lg font-semibold text-primary">
              {template.title}
            </div>
            <AnimatedShinyText className="text-xs uppercase text-primary-foreground font-medium ">
              {template.description}
            </AnimatedShinyText>
            <Link href={`/${template.title}`}>
              <p className="flex items-center place-content-end gap-2 cursor-pointer text-right min-w-full text-sm">
                Visit <MoveRight />
              </p>
            </Link>
          </div>
        </div>
      </motion.div>
      <Badge
        className={`absolute top-3 right-3 rounded-sm [&>svg]:size-5  text-yellow-500  border backdrop-blur-xl `}
        variant={"outline"}
      >
        {template.category == "FREE" ? <Gift /> : <Gem />}
        {template.category}
      </Badge>
      {/* Thumbnail */}
      <Safari
        imageSrc={template.thumbnail}
        url={`${BASE_URL}/${template.id}`}
        mode="simple"
        // videoSrc={template.video}
        className="w-full h-full"
      />
    </motion.div>
  );
};

const overlayVariants = {
  initial: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.2 } },
};