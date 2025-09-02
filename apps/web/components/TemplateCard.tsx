"use client";
import React, { useEffect, useRef, useState } from "react";
import { Safari } from "@workspace/ui/components/magicui/safari";

import { motion } from "motion/react";
import { Button } from "@workspace/ui/components/button";
import { SavePayload, TemplateData } from "@workspace/types";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { Crown, Eye, Gem, Gift } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
import { config } from "@/config";
import { usePathname, useRouter } from "next/navigation";
import { Badge } from "@workspace/ui/components/badge";

interface TemplateCardProps {
  template: TemplateData;
  idx: number;
  // onClick?: ({ type, data }: SavePayload) => void;
  setTemplate?: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const TemplateCard = ({ template, idx, setTemplate }: TemplateCardProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const cardRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [isActive, setIsActive] = useState(false);
  const handleClick = (e: React.MouseEvent) => {
    // Don't toggle if clicking on buttons or their children
    if ((e.target as HTMLElement).closest("button")) {
      return;
    }
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
      variants={CardVariants}
      initial={
        idx % 2 === 0
          ? CardVariants.fromLeft.hidden
          : CardVariants.fromRight.hidden
      }
      whileInView={
        idx % 2 === 0
          ? CardVariants.fromLeft.visible
          : CardVariants.fromRight.visible
      }
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      viewport={{ once: true }}
      // whileHover="hover"
    >
      {/* Hover Overlay */}
      <motion.div
        variants={overlayVariants}
        initial="initial"
        whileHover="hover"
        animate={isActive ? "hover" : "initial"}
        // whileTap={isMobile?"hover":""}
        onClick={handleClick}
        className="absolute top-0 left-0 w-full h-full bg-black/5  backdrop-blur-xs rounded-lg  z-20 flex flex-col items-center justify-center "
      >
        <motion.span
          variants={textVariants}
          className="text-white text-xl md:text-3xl mb-2"
        >
          {template.title}
        </motion.span>
        <motion.span
          variants={textVariants}
          className="text-white  text-center max-w-[80%] tracking-tight  md:max-w-sm"
        >
          <AnimatedShinyText className="text-xs  md:text-base">
            {template.description}
          </AnimatedShinyText>
        </motion.span>
        <div className="space-x-2 mt-3">
          <Button
            variant={"outline"}
            className="cursor-pointer"
            onClick={() => {
              !pathname.includes("dashboard")
                ? router.push(`/templates/${template.id}`)
                : setTemplate?.(template.id);
            }}
          >
            Explore Template
          </Button>

        </div>
      </motion.div>
          <Badge
            className={`absolute top-3 right-3 rounded-sm [&>svg]:size-5  text-yellow-500  border backdrop-blur-xl `}
            variant={"outline"}
          >
            {template.category=="FREE"?<Gift/>:<Gem />}
            {template.category}
          </Badge>
      {/* Thumbnail */}
      <Safari
        imageSrc={template.thumbnail}
        url={`${config.renderer_endpoint}/${template.id}`}
        mode="simple"
        // videoSrc={template.video}
        className="w-full h-full"
      />
    </motion.div>
  );
};

export default TemplateCard;

const CardVariants = {
  fromLeft: {
    hidden: {
      opacity: 0,
      x: -20,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
    },
  },
  fromRight: {
    hidden: {
      opacity: 0,
      x: 20,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
    },
  },
};
const overlayVariants = {
  initial: { opacity: 0, y: 100 },
  hover: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

const textVariants = {
  initial: { opacity: 0, y: 10 },
  hover: { opacity: 1, y: 0 },
};
