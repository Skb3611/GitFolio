import {
  Card,
  CardContent,
  CardHeader,
} from "@workspace/ui/components/card";
import { Projects } from "@workspace/types";
import { getIconComponent, hasIcon, Icons } from "@workspace/ui/icons";

import { Globe } from "@workspace/ui/icons";

const ProjectsCard = ({ project }: { project: Projects }) => {
  return (
    <Card
      key={project.name}
      className="h-full group bg-portfolio-card  hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden pt-0 gap-0 border-none hover:border-card-foreground"
    >
      <CardHeader className="p-0">
        <div className="aspect-video overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="text-base font-semibold text-portfolio-text mb-2">
          {project.name}
        </h3>
        <p className="text-portfolio-text-light text-xs mb-4 leading-relaxed">
          {project.description}
        </p>
      <div className="flex flex-wrap relative w-full px-2">
        {project.topics
          .filter((tech) => hasIcon(tech))
          .map((tech: string, techIndex: number) => {
            const Icon = getIconComponent(tech);
            return Icon ? (
              <div
              key={techIndex}
              className=" rounded-full border p-0.5 bg-muted absolute"
              style={{
                left: techIndex * 6 + "%",
                zIndex: techIndex,
              }}
              >
                {Icon && <Icon className="size-6 rounded-full" />}
              </div>
            ) : null;
          })}
        <div className="absolute h-full right-0  flex gap-1.5">
          {project.liveLink && (
            <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            >
              <div className=" rounded-full border p-0.5 bg-muted">
                <Globe className="size-5 rounded-full" />
              </div>
            </a>
          )}
          {project.repoLink && (
            <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            >
              <div className=" rounded-full border p-0.5 bg-muted">
                <Icons.github className="size-5 rounded-full" />
              </div>
            </a>
          )}
        </div>
      </div>
              </CardContent>
    </Card>
  );
};

export default ProjectsCard;
