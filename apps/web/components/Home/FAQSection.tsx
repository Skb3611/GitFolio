import React from "react";
import { AnimatedList } from "@workspace/ui/components/magicui/animated-list";
import { Marquee } from "@workspace/ui/components/magicui/marquee";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { div } from "motion/react-client";
import { MessageCircleQuestion } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import { backIn } from "motion";
const faqs = [
  {
    question: "How does this platform work?",
    answer:
      "We fetch your public GitHub profile data and automatically turn it into a professional-looking portfolio website—instantly and without any signup.",
    backgroundColor: "#00C9A7",
  },
  {
    question: "Is it safe to use my GitHub link here?",
    answer:
      "Yes, we only access publicly available information from your GitHub profile. No authentication or private data is involved.",
    backgroundColor: "#FFB800",
  },
  {
    question: "Can I customize the generated portfolio?",
    answer:
      "Not yet—but customization options like themes, layout tweaks, and additional sections are in the works.",
    backgroundColor: "#FF3D71",
  },
  {
    question: "Is this affiliated with GitHub?",
    answer:
      "No. This tool is independently built and not officially associated with GitHub Inc.",
    backgroundColor: "#1E86FF",
  },
];

const FAQSection = () => {
  return (
    <div className="relative p-8">
      <h2 className="text-2xl mb-5">Frequently Asked Questions</h2>
      <div className="flex h-64">
        <Marquee pauseOnHover className="[--duration:10s] w-1/2" vertical>
          {faqs.slice(0, faqs.length / 2).map((faq, index) => {
            return <FaqItem key={index} faq={{ index, ...faq }} />;
          })}
        </Marquee>
        <Marquee
          pauseOnHover
          reverse
          className="[--duration:10s] w-1/2"
          vertical
        >
          {faqs.slice(faqs.length / 2, faqs.length).map((faq, index) => {
            return <FaqItem key={index} faq={{ index, ...faq }} />;
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default FAQSection;

const FaqItem = ({
  faq,
}: {
  faq: {
    index: number;
    question: string;
    answer: string;
    backgroundColor: string;
  };
}) => {
  return (
    <figure
      key={faq.index}
      className={cn(
        "relative mx-auto h-max w-full max-w-full cursor-pointer overflow- rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="h-full flex flex-col items-start">
        <div className="flex h-full justify-center items-center gap-3 mb-3 ">
          <MessageCircleQuestion
            style={{ backgroundColor: faq.backgroundColor }}
            className="rounded-full h-8 w-8 p-1"
          />
          <p className="text-sm sm:text-lg leading-none">{faq.question}</p>
        </div>
        <div className="flex flex-col h-max overflow-">
          <AnimatedShinyText>
            <p className="text-xs font-normal dark:text-white/60">
              {faq.answer}
            </p>
          </AnimatedShinyText>
        </div>
      </div>
    </figure>
  );
};
