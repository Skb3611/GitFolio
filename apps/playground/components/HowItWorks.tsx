"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import Image from "next/image";
import React, { forwardRef, useRef } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@workspace/ui/components/input-group";
import { Fingerprint, Github, InfoIcon, Send } from "@workspace/ui/icons";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@workspace/ui/components/empty";
import { Spinner } from "@workspace/ui/components/spinner";
import { Button } from "@workspace/ui/components/button";

const HowItWorks = () => {
  const ref1 = useRef<HTMLImageElement>(null);
  const ref2 = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="max-w-6xl mx-auto py-10 px-5">
      <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-0 md:items-end mb-20">
        <h1 className="text-2xl md:text-6xl font-bold text-white">
          Explore the working of <br /> GitFolio Playground
        </h1>
        <AnimatedShinyText className="text-sm sm:text-base font-bold max-w-md">
          Get Started with GitFolio Playground and build your personalized
          developer portfolio in minutes.
        </AnimatedShinyText>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 place-items-center">
        <div className="w-full h-full bg-card/30 rounded-lg rounded-l-3xl  min-h-96 max-w-sm">
          <div className="relative h-2/3 w-full perspective-distant [transform-style:preserve-3d] -translate-x-2 sm:-translate-x-0 translate-y-5 scale-90 sm:scale-95">
            <Card className="rotate-x-[20deg] rotate-y-[-20deg] rotate-z-[10deg] absolute translate-y-10  translate-x-2 z-50 mask-[linear-gradient(0deg,transparent_0%,#000_50%)]">
              <CardHeader>
                <div className="flex flex-row items-center gap-2">
                  <Image src="/github.png" alt="1" width={30} height={30} />
                  <CardTitle>Enter your Github URL</CardTitle>
                </div>
                <CardDescription>
                  Enter your Github URL to get started
                </CardDescription>
              </CardHeader>
              <CardContent>
                <InputGroup className="[--radius:9999px] has-[[data-slot=input-group-control]:focus-visible]:ring-muted">
                  <InputGroupAddon>
                    <InputGroupButton variant="secondary" size="icon-xs">
                      <Github />
                    </InputGroupButton>
                  </InputGroupAddon>

                  <InputGroupAddon className="text-muted-foreground pl-1.5">
                    https://
                  </InputGroupAddon>
                  <InputGroupInput id="input-secure-19" disabled />
                  <InputGroupAddon align="inline-end">
                    <InputGroupButton size="icon-xs">
                      <Send className="data-[favorite=true]:fill-blue-600 data-[favorite=true]:stroke-blue-600" />
                    </InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>
              </CardContent>
            </Card>
            <Card className="rotate-x-[20deg] rotate-y-[-20deg] rotate-z-[10deg] absolute ">
              <CardHeader>
                <div className="flex flex-row items-center gap-2">
                  <Image src="/github.png" alt="1" width={30} height={30} />
                  <CardTitle>Enter your Github URL</CardTitle>
                </div>
                <CardDescription>
                  Enter your Github URL to get started
                </CardDescription>
              </CardHeader>
              <CardContent>
                <InputGroup className="[--radius:9999px] has-[[data-slot=input-group-control]:focus-visible]:ring-muted">
                  <InputGroupAddon>
                    <InputGroupButton variant="secondary" size="icon-xs">
                      <Github />
                    </InputGroupButton>
                  </InputGroupAddon>

                  <InputGroupAddon className="text-muted-foreground pl-1.5">
                    https://
                  </InputGroupAddon>
                  <InputGroupInput id="input-secure-19" disabled />
                  <InputGroupAddon align="inline-end">
                    <InputGroupButton size="icon-xs">
                      <Send className="data-[favorite=true]:fill-blue-600 data-[favorite=true]:stroke-blue-600" />
                    </InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>
              </CardContent>
            </Card>
          </div>
          <div className="p-5">
            <AnimatedShinyText className="text-lg sm:text-xl font-bold">
              Enter your Github URL To Get Started
            </AnimatedShinyText>
          </div>
        </div>
        <div className="w-full h-full bg-card/30 rounded-lg min-h-96 max-w-sm">
          <div className="relative h-2/3 w-full perspective-distant [transform-style:preserve-3d] translate-x-5 translate-y-4 ">
            <Card className=" scale-90 rotate-x-[20deg] rotate-y-[20deg] rotate-z-[-10deg] absolute translate-y-5 -translate-x-2 z-50 mask-r-from-50% mask-b-from-50%  ">
              <CardHeader>
                <div className="flex items-center gap-2">
                <Image src="https://gitfolio.in/favicon.ico" alt="1" width={25} height={25} />
                <CardTitle>Processing Your Request</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col justify-center items-center gap-2">
                <Button variant={"secondary"}>
                  <Spinner state="pause" />
                </Button>
                <span className="text-sm ">Fetching Your Data</span>
                <AnimatedShinyText className="text-xs text-center text-muted-foreground">
                  GitFolio Playground fetches your repositories from
                  Github.
                </AnimatedShinyText>
              </CardContent>
            </Card>
            <Card className=" scale-90 rotate-x-[20deg] rotate-y-[20deg] rotate-z-[-10deg] absolute mask-r-from-80% mask-b-from-80%">
              <CardHeader>
                <div className="flex items-center gap-2">
                <Image src="https://gitfolio.in/favicon.ico" alt="1" width={25} height={25} />
                <CardTitle>Processing Your Request</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col justify-center items-center gap-2">
                <Button variant={"secondary"}>
                  <Spinner state="pause"/>
                </Button>
                <span className="text-sm ">Fetching Your Data</span>
                <AnimatedShinyText className="text-xs text-center text-muted-foreground">
                  GitFolio Playground fetches your repositories from
                  Github.
                </AnimatedShinyText>
              </CardContent>
            </Card>
          </div>
          <div className="p-5">
            <AnimatedShinyText className="text-xl font-bold">
             GitFolio Playground fetches your repositories from
                  Github.
            </AnimatedShinyText>
          </div>
        </div>
        <div className="w-full h-full bg-card/30 rounded-lg rounded-r-3xl min-h-96 max-w-sm">
          <div className="relative h-2/3 w-full perspective-distant [transform-style:preserve-3d] -translate-x-2 translate-y-2 flex justify-center items-center">
            {/* <Fingerprint className="border size-30 p-3 rounded-full" /> */}
            <Image
              src="/auth.svg"
              alt="1"
              height={50}
              width={50}
              className="size-2/3"
            />
          </div>
            <div className="p-5">
            <AnimatedShinyText className="text-xl font-bold">
             Play with themes , Add Images, Change Info . . .
            </AnimatedShinyText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
