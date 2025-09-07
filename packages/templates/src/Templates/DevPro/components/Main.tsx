import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import ProjectCard from "./ProjectCard";
import CommonCard from "./CommonCard";
import Skill from "../../components/Skill";
import { DATA } from "@workspace/types";
import BlurFadeText from "@workspace/ui/components/magicui/blur-fade-text";
import { BlurFade } from "@workspace/ui/components/magicui/blur-fade";
const BLUR_FADE_DELAY = 0.04;
const Home = ({ data }: { data: DATA }) => {
  return (
    <div className="mt-5 space-y-4">
      <section id="header" className="border-t md:border-none">
        <div className="my-10 w-[90%] sm:w-2/3 space-y-2 ml-2 sm:ml-5">
          <BlurFadeText
            className="text-2xl md:text-4xl font-bold"
            text={data.personalInfo.full_name}
            delay={BLUR_FADE_DELAY}
          />
          <BlurFadeText
            text={data.personalInfo.tagline || "Enter a Tagline in Dashboard"}
            className="text-sm md:text-lg font-medium"
            delay={BLUR_FADE_DELAY}
          />
          <p></p>

          <BlurFadeText
            className="text-xs sm:text-sm text-muted-foreground"
            text={data.personalInfo.bio || "Enter a Bio in Dashboard"}
            delay={BLUR_FADE_DELAY}
          />
        </div>
      </section>
      <section id="projects">
        <div className="mx-auto border-y py-10 px-5 dark:shadow-[inset_0px_1px_4px_0px_rgba(10,10,10,1),inset_0px_-1px_4px_0px_rgba(10,10,10,1)] shadow-[inset_0px_1px_4px_0px_rgba(245,245,245),inset_0px_-1px_4px_0px_rgba(245,245,245)] ">
          <div className="flex w-full justify-between items-center mb-5">
            <BlurFadeText
              className="text-lg sm:text-xl font-semibold text-portfolio-text"
              text="I ♥️ building Projects"
              delay={BLUR_FADE_DELAY}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-3 gap-6 min-h-max">
            {data.projects
              .filter((project) => project.isIncluded)
              .map((project, index) => (
                <BlurFade inView key={project.name} delay={index * 0.02}>
                  <ProjectCard project={project} />
                </BlurFade>
              ))}
          </div>
        </div>
      </section>
      {data.skills && (
        <section id="skills">
          <div className="px-2.5 sm:px-5 py-2">
            <BlurFadeText
              text="My Skills"
              className="text-lg sm:text-xl font-semibold text-portfolio-text "
              delay={1}
            />
            <div className="my-5 flex flex-wrap gap-x-4 gap-y-2">
              {data.skills &&
                data.skills.length > 0 &&
                data.skills.map((skill, idx) => {
                  return (
                    <BlurFade inView delay={idx * 0.1} key={idx}>
                      <Skill label={skill} animate={false} />
                    </BlurFade>
                  );
                })}
            </div>
          </div>
        </section>
      )}
      {data.experience && data.experience.length > 0 && (
        <section id="exp">
          <div className="mx-auto border-y py-10  px-2.5 sm:px-5 dark:shadow-[inset_0px_1px_4px_0px_rgba(10,10,10,1),inset_0px_-1px_4px_0px_rgba(10,10,10,1)] shadow-[inset_0px_1px_4px_0px_rgba(245,245,245),inset_0px_-1px_4px_0px_rgba(245,245,245)] ">
            <BlurFadeText
              className="text-lg sm:text-xl font-semibold text-portfolio-text "
              text="Worked at reputed firms"
              delay={BLUR_FADE_DELAY}
            />

            <div className="space-y-5 my-8">
              {data.experience.map((exp, idx) => {
                return (
                  <BlurFade key={exp.id} inView delay={idx * 0.1}>
                    <CommonCard data={exp} />
                  </BlurFade>
                );
              })}
            </div>
          </div>
        </section>
      )}
      {data.education && data.education.length > 0 && (
        <section id="edu">
          <div className="px-2.5 sm:px-5 py-10">
            <BlurFadeText
              className="text-lg sm:text-xl font-semibold text-portfolio-text "
              text="Studied at reputed institutes"
              delay={BLUR_FADE_DELAY}
            />
            <div className="space-y-5 my-8">
              {data.education.map((edu, idx) => {
                return (
                  <BlurFade key={edu.id} inView delay={idx * 0.1}>
                    <CommonCard data={edu} />
                  </BlurFade>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
