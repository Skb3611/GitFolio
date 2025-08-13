"use client";
import { Code } from "lucide-react";
import { Ripple } from "@workspace/ui/components/magicui/ripple";
import { SignIn, useSignIn,useSignUp } from "@clerk/nextjs";
import { BorderBeam } from "@workspace/ui/components/magicui/border-beam";
import BackHomeButton from "@/components/BackHomeButton";



export default function SigninPage() {
  return (
    <div className=" relative flex min-h-screen">
      <BackHomeButton/>
      {/* Left Side - SaaS Marketing */}
      <div className="hidden lg:flex lg:w-1/2 bg-background">
        <div className="relative flex justify-center items-center h-full w-full">
          <Ripple />
          <div className="flex items-center space-x-5">
            <div className="w-24 h-24 xl:w-32 xl:h-32 rounded-xl xl:rounded-3xl bg-white flex items-center justify-center">
              <Code className="w-18 h-18 xl:w-24 xl:h-24 text-black" />
            </div>
            <span className=" text-6xl xl:text-9xl font- text-white bg-clip-text">
              GitFolio
            </span>
          </div>
        </div>
      </div>

      {/* Right Side - Sign In */}
      
      <div className="flex-1 flex items-center justify-center lg:p-8 bg-gradient-to-r from-background to-background/5">
      <div className="relative rounded-xl">
        <SignIn />
        <BorderBeam size={100}/>
      </div>
    </div>
      </div>
  );
}
