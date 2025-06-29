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
  BicepsFlexed,
  BookOpen,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  CodeXml,
  Command,
  File,
  FolderGit2,
  FolderOpen,
  FolderOpenDotIcon,
  Globe,
  GraduationCap,
  Home,
  Link,
  User,
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
} from "../types/types";
import { useAuth } from "@clerk/nextjs";
import EducationTab from "@/components/Dashboard/Education";
import { config } from "@/config";
import { body } from "motion/react-client";
import OverviewTab from "@/components/Dashboard/Overview";
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
      icon: BookOpen,
    },
    {
      label: "Contact",
      href: "/#contact",
      icon: Command,
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
  const { getToken } = useAuth();

  useEffect(() => {
    (async () => {
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
            description: repo.description,
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
    })();
  }, []);

  const onSave = async ({ type, data }: SavePayload) => {
    console.log(type, data);
    const data1 = {
      personalInformation,
      projects,
      experience,
      socialLinks,
      skills,
      education,
    };
    switch (type) {
      case "Personal Information":
        const d = {
          ...data,
          firstname: data.full_name?.split(" ")[0],
          lastname: data.full_name?.split(" ")[1],
        };

        delete (d as any).full_name;
        let res = await fetch(config.server_endpoints.UPDATE_USER_DATA, {
          method: "POST",
          headers: {
            authorization: `Bearer ${await getToken()}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(d),
        });
        res = await res.json();
        console.log(res);
        break;
      case "Projects":
        let projectRes = await fetch(config.server_endpoints.UPDATE_REPO, {
          method: "POST",
          headers: {
            authorization: `Bearer ${await getToken()}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...data }),
        });
        projectRes = await projectRes.json();
        console.log(projectRes);
        break;
      case "Experience":
        let expRes = await fetch(config.server_endpoints.UPDATE_EXPERIENCE, {
          method: "POST",
          headers: {
            authorization: `Bearer ${await getToken()}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        expRes = await expRes.json();
        console.log(expRes);
        break;
      case "Education":
        let eduRes = await fetch(config.server_endpoints.UPDATE_EDUCATION, {
          method: "POST",
          headers: {
            authorization: `Bearer ${await getToken()}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        eduRes = await eduRes.json();
        console.log(eduRes);
        break;
      case "Social Links":
        let socialRes = await fetch(config.server_endpoints.UPDATE_USER_DATA, {
          method: "POST",
          headers: {
            authorization: `Bearer ${await getToken()}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ socialAccounts: { ...data } }),
        });
        socialRes = await socialRes.json();
        console.log(socialRes);
        break;
      case "Skills":
        let skillRes = await fetch(config.server_endpoints.UPDATE_USER_DATA, {
          method: "POST",
          headers: {
            authorization: `Bearer ${await getToken()}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ skills: data }),
        });
        skillRes = await skillRes.json();
        console.log(skillRes);
        break;
    }

    // localStorage.setItem("data", JSON.stringify(data1));
  };
  const onDelete = async (type: DeleteType, id: string) => {
    try {
      switch (type) {
        case DeleteType.PROJECT:
          setProjects(projects.filter((p) => p.id !== id));
          let projectRes = await fetch(
            `${config.server_endpoints.DELETE_REPO}/${id}`,
            {
              method: "DELETE",
              headers: {
                authorization: `Bearer ${await getToken()}`,
              },
            }
          );
          projectRes = await projectRes.json();
          console.log(projectRes);
          break;
        case DeleteType.EXPERIENCE:
          setExperience(experience.filter((p) => p.id !== id));
          let expRes = await fetch(
            `${config.server_endpoints.DELETE_EXPERIENCE}/${id}`,
            {
              method: "DELETE",
              headers: {
                authorization: `Bearer ${await getToken()}`,
              },
            }
          );
          expRes = await expRes.json();
          console.log(expRes);
          break;
        case DeleteType.EDUCATION:
          setEducation(education.filter((p) => p.id !== id));
          let eduRes = await fetch(
            `${config.server_endpoints.DELETE_EDUCATION}/${id}`,
            {
              method: "DELETE",
              headers: {
                authorization: `Bearer ${await getToken()}`,
              },
            }
          );
          eduRes = await eduRes.json();
          console.log(eduRes);
          break;
      }
    } catch (e) {
      console.log(e);
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
          />
        );
      case "Projects":
        return (
          <ProjectsTab
            projects={projects}
            onChange={setProjects}
            onSave={onSave}
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
      default:
        return <div>Overview</div>;
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
        <div className="flex flex-1 flex-col gap-4 p-6">{renderTab()}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
