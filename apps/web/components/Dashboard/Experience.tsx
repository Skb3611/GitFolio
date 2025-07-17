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
import React, { Dispatch, SetStateAction } from "react";
import { DeleteType, Experience, SavePayload } from "@/app/types/types";
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

const ExperienceTab = ({
  experience,
  onChange,
  onSave,
  onDelete,
}: {
  experience: Experience[];
  onChange: Dispatch<SetStateAction<Experience[]>>;
  onSave: ({ type, data }: SavePayload) => void;
  onDelete: (type: DeleteType, id: string) => void;
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
              exp={exp}
              handleEditExperience={handleEditExperience}
              handleDeleteExperience={onDelete}
              setIsOpen={setIsOpen}
              setEditingExperience={setEditingExperience}
            />
          ))
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            <BriefcaseBusiness className="size-16 md:size-24 mx-auto opacity-50" />
            <AnimatedShinyText className="flex flex-col">
              <span className="text-xl">
                No Experience included in portfolio yet
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
                <div className="w-full space-y-2" >
                  <Label className="text-sm md:text-base">Start Date</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Select
                      value={getDateParts(editingExperience.start_date).month}
                      onValueChange={(value) =>
                        handleDateChange("start", "month", value)
                      }
                      
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue  placeholder="Month" />
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
                <Label htmlFor="ongoing" >Currently working here</Label>

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

const ExperienceCard = ({
  exp,
  handleEditExperience,
  handleDeleteExperience,
  setIsOpen,
  setEditingExperience,
}: {
  exp: Experience;
  handleEditExperience: (exp: Experience) => void;
  handleDeleteExperience: (type: DeleteType, id: string) => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setEditingExperience: Dispatch<SetStateAction<Experience | null>>;
}) => {
  return (
    <Card
      onClick={() => {
        setIsOpen(true);
        setEditingExperience(exp);
      }}
    >
      <CardContent className="md:p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-lg">
                <Briefcase className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
                  {exp.role}
                </h3>
                <p className="text-sm text-muted-foreground font-medium">
                  {exp.company}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {exp.start_date} - {exp.end_date}
              </span>
            </div>
          </div>

          <div >
            <Button
              variant="ghost"
              size="sm"
              onClick={(event) =>{
                event.stopPropagation()
                handleEditExperience(exp)}
              } 
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={(event) =>{
                event?.stopPropagation()
                handleDeleteExperience(DeleteType.EXPERIENCE, exp.id)
              }
              }
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-4 border-l-2 dark:border-primary">
          <p className="md:text-sm text-xs leading-relaxed">
            {exp.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
