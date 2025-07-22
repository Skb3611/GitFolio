"use client";
import ExperienceTab from "@/components/Dashboard/Experience";
import PersonalInfoTab from "@/components/Dashboard/PersonalInfo";
import ProjectsTab from "@/components/Dashboard/Projects";
import { AppSidebar } from "@/components/Dashboard/Sidebar";
import SkillsTab from "@/components/Dashboard/Skills";
import SocialLinksTab from "@/components/Dashboard/SocialLinks";
import {
  availableSkills,
  initialPersonalInformation,
  initialSocailLinks,
} from "@/lib/dummy";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb";
import { Separator } from "@workspace/ui/components/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar";
import {
  BookOpen,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  CodeXml,
  Command,
  FolderGit2,
  Globe,
  GraduationCap,
  Home,
  Info,
  Link,
  MessageCircle,
  UserPen,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  DeleteType,
  Education,
  Experience,
  PersonalInformation,
  Projects,
  SavePayload,
  SocialLinks,
  TabTypes,
} from "@workspace/types";
import { useAuth } from "@clerk/nextjs";
import EducationTab from "@/components/Dashboard/Education";
import { config } from "@/config";
import OverviewTab from "@/components/Dashboard/Overview";
import { toast } from "@workspace/ui/components/sonner";
import { Template1 } from "@workspace/templates";
import TemplateRender from "@/components/Dashboard/Overview/TemplateRender";

const sidebarItems = {
  HeaderNavItems: [
    {
      label: "Home",
      href: "/",
      icon: Home,
    },
    {
      label: "About",
      href: "/#about",
      icon: Info,
    },
    {
      label: "Contact",
      href: "/#contact",
      icon: MessageCircle,
    },
  ],
  MainNavItems: [
    {
      label: "Overview",
      icon: ChartNoAxesCombined,
    },
    {
      label: "Personal Info",
      icon: UserPen,
    },
    {
      label: "Projects",
      icon: FolderGit2,
    },
    {
      label: "Experience",
      icon: BriefcaseBusiness,
    },
    {
      label: "Education",
      icon: GraduationCap,
    },
    {
      label: "Social Links",
      icon: Link,
    },
    {
      label: "Skills",
      icon: CodeXml,
    },
    {
      label: "Preview",
      icon: Globe,
    },
  ],
};

