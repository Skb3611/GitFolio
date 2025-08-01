"use client";
import { USERDATA_ENDPOINT } from "@/app/config";
import {LoaderOne } from "@workspace/ui/components/ui/loader"
import { Data } from "@workspace/templates/metadata";
import {
  DATA,
  Education,
  Experience,
  PersonalInformation,
  Projects,
  SocialLinks,
} from "@workspace/types";
import { use, useEffect, useState } from "react";
import { NotFound } from "@workspace/ui/components/ui/not-found";

export default function Page({
  params,
}: {
  params: Promise<{ template: string; username: string }>;
}) {
  const { template, username } = use(params);
  const Template = Data.filter(temp=>temp.id==decodeURIComponent(template))
  const Component = Template[0]?.component as React.ComponentType<{ data: DATA }>
  const [loading, setLoading] = useState(true)
  const [data, setdata] = useState<DATA>();
  useEffect(() => {
    (async () => {
      const res = await fetch(`${USERDATA_ENDPOINT}/${username}`);
      const result = await res.json();
      console.log(result);
      const p: PersonalInformation = {
        username: result.data.username,
        email: result.data.email,
        profileImg: result.data.profileImg ?? null,
        bio: result.data.bio ,
        location: result.data.location ,
        website: result.data.website ,
        full_name: result.data.firstname + " " + result.data.lastname,
        followers: result.data.followers ?? 0,
        following: result.data.following ?? 0,
        githubLink: result.data.githubLink,
        tagline: result.data.tagline ,
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
          logo: exp.logo,
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
          logo: edu.logo,
        };
      });
      const s: SocialLinks = result.data.socialAccounts ?? {
        github: "",
        linkedin: "",
        twitter: "",
        website: "",
        instagram: "",
        facebook: "",
        behance: "",
        youtube: "",
      };
      const sk: string[] = result.data.skills ?? [];
      setdata({
        personalInfo: p,
        education: edu,
        experience: e,
        socialLinks: s,
        skills: sk,
        projects: r,
      });
      setTimeout(() => {
        setLoading(false)
      }, 500);
    })();
  }, []);
if(loading) return (
    <div className="min-h-screen w-full flex justify-center items-center">
        <LoaderOne />
    </div>
)
  return (
      Component && data ? <Component data={data} /> : <NotFound />
  );
}
