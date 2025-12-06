import { Label } from "@workspace/ui/components/label";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";
import { Save, X } from "@workspace/ui/icons";
import React, { Dispatch, SetStateAction } from "react";
import { Badge } from "@workspace/ui/components/badge";
import { DATA, SavePayload } from "@workspace/types";
import { getIconComponent } from "@workspace/ui/icons";

const SkillsSheetContent = ({
  skills,
  setUser,
}: {
  skills: string[];
  setUser: Dispatch<SetStateAction<DATA>>;
}) => {
  const [newSkill, setNewSkill] = React.useState("");

  const addSkill = (skill: string) => {
    if (skill && !skills.includes(skill)) {
      setUser((prev) => ({ ...prev, skills: [...prev.skills, skill] }));
      setNewSkill("");
    }
  };

  const removeSkill = (skill: string) => {
    setUser((prev) => ({ ...prev, skills: prev.skills.filter((s) => s !== skill) }));
    // onSave({type:"Skills",data:skills.filter((s) => s !== skill)})
  };

  const filteredSkills = availableSkills.filter(
    (skill) =>
      skill.toLowerCase().includes(newSkill.toLowerCase()) &&
      !skills.includes(skill)
  );
  return (
    <Card>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Add New Skill</Label>
          <div className="flex gap-2">
            <Input
              className="text-xs sm:text-sm"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Type a skill..."
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  addSkill(newSkill);
                }
              }}
            />
            <Button className="playground-white-button" onClick={() => addSkill(newSkill)}>Add</Button>
          </div>
          {newSkill && filteredSkills.length > 0 && (
            <div className="border rounded-md p-2 max-h-32 overflow-y-auto">
              {filteredSkills.slice(0, 5).map((skill) => {
                const Icon = getIconComponent(skill);
                return (
                  <div
                    key={skill}
                    className="p-1 hover:bg-muted rounded cursor-pointer flex items-center gap-2"
                    onClick={() => addSkill(skill)}
                  >
                    {Icon && <Icon />} {skill}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label>Current Skills</Label>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => {
              const Icon = getIconComponent(skill);
              return (
                <Badge
                  key={skill}
                  variant="outline"
                  className="flex flex-wrap items-center gap-2 py-2 text-xs"
                >
                  {Icon && <Icon className="size-3.5!" />}
                  {skill}
                  <Button
                    onClick={() => removeSkill(skill)}
                    variant={"link"}
                    size={"icon"}
                    className="p-0 cursor-pointer h-max w-max "
                  >
                    <X className="h-3 w-3 cursor-pointer z-50 text-white" />
                  </Button>
                </Badge>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsSheetContent;
const availableSkills = [
  "React",
  "Vue",
  "Angular",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Python",
  "Java",
  "Rust",
  "AWS",
  "Azure",
  "GCP",
  "Docker",
  "Kubernetes",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Git",
  "CI/CD",
  "Jest",
  "Vite",
  "Next.js",
  "Nuxt.js",
  "Express",
  "FastAPI",
  "Svelte",
  "jQuery",
  "Astro",
  "Fastify",
  "NextJs",
  "Meteor",
  "SocketIo",
  "Strapi",
  "Prisma",
  "tRPC",
  "GraphQL",
  "Relay",
  "Remix",
  "Gatsby",
  "Gridsome",
  "Expo",
  "Flutter",
  "Kotlin",
  "Swift",
  "Dart",
  "Elixir",
  "Crystal",
  "Zig",
  "C#",
  "C++",
  "C",
  "PHP",
  "Ruby",
  "Perl",
  "Lua",
  "HTML",
  "CSS",
  "Tailwind",
  "SASS",
  "BootStrap",
  "Webpack",
  "RollUp",
  "Parcel",
  "esBuild",
  "TurboPack",
  "npm",
  "pnpm",
  "yarn",
  "bun",
  "Vitest",
  "Mocha",
  "Cypress",
  "Playwright",
  "Puppeteer",
  "Selenium",
  "Storybook",
  "PyTest",
  "SQLite",
  "Reddis",
  "GoogleCloud",
  "DigitalOcean",
  "Linode",
  "Heroku",
  "Vercel",
  "Netlify",
  "Render",
  "SupaBase",
  "FireBase",
  "Appwrite",
  "Cloudflare",
  "RabbitMQ",
  "Kafka",
  "PostMan",
  "Clerk",
  "WordPress",
  "Sanity",
  "Shopify",
  "WooCommerce",
  "Paypal",
  "TensorFlow",
  "PyTorch",
  "Keras",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Jupyter",
  "OpenAi",
  "Solidity",
  "Web3",
  "Ethers",
  "MetaMask",
  "Django",
  "Flask",
  "Linux",
  "Ubuntu",
  "Debian",
  "Fedora",
  "Alphine",
  "macOS",
];
