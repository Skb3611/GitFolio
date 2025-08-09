"use client";
import { BlurFade } from "@workspace/ui/components/magicui/blur-fade";
import BlurFadeText from "@workspace/ui/components/magicui/blur-fade-text";
import { ProjectCard } from "./components/project-card";
import { ResumeCard } from "./components/resume-card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import Navbar from "./components/Navbar";
import { DATA } from "@workspace/types";
import Skill from "../components/Skill";
import { DummyData } from "../dummyData";
import SectionLabel from "@workspace/ui/components/SectionLabel";
import { config } from "../../config";
const BLUR_FADE_DELAY = 0.04;

export default function Page({ data = DummyData }: { data?: DATA }) {
  console.log(data);
  if (!data) {
    return <>loading</>;
  }
  return (
    <div className="relative min-h-screen bg-background font-sans antialiased max-w-3xl mx-auto py-12 sm:py-24 px-6">
      <Navbar data={data?.socialLinks} />
      <main className="flex flex-col min-h-[100dvh] space-y-10">
        <a href={config.siteUrl} target="_blank">
          <SectionLabel title="✨ Powered by GitFolio" />
        </a>
        <section id="hero">
          <div className="mx-auto w-full max-w-3xl space-y-8">
            <div className="gap-2 flex justify-between items-start">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  yOffset={8}
                  text={`Hi, I'm ${data?.personalInfo.full_name.split(" ")[0]} 👋`}
                />
                <BlurFadeText
                  className="max-w-[600px] md:text-xl"
                  delay={BLUR_FADE_DELAY}
                  text={
                    data?.personalInfo.tagline ??
                    "Add a Tagline in Personal Info"
                  }
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-28 border">
                  <AvatarImage
                    alt={data?.personalInfo.full_name[0]}
                    src={data?.personalInfo.profileImg}
                  />
                  <AvatarFallback>
                    {data?.personalInfo.full_name[0]}
                  </AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </section>
        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {data?.personalInfo.bio ?? "Add bio in Personal Info"}
            </p>
          </BlurFade>
        </section>
        {data?.experience && data?.experience.length > 0 && (
          <section id="work">
            <div className="flex min-h-0 flex-col gap-y-3">
              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <h2 className="text-xl font-bold">Work Experience</h2>
              </BlurFade>
              {data?.experience.map((work, id) => (
                <BlurFade
                  key={work.company}
                  delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                >
                  <ResumeCard
                    key={work.company}
                    logoUrl={work.logo}
                    altText={work.company}
                    title={work.company}
                    subtitle={work.role}
                    period={`${work.start_date} - ${work.end_date ?? "Present"}`}
                    description={work.description}
                  />
                </BlurFade>
              ))}
            </div>
          </section>
        )}
        {data?.education && data?.education.length > 0 && (
          <section id="education">
            <div className="flex min-h-0 flex-col gap-y-3">
              <BlurFade delay={BLUR_FADE_DELAY * 7}>
                <h2 className="text-xl font-bold">Education</h2>
              </BlurFade>
              {data?.education.map((education, id) => (
                <BlurFade
                  key={education.id}
                  delay={BLUR_FADE_DELAY * 8 + id * 0.05}
                >
                  <ResumeCard
                    key={education.id}
                    logoUrl={education.logo}
                    description={education.description}
                    altText={education.institution}
                    title={education.title}
                    subtitle={education.institution}
                    period={`${education.start_date} - ${education.end_date}`}
                  />
                </BlurFade>
              ))}
            </div>
          </section>
        )}
        {data?.skills && data.skills.length > 0 && (
          <section id="skills">
            <div className="flex min-h-0 flex-col gap-y-3">
              <BlurFade delay={BLUR_FADE_DELAY * 9}>
                <h2 className="text-xl font-bold">Skills</h2>
              </BlurFade>
              <div className="flex flex-wrap gap-1">
                {data?.skills.map((skill, id) => (
                  <BlurFade
                    key={skill}
                    delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                  >
                    <Skill label={skill} />
                  </BlurFade>
                ))}
              </div>
            </div>
          </section>
        )}
        <section id="projects">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    My Projects
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Check out my latest work
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I&apos;ve worked on a variety of projects, from simple
                    websites to complex web applications. Here are a few of my
                    favorites.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {data?.projects
                .filter((project) => project.isIncluded)
                .map((project, id) => (
                  <BlurFade
                    key={project.id}
                    delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                  >
                    <ProjectCard
                      key={project.id}
                      title={project.name}
                      description={project.description}
                      dates={""}
                      tags={project.topics}
                      image={project.thumbnail}
                      video={""}
                      liveLink={project.liveLink}
                      repoLink={project.repoLink}
                    />
                  </BlurFade>
                ))}
            </div>
          </div>
        </section>
        <section id="contact">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Want to chat? Just shoot me a dm{" "}
                  <a
                    target="_blank"
                    href={data?.socialLinks.twitter ?? "#"}
                    className="text-blue-500 hover:underline"
                  >
                    with a direct question on twitter
                  </a>{" "}
                  and I&apos;ll respond whenever I can. I will ignore all
                  soliciting.
                </p>
              </div>
            </BlurFade>
          </div>
        </section>
      </main>
    </div>
  );
}
