"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@workspace/ui/components/sheet";
import { Button } from "@workspace/ui/components/button";
import { Plus, X } from "@workspace/ui/icons";
import PersonalInfoSheetContent from "./PersonalInfoSheetContent";
import { DATA, SocialLinks } from "@workspace/types";
import SocialLinksSheetContent from "./SocialLinksSheetContent";
import { toast } from "@workspace/ui/components/sonner";
import SkillsSheetContent from "./SkillsSheetContent";
import ProjectsSheetContent from "./ProjectsSheetContent";
import { data } from "motion/react-client";
import {
  initialEducation,
  initialExperience,
  initialProjects,
} from "@/lib/dummy";
import ExperienceSheetContent from "./ExperienceSheetContent";
import EducationSheetContent from "./EducationSheetContent";
import { useIsMobile } from "@workspace/ui/hooks/use-mobile";

const CustomSheetContent = ({
  closeSheet,
  slug,
  user,
  setUser,
}: {
  closeSheet: () => void;
  slug: string;
  user: DATA;
  setUser: Dispatch<SetStateAction<DATA | null | undefined>>;
}) => {
  const [dummyuser, setdummyuser] = useState<DATA>(user);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const isMobile = useIsMobile();
  useEffect(() => {
    setdummyuser(user);
  }, [user]);

  const sheetConfig = {
    "personal-information": {
      content: (
        <PersonalInfoSheetContent
          data={dummyuser && dummyuser?.personalInfo}
          setUser={setdummyuser}
        />
      ),
      title: "Edit your Personal Information",
    },
    projects: {
      content: (
        <ProjectsSheetContent
          data={dummyuser?.projects}
          setUser={setdummyuser}
        />
      ),
      title: "Edit / Add Projects",
    },
    experience: {
      content: (
        <ExperienceSheetContent
          data={dummyuser?.experience}
          setUser={setdummyuser}
        />
      ),
      title: "Edit / Add Experience",
    },
    education: {
      content: (
        <EducationSheetContent
          data={dummyuser?.education}
          setUser={setdummyuser}
        />
      ),
      title: "Edit / Add Education",
    },
    "social-links": {
      content: (
        <SocialLinksSheetContent
          links={dummyuser?.socialLinks}
          setUser={setdummyuser}
        />
      ),
      title: "Edit / Add Social Links",
    },
    skills: {
      content: (
        <SkillsSheetContent
          skills={dummyuser?.skills || []}
          setUser={setdummyuser}
        />
      ),
      title: "Edit / Add Skills",
    },
  };

  const handleSave = () => {
    if (slug == "social-links") {
      let links = {};
      Object.entries(dummyuser.socialLinks).map(([key, value]) => {
        if (value && value !== "" && value !== "#") {
          links = {
            ...links,
            [key]: "https://" + value,
          };
        } else {
          links = {
            ...links,
            [key]: "",
          };
        }
      });
      console.log(links);
      setUser({
        ...dummyuser,
        socialLinks: links as SocialLinks,
      });
    } else {
      setUser(dummyuser);
    }
    localStorage.setItem("user", JSON.stringify(dummyuser));
    closeSheet();
  };
  const handleAddEntry = () => {
    if (slug === "projects") {
      setdummyuser({
        ...dummyuser,
        projects: [...dummyuser.projects, initialProjects],
      });
    } else if (slug === "experience") {
      setdummyuser({
        ...dummyuser,
        experience: [...dummyuser.experience, initialExperience],
      });
    } else if (slug === "education") {
      setdummyuser({
        ...dummyuser,
        education: [...dummyuser.education, initialEducation],
      });
    }
  };

  return (
    <SheetContent className="overflow-y-auto w-full md:w-auto">
      <SheetHeader>
        <SheetTitle className="text-sm md:text-base">
          {sheetConfig[slug as keyof typeof sheetConfig]?.title}
        </SheetTitle>
      </SheetHeader>
      <main className="px-3">
        {sheetConfig[slug as keyof typeof sheetConfig]?.content}
      </main>
      <SheetFooter>
        {(slug === "projects" ||
          slug === "experience" ||
          slug === "education") && (
          <Button
            size={isMobile ? "sm" : "default"}
            className="bg-white/90 hover:bg-white/70  text-black font-semibold cursor-pointer text-sm"
            onClick={handleAddEntry}
          >
            <Plus /> Add {slug[0].toUpperCase() + slug.slice(1)}
          </Button>
        )}
        <Button
          size={isMobile ? "sm" : "default"}
          type="submit"
          className="bg-white/90 hover:bg-white/70  text-black font-semibold cursor-pointer text-sm"
          onClick={handleSave}
        >
          Save changes
        </Button>
        <SheetClose asChild>
          <Button
            variant="outline"
            onClick={closeSheet}
            size={isMobile ? "sm" : "default"}
          >
            Close
          </Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  );
};

export default CustomSheetContent;
