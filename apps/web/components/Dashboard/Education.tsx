import React, { Dispatch, SetStateAction, useState } from "react";
import { DeleteType, Education, SavePayload } from "@workspace/types";
import { Button } from "@workspace/ui/components/button";
import {
  Calendar,
  Edit,
  GraduationCap,
  Plus,
  Save,
  Trash2,
} from "lucide-react";
import { Card, CardContent } from "@workspace/ui/components/card";
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
export default function EducationTab({
  education,
  onChange,
  onSave,
  onDelete,
}: {
  education: Education[];
  onChange: Dispatch<SetStateAction<Education[]>>;
  onSave: ({ type, data }: SavePayload) => void;
  onDelete: (type: DeleteType, id: string) => void;
}) {
  const [editingEducation, setEditingEducation] = useState<Education | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddEducation = () => {
    const newEdu: Education = {
      id: uuid(),
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
        editingEducation?.end_date == "" ||
        editingEducation?.description == ""
      ) {
        toast.warning("Please fill in all the fields");
        return;
      } else if (editingEducation.description.length < 10) {
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

  const handleDeleteEducation = (id: string) => {
    onChange(education.filter((edu) => edu.id !== id));
    // onSave({message:"Education",data:{..}})
    onDelete(DeleteType.EDUCATION, id);
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
        end_date: "Present",
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
            </AnimatedShinyText>
          </div>
        )}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px]">
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
                  <Input
                    className="text-sm"
                    value={editingEducation.start_date}
                    onChange={(e) =>
                      setEditingEducation({
                        ...editingEducation,
                        start_date: e.target.value,
                      })
                    }
                    placeholder="2020"
                  />
                </div>
                <div className="space-y-2">
                  <Label>End Year</Label>
                  <Input
                    className="text-sm"
                    disabled={editingEducation.onGoing}
                    value={editingEducation.end_date}
                    onChange={(e) =>
                      setEditingEducation({
                        ...editingEducation,
                        end_date: e.target.value,
                      })
                    }
                    placeholder="2024"
                  />
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
                <Label>Description</Label>
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
