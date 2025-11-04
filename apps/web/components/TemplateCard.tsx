"use client";
import React, { useEffect, useRef, useState } from "react";
import { Safari } from "@workspace/ui/components/magicui/safari";

import { motion } from "motion/react";
import { TemplateData } from "@workspace/types";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { Gem, Gift, MoveRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
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
  const handleClick = () => {
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
      transition={{ duration: 0.5, delay: idx * 0.1 - (idx > 3 ? 0.25 : 0) }}
      viewport={{ once: true }}
      // whileHover="hover"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end w-full"
        variants={overlayVariants}
        initial="initial"
        whileHover="hover"
        animate={isActive ? "hover" : "initial"}
        // whileTap={isMobile?"hover":""}
        onClick={handleClick}
      >
        <div className="p-4 sm:p-6 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 w-full">
          <div className="space-y-1 flex flex-col items-start">
            <div className="text-sm sm:text-lg font-semibold text-primary">
              {template.title}
            </div>
            <AnimatedShinyText className="text-[0.55rem] sm:text-xs uppercase text-primary-foreground font-medium max-w-full w-full">
              {isMobile
                ? template.description.slice(0, 80) + "..."
                : template.description}
            </AnimatedShinyText>
            <p
              onClick={() => {
                !pathname.includes("dashboard")
                  ? router.push(`/templates/${template.id}`)
                  : setTemplate?.(template.id);
              }}
              className="flex items-center place-content-end gap-2 cursor-pointer text-right min-w-full text-xs sm:text-sm"
            >
              Explore more <MoveRight />
            </p>
          </div>
        </div>
      </motion.div>
      <Badge
        className={`absolute top-3 right-3 rounded-sm [&>svg]:size-5  text-yellow-500  border backdrop-blur-xl 
          ${template.thumbnail?.includes("light") ? "bg-muted" : ""}`}
        variant={"outline"}
      >
        {template.category == "FREE" ? <Gift /> : <Gem />}
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
  initial: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.2 } },
};