export default function Page() {
  const [activeTab, setActiveTab] = useState<TabTypes>("Overview");
  const [personalInformation, setPersonalInformation] =
    useState<PersonalInformation>(initialPersonalInformation);
  const [projects, setProjects] = useState<Projects[]>([]);
  const [experience, setExperience] = useState<Experience[]>([]);
  const [socialLinks, setSocialLinks] =
    useState<SocialLinks>(initialSocailLinks);
  const [skills, setSkills] = useState<string[]>([]);
  const [education, setEducation] = useState<Education[]>([]);
  const [profileImg, setprofileImg] = useState<File | null>(null);
  const [projectImg, setProjectImg] = useState<File | null>(null);
  const { getToken } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getToken();
        console.log(token);
        const res = await fetch(config.server_endpoints.GET_USER_DATA, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        const result = await res.json();
        console.log(result);
        const p: PersonalInformation = {
          username: result.data.username,
          email: result.data.email,
          profileImg: result.data.profileImg ?? null,
          bio: result.data.bio ?? "",
          location: result.data.location ?? "",
          website: result.data.website ?? "",
          full_name: result.data.firstname + " " + result.data.lastname,
          followers: result.data.followers ?? 0,
          following: result.data.following ?? 0,
          githubLink: result.data.githubLink,
          tagline: result.data.tagline ?? "",
        };
        const r: Projects[] = result.data.repos.map((repo: any) => {
          return {
            id: repo.id,
            name: repo.name,
            description: repo.description ?? "",
            thumbnail: repo.thumbnail,
            repoLink: repo.repoLink,
            liveLink: repo.liveLink,
            languages: repo.languages,
            stars: repo.stars,
            forks: repo.forks,
            isIncluded: repo.isIncluded ?? true,
            topics: repo.topics ?? [],
          };
        });
        const e: Experience[] = result.data.experiences.map((exp: any) => {
          return {
            id: exp.id,
            company: exp.company,
            description: exp.description,
            role: exp.role,
            start_date: exp.start_date,
            end_date: exp.end_date,
            onGoing: exp.end_date === "Present" ? true : false,
          };
        });

        const edu: Education[] = result.data.educations.map((edu: any) => {
          return {
            id: edu.id,
            title: edu.title,
            institution: edu.institution,
            start_date: edu.start_date,
            end_date: edu.end_date,
            description: edu.description,
            onGoing: edu.end_date === "Present" ? true : false,
          };
        });
        const s: SocialLinks = result.data.socialAccounts ?? initialSocailLinks;
        const sk: string[] = result.data.skills ?? [];

        setPersonalInformation(p);
        setProjects(r);
        setExperience(e);
        setEducation(edu);
        setSocialLinks(s);
        setSkills(sk);
      } catch (e) {
        console.log(e);
      }
    };
    toast.promise(fetchData, {
      loading: "Fetching Data...",
      success: "Data Fetched",
      error: "Data Fetch Failed",
      invert: true,
    });
  }, []);

  const onSave = async ({ type, data }: SavePayload) => {
    const token = await getToken();
    const headers = {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const showSavingToast = toast.loading(`Saving ${type.toLowerCase()}...`);

    try {
      let body: any;
      let endpoint = "";

      switch (type) {
        case "Personal Information":
          if (profileImg != null) {
            const res = await fetch(config.server_endpoints.GET_PRESIGNED_URL, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                type: "profile",
                filename: "profile.jpg",
              }),
            });
            const { url, link } = (await res.json()).data;
            console.log(url, link);
            const r = await fetch(url, {
              method: "PUT",
              body: profileImg,
            });
            data = { ...data, profileImg: link };
          }
          let d = {
            ...data,
            firstname: (data as PersonalInformation).full_name?.split(" ")[0],
            lastname: (data as PersonalInformation).full_name?.split(" ")[1],
          };
          delete (d as any).full_name;
          body = d;
          endpoint = config.server_endpoints.UPDATE_USER_DATA;
          break;

        case "Projects":
          if (projectImg) {
            let res = await fetch(config.server_endpoints.GET_PRESIGNED_URL, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                type: "project",
                filename: (data as Projects).id + ".jpg",
              }),
            });
            const { url, link } = (await res.json()).data;
            const r = await fetch(url, {
              method: "PUT",
              body: projectImg,
            });
            data = { ...data, thumbnail: link };
          }
          body = data;
          endpoint = config.server_endpoints.UPDATE_REPO;
          break;

        case "Experience":
          body = data;
          endpoint = config.server_endpoints.UPDATE_EXPERIENCE;
          break;

        case "Education":
          body = data;
          endpoint = config.server_endpoints.UPDATE_EDUCATION;
          break;

        case "Social Links":
          body = { socialAccounts: { ...data } };
          endpoint = config.server_endpoints.UPDATE_USER_DATA;
          break;

        case "Skills":
          body = { skills: data };
          endpoint = config.server_endpoints.UPDATE_USER_DATA;
          break;
      }

      const res = await fetch(endpoint, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error(`Failed with status ${res.status}`);

      toast.success(`${type} saved successfully`, { id: showSavingToast });
    } catch (err) {
      toast.error(`Failed to save ${type.toLowerCase()}`, {
        id: showSavingToast,
      });
      console.error(err);
    }
  };

  const onDelete = async (type: DeleteType, id: string) => {
    const token = await getToken();
    const headers = {
      authorization: `Bearer ${token}`,
    };

    const toastId = toast.loading(`Deleting ...`);

    try {
      let res;
      switch (type) {
        case DeleteType.PROJECT:
          setProjects((prev) => prev.filter((p) => p.id !== id));
          res = await fetch(`${config.server_endpoints.DELETE_REPO}/${id}`, {
            method: "DELETE",
            headers,
          });
          break;

        case DeleteType.EXPERIENCE:
          setExperience((prev) => prev.filter((p) => p.id !== id));
          res = await fetch(
            `${config.server_endpoints.DELETE_EXPERIENCE}/${id}`,
            {
              method: "DELETE",
              headers,
            }
          );
          break;

        case DeleteType.EDUCATION:
          setEducation((prev) => prev.filter((p) => p.id !== id));
          res = await fetch(
            `${config.server_endpoints.DELETE_EDUCATION}/${id}`,
            {
              method: "DELETE",
              headers,
            }
          );
          break;
      }

      if (!res?.ok) throw new Error(`Failed with status ${res?.status}`);
      toast.success(`Deleted successfully`, { id: toastId });
    } catch (e) {
      console.error(e);
      toast.error(`Failed to delete item`, { id: toastId });
    }
  };

  const renderTab = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <OverviewTab
            personalInfo={personalInformation}
            socialLinks={socialLinks}
            education={education}
            experience={experience}
            projects={projects}
            skills={skills}
            setActiveTab={setActiveTab}
          />
        );
      case "Personal Info":
        return (
          <PersonalInfoTab
            info={personalInformation}
            onChange={setPersonalInformation}
            onSave={onSave}
            setProfileImg={setprofileImg}
          />
        );
      case "Projects":
        return (
          <ProjectsTab
            projects={projects}
            onChange={setProjects}
            onSave={onSave}
            setprojectImg={setProjectImg}
          />
        );
      case "Experience":
        return (
          <ExperienceTab
            experience={experience}
            onChange={setExperience}
            onSave={onSave}
            onDelete={onDelete}
          />
        );
      case "Social Links":
        return (
          <SocialLinksTab
            links={socialLinks}
            onChange={setSocialLinks}
            onSave={onSave}
          />
        );
      case "Skills":
        return (
          <SkillsTab
            skills={skills}
            onChange={setSkills}
            onSave={onSave}
            availableSkills={availableSkills}
          />
        );
      case "Education":
        return (
          <EducationTab
            education={education}
            onChange={setEducation}
            onSave={onSave}
            onDelete={onDelete}
          />
        );
      case "Preview":
        return (
         <TemplateRender data={{
          personalInfo:personalInformation,
          education,
          projects,
          experience,
          skills,
          socialLinks
         }}/>
        );
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar
        sidebarItems={sidebarItems}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 rounded-xl">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>{activeTab}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 md:p-6 py-2 px-4">
          {renderTab()}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
