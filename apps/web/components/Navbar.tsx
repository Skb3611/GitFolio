"use client"
import React from 'react'
import { ChevronRight, Code, Github } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@workspace/ui/components/button'
import { BorderBeam } from '@workspace/ui/components/magicui/border-beam'
import { useRouter } from 'next/navigation'
import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs'

export const scrollToSection = (id:string) => {
  const element = document.getElementById(id);
  if (element) {
    const yOffset = -120;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};
const Navbar = () => {
  const { user } = useUser();
  const router = useRouter();
  return (
    <div>
       <header className=" bg-transparent fixed top-2 w-full z-50 ">
        <div className="container backdrop-blur-lg  overflow-hidden supports-[backdrop-filter]:bg-background/20 bg-transparent rounded-xl bg-transparent mx-auto px-6 py-4 flex items-center justify-between max-w-4xl border relative">
        <BorderBeam size={100}/>
        <BorderBeam size={100} delay={3}/>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
              <Code className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font- text-white bg-clip-text">
              GitFolio
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant={"link"}  onClick={()=>scrollToSection("home")} className="p-0 text-white">
              Home
            </Button>
            <Button variant={"link"} onClick={()=>scrollToSection("about")}  className="p-0 text-white">
              About
            </Button>
            <Button variant={"link"}  onClick={()=>scrollToSection("contact")} className="p-0 text-white">
              Contact
            </Button>
        <SignedIn>
              <UserButton/>
        </SignedIn>
        <SignedOut>
            <Button onClick={()=>router.push("/sign-in")}  variant="outline" size="sm">
              Get Started <ChevronRight/>
            </Button>
        </SignedOut>
            
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar
