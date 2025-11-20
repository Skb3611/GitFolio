"use client";
import { useEffect, useRef, useState } from "react";

import { TemplateData } from "@workspace/types";
import { Badge } from "@workspace/ui/components/badge";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { Safari } from "@workspace/ui/components/magicui/safari";
import { Check, Gem, Gift, MoveRight } from "@workspace/ui/icons";
import { motion } from "motion/react";
import { config } from "../config";
import { useIsMobile } from "@workspace/ui/hooks/use-mobile";
import Link from "next/link";
import { Button } from "@workspace/ui/components/button";
export const TemplateCard = ({
  template,
  idx,
  setSelectedTemplateId,
}: {
  template: TemplateData;
  idx: number;
  setSelectedTemplateId: (id: string) => void;
}) => {
  const isMobile = useIsMobile();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const handleClick = (e: React.MouseEvent) => {
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
            <div className="text-lg font-semibold text-white">
              {template.title}
            </div>
            <AnimatedShinyText className="text-xs uppercase text-primary-foreground font-medium ">
              {template.description}
            </AnimatedShinyText>
            <div className="flex gap-2 justify-center mt-3">
              <Link
                href={`${config.renderer_url}/${template.id}`}
                target="_blank"
              >
                <Button variant={"outline"} size={"sm"}>
                  Visit Demo <MoveRight />
                </Button>
              </Link>
              <Button
                onClick={() => {
                  setSelectedTemplateId(template.id);
                  localStorage.setItem("selectedTemplateId", template.id);
                }}
                variant={"outline"}
                size={"sm"}
              >
                Select Template <Check />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Thumbnail */}
      <Safari
        imageSrc={template.thumbnail}
        url={`${config.gitfolio_url}/${template.id}`}
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
