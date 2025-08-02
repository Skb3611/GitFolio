"use client"
import  {HowItWorks}  from "./HowItWorks";
import { BentoCard, BentoGrid } from "@workspace/ui/components/magicui/bento-grid";
import GlobeSection from "./GlobeSection";
import FAQSection from "./FAQSection";
import TechStackSection from "./TechStackSection";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { SplitTextAnimation } from "../SplitTextAnimation";
const features = [
  {
    
    name: "",
    description: "",
    href: "#",
    cta: "",
    className: "col-span-3 lg:col-span-2 ",
    background: (
     <HowItWorks />
    ),
    direction:"fromTop"
  },
  {
  
    name: "",
    description: "",
    href: "#",
    cta: "",
    className: "col-span-3 lg:col-span-1",
    background: (
      <GlobeSection/>
    ),
    direction:"fromRight"

  },
  {
    // Icon: Share2Icon,
    name: "",
    description: "",
    href: "#",
    cta: "Learn More",
    className: "col-span-3 lg:col-span-1",
    background: (
      <TechStackSection/>
    ),
    direction:"fromLeft"
  },
  {
    // Icon: CalendarIcon,
    name: "",
    description: "",
    className: "col-span-3 lg:col-span-2",
    href: "#",
    cta: "",
    background: (
      <FAQSection/>
    ),
    direction:"fromBottom"
  },
];

const GridView =()=>{
  return (
    <div id="about" className="min-h-screen max-w-7xl mx-auto md:my-20 my-8 p-4">
        <SplitTextAnimation
        whileInView
        staggerDelay={0.08}
        className="md:text-6xl text-3xl font-semibold text-center mb-3 mx-auto "
        >
        From GitHub to Greatness
        </SplitTextAnimation>
      <AnimatedShinyText >
        <SplitTextAnimation 
      className="md:text-xl text-sm text-center md:mb-14 mb-6 w-full"
      whileInView
      delay={0.3}  
        >
      Your GitHub is all it takes to launch a professional presence online.
        </SplitTextAnimation>
      </AnimatedShinyText>
    <BentoGrid className="auto-rows-[20rem]">
      {features.map((feature, idx) => (
          <BentoCard initial={cardVariants[feature.direction as keyof typeof cardVariants].initial} animate={cardVariants[feature.direction as keyof typeof cardVariants].animate} transition={cardVariants[feature.direction as keyof typeof cardVariants].transition} key={idx} {...feature} />
        ))}
    </BentoGrid>
        </div>
  );
}
export default GridView;

const cardVariants = {
  // Card 1 - From top
  fromTop: {
    initial: { y: -20, opacity: 0, scale: 0.9,  },
    animate: { y: 0, opacity: 1, scale: 1, },
    transition:{
      duration:0.3,
      delay:0.2,
      ease:"easeOut"

    }
  },
  // Card 2 - From right
  fromRight: {
    initial: { x: 20, opacity: 0, scale: 0.9,  },
    animate: { x: 0, opacity: 1, scale: 1, },
    transition:{
      duration:0.3,
      delay:0.2,
      ease:"easeOut"
    }
  },
  // Card 3 - From left
  fromLeft: {
    initial: { x: -20, opacity: 0, scale: 0.9,  },
    animate: { x: 0, opacity: 1, scale: 1, },
    transition:{
      duration:0.3,
      delay:0.2,
      ease:"easeOut"
    }
  },
  // Card 4 - From bottom
  fromBottom: {
    initial: { y: 20, opacity: 0, scale: 0.9,  },
    animate: { y: 0, opacity: 1, scale: 1, },
    transition:{
      duration:0.3,
      delay:0.2,
      ease:"easeOut"
    }
  }
}