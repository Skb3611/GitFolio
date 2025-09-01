import { TemplateData } from "@workspace/types";
import { Black_White } from "./Templates";
import { DevPro } from "./Templates";

export const Data: TemplateData[] = [
  {
    id: "Black & White",
    title: "Black & White",
    description:
      "A minimal, responsive template with dark/light modes and a sleek bottom  dock for Socail Networking.",
    thumbnail:
      "https://pub-7e33da773f24477fad91084ffacf40cb.r2.dev/templates/Black & White/preview/desktop-dark.png",
    video:
      "https://pub-7e33da773f24477fad91084ffacf40cb.r2.dev/templates/Black & White/preview/vid.mp4",
    component: Black_White,
    mobileDevice: "Iphone15Pro",
    category: "FREE",
    INRpricing: 0,
    USDpricing: 0,
  },
  {
    id: "DevPro",
    title: "DevPro",
    description:
      "A fully responsive, center-aligned portfolio template with dark and light modes for a clean, professional look.",
    thumbnail:
      "https://pub-7e33da773f24477fad91084ffacf40cb.r2.dev/templates/DevPro/preview/desktop-dark.png",
    video:
      "https://pub-7e33da773f24477fad91084ffacf40cb.r2.dev/templates/DevPro/preview/vid.mp4",
    component: DevPro,
    mobileDevice: "Android",
    category: "PRO",
    INRpricing: 699,
    USDpricing: 7.99,
  },
];
