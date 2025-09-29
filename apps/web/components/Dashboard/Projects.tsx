import React, { Dispatch, SetStateAction, useRef } from "react";
import {
  DeleteType,
  ImagesTypes,
  Projects,
  SavePayload,
} from "@workspace/types";
import { Button } from "@workspace/ui/components/button";
import {
  Edit,
  ExternalLink,
  Frown,
  GitFork,
  Github,
  GripVertical,
  Plus,
  Save,
  Star,
  Trash,
  Trash2,
  Upload,
  X,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@workspace/ui/components/card";
import { Switch } from "@workspace/ui/components/switch";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "@workspace/ui/components/input";
import { Textarea } from "@workspace/ui/components/textarea";
import { Badge } from "@workspace/ui/components/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@workspace/ui/components/dialog";
import Image from "next/image";
import { toast } from "@workspace/ui/components/sonner";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip";
import { v4 as uuid } from "uuid";
const ProjectsTab = ({
  projects,
  onChange,
  onSave,
  setprojectImg,
  onDelete,
}: {
  projects: Projects[];
  onChange: Dispatch<SetStateAction<Projects[]>>;
  onSave: ({ type, data }: SavePayload) => void;
  setprojectImg: Dispatch<SetStateAction<ImagesTypes>>;
  onDelete: (type: DeleteType, id: string) => void;
}) => {
  const [editingProject, setEditingProject] = React.useState<Projects | null>(
    null
  );
  const [isAdding, setIsAdding] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [newTopic, setNewTopic] = React.useState("");
  const ref = useRef<HTMLInputElement>(null);
  const handleEditProject = (project: Projects) => {
    setEditingProject({ ...project });
    setIsOpen(true);
  };

  const handleAddProject = () => {
    const newProject: Projects = {
      id: uuid(),
      name: "",
      description: "",
      thumbnail: "",
      repoLink: "",
      topics: [],
      liveLink: "",
      languages: {},
      stars: 0,
      forks: 0,
      isIncluded: true,
    };
    setEditingProject(newProject);
    setIsAdding(true);
    setIsOpen(true);
  };

  const toggleProject = (project: Projects) => {
    onChange(
      projects.map((p) =>
        p.id === project.id ? { ...p, isIncluded: !project.isIncluded } : p
      )
    );
    onSave({
      type: "Projects",
      data: { ...project, isIncluded: !project.isIncluded },
    });
  };

  const handleSaveProject = () => {
    if (editingProject) {
      if (!editingProject.thumbnail) {
        toast.warning("Please upload a thumbnail.");
        return;
      } else if (!editingProject.description) {
        toast.warning("Please add a description.");
        return;
      } else if (!editingProject.name) {
        toast.warning("Please add a Name.");
        return;
      } else if (!editingProject.repoLink) {
        toast.warning("Please add Repo Link.");
        return;
      }
      if (isAdding) {
        onChange([...projects, editingProject]);
      } else {
        onChange(
          projects.map((p) => (p.id === editingProject.id ? editingProject : p))
        );
      }
      onSave({ type: "Projects", data: editingProject });
      setIsOpen(false);
      setEditingProject(null);
      setIsAdding(false);
    }
  };
  const handleCancel = () => {
    setEditingProject(null);
    setIsOpen(false);
  };
  const addTopic = () => {
    if (newTopic && editingProject) {
      const existingTopics = editingProject.topics ?? [];
      const topicToAdd = newTopic.toLowerCase();

      if (!existingTopics.includes(topicToAdd)) {
        setEditingProject({
          ...editingProject,
          topics: [...existingTopics, topicToAdd],
        });
        setNewTopic("");
      }
    }
  };

  const removeTopic = (topicToRemove: string) => {
    if (editingProject) {
      setEditingProject({
        ...editingProject,
        topics: editingProject.topics.filter(
          (topic: string) => topic !== topicToRemove
        ),
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const img = e.target.files?.[0];
    if (img) {
      setprojectImg({ project: img });
      setEditingProject({
        ...(editingProject as Projects),
        thumbnail: URL.createObjectURL(img),
      });
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">Portfolio Projects</h3>
          <p className="text-sm  text-muted-foreground">
            Manage your projects and customize how they appear in your portfolio
          </p>
        </div>
        <Button onClick={handleAddProject} className="w-full md:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          Add Project
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3  gap-4">
        {projects.sort((a, b) => (b.isIncluded ? 1 : 0) - (a.isIncluded ? 1 : 0)).map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            toggleProject={toggleProject}
            handleEditProject={handleEditProject}
            setIsOpen={setIsOpen}
            setEditingProject={setEditingProject}
            onDelete={onDelete}
          />
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[700px] max-h-[95vh] overflow-y-auto ">
          <DialogHeader>
            <DialogTitle>Edit Project</DialogTitle>
            <DialogDescription>
              Customize how this project appears in your portfolio
            </DialogDescription>
          </DialogHeader>
          {editingProject && (
            <div className="space-y-6 py-4">
              {/* Project Thumbnail */}
              <div className="space-y-2">
                <Label className="text-center sm:text-left">
                  Project Thumbnail
                </Label>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="w-32 h-24 rounded-md overflow-hidden bg-muted border">
                    {editingProject.thumbnail ? (
                      <img
                        height={100}
                        width={100}
                        src={editingProject.thumbnail}
                        alt="Project thumbnail"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col justify-center item-center mx-auto">
                        <Frown className="size-5 w-full " />
                        <AnimatedShinyText className="text-sm ">
                          No Image found
                        </AnimatedShinyText>
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => ref.current?.click()}
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Image
                    </Button>
                    <Input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      ref={ref}
                      onChange={handleFileChange}
                    />
                    <Input
                      className="text-sm "
                      placeholder="Or paste image URL"
                      value={editingProject.thumbnail || ""}
                      onChange={(e) =>
                        setEditingProject({
                          ...editingProject,
                          thumbnail: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Project Name */}
              <div className="space-y-2">
                <Label className="text-sm md:text-base ">Project Name</Label>
                <Input
                  className="text-sm "
                  value={editingProject.name}
                  onChange={(e) =>
                    setEditingProject({
                      ...editingProject,
                      name: e.target.value,
                    })
                  }
                  placeholder={"Enter Name"}
                />
              </div>

              {/* Project Description */}
              <div className="space-y-2">
                <Label className="text-sm md:text-base ">
                  Project Description
                </Label>
                <Textarea
                  className="text-sm "
                  value={editingProject.description}
                  onChange={(e) =>
                    setEditingProject({
                      ...editingProject,
                      description: e.target.value,
                    })
                  }
                  placeholder="Enter Description . . ."
                  rows={3}
                />
              </div>

              {/* Topics/Tags */}
              <div className="space-y-2">
                <Label className="inline-flex items-center gap-2 text-sm md:text-base ">
                  Topics/Tags
                  <AnimatedShinyText className="text-xs">
                    ( Optional )
                  </AnimatedShinyText>
                </Label>
                <div className="flex gap-2 mb-2">
                  <Input
                    className="text-sm "
                    placeholder="Add a topic..."
                    value={newTopic}
                    onChange={(e) => setNewTopic(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addTopic();
                      }
                    }}
                  />
                  <Button onClick={addTopic} size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {editingProject.topics?.map((topic: string) => (
                    <Badge
                      key={topic}
                      variant="secondary"
                      className="flex items-center gap-1"
                    >
                      {topic}
                      <Button
                        onClick={() => removeTopic(topic)}
                        variant={"link"}
                        size={"icon"}
                        className="p-0 cursor-pointer h-max w-max "
                      >
                        <X className="h-3 w-3 cursor-pointer z-50 text-white" />
                      </Button>
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label className="inline-flex items-center gap-2 text-sm md:text-base ">
                    Live Demo URL{" "}
                    <AnimatedShinyText className="text-xs">
                      ( Optional )
                    </AnimatedShinyText>
                  </Label>
                  <Input
                    className="text-sm "
                    value={editingProject.liveLink || ""}
                    onChange={(e) =>
                      setEditingProject({
                        ...editingProject,
                        liveLink: e.target.value,
                      })
                    }
                    placeholder="https://your-project.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm md:text-base ">
                    GitHub Repository
                  </Label>
                  <Input
                    className="text-sm "
                    value={editingProject.repoLink || ""}
                    onChange={(e) =>
                      setEditingProject({
                        ...editingProject,
                        repoLink: e.target.value,
                      })
                    }
                    placeholder="https://github.com/username/repo"
                  />
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button onClick={handleSaveProject}>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectsTab;

const ProjectCard = ({
  project,
  toggleProject,
  handleEditProject,
  setIsOpen,
  setEditingProject,
  onDelete,
}: {
  project: Projects;
  toggleProject: (project: Projects) => void;
  handleEditProject: (project: Projects) => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setEditingProject: Dispatch<SetStateAction<Projects | null>>;
  onDelete: (type: DeleteType, id: string) => void;
}) => {
  return (
    <Card
      key={project.id}
      onClick={() => {
        setIsOpen(true);
        setEditingProject(project);
      }}
    >
      <CardHeader>
        <div className="w-full relative aspect-video rounded-md overflow-hidden bg-muted flex-shrink-0">
          <Tooltip>
            {/* <GripVertical className="h-3 w-3 text-gray-500 cursor-move" /> */}
            <TooltipTrigger
              asChild
              onClick={(event) => event.stopPropagation()}
              className="absolute top-2 left-2 flex items-center space-x-2 z-20"
            >
              <div className="absolute top-3 left-3">
                <div className="flex items-center space-x-2 bg-card backdrop-blur-sm rounded-full px-3 py-1">
                  <GripVertical className="h-3 w-3 text-gray-500" />
                  <Switch
                    checked={project.isIncluded}
                    onCheckedChange={() => toggleProject(project)}
                  />
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent side="top">
              Change project visibility.
            </TooltipContent>
          </Tooltip>
          <div className="z-20 absolute right-2 top-2 space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleEditProject(project)}
              className=""
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <Edit className="h-4 w-4" />
                  </div>
                </TooltipTrigger>
                <TooltipContent sideOffset={5}>Edit Project</TooltipContent>
              </Tooltip>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={(event) => {
                event?.stopPropagation();
                onDelete(DeleteType.PROJECT, project.id);
              }}
              className=""
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <Trash2 className="h-4 w-4" />
                  </div>
                </TooltipTrigger>
                <TooltipContent sideOffset={5}>Delete Project</TooltipContent>
              </Tooltip>
            </Button>
          </div>
          {project.thumbnail ? (
            <img
              src={project.thumbnail || "/placeholder.svg?height=64&width=80"}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex flex-col justify-center items-center">
              <Frown className="size-10 md:size-15 " />
              <AnimatedShinyText className="text-sm  md:text-base">
                No Image found
              </AnimatedShinyText>
              <AnimatedShinyText className="text-xs md:text-sm">
                Add an Image to improve visibility.
              </AnimatedShinyText>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div>
          <div className="flex flex-col gap-5">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                  <span className="font-medium">{project.name}</span>
                  <span className="flex gap-2">
                    {Object.entries(project.languages)
                      .slice(0, 3)
                      .map(([keyframes, value]) => {
                        return (
                          <Badge key={keyframes} variant="secondary">
                            {keyframes}
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
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </span>
                </div>
              </div>

              <p className="md:text-sm  text-xs text-muted-foreground mb-2">
                {project.description}
              </p>

              {/* Topics */}
              {project.topics && project.topics.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.topics.slice(0, 4).map((topic: string) => (
                    <Badge key={topic} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                  {project.topics.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.topics.length - 4}
                    </Badge>
                  )}
                </div>
              )}

              <div className="flex items-center gap-4 text-sm  text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  {project.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="h-3 w-3" />
                  {project.forks}
                </span>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-foreground"
                >
                  <Github className="h-3 w-3" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
