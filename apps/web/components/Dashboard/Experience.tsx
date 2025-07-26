import { Button } from "@workspace/ui/components/button";
import {
  Briefcase,
  BriefcaseBusiness,
  Calendar,
  Edit,
  Plus,
  Save,
  Trash2,
} from "lucide-react";
import React, { Dispatch, SetStateAction, useRef } from "react";
import { DeleteType, Experience, ImagesTypes, SavePayload } from "@workspace/types";
import { Card, CardContent } from "@workspace/ui/components/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@workspace/ui/components/dialog";
import { Input } from "@workspace/ui/components/input";
import { Textarea } from "@workspace/ui/components/textarea";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { Label } from "@workspace/ui/components/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { MONTHS, YEARS } from "@/lib/dummy";
import { v4 as uuid } from "uuid";
import { Checkbox } from "@workspace/ui/components/checkbox";
import { toast } from "@workspace/ui/components/sonner";
import { CardWrapper as ExperienceCard } from "@/components/Dashboard/CommonCard";
import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar";

const ExperienceTab = ({
  experience,
  onChange,
  onSave,
  onDelete,
  setExpImg
}: {
  experience: Experience[];
  onChange: Dispatch<SetStateAction<Experience[]>>;
  onSave: ({ type, data }: SavePayload) => void;
  onDelete: (type: DeleteType, id: string) => void;
  setExpImg:Dispatch<SetStateAction<ImagesTypes>>

}) => {
  const [editingExperience, setEditingExperience] =
    React.useState<Experience | null>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isAdding, setIsAdding] = React.useState(false);

  const handleAddExperience = () => {
    const newExp: Experience = {
      id: uuid(),
      role: "",
      company: "",
      start_date: "",
      end_date: "",
      description: "",
      onGoing: false,
      logo:""
    };
    setEditingExperience(newExp);
    setIsAdding(true);
    setIsOpen(true);
  };

  const handleEditExperience = (exp: any) => {
    setEditingExperience({ ...exp });
    setIsAdding(false);
    setIsOpen(true);
  };

  const handleSaveExperience = () => {
    if (editingExperience) {
      if (
        editingExperience.role == "" ||
        editingExperience.company == "" ||
        editingExperience.start_date == "" ||
        editingExperience.end_date == "" ||
        editingExperience.description == ""
      ) {
        toast.warning("Please fill in all the fields");
        return;
      } else if (editingExperience.end_date!= "Present" && new Date(editingExperience.start_date) > new Date(editingExperience.end_date)) {
        toast.warning("Start date must be before end date");
        return;
      } else if (editingExperience.description.length < 10) {
        toast.warning("Description must be at least 10 characters");
        return;
      }
      if (isAdding) {
        onChange([...experience, editingExperience]);
      } else {
        onChange(
          experience.map((exp) =>
            exp.id === editingExperience.id ? editingExperience : exp
          )
        );
      }
      const { onGoing, ...data } = editingExperience;
      onSave({ type: "Experience", data: { ...data } });
      setIsOpen(false);
      setEditingExperience(null);
      setIsAdding(false);
    }
  };

  const handleCancel = () => {
    setEditingExperience(null);
    setIsAdding(false);
    setIsOpen(false);
  };
  const handleDateChange = (
    type: "start" | "end",
    field: "month" | "year",
    value: string
  ) => {
    if (!editingExperience) return;

    const currentDate =
      type === "start"
        ? editingExperience.start_date
        : editingExperience.end_date;
    const { month, year } = getDateParts(currentDate);

    const newMonth = field === "month" ? value : month;
    const newYear = field === "year" ? value : year;

    const newDate = [newMonth, newYear].filter(Boolean).join(" "); // allow partial like "June" or "2024"

    setEditingExperience({
      ...editingExperience,
      [type === "start" ? "start_date" : "end_date"]: newDate,
    });
  };

  const handleOngoingChange = (checked: boolean) => {
    if (!editingExperience) return;

    setEditingExperience({
      ...editingExperience,
      onGoing: checked,
      end_date: checked ? "Present" : "",
    });
  };

  const getDateParts = (dateString: string) => {
    if (!dateString || dateString === "Present") return { month: "", year: "" };
    const [month, year] = dateString.split(" ");
    return { month: month || "", year: year || "" };
  };
  const ref = useRef<HTMLInputElement>(null);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const img = event.target.files?.[0];
    if (editingExperience && img) {
      setExpImg({ experience: img });
      setEditingExperience({
        ...editingExperience,
        logo: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row items-center gap-2 justify-between">
        <div>
          <h3 className="text-lg font-medium">
            {experience.length == 0 ? "No Experiences" : "Work Experiences"}
          </h3>
          <AnimatedShinyText>
            {experience.length == 0
              ? "Add some experiences to showcase your skills and achievements"
              : "Your professional experience and roles"}
            .
          </AnimatedShinyText>
        </div>
        <Button onClick={handleAddExperience} className="w-full md:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          Add Experience
        </Button>
      </div>

      <div
        className={` ${experience.length <= 0 ? "h-[70vh] flex justify-center items-center" : "grid grid-cols-1 xl:grid-cols-2 gap-5  "} `}
      >
        {experience.length > 0 ? (
          experience.map((exp) => (
            <ExperienceCard
              key={exp.id}
              data={exp}
              handleEdit={handleEditExperience}
              handleDelete={onDelete}
              setIsOpen={setIsOpen}
              setEditing={(value) => setEditingExperience(value as Experience)}
            />
          ))
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            <BriefcaseBusiness className="size-16 md:size-24 mx-auto opacity-50" />
            <AnimatedShinyText className="flex flex-col">
              <span className="text-xl">
                No Experience included in portfolio yet
              </span>
              <span>
                Add atleast one Experience to showcase it on your portfolio
              </span>
            </AnimatedShinyText>
          </div>
        )}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px] overflow-y-auto max-h-[95%] ">
          <DialogHeader>
            <DialogTitle>
              {isAdding ? "Add Experience" : "Edit Experience"}
            </DialogTitle>
            <DialogDescription>
              {isAdding
                ? "Add a new work experience entry"
                : "Update your work experience details"}
            </DialogDescription>
          </DialogHeader>
          {editingExperience && (
            <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage
                    src={editingExperience.logo || " "}
                    alt={editingExperience.company}
                  />
                  <AvatarFallback>
                    {editingExperience.company.length < 0
                      ? editingExperience.company
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                      : "N/A"}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col justify-center">
                  <Button
                    variant="outline"
                    onClick={() => ref.current?.click()}
                  >
                    <Input
                      ref={ref}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    Change Image{" "}
                  </Button>
                  <div className="flex items-center justify-between gap-2 ">
                    <div className="h-0.5 bg-muted w-1/2"></div>
                    <span className="text-sm text-muted-foreground">or</span>
                    <div className="h-0.5 bg-muted w-1/2"></div>
                  </div>
                  <Input
                    className="text-sm"
                    value={editingExperience.logo ?? ""}
                    onChange={(e) =>
                      setEditingExperience({
                        ...editingExperience,
                        logo: e.target.value,
                      })
                    }
                    placeholder="Enter logo url"
                  />
                </div>
              </div>
                 
                </div>
              <div className="grid gap-4 md:grid-cols-2">

                <div className="space-y-2">
                   <Label className="text-sm md:text-base">Job Role</Label>
                  <Input
                    className="text-sm"
                    value={editingExperience.role}
                    onChange={(e) =>
                      setEditingExperience({
                        ...editingExperience,
                        role: e.target.value,
                      })
                    }
                    placeholder="Senior Developer"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm md:text-base">Company</Label>
                  <Input
                    className="text-sm"
                    value={editingExperience.company}
                    onChange={(e) =>
                      setEditingExperience({
                        ...editingExperience,
                        company: e.target.value,
                      })
                    }
                    placeholder="Company Name"
                  />
                </div>
              </div>

              <div className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="w-full space-y-2">
                  <Label className="text-sm md:text-base">Start Date</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Select
                      value={getDateParts(editingExperience.start_date).month}
                      onValueChange={(value) =>
                        handleDateChange("start", "month", value)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Month" />
                      </SelectTrigger>
                      <SelectContent>
                        {MONTHS.map((month) => {
                          return (
                            <SelectItem key={month} value={month}>
                              {month}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                    <Select
                      value={getDateParts(editingExperience.start_date).year}
                      onValueChange={(value) =>
                        handleDateChange("start", "year", value)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Year" />
                      </SelectTrigger>
                      <SelectContent>
                        {YEARS.map((year) => {
                          return (
                            <SelectItem key={year} value={year.toString()}>
                              {year}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm md:text-base">End Date</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Select
                      disabled={editingExperience.onGoing}
                      value={getDateParts(editingExperience.end_date).month}
                      onValueChange={(value) =>
                        handleDateChange("end", "month", value)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Month" />
                      </SelectTrigger>
                      <SelectContent>
                        {MONTHS.map((month) => {
                          return (
                            <SelectItem key={month} value={month}>
                              {month}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                    <Select
                      value={getDateParts(editingExperience.end_date).year}
                      onValueChange={(value) =>
                        handleDateChange("end", "year", value)
                      }
                      disabled={editingExperience.onGoing}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Year" />
                      </SelectTrigger>
                      <SelectContent>
                        {YEARS.map((year) => {
                          return (
                            <SelectItem key={year} value={year.toString()}>
                              {year}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="space-x-2 flex items-center">
                <Checkbox
                  id="ongoing"
                  checked={editingExperience.onGoing}
                  onCheckedChange={handleOngoingChange}
                />
                <Label htmlFor="ongoing">Currently working here</Label>
              </div>

              <div className="space-y-2">
                <Label className="text-sm md:text-base">Summary</Label>
                <Textarea
                  className="text-sm"
                  value={editingExperience.description}
                  onChange={(e) =>
                    setEditingExperience({
                      ...editingExperience,
                      description: e.target.value,
                    })
                  }
                  placeholder="Describe your role and achievements..."
                  rows={4}
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button onClick={handleSaveExperience}>
              <Save className="mr-2 h-4 w-4" />
              {isAdding ? "Add Experience" : "Save Changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ExperienceTab;
