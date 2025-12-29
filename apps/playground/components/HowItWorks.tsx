"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { motion } from "motion/react";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import Image from "next/image";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@workspace/ui/components/input-group";
import { Fingerprint, Github, InfoIcon, Send } from "@workspace/ui/icons";
import { Spinner } from "@workspace/ui/components/spinner";
import { Button } from "@workspace/ui/components/button";
import { useState } from "react";
import { config } from "@/config";
import {
  Autoplay,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@workspace/ui/components/carousel";
import { Safari } from "@workspace/ui/components/magicui/safari";
import { Data as TEMPLATES } from "@workspace/templates/metadata";

const HowItWorks = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="max-w-6xl mx-auto py-10 px-5">
      <div className="flex flex-col justify-between gap-4 mb-20">
        <h1 className="text-2xl md:text-6xl font-bold text-white">
          Explore the working of <br /> GitFolio Playground
        </h1>
        <AnimatedShinyText className="text-sm sm:text-lg font-bold max-w-md mx-0">
          Get Started with GitFolio Playground and build your personalized
          developer portfolio in minutes.
        </AnimatedShinyText>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 place-items-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
            filter: "blur(5px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="w-full h-full bg-card/30 rounded-lg rounded-l-3xl  min-h-96 max-w-sm"
        >
          <div className="relative h-2/3 w-full perspective-distant [transform-style:preserve-3d] -translate-x-2 sm:-translate-x-0 translate-y-5 scale-90 sm:scale-95">
            <div className="rotate-x-[20deg] rotate-y-[-20deg] rotate-z-[10deg] absolute translate-y-15  translate-x-2 z-50 mask-[linear-gradient(0deg,transparent_0%,#000_50%)]">
              <Card>
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
            <motion.div
              initial={{
                rotateX: 20,
                rotateY: -20,
                rotateZ: 10,
                translateY: 20,
                translateX: 2,
              }}
              whileHover={{
                translateY: 15,
              }}
              transition={{ duration: 0.2 }}
              className="rotate-x-[20deg] rotate-y-[-20deg] rotate-z-[10deg] absolute "
            >
              <Card>
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
            </motion.div>
          </div>
          <div className="p-5">
            <AnimatedShinyText className="text-lg sm:text-xl font-bold">
              Enter your Github URL To Get Started
            </AnimatedShinyText>
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
            filter: "blur(5px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="w-full h-full bg-card/30 rounded-lg min-h-96 max-w-sm"
        >
          <div className="relative h-2/3 w-full perspective-distant [transform-style:preserve-3d] translate-x-0 translate-y-7 mask-b-from-50% mask-r-from-60%">
            <motion.div
              initial={{
                rotateX: 20,
                rotateY: 20,
                rotateZ: -10,
                translateY: 5,
                translateX: -5,
              }}
            >
              <Card className=" scale-90 rotate-x-[20deg] rotate-y-[20deg] rotate-z-[-10deg] absolute translate-y-5 -translate-x-2 z-50 mask-b-from-0.5 ">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Image
                      src={config.gitfolio_url + "/favicon.ico"}
                      alt="1"
                      width={25}
                      height={25}
                    />
                    <CardTitle>Processing Your Request</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col justify-center items-center gap-2">
                  <Button variant={"secondary"}>
                    <Spinner state="pause" />
                  </Button>
                  <span className="text-sm ">Fetching Your Data</span>
                  <AnimatedShinyText className="text-xs text-center text-muted-foreground">
                    GitFolio Playground fetches your repositories from Github.
                  </AnimatedShinyText>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{
                rotateX: 20,
                rotateY: 20,
                rotateZ: -10,
              }}
              whileHover={{
                translateY: -5,
              }}
              transition={{ duration: 0.2 }}
              onHoverStart={() => setLoading(true)}
              onHoverEnd={() => setLoading(false)}
            >
              <Card className=" scale-90 rotate-x-[20deg] rotate-y-[20deg] rotate-z-[-10deg] absolute ">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Image
                      src={config.gitfolio_url + "/favicon.ico"}
                      alt="1"
                      width={25}
                      height={25}
                    />
                    <CardTitle>Processing Your Request</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col justify-center items-center gap-2">
                  <Button variant={"secondary"}>
                    <Spinner state={loading ? "loading" : "pause"} />
                  </Button>
                  <span className="text-sm ">Fetching Your Data</span>
                  <AnimatedShinyText className="text-xs text-center text-muted-foreground">
                    GitFolio Playground fetches your repositories from Github.
                  </AnimatedShinyText>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          <div className="p-5">
            <AnimatedShinyText className="text-xl font-bold">
              GitFolio Playground fetches your repositories from Github.
            </AnimatedShinyText>
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
            filter: "blur(5px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="w-full h-full bg-card/30 rounded-lg rounded-r-3xl min-h-96 max-w-sm"
        >
          <div className="relative h-2/3 w-full perspective-distant  flex justify-center items-center">
            {/* <Fingerprint className="border size-30 p-3 rounded-full" /> */}
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                  stopOnInteraction: false,
                  stopOnMouseEnter: false,
                }),
              ]}
              className="h-full w-full mt-10"
            >
              <CarouselContent className="aspect-video p-">
                {TEMPLATES.map((template, idx) => (
                  <CarouselItem
                    key={idx}
                    className="w-full h-full relative sm:basis-1/2 lg:basis-full aspect-video"
                  >
                    <Safari
                      className="size-full"
                      imageSrc={template.thumbnail}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="p-5">
            <AnimatedShinyText className="text-xl font-bold">
              Play with themes , Add Images, Change Info . . .
            </AnimatedShinyText>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;
