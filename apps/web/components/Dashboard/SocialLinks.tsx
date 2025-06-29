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
import { Save } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";
import { SavePayload, SocialLinks } from "@/app/types/types";

const SocialLinksTab = ({
  links,
  onChange,
  onSave,
}: {
  links: SocialLinks;
  onChange: Dispatch<SetStateAction<SocialLinks>>;
  onSave: ({ type, data }: SavePayload) => void;
}) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Social Links</CardTitle>
            <CardDescription>
              Add links to your social profiles and portfolio
            </CardDescription>
          </div>
          <Button onClick={() => onSave({ type: "Social Links", data: links })}>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 grid lg:grid-cols-2 gap-3">
        {Object.entries(links).map(([key, value]) => {
          return (
            <div className="space-y-2" key={key}>
              <Label htmlFor={key}>
                {key[0]?.toUpperCase() + key.slice(1)}
              </Label>
              <Input
                id={key}
                value={value}
                onChange={(e) => onChange({ ...links, [key]: e.target.value })}
                placeholder={`Your ${key} profile link`}
              />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default SocialLinksTab;
