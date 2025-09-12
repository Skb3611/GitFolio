"use client"
import Navbar from './components/Navbar'
import { DATA } from '@workspace/types'
import { DummyData } from '../dummyData'
import Hero from './components/Hero'
import About from './components/About'
import WorkExperience from './components/Experience'
import { Experience } from '@workspace/db'
import Contact from './components/Comtact'
import Footer from './components/Footer'
import ProjectsSection from './components/ProjectsSection'

const template = ({data=DummyData}:{data?:DATA}) => {
    const getLink = (): string => {
    if (data.socialLinks) {
      if (data.socialLinks.twitter && data.socialLinks.twitter.length != 0) {
        return data.socialLinks.twitter;
      } else if (
        data.socialLinks.linkedin &&
        data.socialLinks.linkedin.length != 0
      ) {
        return data.socialLinks.linkedin;
      } else
        return data.socialLinks.github && data.socialLinks.github.length != 0
          ? data.socialLinks.github
          : "#";
    }
    return "#";
  };
  return (
   <div className="bg-background w-full min-h-full absolute top-0">
      <Navbar activeSocialLinks={data.socialLinks} />
      <div className="px-4 sm:px-6 lg:px-8 relative max-w-2xl mx-auto mt-10 flex flex-col justify-center items-center space-y-20 lg:space-y-24">
        <Hero data={data.personalInfo} link={getLink()} />
        <About data={data.personalInfo} />
        <ProjectsSection data={data.projects}/>
        <hr className="w-full h-px max-md:max-w-[150px] mx-auto bg-muted" />
        <WorkExperience data={data.experience as unknown as Experience[]} />
        <hr className="w-full h-px max-md:max-w-[150px] mx-auto bg-muted" />
        <Contact link={getLink()} />
        <hr className="w-full h-px max-md:max-w-[150px] mx-auto bg-muted" />
        <Footer data={data.personalInfo}/>
      </div>
    </div>
  )
}

export default template
