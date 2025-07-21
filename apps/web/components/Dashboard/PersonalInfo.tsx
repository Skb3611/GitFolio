import React, { Dispatch, SetStateAction, useRef } from "react";

import { Edit, Github, Mail, MapPin, Rocket, Save, UserIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { Textarea } from "@workspace/ui/components/textarea";
import { PersonalInformation, SavePayload } from "@workspace/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog";
import { blob } from "stream/consumers";

const PersonalInfoTab = ({
  info,
  onChange,
  onSave,
  setProfileImg,
}: {
  info: PersonalInformation;
  onChange: Dispatch<SetStateAction<PersonalInformation>>;
  onSave: ({ type, data }: SavePayload) => void;
  setProfileImg: Dispatch<SetStateAction<File | null>>;
}) => {
  const [editInfo, setEditInfo] = React.useState(info);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSave = () => {
    onChange(editInfo);
    onSave({ type: "Personal Information", data: editInfo });
    setIsOpen(false);
  };

  const handleCancel = () => {
    setEditInfo(info);
    setIsOpen(false);
  };
  const ref = useRef<HTMLInputElement>(null);

  const handleFileChange =async(event: React.ChangeEvent<HTMLInputElement>) => {
    const img = event.target.files?.[0]
    if(img){
      setProfileImg(img);
      setEditInfo({
        ...editInfo,
        profileImg: URL.createObjectURL(img),
      });
}
  }
  
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
          <div>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>
              Your personal details and profile information
            </CardDescription>
          </div>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="w-full md:w-auto">
                <Edit className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[95%] mx-auto overflow-auto">
              <DialogHeader className="gap-0">
                <DialogTitle className="text-base md:text-lg">Edit Personal Information</DialogTitle>

                <DialogDescription>
                  Update your personal details and profile information
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6 py-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage
                      src={editInfo.profileImg || "/placeholder.svg"}
                      alt={editInfo.full_name}
                    />
                    <AvatarFallback>
                      {editInfo.full_name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <Button variant="outline" onClick={()=>ref.current?.click()}>
                    <Input
                      ref={ref}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    Change Image{" "}
                  </Button>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label className="text-sm md:text-base" htmlFor="full_name">Full Name</Label>
                    <Input
                    className="text-sm md:text-base"
                      id="full_name"
                      value={editInfo.full_name}
                      onChange={(e) =>
                        setEditInfo({ ...editInfo, full_name: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm md:text-base" htmlFor="location">Location</Label>
                    <Input
                    className="text-sm md:text-base"
                      id="location"
                      value={editInfo.location}
                      onChange={(e) =>
                        setEditInfo({ ...editInfo, location: e.target.value })
                      }
                      placeholder="City, Country"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm md:text-base" htmlFor="tagline">Tagline</Label>
                  <Input
                  className="text-sm md:text-base"
                    id="tagline"
                    value={editInfo.tagline}
                    onChange={(e) =>
                      setEditInfo({ ...editInfo, tagline: e.target.value })
                    }
                    placeholder="A brief tagline about yourself"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm md:text-base" htmlFor="bio">Bio</Label>
                  <Textarea
                  className="text-sm md:text-base"
                    id="bio"
                    value={editInfo.bio}
                    onChange={(e) =>
                      setEditInfo({ ...editInfo, bio: e.target.value })
                    }
                    placeholder="Tell us about yourself..."
                    rows={4}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button onClick={handleSave}>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent className="md:space-y-6 space-y-4 text-sm md:text-base">
        <div className="flex items-center gap-4">
          <Avatar className="md:size-20 size-15">
            <AvatarImage
              src={info.profileImg || "/placeholder.svg"}
              alt={info.full_name}
            />
            <AvatarFallback>
              {info.full_name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="md:space-y-1">
            <h3 className="text-base md:text-xl font-semibold">@{info.full_name}</h3>
            <p className="flex items-center gap-1 text-sm text-muted-foreground">
              <Rocket className="h-4 w-4"/>
              {info.tagline.length == 0 ? "No tagline" : info.tagline}
            </p>
            <p className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {info.location.length == 0 ? "No location" : info.location}
            </p>
          </div>
        </div>

        {/* Non-editable fields */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <UserIcon className="h-4 w-4" />
              Username
            </Label>
            <Input value={`@${info.username}`} disabled className="bg-muted text-sm md:text-base" />
          </div>
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email
            </Label>
            <Input value={info.email} disabled className="bg-muted text-sm md:text-base" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              GitHub Profile
            </Label>
            <Input
              value={`https://github.com/${info.username}`}
              disabled
              className="bg-muted text-sm md:text-base"
            />
          </div>
        </div>

        <div>
          <h4 className="font-medium md:mb-2">Bio</h4>
          <p className="text-muted-foreground">
            {info.bio.length == 0 ? "No bio added" : info.bio}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalInfoTab;
