import { Experience } from "@workspace/db";
import AnimatedSection from "../../components/AnimatedSection";
import { ResumeCard } from "../../Black & White/components/resume-card";
import { Projects } from "@workspace/types";
import { ProjectCard } from "../../Black & White/components/project-card";

export default function ProjectsSection({ data }: { data: Projects[] }) {
  return (
    <AnimatedSection className="w-full">
      <section className="px-4 w-full mx-auto">
        <h2 className="text-foreground text-xl md:text-2xl font-semibold leading-relaxed mb-8">
          My Projects
        </h2>
        <div className=" w-full mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.filter(p=>p.isIncluded).map(project => (
            <AnimatedSection key={project.id}>
              <ProjectCard
              className="h-full"
                key={project.id}
                title={project.name}
                description={project.description}
                dates={""}
                tags={project.topics}
                image={project.thumbnail}
                video={""}
                liveLink={project.liveLink}
                repoLink={project.repoLink}
              />
            </AnimatedSection>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
