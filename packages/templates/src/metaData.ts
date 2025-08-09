import { TemplateData } from "@workspace/types";
import { Black_White } from "./Templates";
import { DevPro } from "./Templates";

export const Data: TemplateData[] = [
  {
    id: "Black & White",
    title: "Black & White",
    description: "Template Description",
    thumbnail: "https://pub-7e33da773f24477fad91084ffacf40cb.r2.dev/templates/Black & White/preview/desktop-dark.png",
    video: "https://pub-7e33da773f24477fad91084ffacf40cb.r2.dev/templates/Black & White/preview/vid.mp4",
    component: Black_White,
  },
  {
    id: "DevPro",
    title: "DevPro",
    description: "DevPro is a portfolio template for developers. Clean. Modern. Responsive. Neat",
    thumbnail: "https://pub-7e33da773f24477fad91084ffacf40cb.r2.dev/templates/DevPro/preview/desktop-dark.png",
    video: "https://pub-7e33da773f24477fad91084ffacf40cb.r2.dev/templates/DevPro/preview/vid.mp4",
    component: DevPro,
  }
];
