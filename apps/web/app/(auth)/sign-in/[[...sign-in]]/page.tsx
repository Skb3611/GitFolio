"use client";

import { useState } from "react";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@workspace/ui/components/card";
import { Github, Loader2, Rocket, Star, Shield, Zap, Code, ArrowBigLeft, ArrowLeft } from "lucide-react";
import { Ripple } from "@workspace/ui/components/magicui/ripple";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { SignIn, useSignIn,useSignUp } from "@clerk/nextjs";
import { RedirectToSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { BorderBeam } from "@workspace/ui/components/magicui/border-beam";



export default function SaaSSplitSignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<boolean>(false)
const { signIn } = useSignIn();
const { signUp } = useSignUp();
const router = useRouter()

  const handleSignIn = async() => {
    setIsLoading(true);
    try {
      await signIn?.authenticateWithRedirect({
        strategy: "oauth_github",
        redirectUrl: "/",
        redirectUrlComplete: "/",
      });
    } catch (error: any) {
      if (error.errors?.[0]?.code === "not_found") {
        await signUp?.authenticateWithRedirect({
          strategy: "oauth_github",
          redirectUrl: "/",
          redirectUrlComplete: "/",
        });
      } else {
        console.error("Auth error:", error);
      }
    }
  };

  return (
    <div className=" relative flex min-h-screen">
      <Button variant={"outline"} className="absolute top-5 left-5" onClick={()=>router.push("/")} >
        <ArrowLeft/> Home
      </Button>
      {/* Left Side - SaaS Marketing */}
      <div className="hidden lg:flex lg:w-1/2 bg-background p-12">
        <div className="relative flex justify-center items-center h-full w-full">
          <Ripple />
          <div className="flex items-center space-x-5">
            <div className="w-32 h-32 rounded-3xl bg-white flex items-center justify-center">
              <Code className="w-24 h-24 text-black" />
            </div>
            <span className="text-9xl font- text-white bg-clip-text">
              GitFolio
            </span>
          </div>
        </div>
      </div>

      {/* Right Side - Sign In */}
      
      <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-r from-background to-background/5">
      {
        isError ? (
          <div className="absolute top-0 left-0 right-0 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error:</strong>
            <span className="block sm:inline">An error occurred while signing in.</span>
            <Button onClick={()=>window.location.reload()}>
              Return to Sigin
            </Button>
          </div>
        ):<div className="relative rounded-xl">
        {/* <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="text-center pb-4">
            <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center mx-auto">
              <Code className="w-10 h-10 text-black" />
            </div>
            <h2 className="text-2xl font-bold">Get started with Gitfolio</h2>
            <AnimatedShinyText>
              Connect your GitHub account to get started
            </AnimatedShinyText>
          </CardHeader>

          <CardContent className="space-y-6">
            <Button
              onClick={handleSignIn}
              disabled={isLoading}
              className="w-full h-12 text-white"
              >
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Github className="mr-2 h-4 w-4" />
              )}
              {isLoading ? "Setting up your account..." : "Continue up with GitHub"}
            </Button>
          </CardContent>
          <CardFooter>
            <AnimatedShinyText>Powered by Clerk.</AnimatedShinyText>
          </CardFooter>
        </Card> */}
        <SignIn/>
        <BorderBeam size={100}/>
    </div>
    }
      </div>
    </div>
  );
}
