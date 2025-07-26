import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import {
  DeleteType,
  Education,
  ImagesTypes,
  SavePayload,
} from "@workspace/types";
import { Button } from "@workspace/ui/components/button";
import { GraduationCap, Plus, Save } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogDescription,
  DialogTitle,
} from "@workspace/ui/components/dialog";
import { Label } from "@workspace/ui/components/label";
import { Input } from "@workspace/ui/components/input";
import { Textarea } from "@workspace/ui/components/textarea";
import { Checkbox } from "@workspace/ui/components/checkbox";
import { v4 as uuid } from "uuid";
import { toast } from "@workspace/ui/components/sonner";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { CardWrapper as EducationCard } from "./CommonCard";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { YEARS } from "@/lib/dummy";
export default function EducationTab({
  education,
  onChange,
  onSave,
  onDelete,
  setEduImg,
}: {
  education: Education[];
  onChange: Dispatch<SetStateAction<Education[]>>;
  onSave: ({ type, data }: SavePayload) => void;
  onDelete: (type: DeleteType, id: string) => void;
  setEduImg: Dispatch<SetStateAction<ImagesTypes>>;
}) {
  const [editingEducation, setEditingEducation] = useState<Education | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddEducation = () => {
    const newEdu: Education = {
      id: uuid(),
      logo: "",
      title: "",
      institution: "",
      start_date: "",
      end_date: "",
      description: "",
      onGoing: false,
    };
    setEditingEducation(newEdu);
    setIsAdding(true);
    setIsOpen(true);
  };

  const handleEditEducation = (edu: any) => {
    setEditingEducation({ ...edu });
    setIsAdding(false);
    setIsOpen(true);
  };

  const handleSaveEducation = () => {
    if (editingEducation) {
      if (
        editingEducation?.title == "" ||
        editingEducation?.institution == "" ||
        editingEducation?.start_date == "" ||
        editingEducation?.end_date == "" 
      ) {
        toast.warning("Please fill in all the fields");
        return;
      } else if (
        editingEducation.end_date != "Present" &&
        new Date(editingEducation.start_date) >
          new Date(editingEducation.end_date)
      ) {
        toast.warning("Start date must be before end date");
        return;
      } else if (editingEducation.description.length!=0 && editingEducation.description.length < 10) {
        toast.warning("Description must be at least 10 characters");
        return;
      }
      if (isAdding) {
        onChange([...education, editingEducation]);
      } else {
        onChange(
          education.map((edu) =>
            edu.id === editingEducation.id ? editingEducation : edu
          )
        );
      }
      const { onGoing, ...data } = editingEducation;
      onSave({ type: "Education", data: data });
      setIsOpen(false);
      setEditingEducation(null);
      setIsAdding(false);
    }
  };

  const handleCancel = () => {
    setEditingEducation(null);
    setIsAdding(false);
    setIsOpen(false);
  };
  const handleOngoingChange = (checked: boolean) => {
    if (editingEducation) {
      setEditingEducation({
        ...editingEducation,
        onGoing: checked,
        end_date: checked ? "Present" : "",
      });
    }
  };
  const ref = useRef<HTMLInputElement>(null);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const img = event.target.files?.[0];
    if (editingEducation && img) {
      setEduImg({ education: img });
      setEditingEducation({
        ...editingEducation,
        logo: URL.createObjectURL(img),
      });
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">Education</h3>
          <p className="text-sm text-muted-foreground">
            Your educational background and qualifications
          </p>
        </div>
        <Button onClick={handleAddEducation} className="w-full md:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          Add Education
        </Button>
      </div>

      <div
        className={`space-y-4 ${education.length <= 0 ? "h-[70vh] flex justify-center items-center" : "grid grid-cols-1 xl:grid-cols-2 gap-5"}`}
      >
        {education.length > 0 ? (
          education.map((edu) => (
            <EducationCard
              key={edu.id}
              data={edu}
              setIsOpen={setIsOpen}
              setEditing={(val) => setEditingEducation(val as Education)}
              handleEdit={handleEditEducation}
              handleDelete={onDelete}
            />
          ))
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            <GraduationCap className="size-20 mx-auto opacity-50" />
            <AnimatedShinyText className="flex flex-col">
              <span className="md:text-lg">
                No Education included in portfolio yet
              </span>
              <span>
                Add atleast one Education to showcase it on your portfolio
              </span>
            </AnimatedShinyText>
          </div>
        )}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[95%]  my-auto overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {isAdding ? "Add Education" : "Edit Education"}
            </DialogTitle>
            <DialogDescription>
              {isAdding
                ? "Add a new education entry"
                : "Update your education details"}
            </DialogDescription>
          </DialogHeader>
          {editingEducation && (
            <div className="space-y-4 py-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage
                    src={editingEducation.logo || " "}
                    alt={editingEducation.institution}
                  />
                  <AvatarFallback>
                    {editingEducation.institution.length < 0
                      ? editingEducation.institution
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
                    value={editingEducation.logo ?? ""}
                    onChange={(e) =>
                      setEditingEducation({
                        ...editingEducation,
                        logo: e.target.value,
                      })
                    }
                    placeholder="Enter logo url"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Degree/Title</Label>
                <Input
                  className="text-sm"
                  value={editingEducation.title}
                  onChange={(e) =>
                    setEditingEducation({
                      ...editingEducation,
                      title: e.target.value,
                    })
                  }
                  placeholder="Bachelor of Science in Computer Science"
                />
              </div>

              <div className="space-y-2">
                <Label>Institute/University</Label>
                <Input
                  className="text-sm"
                  value={editingEducation.institution}
                  onChange={(e) =>
                    setEditingEducation({
                      ...editingEducation,
                      institution: e.target.value,
                    })
                  }
                  placeholder="Stanford University"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Start Year</Label>
                  <Select
                    value={editingEducation.start_date}
                    onValueChange={(value) =>
                      setEditingEducation({
                        ...editingEducation,
                        start_date: value,
                      })
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Start Year" />
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
                <div className="space-y-2">
                  <Label>End Year</Label>
                  <Select
                    disabled={editingEducation.onGoing}
                    value={editingEducation.onGoing ? "" : editingEducation.end_date}
                    onValueChange={(value) =>
                      setEditingEducation({
                        ...editingEducation,
                        end_date: value,
                      })
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="End Year" />
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
              <div className="space-x-2 flex items-center">
                <Checkbox
                  id="ongoing"
                  checked={editingEducation.onGoing}
                  onCheckedChange={handleOngoingChange}
                />
                <label htmlFor="ongoing">Currently working here</label>
              </div>

              <div className="space-y-2">
                <Label>Description <AnimatedShinyText className="text-xs  m-0">( Optional )</AnimatedShinyText></Label>
                <Textarea
                  className="text-sm"
                  value={editingEducation.description}
                  onChange={(e) =>
                    setEditingEducation({
                      ...editingEducation,
                      description: e.target.value,
                    })
                  }
                  placeholder="Describe your degree, achievements, relevant coursework..."
                  rows={4}
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button onClick={handleSaveEducation}>
              <Save className="mr-2 h-4 w-4" />
              {isAdding ? "Add Education" : "Save Changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
