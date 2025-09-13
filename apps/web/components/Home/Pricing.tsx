"use client";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Badge } from "@workspace/ui/components/badge";
import { Check, Star, Zap, Gift } from "lucide-react";
import { BackgroundBeams } from "@workspace/ui/components/ui/background-beams";
import { motion } from "motion/react";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { SplitTextAnimation } from "../SplitTextAnimation";
import { useRouter } from "next/navigation";
import { toast } from "@workspace/ui/components/sonner";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { useUserLocation } from "@/hooks/getUserLocation";

const plans = [
  {
    name: "Free",
    heading: "Perfect for Getting Started",
    USDPrice: "Free",
    INRPrice: "Free",
    recommended: false,
    icon: Gift,
    features: [
      "Access to 1 starter templates",
      "Hosted on username.gitfolio.in",
      "GitFolio branding in footer",
      //   "Limit of 3 project links",
      //   "Basic profile only (bio + links)",
      "Good for trying GitFolio quickly",
    ],
  },
  // {
  //   name: "Pro",
  //   USDPrice:"$ 3.99",
  //   INRPrice: "₹ 299",
  //   billing: "per month",
  //   recommended: true,
  //   icon: Zap,
  //   features: [
  //     "Unlock all current templates",
  //     "Access to all future templates while subscribed",
  //     "Switch templates anytime (1 active portfolio)",
  //     "Remove GitFolio branding",
  //     //   "Unlimited project links and sections",
  //     //   "Basic analytics (visits + link clicks)",
  //     //   "Faster hosting with CDN priority",
  //     "Early access to new templates",
  //     "Best for active developers and job seekers",
  //   ],
  // },
  {
    name: "One-Time",
    heading: "Unlock 1 Premium Template Forever",
    USDPrice: "$ 9.99 - 14.99",
    INRPrice: "₹ 799 - 1499",
    billing: "per template",

    recommended: true,
    icon: Star,
    features: [
      "Unlock 1 premium template forever",
      // "No subscription required",
      "Remove GitFolio branding",
      "Hosted on username.gitfolio.in",
      //   "30-day template switching window before final lock",
      //   "Includes 1 future update for chosen template",
      "The last portfolio you'll ever need.",
    ],
  },
];

export default function MinimalistPricing() {
  const { country } = useUserLocation();
  const router = useRouter();
  const handleClick = (planName: string) => {
    switch (planName) {
      case "Free":
        router.push("/dashboard");
        break;
      case "One-Time":
        router.push("/templates");
        break;
      case "Pro":
        toast.message("Pro version");
        break;
      default:
        toast.error("Some Error Occured");
    }
  };

  return (
    <div className="min-h-screen bg-background relative ">
      {/* <BackgroundBeams className="absolute w-full h-full" /> */}
      <div className="container max-w-7xl mx-auto px-4 py-26 relative z-20">
        <div className="text-center mb-16">
          {/* <SectionLabel title={"✨ Fully Responsive UI"} /> */}
          <SplitTextAnimation
            whileInView
            staggerDelay={0.08}
            className="md:text-6xl text-3xl font-semibold text-center mb-3 mx-auto "
          >
            Choose Your Plan
          </SplitTextAnimation>
          <AnimatedShinyText>
            <SplitTextAnimation
              className="md:text-xl md:max-w-2xl mx-auto text-sm text-center md:mb-14 mb-6 w-full"
              whileInView
              delay={0.3}
            >
              Build your perfect developer portfolio with GitFolio. Start free
              or unlock premium features to showcase your work professionally.
            </SplitTextAnimation>
          </AnimatedShinyText>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            filter: "blur(5px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            return (
              <Card
                key={plan.name}
                className={`relative ${plan.recommended ? "border-primary shadow-lg scale-105" : "border-border"} hover:shadow-xl transition-all duration-300`}
              >
                {plan.recommended && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-card-foreground">
                    <div className="mx-auto mb-4 p-3 bg-card rounded-full w-fit">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    {plan.name}
                    <p className="text-sm text-muted-foreground">
                      {plan.heading}
                    </p>
                  </CardTitle>
                  <div className="mt-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-card-foreground">
                      {country === "US" ? plan.USDPrice : plan.INRPrice}
                    </span>
                    <span
                      className={`text-muted-foreground ${plan.billing ? "ml-2" : ""}`}
                    >
                      {plan.billing ? "/ " + plan.billing : null}
                    </span>
                    <CardDescription className="mt-1"></CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </CardContent>

                <CardFooter>
                  <Button
                    className={`w-full cursor-pointer ${plan.recommended ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/90"}`}
                    size="lg"
                    onClick={() => handleClick(plan.name)}
                  >
                    {plan.name === "Free"
                      ? "Get Started Free"
                      : `Choose ${plan.name}`}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
