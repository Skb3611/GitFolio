import { Badge } from "@workspace/ui/components/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { Globe, GlobeIcon, Image } from "@workspace/ui/icons";
import { Icons } from "../../../icons/index";
import { Button } from "@workspace/ui/components/button";
interface Props {
  title: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  liveLink?:string;
  repoLink:string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  dates,
  tags,
  link,
  image,
  video,
  liveLink,
  repoLink,
  className,
}: Props) {
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full pt-0 rounded-sm"
      }
    >
     
        <div className="w-full h-40 bg-muted flex justify-center items-center flex-col">
          {
            (!video && !image) && <>
            <Image/>
            <AnimatedShinyText>No image</AnimatedShinyText>
            </>
          }
        {video && (
          <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
          />
        )}
        {image && (
          <img
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
            />
          )}
          </div>
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <p className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </p>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2 gap-1">
        <a href={repoLink} target="_blank" >
        <Button size={"sm"} className="rounded-full text-xs cursor-pointer " variant={"outline"}>
          {<Icons.github/>}
          Source
        </Button>
        </a>
        {liveLink &&
        < a href={liveLink} target="_blank" >
         <Button size={"sm"} className="rounded-full text-xs cursor-pointer " variant={"outline"}>
          {<Globe/>}
          Website
          </Button>
        </a>}
      </CardFooter>
    </Card>
  );
}
