"use client";
import { Projects } from "@workspace/types";
import { Button } from "@workspace/ui/components/button";
import {
  ArrowRightIcon,
  ArrowUpDown,
  ArrowUpRight,
  Github,
} from "@workspace/ui/icons";
import { motion } from "motion/react";
import AnimatedSection from "../../components/AnimatedSection";

const ProjectsSection = ({ projects }: { projects: Projects[] }) => {
  return (
    <AnimatedSection >
      <div id="projects" className="my-10 py-2 px-1 grid font-bold md:text-3xl text-3xl">
        <div className="text-center prose">
          <h1 className="text-[40px] max-md:text-[30px]">Shipped Projects</h1>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 sm:px-6 md:px-8">
          {projects.map((data, index) => {
            console.log(data.thumbnail);
            return (
              <div key={index} className="border rounded-2xl">
                <div className="p-5">
                  <div className="p-4 bg-gray-200 rounded-xl">
                    <img
                      src={data.thumbnail}
                      alt={data.name}
                      width={900}
                      height={900}
                      className="w-full object-contain overflow-hidden rounded-sm"
                    />
                  </div>

                  <h2 className="text-2xl font-bold mt-8 tracking-[0.5px]">
                    {data.name}
                  </h2>
                  <p className="text-base text-wrap prose font-light text-gray-700 line-clamp-2 mt-4 flex-grow">
                    {data.description || ""}
                  </p>
                  <div className="flex gap-2">
                    {data.repoLink && (
                      <a href={data.repoLink} target="_blank">
                        <motion.div
                          whileTap={{ scale: 0.9 }}
                          whileHover={{ x: 5 }}
                          transition={{
                            duration: 0.25,
                          }}
                        >
                          <Button className="!cursor-pointer mt-4 !bg-gray-200 hover:!bg-gray-200/80 text-black space-x-3 transition-colors">
                            Source <Github />
                          </Button>
                        </motion.div>
                      </a>
                    )}
                    {data.liveLink && (
                      <a href={data.liveLink} target="_blank">
                        <motion.div
                          whileTap={{ scale: 0.9 }}
                          whileHover={{ x: 5 }}
                          transition={{
                            duration: 0.25,
                          }}
                        >
                          <Button className="!cursor-pointer mt-4 !bg-gray-200 hover:!bg-gray-200/80 text-black space-x-3 transition-colors">
                            Visit <ArrowUpRight />
                          </Button>
                        </motion.div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectsSection;
