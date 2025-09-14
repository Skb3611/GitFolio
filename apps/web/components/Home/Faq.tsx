"use client"
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion";
import { SplitTextAnimation } from "../SplitTextAnimation";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { motion } from "motion/react";

const FAQSection = () => {
  return (
    <div className="h-full max-w-7xl mx-auto md:my-10 my-8 p-4 ">
      <SplitTextAnimation
        whileInView
        staggerDelay={0.08}
        className="md:text-6xl text-3xl font-semibold text-center mb-3 mx-auto "
      >
        Frequently Asked Questions
      </SplitTextAnimation>
      <AnimatedShinyText>
        <SplitTextAnimation
          className="md:text-xl text-sm text-center md:mb-14 mb-6 max-w-2xl mx-auto  "
          whileInView
          delay={0.3}
        >
          Everything you need to know about GitFolio and how it transforms your
          GitHub profile into a stunning portfolio.
        </SplitTextAnimation>
      </AnimatedShinyText>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          delay: 0.2,
        }}
      >
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto"
        >
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                <AnimatedShinyText>{faq.answer}</AnimatedShinyText>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
};

export default FAQSection;

const faqs = [
  {
    question: "What is GitFolio?",
    answer:
      "GitFolio is a platform that transforms your GitHub profile into a professional portfolio website. It showcases your projects, contributions, and skills in a polished, ready-to-share format.",
  },
  {
    question: "Do I need coding skills to use GitFolio?",
    answer:
      "No. GitFolio automatically generates your portfolio from your GitHub profile. You can choose a template and personalize it without writing any code.",
  },
  {
    question: "Is my GitFolio portfolio hosted online?",
    answer:
      "Yes. GitFolio hosts your portfolio for you. Once generated, you get a live, shareable link that you can add to resumes, social media, and job applications.",
  },
  {
    question: "Does GitFolio support paid templates?",
    answer:
      "Yes. GitFolio offers a variety of free templates as well as premium designs you can purchase to make your portfolio stand out.",
  },
  {
    question: "How does GitFolio fetch my projects?",
    answer:
      "GitFolio connects to your GitHub account and automatically pulls in your public repositories, pinned projects, and contributions to build your portfolio.",
  },
  {
    question: "Can I share my GitFolio portfolio on social media?",
    answer:
      "Absolutely. GitFolio portfolios are optimized for sharing across Twitter, LinkedIn, Peerlist, Reddit, and more.",
  },
];
