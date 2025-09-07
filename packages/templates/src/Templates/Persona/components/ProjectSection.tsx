"use client";
import { MoveUpRight } from "@workspace/ui/icons";
import { motion } from "motion/react";
import { Projects } from "@workspace/types";
import { Icons } from "@workspace/ui/icons";

const ProjectsSection = ({ data }: { data: Projects[] }) => {
  return (
    <div className="py-32" id="work">
      <div className="flex gap-4 flex-col sm:flex-row sm:items-center justify-between">
        <h2 className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200">
          My Projects
        </h2>
      </div>
      {
      data.length > 0 ?
      <div className="grid lg:grid-cols-2 gap-4 mt-8">
        {data.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>:<h4 className="text-xl min-[430px]:text-2xl md:text-3xl font-bold dark:text-stone-200">Add Projects from your Dashboard</h4>
      }
    </div>
  );
};

export default ProjectsSection;

const ProjectCard = ({ project }: { project: Projects }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className=" bg-[#1A1A1A] rounded-lg p-4 sm:p-8 space-y-8"
    >
      <img
        src={project.thumbnail}
        width={500}
        height={500}
        alt={project.name}
        className="hover:scale-[103%] transition-transform duration-700 rounded-sm w-full mx-auto"
      />
      <div>
        <h3 className="text-2xl sm:text-3xl font-semibold">{project.name}</h3>
        <div className="mt-4 flex flex-col sm:flex-row justify-between gap-5">
          <ProjectTechnologiesMini
            techStack={Array.from(Object.entries(project.languages)).map(
              ([key, value]) => key
            )}
          />
          <div className="flex gap-2">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                className="p-3 bg-[#3B82F6] hover:bg-[#3B82F6]/80 transition-colors duration-200 rounded-lg self-start sm:self-end"
              >
                <MoveUpRight className="size-5  text-[#F3F4F3] dark:text-dark-200" />
              </a>
            )}
            {project.repoLink && (
              <a
                href={project.repoLink}
                target="_blank"
                className="p-3 bg-[#3B82F6] hover:bg-[#3B82F6]/80 transition-colors duration-200 rounded-lg self-start sm:self-end"
              >
                <Icons.github className="size-5 text-[#F3F4F3]" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectTechnologiesMini = ({ techStack }: { techStack: string[] }) => {
  return (
    <div className="flex flex-wrap items-center gap-2.5 max-w-sm">
      {techStack.map((tech) => (
        <p
          key={tech}
          className="text-xs  text-white/60 hover:text-white font-medium  bg-[#262626] hover:bg-[#404040] border border-[#404040] transition-colors duration-200 w-fit rounded-md py-1.5 px-3"
        >
          {tech}
        </p>
      ))}
    </div>
  );
};
