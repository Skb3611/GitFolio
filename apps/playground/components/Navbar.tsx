"use client"
import Link from "next/link";
import { Code } from "@workspace/ui/icons";
import { Button } from "@workspace/ui/components/button";
import Image from "next/image";
import { useIsMobile } from "@workspace/ui/hooks/use-mobile";

const Navbar = () => {
  const isMobile =useIsMobile()
  return (
    <nav className="flex justify-between items-center max-w-6xl mx-auto mt-5 px-5">
      <Link
        href={"https://gitfolio.in"}
        target="_blank"
        className="flex items-center space-x-2 cursor-pointer"
      >
        <Image
          src={"https://gitfolio.in/favicon.ico"}
          alt="logo"
          width={30}
          height={30}
          className="size-8 sm:size-10"
        />
        <span className="text-xl sm:text-2xl text-white bg-clip-text">
          GitFolio
        </span>
      </Link>
      <Button className=" font-semibold cursor-pointer group transition-all duration-500 bg-foreground/90 text-background hover:bg-foreground/70"
      size={isMobile?"sm":"default"}
      >
        Get Started
      </Button>
    </nav>
  );
};

export default Navbar;
