import { Projects } from "@workspace/types";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { Github, MoveUpRight } from "@workspace/ui/icons";

const ProjectsSection = ({ data }: { data: Projects[] }) => {
  return (
    <div className="py-8 border-b border-dotted">
      <h2 className="text-2xl font-bold font-doto pb-4">
        Projects{" "}
        <AnimatedShinyText className="text-sm font-jetbrains">
          Which I have worked on
        </AnimatedShinyText>
      </h2>
      <div className="flex flex-wrap gap-x-4 gap-y-4">
        {data
          .filter((pro) => pro.isIncluded)
          .map((project, idx) => {
            return <CardWrapper key={idx} project={project} />;
          })}
      </div>
    </div>
  );
};

export default ProjectsSection;

const CardWrapper = ({ project }: { project: Projects }) => {
  return (
    <div className="flex flex-col sm:flex-row relative border p-2.5 rounded-md items-center gap-4   ">
      <div className="sm:w-1/3">
        <img
          src={project.thumbnail}
          alt={project.name}
          className="object-cover rounded-sm"
        />
      </div>
      <div className="sm:w-2/3 flex flex-col gap-2">
        <span className="text-xl font-figtree">{project.name}</span>
        <div className="flex flex-wrap gap-x-2 gap-y-1.5">
          {Object.entries(project.languages).map(([key, value]) => {
            return (
              <Badge variant={"outline"} key={key}>
                {key}
              </Badge>
            );
          })}
        </div>
        <AnimatedShinyText className="text-sm font-jetbrains">
          {project.description}
        </AnimatedShinyText>
      </div>
      <div className="absolute top-3 right-3 flex gap-1">
        {project.repoLink && (
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
            <Button variant={"outline"} className="cursor-pointer">
              <Github />
            </Button>
          </a>
        )}
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            <Button variant={"outline"} className="cursor-pointer">
              <MoveUpRight />
            </Button>
          </a>
        )}
      </div>
    </div>
  );
};
