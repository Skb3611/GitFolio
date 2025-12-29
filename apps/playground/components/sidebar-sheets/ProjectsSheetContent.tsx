import { DATA, Projects } from "@workspace/types";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@workspace/ui/components/card";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@workspace/ui/components/empty";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { Switch } from "@workspace/ui/components/switch";
import { Textarea } from "@workspace/ui/components/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip";
import { useIsMobile } from "@workspace/ui/hooks/use-mobile";
import {
  FolderGit2,
  Frown,
  GitBranch,
  GitBranchIcon,
  GitBranchPlus,
  GitCommit,
  GripVertical,
  Plus,
  Trash,
  Upload,
  X,
} from "@workspace/ui/icons";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";

const ProjectsSheetContent = ({
  data,
  setUser,
}: {
  data: Projects[];
  setUser: Dispatch<SetStateAction<DATA>>;
}) => {
  if (data.length == 0)
    return (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <FolderGit2 />
          </EmptyMedia>
          <EmptyTitle>No Projects Yet</EmptyTitle>
          <EmptyDescription>
            You haven&apos;t added any projects yet. Get started by adding your
            first project.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  return (
    <div className="flex flex-col gap-2">
      {data.map((project) => (
        <ProjectCard project={project} key={project.id} setUser={setUser} />
      ))}
    </div>
  );
};
export default ProjectsSheetContent;

const ProjectCard = ({
  project,
  setUser,
}: {
  project: Projects;
  setUser: Dispatch<SetStateAction<DATA>>;
}) => {
  const isMobile = useIsMobile()
  const [currentTopic, setCurrentTopic] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);
  const handleChange = (type: keyof Projects, value: string) => {
    setUser((prev) => ({
      ...prev,
      projects: prev.projects.map((item) =>
        item.id === project.id ? { ...item, [type]: value } : item
      ),
    }));
  };
  const handleImgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        handleChange("thumbnail", reader.result as string);
      };
    }
  };
  const deleteProject = (id: string) => {
    setUser((prev) => ({
      ...prev,
      projects: prev.projects.filter((pro) => pro.id !== id),
    }));
  };
  const toggleproject = (id: string) => {
    setUser((prev) => ({
      ...prev,
      projects: prev.projects.map((pro) => {
        return pro.id === id ? { ...pro, isIncluded: !pro.isIncluded } : pro;
      }),
    }));
  };
  const addTopic = () => {
    if (currentTopic.trim() === "") return;
    setUser((prev) => ({
      ...prev,
      projects: prev.projects.map((pro) => {
        return pro.id === project.id
          ? { ...pro, topics: [...pro.topics, currentTopic] }
          : pro;
      }),
    }));
    setCurrentTopic("");
  };
  const deleteTopic = (topic: string) => {
    setUser((prev) => ({
      ...prev,
      projects: prev.projects.map((pro) => {
        return pro.id === project.id
          ? { ...pro, topics: pro.topics.filter((t) => t !== topic) }
          : pro;
      }),
    }));
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <Tooltip>
            {/* <GripVertical className="h-3 w-3 text-gray-500 cursor-move" /> */}
            <TooltipTrigger
              asChild
              onClick={(event) => event.stopPropagation()}
              className=""
            >
              <div className="">
                <div className="flex items-center space-x-2 bg-card backdrop-blur-sm rounded-full  py-1">
                  <GripVertical className="h-3 w-3 text-gray-500" />
                  <Switch
                    checked={project.isIncluded}
                    onCheckedChange={() => toggleproject(project.id)}
                  />
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent side="top">
              Change project visibility.
            </TooltipContent>
          </Tooltip>

          <Button
            size={"icon-sm"}
            variant={"outline"}
            onClick={() => deleteProject(project.id)}
          >
            <Trash />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 ">
        <div className="space-y-2">
          <Label>Project Thumbnail</Label>
          <div className="flex flex-col justify-center items-start gap-2">
            <div className="w-full aspect-video rounded-md overflow-hidden bg-muted border flex items-center justify-center">
              {project.thumbnail ? (
                <img
                  src={project.thumbnail}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col justify-center item-center mx-auto">
                  <Frown className="size-5 w-full " />
                  <AnimatedShinyText className="text-sm ">
                    No Image found
                  </AnimatedShinyText>
                </div>
              )}
            </div>
            <Button
              size={isMobile ? "sm" : "default"}
              variant={"outline"}
              onClick={() => ref.current?.click()}
              className="w-full"
            >
              Upload Image <Upload />
            </Button>
            <input
              type="file"
              accept="image/*"
              ref={ref}
              onChange={handleImgUpload}
              className="hidden"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Project Name</Label>
          <Input
            placeholder="Enter project name"
            value={project.name ?? ""}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label>Project Description</Label>
          <Textarea
            placeholder="Enter project description"
            value={project.description ?? ""}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label>Topics/Tags</Label>
          <div className="flex gap-2">
            <Input
              placeholder="Add a topic"
              value={currentTopic}
              onChange={(e) => setCurrentTopic(e.target.value)}
            />
            <Button variant={"outline"} size={"icon-sm"} onClick={addTopic}>
              <Plus />
            </Button>
          </div>
          <div className="flex flex-wrap gap-1">
            {project.topics.map((t) => {
              return (
                <Badge
                  key={t}
                  variant={"secondary"}
                  className="flex justify-between text-xs md:text-sm"
                >
                  {t}
                  <button onClick={() => deleteTopic(t)}>
                    <X className="size-3 cursor-pointer z-10" />
                  </button>
                </Badge>
              );
            })}
          </div>
        </div>
        <div className="space-y-2">
          <Label>Live Demo URL</Label>
          <Input
            placeholder="Enter live demo url"
            value={project.liveLink ?? ""}
            onChange={(e) => handleChange("liveLink", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label>GitHub Repository URL</Label>
          <Input
            placeholder="Enter github repo url"
            value={project.repoLink ?? ""}
            onChange={(e) => handleChange("repoLink", e.target.value)}
          />
        </div>
      </CardContent>
    </Card>
  );
};
