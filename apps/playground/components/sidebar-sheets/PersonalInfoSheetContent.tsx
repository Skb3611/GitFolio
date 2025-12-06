import { DATA, PersonalInformation } from "@workspace/types";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { Textarea } from "@workspace/ui/components/textarea";
import { Pencil, Upload } from "@workspace/ui/icons";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

const PersonalInfoSheetContent = ({
  data,
  setUser,
}: {
  data: PersonalInformation;
  setUser: Dispatch<SetStateAction<DATA>>;
}) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleChange = (key: keyof PersonalInformation, value: string) => {
    setUser((prev) => {
      return {
        ...prev,
        personalInfo: {
          ...prev.personalInfo,
          [key]: value,
        },
      };
    });
  };
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        setUser((prev) => {
          return {
            ...prev,
            personalInfo: {
              ...prev.personalInfo,
              profileImg: base64,
            },
          };
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="space-y-3">
      <div className="flex flex-col gap-3 justify-center items-center">
        <input
          ref={ref}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
        <Avatar
          className="size-25 group  cursor-pointer"
          onClick={() => ref.current?.click()}
        >
          <div className="h-full w-full hidden group-hover:flex justify-center items-center z-10 bg-background/50 absolute backdrop-blur-sm">
            <Upload className="size-8" />
          </div>
          <AvatarImage src={data.profileImg} alt="" />
          <AvatarFallback>
            {data.full_name.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        {/* <Button size={"sm"} className="playground-white-button">Upload Image</Button> */}
      </div>
      <div className="grid w-full max-w-sm items-center gap-2">
        <Label>Username</Label>
        <Input placeholder={`@${data.username}`} disabled />
      </div>
      <div className="flex gap-3">
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label>Full Name</Label>
          <Input
            placeholder="SKB"
            value={data.full_name}
            onChange={(e) => handleChange("full_name", e.target.value)}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label>Location</Label>
          <Input
            placeholder="On Earth"
            value={data.location ?? ""}
            onChange={(e) => handleChange("location", e.target.value)}
          />
        </div>
      </div>
      <div className="grid w-full max-w-sm items-center gap-2">
        <Label>Tag Line</Label>
        <Input
          placeholder="A software engineer"
          value={data.tagline ?? ""}
          onChange={(e) => handleChange("tagline", e.target.value)}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-2">
        <Label>Bio</Label>
        <Textarea
          onChange={(e) => handleChange("bio", e.target.value)}
          value={data.bio ?? ""}
          placeholder="Founder of GitFolio. From Github to Portfolio"
        />
      </div>
    </section>
  );
};

export default PersonalInfoSheetContent;
