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
  const handleSave = () => {
    // Get the current links data
    const currentLinks = links;
    
    // Check if any link has changed by comparing with the initial data
    const hasChanges = Object.entries(currentLinks).some(([key, value]) => {
      // If any link value is not empty and different from initial state
      return value && value.trim().length > 0;
    });

    // Only call save if there are changes
    if (hasChanges) {
      onSave({
        type: 'Social Links',
        data: currentLinks
      });
    }
  }
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <CardTitle>Social Links</CardTitle>
            <CardDescription>
              Add links to your social profiles and portfolio
            </CardDescription>
          </div>
          <Button onClick={handleSave} className="w-full sm:w-auto">
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
              className="text-sm"
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
