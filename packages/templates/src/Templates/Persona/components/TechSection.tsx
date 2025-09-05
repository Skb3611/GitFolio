"use client";


import { motion } from "motion/react";
export const techCardsItems = [
  {
    name: "Python",
    description: "Programming Language",
    imageUrl: "/imgs/logos/python.svg",
    bgColor: "bg-[#3776AB]/20",
  },
  {
    name: "NodeJS",
    description: "Backend Runtime",
    imageUrl: "/imgs/logos/node-js.svg",
    bgColor: "bg-[#689F63]/30",
  },
  {
    name: "React",
    description: "JavaScript Library",
    imageUrl: "/imgs/logos/react.svg",
    bgColor: "bg-[#61DAFB]/20",
  },
  {
    name: "Figma",
    description: "Design Tool",
    imageUrl: "/imgs/logos/figma-logo.svg",
    bgColor: "bg-[#E34F26]/20",
  },
  {
    name: "TypeScript",
    description: "JavaScript but better",
    imageUrl: "/imgs/logos/typescript.svg",
    bgColor: "bg-[#3178C6]/20",
  },
  {
    name: "Git",
    description: "Version control",
    imageUrl: "/imgs/logos/git.svg",
    bgColor: "bg-[#F1502F]/20",
  },
  {
    name: "MongoDB",
    description: "NoSQL database",
    imageUrl: "/imgs/logos/mongodb.svg",
    bgColor: "bg-[#599636]/30",
  },
  {
    name: "PostgreSQL",
    description: "SQL database",
    imageUrl: "/imgs/logos/postgresql.svg",
    bgColor: "bg-[#336791]/20",
  },
];
const Skills = ({data}:{data:string[]}) => {
  return (
    <div className="relative z-10 py-16 sm:py-24" id="about">
      <div className="space-y-4 mb-10">
        <motion.h1
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200"
        >
          Current technologies
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-sm min-[430px]:text-base max-w-lg md:max-w-3xl text-dark-200/70 dark:text-stone-200/70"
        >
          I&apos;m proficient in a range of modern technologies that empower me
          to build highly functional solutions. These are some of my main
          technologies.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="grid grid-cols-1 min-[430px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 items-center justify-between gap-4"
      >
        {data.map((skill,index) => (
          <TechCard key={index} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;

import { getIconComponent, Icons } from "@workspace/ui/icons"
const TechCard = ({
  skill
}: {
skill:string
}) => {
    const IconComponent = getIconComponent(skill);
    if(!IconComponent){
        return <div className="flex w-full h-full flex-1 gap-5 p-2.5 rounded-xl border border-[#1A1A1A] bg-[#1A1A1A] hover:bg-[#262626] hover:border-[#4D4D4D] transition-colors duration-200">
      <div>
        <h4 className="text-lg font-medium">{skill}</h4>
      </div>
    </div>
    }
  return (
    <div className="flex flex-1 gap-3 p-1 rounded-xl border border-[#1A1A1A] bg-[#1A1A1A] hover:bg-[#262626] hover:border-[#4D4D4D] transition-colors duration-200 items-center">
      <div className={`p-3  rounded-lg w-fit`}>   
        {<IconComponent className="size-10"/>}
      </div>
      <div>
        <h4 className="text-lg font-medium">{skill}</h4>
      </div>
    </div>
  );
};

