"use client";
import Link from "next/link";
import { Button } from "@workspace/ui/components/button";
import Image from "next/image";
import { useIsMobile } from "@workspace/ui/hooks/use-mobile";
import { config } from "@/config";

const Navbar = () => {
  const isMobile = useIsMobile();
  return (
    <nav className="flex justify-between items-center max-w-6xl mx-auto mt-5 px-5">
      <Link
        href={config.gitfolio_url}
        target="_blank"
        className="flex items-center space-x-2 cursor-pointer"
      >
        <Image
          src={config.gitfolio_url + "/favicon.ico"}
          alt="logo"
          width={30}
          height={30}
          className="size-7 sm:size-10"
        />
        <span className="text-md sm:text-2xl text-white bg-clip-text">
          GitFolio
        </span>
      </Link>
      <Link href={"/craft"}>
        <Button
          className="playground-white-button playground-white-shadow"
          size={isMobile ? "sm" : "default"}
        >
          Get Started
        </Button>
      </Link>
    </nav>
  );
};

export default Navbar;
