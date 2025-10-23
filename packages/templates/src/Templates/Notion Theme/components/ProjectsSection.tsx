import React from "react";
import AnimatedSection from "../../components/AnimatedSection";
import { Projects } from "@workspace/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Button } from "@workspace/ui/components/button";

const ProjectsSection = ({ data }: { data: Projects[] }) => {
  return (
    <AnimatedSection delay={0.3}>
      <h2 className="text-2xl font-bold mb-4">Projects / Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {data.map((project) => {
          return (
            <Card key={project.id}>
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src={project.thumbnail}
                  alt={project.name}
                  className="rounded-sm"
                />
              </CardContent>
              <CardFooter className="space-x-2">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant={"secondary"} className="cursor-pointer">
                      View Project
                    </Button>
                  </a>
                )}
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant={"secondary"} className="cursor-pointer">
                      Source Code
                    </Button>
                  </a>
                )}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </AnimatedSection>
  );
};

export default ProjectsSection;
