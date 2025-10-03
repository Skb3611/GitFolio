import { cn } from "@workspace/ui/lib/utils";
import { ToggleTheme } from "./ToggleTheme";
import { motion } from "motion/react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { DeskTopNav, MobileNav } from "./Nav";
import Initial from "./Initials";

export const MAIN_NAV = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Connect",
    href: "#connect",
  },
];
export function Header({name}:{name:string}) {  
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > 10);
  });
  return (
    <SiteHeaderWrapper
      className={cn(
        "sticky top-0 z-50 max-w-screen overflow-x-hidden bg-background px-2 pt-2",
        "data-[affix=true]:shadow-[0_0_16px_0_black]/8 dark:data-[affix=true]:shadow-[0_0_16px_0_black]/80",
        "not-dark:data-[affix=true]:**:data-header-container:after:bg-border",
        "transition-shadow duration-300 overflow-hidden"
      )}
    >
      <div
        className="screen-line-before screen-line-after mx-auto flex h-12 items-center justify-between gap-2 border-x border-edge px-2 after:z-1 after:transition-[background-color] sm:gap-4 md:max-w-3xl "
        data-header-container
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={
            isVisible
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 10,
                }
          }
          className="overflow-hidden" 
        >
          <Initial name={name} size="sm" />
        </motion.div>

        <div className="flex-1" />

        <DeskTopNav items={MAIN_NAV}  />

        <div className="flex items-center gap-2">
          <ToggleTheme  />
          <MobileNav className="sm:hidden" items={MAIN_NAV}/>
        </div>
      </div>
    </SiteHeaderWrapper>
  );
}



export function SiteHeaderWrapper(props: React.ComponentProps<"header">) {
  const { scrollY } = useScroll();

  const [affix, setAffix] = useState(false);

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setAffix(latestValue >= 8);
  });

  return <header data-affix={affix} {...props} />;
}
