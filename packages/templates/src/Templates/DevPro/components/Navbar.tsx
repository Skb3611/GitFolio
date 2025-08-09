"use client";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import { ModeToggle } from "../../components/mode-toggle";
import  { useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { cn } from "@workspace/ui/lib/utils";
import { Button } from "@workspace/ui/components/button";
import { Icons } from "../../../icons/index";
import { SocialLinks } from "@workspace/types";
import { useIsMobile } from "@workspace/ui/hooks/use-mobile";

const NavbarComponent = ({
  links,
  profileImg,
}: {
  links: SocialLinks;
  profileImg: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const isMobile = useIsMobile()
  const [visible, setVisible] = useState<boolean>(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50 && !isMobile) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });
  return (
    <motion.nav
    initial={{
      y:-10,
      opacity:0,
      filter:"blur(8px)"
    }}
      animate={{
      opacity:1,
      filter:"blur(0px)",
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        y: visible ? 10 : 0,
      }}
      transition={{
        duration: 0.5,
      }}
      ref={ref}
      className={cn(
        !isMobile && "sticky",
        "z-50 inset-x-0 top-2  mx-auto  w-full max-w-7xl  items-center justify-between self-start rounded-xl bg-transparent px-4 py-2 flex flex-col md:flex-row gap-2 dark:bg-transparent",
        visible && "bg-white/80 dark:bg-neutral-950/80"
      )}
    >
      <div>
        <Avatar className="size-10">
          <AvatarImage src={profileImg} />
          <AvatarFallback>G</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-wrap items-center justify-center md:gap-2">
          {Object.entries(links).map(([key, link]) => {
            if (link === "" || link.length <= 0) return null;
            let Icon = Icons[key as keyof typeof Icons] || Icons.link;
            return !Icon ? null : (
              <a key={key} href={link} target={link==="#"?"_self":"_blank"}>
              <Button  size={"icon"} variant={"ghost"} className="cursor-pointer">
                <Icon />
              </Button>
              </a>

            );
          })}
<ModeToggle />

      </div>
    </motion.nav>
  );
};

export default NavbarComponent;
