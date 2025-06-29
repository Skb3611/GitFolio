import {
  ExternalLink,
  FolderGit2,
  FolderOpen,
  GitFork,
  MoveRight,
  Star,
} from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";
import { Projects, TabTypes } from "@/app/types/types";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";

const ProjectsCard = ({projects,setActiveTab}:{projects:Projects[],setActiveTab:Dispatch<SetStateAction<TabTypes>>}) => {
  return (
    <div className="p-8">
      <header className="flex items-center justify-between w-full gap-3 mb-4">
        <div className="flex items-center gap-3">
          <FolderGit2 />
          <span className="text-2xl">Projects</span>
        </div>
        <Button variant={"outline"} size={"sm"} onClick={()=>setActiveTab("Projects")
        }>
          View All <MoveRight />
        </Button>
      </header>

      {projects.length > 0 ? (
        <div className="grid gap-3 md:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
            <div key={project.id} className="border rounded-lg p-3 space-y-2">
              {/* Project Thumbnail */}
              <div className="w-full h-24 rounded-md overflow-hidden bg-muted">
                <img
                  src={
                    project.thumbnail || "/placeholder.svg?height=96&width=200"
                  }
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">{project.name}</span>
                {Object.entries(project.languages).map(([key, value]) => {
                  return (
                    <Badge key={key} variant="secondary" className="text-xs">
                      {key}
                    </Badge>
                  );
                })}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>

              <p className="text-xs text-muted-foreground line-clamp-2">
                {project.description}
              </p>

{/*             
              {project.topics && project.topics.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {project.topics.slice(0, 3).map((topic) => (
                    <Badge key={topic} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                  {project.topics.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.topics.length - 3}
                    </Badge>
                  )}
                </div>
              )} */}

              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  {project.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="h-3 w-3" />
                  {project.forks}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-muted-foreground">
          <FolderOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <AnimatedShinyText className="flex flex-col">
          <span className="text-sm">No projects included in portfolio yet</span>
          <span className="text-xs">
            Go to Projects tab to include some repositories
          </span>
          </AnimatedShinyText>
        </div>
      )}
    </div>
  );
};

export default ProjectsCard;
