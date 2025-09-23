"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Github, Loader2, ArrowRight, Check, Code } from "lucide-react";
import Image from "next/image";
import { ThreeDMarquee } from "@workspace/ui/components/ui/3d-marquee";
import { useAuth, useUser } from "@clerk/nextjs";
import { config } from "@/config";
import Link from "next/link";
import { toast } from "@workspace/ui/components/sonner";

export default function OnboardingPage() {
  const regex = /^(https?:\/\/)?(www\.)?github\.com\/[A-Za-z0-9-]{1,39}\/?$/;
  const { user } = useUser();
  const { getToken } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const [githubURL, setGithubURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState(false);
  const { signOut } = useAuth();
  useEffect(() => {
    if (user?.externalAccounts[0]?.provider == "github") {
      setGithubURL(`www.github.com/${user.username}`);
    }
  }, [user]);

  const handleGithubSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      setError(false);
      if (!githubURL.trim()) return;
      if (!regex.test(githubURL)) {
        toast.warning("Enter a valid Github URL");
        return;
      }
      setIsLoading(true);
      setCurrentStep(2);
      const token = await getToken();
      const res = await fetch(config.server_endpoints.ONBOARDING_URL, {
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          githubURL: githubURL,
          authType:
            user?.externalAccounts.length !== 0
              ? user?.externalAccounts[0]?.provider.toUpperCase()
              : "EMAIL",
        }),
      });
      const result = await res.json();
      if (result.status) {
        result.status ? setCurrentStep(3) : setError(true);
        result.status ? setIsLoading(false) : null;
      } else {
        toast.error(result.message);
        setError(true);
        return;
      }
    } catch (e) {
      console.log(e);
      setError(true);
      toast.info("Something went wrong, Please try again latter !");
    }
  };

  return (
    <div className="relative min-h-screen bg-background flex items-center justify-center ">
      {/* <BackHomeButton /> */}
      <div className="relative min-h-screen  flex w-full max-w-screen mx-auto justify-center items-center overflow-hidden  ">
        <div className="absolute inset-0 z-10 h-full w-full bg-black/45 "></div>
        <ThreeDMarquee
          className="pointer-events-none absolute inset-0 min-h-full -z-0 w-full opacity-30 rounded-none"
          images={Array(10).fill(images).flat()}
        />
        <Link href={"/"}>
          <div className="absolute top-5 left-5 sm:top-8 sm:left-8 z-50 flex items-center space-x-3 cursor-pointer">
            <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-md sm:rounded-xl bg-white flex items-center justify-center">
              <Code className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
            </div>
            <span className="text-2xl sm:text-3xl flex items-center justify-center gap-3 text-white bg-clip-text">
              GitFolio <span className="text-base">( onBoarding )</span>
            </span>
          </div>
        </Link>
      </div>

      <div className=" absolute z-50 w-full max-w-md px-2">
        <div className="mb-8"></div>

        {/* Step 1: GitHub URL Input */}
        {currentStep === 1 && (
          <Card className="shadow-lg z-50">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                <Image src={"/assets/logo.png"} height={50} width={50} alt="" className="rounded-lg" />
              </div>
              <CardTitle className="text-lg sm:text-2xl font-bold">
                Connect to Your Github{" "}
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm">
                Enter your GitHub URL to get started
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleGithubSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="www.github.com/username"
                    value={githubURL}
                    onChange={(e) => setGithubURL(e.target.value)}
                    className="w-full text-sm sm:text-base"
                    required
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Continue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Fetching Data Animation */}
        {currentStep === 2 && isLoading && (
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                <Image src={"/assets/logo.png"} height={50} width={50} alt="" className="rounded-lg" />
              </div>
              <CardTitle className="text-2xl font-bold">
                Analyzing Repository
              </CardTitle>
              <CardDescription>
                We're fetching and analyzing your repository data
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-primary rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-primary rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">
                  This may take a few moments...
                </p>
                <div className="bg-gray-50 rounded-lg p-4 text-left">
                  <div className="text-xs text-gray-500 font-mono">
                    {!Error ? (
                      <>
                        <div>✓ Fetching User Details...</div>
                        <div>✓ Fetching Repositories...</div>
                        <div className="flex items-center">
                          <Loader2 className="w-3 h-3 mr-2 animate-spin" />
                          Processing Data...
                        </div>
                      </>
                    ) : (
                      <div className="text-red-500">
                        Failed to fetch Data ...{" "}
                      </div>
                    )}
                  </div>
                </div>
                {Error && (
                  <Button
                    className="w-1/2"
                    onClick={() => {
                      setCurrentStep(1);
                      setError(false);
                    }}
                  >
                    Try again
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Continue to Dashboard */}
        {currentStep === 3 && !isLoading && (
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold">
                Setup Complete!
              </CardTitle>
              <CardDescription>
                Your GitHub Account has been successfully analyzed and
                configured
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link href={"/dashboard"}>
                <Button className="w-full" size="lg">
                  Continue to Dashboard
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

const images = [
  "/assets/desktop-white.png",
  "/assets/desktop-black.png",
  "/assets/not-found.png",
  "/assets/banner.png",
  "/assets/home_page.png",
  "https://pub-7e33da773f24477fad91084ffacf40cb.r2.dev/templates/black-white/preview/desktop-dark.png",
  "https://pub-7e33da773f24477fad91084ffacf40cb.r2.dev/templates/black-white/preview/desktop-light.png",
  "https://pub-7e33da773f24477fad91084ffacf40cb.r2.dev/templates/devpro/preview/desktop-dark.png",
  "https://pub-7e33da773f24477fad91084ffacf40cb.r2.dev/templates/devpro/preview/desktop-light.png",
  "https://pub-7e33da773f24477fad91084ffacf40cb.r2.dev/templates/persona/preview/desktop-light.png",
  "https://pub-7e33da773f24477fad91084ffacf40cb.r2.dev/templates/persona/preview/desktop-dark.png",
  "https://pub-7e33da773f24477fad91084ffacf40cb.r2.dev/templates/clean-slate/preview/desktop-dark.png",
  "https://pub-7e33da773f24477fad91084ffacf40cb.r2.dev/templates/clean-slate/preview/desktop-light.png",
];
