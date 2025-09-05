"use client"
import CommonCard from "./CommonCard";
import { Experience } from "@workspace/types";
import { motion } from "motion/react";
const ExperienceSection = ({ data }: { data: Experience[] }) => {
  return (
    <div id="experience">
      <motion.h2
        initial={{ opacity: 0, x: -75 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200"
      >
        My Experience
      </motion.h2>
      <CommonCard data={data} />
    </div>
  );
};

export default ExperienceSection;
