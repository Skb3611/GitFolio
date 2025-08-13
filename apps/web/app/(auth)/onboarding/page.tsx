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
import BackHomeButton from "@/components/BackHomeButton";
import Link from "next/link";

export default function OnboardingPage() {
  const { user } = useUser();
  console.log(user);
  const { getToken } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const [githubURL, setGithubURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState(false);
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
      setIsLoading(true);
      setCurrentStep(2);
      const token = await getToken();
      const body = {
        githubURL: githubURL,
        authType: user?.externalAccounts[0]?.provider.toUpperCase(),
      };
      console.log(body);
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
      console.log(result);
      if (result.status) {
        setCurrentStep(3);
        setIsLoading(false);
      } else {
        setError(true);
      }
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };
  const steps = [
    { number: 1, title: "Connect Repository", completed: currentStep > 1 },
    { number: 2, title: "Fetch Data", completed: currentStep > 2 },
    { number: 3, title: "Setup Complete", completed: currentStep > 3 },
  ];

  return (
    <div className="relative min-h-screen bg-background flex items-center justify-center p-4">
      <BackHomeButton />
      <div className="relative min-h-[80dvh] flex w-full max-w-7xl mx-auto justify-center items-center overflow-hidden py-14 rounded-2xl">
        <div className="absolute inset-0 z-10  h-full w-full bg-black/45 "></div>
        <ThreeDMarquee
          className="pointer-events-none absolute inset-0 h-full -z-0 w-full opacity-50"
          images={images}
        />

        <div className="absolute top-5 left-5 sm:top-8 sm:left-8 z-50 flex items-center space-x-3 cursor-pointer">
          <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-md sm:rounded-xl bg-white flex items-center justify-center">
            <Code className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
          </div>
          <span className="text-2xl sm:text-3xl text-white bg-clip-text">
            GitFolio
          </span>
        </div>
      </div>

      <div className=" absolute z-50 w-full max-w-md ">
        <div className="mb-8">
          <div className="relative">
            {/* Progress Line Container */}
            <div className="absolute top-13 left-6 right-6 flex items-center">
              <div className="flex-1 h-1 bg-muted rounded-full relative">
                {/* First Progress Segment */}
                <div
                  className={`
                    absolute top-0 left-0 h-1 rounded-full transition-all duration-700 ease-in-out
                    ${currentStep > 1 ? "bg-primary" : "bg-primary/30"}
                  `}
                  style={{ width: "50%" }}
                ></div>

                {/* Second Progress Segment */}
                <div
                  className={`
                    absolute top-0 right-0 h-1 rounded-full transition-all duration-700 ease-in-out
                    ${currentStep > 2 ? "bg-primary" : "bg-primary/30"}
                  `}
                  style={{
                    width: "50%",
                    transitionDelay: currentStep > 2 ? "300ms" : "0ms",
                  }}
                ></div>

                {/* Animated Moving Dot */}
                {currentStep === 2 && (
                  <div
                    className="absolute top-0 w-3 h-1 bg-primary rounded-full animate-pulse"
                    style={{
                      left: "50%",
                      transform: "translateX(-50%) translateY(-1px)",
                    }}
                  ></div>
                )}
                {currentStep === 3 && (
                  <div
                    className="absolute top-0 w-3 h-1 bg-primary rounded-full animate-pulse"
                    style={{
                      right: "0%",
                      transform: "translateY(-1px)",
                    }}
                  ></div>
                )}
              </div>
            </div>

            {/* Steps Container */}
            <div className="flex items-start justify-between relative z-50">
              {steps.map((step, index) => (
                <div key={step.number} className="flex flex-col items-center">
                  {/* Step Number Above Circle */}
                  <div className="mb-2">
                    <span
                      className={`
                      text-xs font-bold px-2 py-1 rounded-full transition-all duration-500
                      ${
                        step.completed
                          ? "bg-muted text-green-600"
                          : currentStep === step.number
                            ? "bg-muted text-primary"
                            : "bg-muted text-primary"
                      }
                    `}
                    >
                      STEP {step.number}
                    </span>
                  </div>

                  {/* Step Circle */}
                  <div
                    className={`
                    flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-500 transform bg-foreground

                    ${
                      step.completed
                        ? "border-green-600 text-green-600 scale-110"
                        : currentStep === step.number
                          ? "border-primary text-primary scale-110 shadow-lg ring-1 ring-primary"
                          : "border-muted text-muted"
                    }
                  `}
                  >
                    {step.completed ? (
                      <Check className="w-6 h-6 text-green-600" />
                    ) : (
                      <span className="text-lg font-bold">{step.number}</span>
                    )}
                  </div>

                  {/* Step Title Below Circle */}
                  <div className="mt-2 text-center max-w-20">
                    <div
                      className={`text-xs font-medium transition-colors duration-500 ${
                        step.completed
                          ? "text-green-600"
                          : currentStep === step.number
                            ? "text-primary"
                            : "text-white/50"
                      }`}
                    >
                      {step.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Step 1: GitHub URL Input */}
        {currentStep === 1 && (
          <Card className="shadow-lg z-50">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                <Image src={"/assets/logo.png"} height={50} width={50} alt="" />
              </div>
              <CardTitle className="text-2xl font-bold">
                Connect to Your Github{" "}
              </CardTitle>
              <CardDescription>
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
                    className="w-full"
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
                <Image src={"/assets/logo.png"} height={50} width={50} alt="" />
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

  "/assets/desktop-white.png",
  "/assets/desktop-black.png",
  "/assets/not-found.png",
  "/assets/banner.png",
  "/assets/home_page.png",

  "/assets/desktop-white.png",
  "/assets/desktop-black.png",
  "/assets/not-found.png",
  "/assets/banner.png",
  "/assets/home_page.png",

  "/assets/desktop-white.png",
  "/assets/desktop-black.png",
  "/assets/not-found.png",
  "/assets/banner.png",
  "/assets/home_page.png",

  "/assets/desktop-white.png",
  "/assets/desktop-black.png",
  "/assets/not-found.png",
  "/assets/banner.png",
  "/assets/home_page.png",

  "/assets/desktop-white.png",
  "/assets/desktop-black.png",
  "/assets/not-found.png",
  "/assets/banner.png",
  "/assets/home_page.png",
];
