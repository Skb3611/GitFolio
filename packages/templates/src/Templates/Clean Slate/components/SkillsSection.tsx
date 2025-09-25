import Skill from "../../components/Skill";
import AnimatedSection from "../../components/AnimatedSection";
import { useIsMobile } from "@workspace/ui/hooks/use-mobile";

const SkillsSection = ({ skills }: { skills: string[] }) => {
  const isMobile = useIsMobile()

  return (
    <AnimatedSection className="w-full">
      <section className="px-4 w-full mx-auto">

      {/* <h2 className="text-foreground text-xl md:text-2xl font-semibold leading-relaxed mb-4">
        Skills
      </h2> */}
      <div className="flex flex-wrap gap-2 items-center justify-center">
        {skills.map((skill) => (
          <Skill key={skill} label={skill} animate={isMobile} />
        ))}
      </div>
          </section>
  
    </AnimatedSection>
  );
};

export default SkillsSection;
