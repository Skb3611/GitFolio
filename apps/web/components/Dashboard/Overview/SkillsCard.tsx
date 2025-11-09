import { TabTypes } from "@workspace/types";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { Code2, Plus } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";
import { getIconComponent, Icons } from "@workspace/ui/icons";
import { motion } from "motion/react";

const SkillsCard = ({
  skills,
  setActiveTab,
}: {
  skills?: string[];
  setActiveTab: Dispatch<SetStateAction<TabTypes>>;
}) => {
  return (
    <div className="md:p-8 p-4">
      <header className="flex justify-between items-center text-2xl">
        <h2 className="flex items-center md:text-2xl text-lg gap-2">
          <Code2 />
          <span>Skills</span>
        </h2>
        <Button
          className="text-xs md:text-sm"
          variant={"outline"}
          size={"sm"}
          onClick={() => setActiveTab("Skills")}
        >
          Add more <Plus />
        </Button>
      </header>
      <div
        className={`flex ${skills?.length && "justify-start items-start"} justify-center items-center flex-wrap space-x-3 space-y-3 my-5 w-full`}
      >
        {skills?.length ? (
          skills?.map((skill, idx) => {
            return <Skill key={idx} label={skill} animate={false} />;
          })
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            <Code2 className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <AnimatedShinyText className="flex flex-col">
              <span className="text-sm ">
                No Skills included in portfolio yet
              </span>
              <span className="text-xs ">
                Go to Skills tab to include some Skills
              </span>
            </AnimatedShinyText>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsCard;

interface SkillProps {
  label: string;
  animate?: boolean;
}

const Skill = ({ label, animate = true }: SkillProps) => {
  const Icon = getIconComponent(label);
  const hasIcon = Icon !== undefined;

  // If no icon exists, render simple text badge
  if (!hasIcon) {
    return (
      <div className="flex gap-2 items-center">
        <Badge
          variant={"outline"}
          className="rounded-sm flex items-center justify-center py-1.5"
        >
          <span className="text-sm px-2">
            {label?.charAt(0).toUpperCase() + label.slice(1)}
          </span>
        </Badge>
      </div>
    );
  }

  // Static version without animation
  if (!animate) {
    return (
      <div className="flex gap-2 items-center cursor-pointer">
        <Badge
          variant={"outline"}
          className="rounded-sm flex items-center justify-center py-1.5 [&>svg]:size-6 gap-2 w-full "
        >
          {Icon && <Icon />}
          <span className="text-xs sm:text-sm">
            {label?.charAt(0).toUpperCase() + label.slice(1)}
          </span>
        </Badge>
      </div>
    );
  }

  // Animated version with hover effects
  return (
    <div className="flex gap-2 items-center cursor-pointer">
      <motion.div
        className="relative"
        whileHover="hover"
        initial="rest"
        animate="rest"
      >
        <Badge
          variant={"outline"}
          className="rounded-sm flex items-center justify-center overflow-hidden py-1.5 [&>svg]:size-6 "
        >
          {Icon && <Icon />}
          <motion.div
            className="overflow-hidden"
            variants={{
              rest: { width: 0 },
              hover: { width: "auto" },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.span
              className="whitespace-nowrap text-sm pr-2"
              variants={{
                rest: { opacity: 0, width: 0 },
                hover: { opacity: 1, width: 100 },
              }}
              transition={{ duration: 0.2, delay: 0.05 }}
            >
              {label}
            </motion.span>
          </motion.div>
        </Badge>
      </motion.div>
    </div>
  );
};
