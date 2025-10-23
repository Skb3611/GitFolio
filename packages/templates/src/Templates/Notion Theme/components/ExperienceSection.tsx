import AnimatedSection from "../../components/AnimatedSection";
import { Experience } from "@workspace/types";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

const ExperienceSection = ({ data }: { data: Experience[] }) => {
  return (
    <AnimatedSection delay={0.3}>
      <h2 className="text-2xl font-bold mb-3">Experience</h2>
      <div className="space-y-2">
        {data.map((exp) => {
          return (
            <Card key={exp.id}>
              <CardHeader className="flex justify-between items-center">
                <div>
                  <CardTitle>{exp.company} <span className="text-sm text-muted-foreground">{exp.start_date} - {exp.end_date}</span></CardTitle>
                  <CardDescription>{exp.role}</CardDescription>
                </div>
                <div>
                  <Avatar className="size-10">
                    <AvatarImage src={exp.logo} alt={exp.company} />
                    <AvatarFallback>
                      {exp.company[0]?.toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </CardHeader>
              <CardContent className="text-sm sm:text-base">{exp.description}</CardContent>
            </Card>
          );
        })}
      </div>
    </AnimatedSection>
  );
};

export default ExperienceSection;
