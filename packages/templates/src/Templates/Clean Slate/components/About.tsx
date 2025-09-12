import { PersonalInformation } from "@workspace/types";
import AnimatedSection from "./AnimatedSection";

export default function About({ data }: { data: PersonalInformation }) {
  return (
    <section className="px-6">
      <AnimatedSection>
        <h2 className="text-foreground text-xl md:text-2xl font-semibold leading-relaxed mb-4">
          About
        </h2>
        <div className="text-muted-foreground text-base font-normal leading-relaxed space-y-4">
          {data.location && data.location.length > 0 && (
            <p>
              I&apos;m {data.full_name.split(" ")[0]}.born in {data.location}.
            </p>
          )}
          <AnimatedSection className="max-w-full">
            {data.bio || "Add bio from your Dashboard"}
          </AnimatedSection>
        </div>
      </AnimatedSection>
      {/* <div className="relative mt-20 min-h-[400px]">
        <AnimatedSection>
            <div className="w-48 h-56 absolute bg-white border border-zinc-200/80 overflow-hidden left-[2%] top-[150px] md:left-[14%] md:top-[130px] lg:left-[10%] lg:top-[90px] origin-top-left rotate-[-8deg] shadow-xl">
            <img
              alt="Photography"
              width={183}
              height={182}
              className="w-44 h-44 left-[6.78px] top-[6.78px] absolute"
              src="/5.png"
            />
            <div className="left-4 top-[170px] md:left-[55px] md:top-[192px] italic tracking-wide text-zinc-600 font-normal absolute justify-start text-xs">
              My Code Buddy
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection>
            <div className="w-48 h-56 absolute bg-white border border-zinc-200/80 overflow-hidden -right-2 top-[-50px] md:right-[20%] md:top-[-30px] lg:right-[20%] lg:top-[-10px] origin-top-left rotate-[15deg] shadow-lg">
            <Image
              alt="Photography"
              width={183}
              height={182}
              className="w-44 h-44 left-[6.78px] top-[6.78px] absolute"
              src="/4.jpg"
            />
            <div className="left-4 top-[170px] md:left-[55px] md:top-[192px] italic tracking-wide text-zinc-600 font-normal absolute justify-start text-xs">
              I love anime
            </div>
          </div>
        </AnimatedSection>
      </div> */}
    </section>
  );
}
