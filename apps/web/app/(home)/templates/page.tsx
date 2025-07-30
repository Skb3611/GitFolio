"use server"
import React from "react";
import { SplitTextAnimation } from "@/components/SplitTextAnimation";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import TemplateCard from "@/components/TemplateCard";
import { Particles } from "@workspace/ui/components/magicui/particles";

import {Data as Templates } from "@workspace/templates/metadata";

const page = () => {
  return (
    <div className="min-h-screen relative">
      <Particles quantity={50} className="absolute -z-10 h-full w-full"/>
      <div className="max-w-6xl mx-auto mt-30 flex flex-col items-center justify-center">
        <SplitTextAnimation className="md:text-7xl text-3xl font-semibold text-center mb-4">
          Discover Templates
        </SplitTextAnimation>
        <AnimatedShinyText className="w-full">
          <SplitTextAnimation
            delay={0.5}
            className="md:text-xl w-full text-sm text-center"
          >
            Discover pre-designed templates to streamline your workflow and save
            time
          </SplitTextAnimation>
        </AnimatedShinyText>
        <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {Templates.map((template,idx)=>{
         return <TemplateCard key={template.id} template={template} idx={idx}/>
        })}
        </div>
        </div>
      </div>
      
    </div>
  );
};


export default page;
