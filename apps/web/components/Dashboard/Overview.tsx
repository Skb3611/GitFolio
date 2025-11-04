import React, { Dispatch, SetStateAction } from 'react'
import { BentoCard, BentoGrid } from "@workspace/ui/components/magicui/bento-grid";
import { AnimatedShinyText } from '@workspace/ui/components/magicui/animated-shiny-text';
import PersonalInfoCard from './Overview/PersonalInfoCard';
import { Education, Experience, PersonalInformation, Projects, SocialLinks, TabTypes } from '@workspace/types';
import StatsCard from './Overview/StatsCard';
import SocialLinksCard from './Overview/SocialLinksCard';
import ProjectsCard from './Overview/ProjectsCard';
import SkillsCard from './Overview/SkillsCard';
import EducationCard from './Overview/EducationCard';
import ExperienceCard from './Overview/ExperienceCard';

const OverviewTab = ({
    personalInfo,
    socialLinks,
    education,
    experience,
    projects,
    skills,
    setActiveTab
}:{
    personalInfo:PersonalInformation,
    socialLinks:SocialLinks
    education:Education[]
    experience:Experience[]
    projects:Projects[]
    skills:string[]
    setActiveTab:Dispatch<SetStateAction<TabTypes>>
}) => {
     const stats = {
        repos:projects.length,
        education:education.length,
        experience:experience.length,
        skills: skills.length
      }
    const features = [
        {
          
          name: "",
          description: "",
          href: "#",
          cta: "",
          className: "col-span-3 lg:col-span-2 ",
          background: (<PersonalInfoCard info={personalInfo} />
          ),
        },
        {
        
          name: "",
          description: "",
          href: "#",
          cta: "",
          className: "col-span-3 lg:col-span-1",
          background: (
            <StatsCard stats={stats}/>
          ),
        },
        {
          // Icon: Share2Icon,
          name: "",
          description: "",
          href: "#",
          cta: "Learn More",
          className: "col-span-3 lg:col-span-1",
          background: (
            <SocialLinksCard links={socialLinks}/>
          ),
        },
        {
          // Icon: CalendarIcon,
          name: "",
          description: "",
          className: "col-span-3 lg:col-span-2",
          href: "#",
          cta: "",
          background: (
            <ProjectsCard projects={projects} setActiveTab={setActiveTab}/>
          ),
        },
        {
          // Icon: CalendarIcon,
          name: "",
          description: "",
          className: "col-span-3 lg:col-span-1",
          href: "#",
          cta: "",
          background: (
            <EducationCard education={education} setActiveTab={setActiveTab} />
          ),
        },
        {
          // Icon: CalendarIcon,
          name: "",
          description: "",
          className: "col-span-3 lg:col-span-1",
          href: "#",
          cta: "",
          background: (
            <ExperienceCard experience={experience} setActiveTab={setActiveTab} />
          ),
        },
        {
          // Icon: Share2Icon,
          name: "",
          description: "",
          href: "#",
          cta: "Learn More",
          className: "col-span-3 lg:col-span-1",
          background: (
            <SkillsCard skills={skills} setActiveTab={setActiveTab} />
          ),
        },
      ];
   
    
  return (
    <div>
        <h1 className='text-xl md:text-4xl font-semibold'>Welcome Back {personalInfo.username || ". . ."} ! </h1>
        <AnimatedShinyText className='md:text-lg'>
        Here's Your Profile Overview ...
        </AnimatedShinyText>

      <BentoGrid className='mt-5 auto-rows-[20rem] '>
        {features.map((feature,idx) => <BentoCard key={idx} {...feature} />)}
      </BentoGrid>
    </div>
  )
}

export default OverviewTab
