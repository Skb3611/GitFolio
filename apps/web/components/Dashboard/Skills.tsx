import { Label } from "@workspace/ui/components/label";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";
import { Save, X } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";
import { Badge } from "@workspace/ui/components/badge";
import { SavePayload } from "@workspace/types";
import { getIconComponent } from "@workspace/ui/icons";


const SkillsTab = ({
  skills,
  onChange,
  onSave,
  availableSkills,
}: {
  skills: string[];
  onChange: Dispatch<SetStateAction<string[]>>;
  onSave: ({ type, data }: SavePayload) => void;
  availableSkills: string[];
}) => {
  const [newSkill, setNewSkill] = React.useState("");

  const addSkill = (skill: string) => {
    if (skill && !skills.includes(skill)) {
      onChange([...skills, skill]);
      setNewSkill("");
    }
  };

  const removeSkill = (skill: string) => {
    onChange(skills.filter((s) => s !== skill));
    // onSave({type:"Skills",data:skills.filter((s) => s !== skill)})
  };

  const filteredSkills = availableSkills.filter(
    (skill) =>
      skill.toLowerCase().includes(newSkill.toLowerCase()) &&
      !skills.includes(skill)
  );
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center justify-between">
          <div>
            <CardTitle>Skills & Technologies</CardTitle>
            <CardDescription>
              Add your technical skills and expertise
            </CardDescription>
          </div>
          <Button onClick={() => onSave({ type: "Skills", data: skills })}>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Add New Skill</Label>
          <div className="flex gap-2">
            <Input
              className="text-sm"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Type a skill..."
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  addSkill(newSkill);
                }
              }}
            />
            <Button onClick={() => addSkill(newSkill)}>Add</Button>
          </div>
          {newSkill && filteredSkills.length > 0 && (
            <div className="border rounded-md p-2 max-h-32 overflow-y-auto">
              {filteredSkills.slice(0, 5).map((skill) => {
                const Icon = getIconComponent(skill);
                return (
                  <div
                    key={skill}
                    className="p-1 hover:bg-muted rounded cursor-pointer flex items-center gap-2"
                    onClick={() => addSkill(skill)}
                  >
                    {Icon && <Icon />} {skill}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="space-y-2"> 
          <Label>Current Skills</Label>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => {
              const Icon = getIconComponent(skill)
              return (
                <Badge
                  key={skill}
                  variant="outline"
                  className="flex items-center gap-2 py-2 text-sm"
                >
                  {Icon && <Icon className="!size-5"/>}
                  {skill}
                  <Button
                    onClick={() => removeSkill(skill)}
                    variant={"link"}
                    size={"icon"}
                    className="p-0 cursor-pointer h-max w-max "
                  >
                    <X className="h-3 w-3 cursor-pointer z-50 text-white" />
                  </Button>
                </Badge>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsTab;
