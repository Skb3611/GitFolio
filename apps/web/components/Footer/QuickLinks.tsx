"use client";
import { Button } from "@workspace/ui/components/button";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { Code } from "lucide-react";
import React from "react";
import { Meteors } from "@workspace/ui/components/magicui/meteors";
import { scrollToSection } from "../Navbar";
import { useRouter } from "next/navigation";

const links = [
  {
    name: "Home",
    href: "home",
  },
  {
    name: "About",
    href: "about",
  },
  {
    name: "Contact",
    href: "contact",
  },
];
const QuickLinks = () => {
  const router = useRouter();
  return (
    <div className="relative p-4 sm:p-8 flex flex-col h-full w-full items-start justify-end gap-5 ">
      <Meteors />
      <div className="links grid grid-cols-2 md:grid-cols-3 gap-2">
        {links.map((link, index) => {
          return (
            <Button onClick={()=>scrollToSection(link.href)} key={index} variant="outline" size="lg" className="mr-2 rounded-full text-white text-sm sm:text-base ">
              {link.name}
            </Button>
          );
        })}
      </div>
      <div className="flex items-center justify-between w-full">
          <div className="flex w-full items-center md:space-x-2">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
              <Code className="w-5 h-5 text-black" />
            </div>
            <span className="text-sm md:text-xl font- text-white bg-clip-text ml-1">
              GitFolio
            </span>
        <AnimatedShinyText className="flex items-center gap-4 text-xs md:text-base">
          <span className="hidden sm:block">Made with ❤️ by SKB</span>
        </AnimatedShinyText>
          </div>
        <AnimatedShinyText className="text- text-right w-full">
         <Button variant={"link"} size={"sm"} className="p-0 px-1 text- text-xs md:text-base " onClick={()=>router.push("/privacy-policy")}>
           {" "}
           Privacy 
         </Button>
         <Button variant={"link"} size={"sm"} className="p-0 px-1 text- text-xs md:text-base"onClick={()=>router.push("/terms-of-service")} >
           {" "}
           Terms
         </Button>
            <p className="text-xs md:text-base">

         @ {new Date().getFullYear()} All rights reserved.
            </p>
        </AnimatedShinyText>
      </div>
    </div>
  );
};

export default QuickLinks;
