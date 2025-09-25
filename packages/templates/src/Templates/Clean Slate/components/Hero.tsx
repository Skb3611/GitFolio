import { PersonalInformation } from '@workspace/types';
import AnimatedSection from "../../components/AnimatedSection";


export default function Hero({data,link}:{data:PersonalInformation,link:string}) {
  return (
    <AnimatedSection>
      <div className="sm:px-6 lg:px-8 relative max-w-2xl pt-[40px] sm:pt-[130px] md:pt-[150px] lg:pt-[188px] mx-auto flex flex-col justify-center px-4 gap-6">
        <AnimatedSection>
          <img
            alt={data.username}
            width={96}
            height={96}
            className="w-24 h-24 rounded-full object-cover"
            src={data.profileImg}
          />
        </AnimatedSection>
        <AnimatedSection className="flex flex-col gap-4 text-left">
          <h1 className="text-foreground text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight lg:leading-[1]">
            Hey, I&apos;m {data.full_name.split(" ")[0]}. <br />
            <span className='text-xl md:text-3xl'>
                {data.tagline}    
                </span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg font-normal leading-relaxed">
            {data.bio}
          </p>
        </AnimatedSection>
        <AnimatedSection className="flex gap-3">
          <a target="_blank" className="w-full md:w-auto" href={link}>
            <button className="inline-flex justify-center items-center gap-2.5 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-foreground text-accent hover:bg-foreground/90 focus:ring-accent-foreground px-6 py-3.5 text-base rounded-2xl w-full md:w-auto">
              Hire me
            </button>
          </a>
          <div className="rounded-full bg-green-100 text-lime-700 flex items-center gap-2 px-6 py-3.5 text-sm">
            <div className="relative inline-flex">
              <div className="rounded-full bg-lime-700 h-[6px] w-[6px] inline-block"></div>
              <div className="absolute animate-ping rounded-full bg-lime-700 h-[6px] w-[6px] opacity-75"></div>
            </div>
            <span className="md:hidden">Available</span>
            <span className="hidden md:inline">Open to Opportunities</span>
          </div>
        </AnimatedSection>
      </div>
    </AnimatedSection>
  );
}
