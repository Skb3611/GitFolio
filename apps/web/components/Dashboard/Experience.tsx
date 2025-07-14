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
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "@workspace/ui/components/input";
import { Textarea } from "@workspace/ui/components/textarea";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
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
      <div className="flex items-center justify-between">
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
        <Button onClick={handleAddExperience}>
          <Plus className="mr-2 h-4 w-4" />
          Add Experience
        </Button>
      </div>

      <div className={`space-y-4 ${experience.length <= 0? "h-[70vh] flex justify-center items-center":""}`}>
        {experience.length > 0 ? (
          experience.map((exp) => (
            <Card key={exp.id}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="h-4 w-4" />
                      <h4 className="font-medium">{exp.role}</h4>
                      <span className="text-muted-foreground">at</span>
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2 flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {exp.start_date} - {exp.end_date}
                    </p>
                    <p className="text-sm">{exp.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEditExperience(exp)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onDelete(DeleteType.EXPERIENCE, exp.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            <BriefcaseBusiness className="h-24 w-24 mx-auto opacity-50" />
            <AnimatedShinyText className="flex flex-col">
              <span className="text-xl">
                No Experience included in portfolio yet
              </span>
            </AnimatedShinyText>
          </div>
        )}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px]">
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
                  <Label>Job Role</Label>
                  <Input
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
                  <Label>Company</Label>
                  <Input
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
                <div className="w-full">
                  <Label>Start Date</Label>
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
                <div>
                  <Label>End Date</Label>
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
                <label htmlFor="ongoing">Currently working here</label>
              </div>

              <div className="space-y-2">
                <Label>Summary</Label>
                <Textarea
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
