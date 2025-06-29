"use client";
import React, { useEffect, useState } from "react";
import { ChevronRight, Code, Github, Menu } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { BorderBeam } from "@workspace/ui/components/magicui/border-beam";
import { usePathname, useRouter } from "next/navigation";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import UserButton from "./UserButton";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@workspace/ui/components/sheet";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";

const navItems = [
  <Button
    key={"home"}
    variant={"link"}
    onClick={() => scrollToSection("home")}
    className="p-0 text-white text-xl md:text-sm text-center"
  >
    Home
  </Button>,
  <Button
    key={"about"}
    variant={"link"}
    onClick={() => scrollToSection("about")}
    className="p-0 text-white text-xl md:text-sm text-center"
  >
    About
  </Button>,
  <Button
    key={"contact"}
    variant={"link"}
    onClick={() => scrollToSection("contact")}
    className="p-0 text-white text-xl md:text-sm text-center"
  >
    Contact
  </Button>,
  <SignedOut key={"cta"}>
      <Button key={"cta"} variant="outline" className=" text-lg md:text-sm ">
    <Link href={"/sign-in"} className="flex items-center  ">
        Get Started <ChevronRight />
    </Link>
      </Button>
  </SignedOut>,
];

export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const yOffset = -120;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    // window.location.href = `#${id}`;
  }
};
const Navbar = () => {
  const router = useRouter();
  const pathname= usePathname()
  const [hash, setHash] = useState("")

  useEffect(() => {
    console.log(window.location.hash)
    setHash(window.location.hash)
  },[pathname])

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      scrollToSection(id);
    }
  }, [hash]);
  return (
    <div>
      <header className=" bg-transparent fixed top-2 w-full z-50 ">
        <div className="container backdrop-blur-lg  overflow-hidden supports-[backdrop-filter]:bg-background/20 bg-transparent rounded-xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between max-w-[90%] lg:max-w-4xl border relative">
          <BorderBeam size={100} />
          <BorderBeam size={100} delay={3} />
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
              <Code className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font- text-white bg-clip-text">
              GitFolio
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            {navItems}
            <SignedIn>
              <UserButton />
            </SignedIn>
          </nav>
          <div className="md:hidden flex justify-center items-center gap-2 relative">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <Sheet>
              <SheetTrigger>
                
                  <Menu />
     
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                        <Code className="w-5 h-5 text-black" />
                      </div>
                      <span className="text-xl font- text-white bg-clip-text">
                        GitFolio
                      </span>
                    </div>
                  </SheetTitle>
                  <SheetDescription>
                    <AnimatedShinyText>
                      Navigation Menu
                    </AnimatedShinyText>
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-2 justify-center items-center">
                  {navItems}
                </div>

              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
