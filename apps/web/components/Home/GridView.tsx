import  {HowItWorks}  from "./HowItWorks";
import { BentoCard, BentoGrid } from "@workspace/ui/components/magicui/bento-grid";
import GlobeSection from "./GlobeSection";
import FAQSection from "./FAQSection";
import TechStackSection from "./TechStackSection";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";

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
  },
];

const GridView =()=>{
  return (
    <div id="about" className="min-h-screen max-w-7xl mx-auto md:my-20 my-8 p-4">
      <h1 className="md:text-6xl text-3xl font-semibold text-center mb-3 ">From GitHub to Greatness</h1>
      <h2 className="md:text-xl text-sm text-center md:mb-14 mb-6 w-full">
      <AnimatedShinyText >
      Your GitHub is all it takes to launch a professional presence online.
      </AnimatedShinyText>
      </h2>
    <BentoGrid className="auto-rows-[20rem]">
      {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
    </BentoGrid>
        </div>
  );
}
export default GridView;