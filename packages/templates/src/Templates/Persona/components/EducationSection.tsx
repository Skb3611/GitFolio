"use client"
import { Education } from "@workspace/types";
import CommonCard from "./CommonCard";
import { motion } from "motion/react";
const EducationSection = ({ data }: { data: Education[] }) => {
  return (
    <div id="education">
      <motion.h2
        initial={{ opacity: 0, x: -75 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200"
      >
        My Education
      </motion.h2>
      <CommonCard data={data} />
    </div>
  );
};

export default EducationSection;
