import Link from "next/link";
import { Code } from "@workspace/ui/icons";
import { Button } from "@workspace/ui/components/button";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center max-w-6xl mx-auto mt-5">
      <Link
        href={"https://gitfolio.in"}
        target="_blank"
        className="flex items-center space-x-2 cursor-pointer"
      >
        <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
          <Code className="w-7 h-7 text-black" />
        </div>
        <span className="text-2xl text-white bg-clip-text">GitFolio</span>
      </Link>
      <Button className=" font-semibold cursor-pointer group transition-all duration-500 bg-foreground/90 text-background hover:bg-foreground/70">
        Get Started
      </Button>
    </nav>
  );
};

export default Navbar;
