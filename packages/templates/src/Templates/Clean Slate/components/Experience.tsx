import { Experience } from "@workspace/db";
import AnimatedSection from "../../components/AnimatedSection";
import { ResumeCard } from "../../Black & White/components/resume-card";

export default function WorkExperience({ data }: { data: Experience[] }) {
  return (
    <AnimatedSection className="w-full">
      <section className="px-4 w-full mx-auto">
        <h2 className="text-foreground text-xl md:text-2xl font-semibold leading-relaxed mb-8">
          Work Experience
        </h2>
        <div className="space-y-8 sm:space-y-6 w-full mx-auto">
          {data.map((exp, index) => (
            <AnimatedSection key={index}>
              <ResumeCard
                key={exp.id}
                logoUrl={exp.logo || ""}
                altText={exp.company.split("")[0] || ""}
                subtitle={exp.role}
                title={exp.company}
                period={`${exp.start_date} - ${exp.end_date}`}
                description={exp.description || ""}
              />
            </AnimatedSection>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
