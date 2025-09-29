import { TemplateData } from "@workspace/types";
import { Black_White } from "./Templates";
import { Clean_Slate } from "./Templates";
import { DevPro } from "./Templates";
import { Persona } from "./Templates";
import { White_Space } from "./Templates";

export const Data: TemplateData[] = [
{
    id: "black-white",
    title: "Black & White",
    description: "A minimal, responsive template with dark/light modes and a sleek bottom  dock for Socail Networking.",
    thumbnail: "https://pub-7e33da773f24477fad91084ffacf40cb.r2.dev/templates/black-white/preview/desktop-dark.png",
    video: "https://pub-7e33da773f24477fad91084ffacf40cb.r2.dev/templates/black-white/preview/vid.mp4",
    component: Black_White,
    mobileDevice: "Iphone15Pro",
    category: "FREE",
    INRpricing: 0,
    USDpricing: 0,
    theme:"both"
  },
  {
    id: "clean-slate",
    title: "Clean Slate",
    description: "A modern monochrome portfolio template that highlights your skills and projects with bold` typography and a minimalist aesthetic.",
    thumbnail: "https://pub-7e33da773f24477fad91084ffacf40cb.r2.dev/templates/clean-slate/preview/desktop-light.png",
    video: "https://pub-7e33da773f24477fad91084ffacf40cb.r2.dev/templates/clean-slate/preview/vid.mp4",
    component: Clean_Slate,
    mobileDevice: "Iphone15Pro",
    category: "FREE",
    INRpricing: 0,
    USDpricing: 0,
    theme:"both"
  },
  {
    id: "devpro",
    title: "DevPro",
    description: "A fully responsive, center-aligned portfolio template with dark and light modes for a clean, professional look.",
    thumbnail: "https://pub-7e33da773f24477fad91084ffacf40cb.r2.dev/templates/devpro/preview/desktop-dark.png",
    video: "https://pub-7e33da773f24477fad91084ffacf40cb.r2.dev/templates/devpro/preview/vid.mp4",
    component: DevPro,
    mobileDevice: "Android",
    category: "FREE",
    INRpricing: 0,
    USDpricing: 0,
    theme:"both"
  },
  {
    id: "persona",
    title: "Persona",
    description: "This is a sleek, modern portfolio template featuring a clean single-page layout with a strong focus on personality and professionalism",
    thumbnail: "https://pub-7e33da773f24477fad91084ffacf40cb.r2.dev/templates/persona/preview/desktop-dark.png",
    video: "https://pub-7e33da773f24477fad91084ffacf40cb.r2.dev/templates/persona/preview/vid.mp4",
    component: Persona,
    mobileDevice: "Iphone15Pro",
    category: "FREE",
    INRpricing: 0,
    USDpricing: 0,
    theme:"dark"
  },
  {
    id: "white-space",
    title: "White Space",
    description: "A clean and professional single-page portfolio with a centered profile section and tech stack highlights. Perfect for showcasing skills, projects, and availability at a glance.",
    thumbnail: "https://pub-7e33da773f24477fad91084ffacf40cb.r2.dev/templates/white-space/preview/desktop-light.png",
    video: "https://pub-7e33da773f24477fad91084ffacf40cb.r2.dev/templates/white-space/preview/vid.mp4",
    component: White_Space,
    mobileDevice: "Iphone15Pro",
    category: "FREE",
    INRpricing: 0,
    USDpricing: 0,
    theme:"light"
  }
];
