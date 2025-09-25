import { Button } from "@workspace/ui/components/button";
import { Github } from "@workspace/ui/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip";
import { PersonalInformation, SocialLinks } from "@workspace/types";
import { ModeToggle } from "../../components/mode-toggle";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";

const Navbar = ({
  personalInfo,
  links,
}: {
  personalInfo: PersonalInformation;
  links: SocialLinks;
}) => {
  return (
    <header className="py-4">
      <nav className="max-w-[586px] mx-auto bg-black/85 flex flex-wrap justify-between items-center py-2 px-4 rounded-full border outline-none shadow-md fixed left-0 right-0 z-50">
        <div>
          <Avatar>
            <AvatarImage src={personalInfo.profileImg} />
            <AvatarFallback>{personalInfo.full_name[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="">
          <ul className="flex items-center flex-wrap">
            <li className="">
              <Button variant="link">
                <a className="text-white" href="/#">
                  Home
                </a>
              </Button>
            </li>
            <li className="sm:block hidden">
              <Button variant="link">
                <a className="text-white" href="/#projects">
                  Projects
                </a>
              </Button>
            </li>
            <li className="sm:block hidden">
              <Button variant="link">
                <a className="text-white" href="/#experience">
                  Experience
                </a>
              </Button>
            </li>
          </ul>
        </div>

        <div className="flex flex-between gap-2 flex-wrap">
          <Tooltip>
            <TooltipTrigger>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/SteeveSticks"
              >
                <Github className="size-6 text-white hover:text-white/90 cursor-pointer mr-2" />
              </a>
            </TooltipTrigger>
            <TooltipContent>GitHub</TooltipContent>
          </Tooltip>
          {/* <Tooltip>
            <TooltipTrigger>
              <a
                download
                target="_blank"
                rel="noopener noreferrer"
                href="/Resume (7).pdf"
              >
                <IoDocumentTextOutline className="size-6 text-white hover:text-white/90 cursor-pointer" />
              </a>
            </TooltipTrigger>
            <ul className="flex-between flex-wrap"></ul>
            <TooltipContent>Resume</TooltipContent>
          </Tooltip> */}

          <div className="border-l">
            <Button className="ml-2 bg-white hover:bg-white/80 text-black cursor-pointer">
              <a href="/#contact">Contact</a>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
