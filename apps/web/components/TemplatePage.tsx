"use client";
import Link from "next/link";
import { Button } from "@workspace/ui/components/button";
import {
  Autoplay,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@workspace/ui/components/carousel";
import { Safari } from "@workspace/ui/components/magicui/safari";
import Iphone15Pro from "@workspace/ui/components/magicui/iphone-15-pro";
import { useEffect, useState } from "react";
import { Data as TemplateMetaData } from "@workspace/templates/metadata";
import { NotFound } from "@workspace/ui/components/ui/not-found";
import { SavePayload, TemplateData } from "@workspace/types";
import { config } from "@/config";
import { Eye } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Android from "@workspace/ui/components/magicui/android";
import { LoaderFive } from "@workspace/ui/components/ui/loader";
import { ThreeDMarquee } from "@workspace/ui/components/ui/3d-marquee";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { getIconComponent, hasIcon } from "@workspace/ui/icons";
import { useIsMobile } from "@/hooks/use-mobile";
import BackHomeButton from "./BackHomeButton";
const stack: string[] = ["react", "typescript", "tailwind", "motion", "next"];

const BASE_URL =
  "https://pub-7e33da773f24477fad91084ffacf40cb.r2.dev/templates";

export default function TemplatePage({
  templateId,
  onSelect,
}: {
  templateId: string;
  onSelect?: ({ type, data }: SavePayload) => void;
}) {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    const template = TemplateMetaData.find(
      (template) => template.id === decodeURIComponent(templateId)
    );
    if (template) {
      setTemplate({
        ...template,
        desktopPreview: [
          `${BASE_URL}/${templateId}/preview/desktop-dark.png`,
          `${BASE_URL}/${templateId}/preview/desktop-light.png`,
        ],

        mobilePreview: [
          `${BASE_URL}/${templateId}/preview/mobile-dark.png`,
          `${BASE_URL}/${templateId}/preview/mobile-light.png`,
        ],
      });
      const baseImages = [
        `${BASE_URL}/${templateId}/preview/desktop-dark.png`,
        `${BASE_URL}/${templateId}/preview/desktop-light.png`,
        "/assets/banner.png",
      ];
      setImages(Array(10).fill(baseImages).flat());
      setIsLoading(false);
    } else {
      setTemplate(undefined);
      setIsLoading(false);
    }
  }, [templateId]);
  const [template, setTemplate] = useState<TemplateData>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [images, setImages] = useState<string[]>([]);
  console.log(templateId);
  if (isLoading) return <TemplateLoading />;
  if (!template) return <NotFound />;
  console.log(images);
  return (
    <div className="mt-10 sm:mt-0">
      <main
        className={`flex-1 ${!pathname.includes("dashboard") ? "py-12 md:py-24 lg:py-32" : "py-10"} z-20`}
      >
        <div
          className={`container mx-auto  md:px-6 ${!pathname.includes("dashboard") ? "px-4" : "px-0"}`}
        >
          <div className="flex flex-col gap-8 lg:grid-rows-2 ">
            <div className="min-h-full sm:min-h-[70dvh] relative  flex w-full max-w-7xl mx-auto justify-center items-center overflow-hidden py-14 rounded-2xl">
              <div className="absolute inset-0 z-10 h-full w-full bg-black/50 "></div>

              <ThreeDMarquee
                key={`marquee-${templateId}-${images.length}`}
                className="pointer-events-none absolute inset-0 h-full w-full  opacity-40 "
                images={images}
              />

              <div className="space-y-6 flex justify-center  flex-col items-center z-50">
                <h1 className="text-3xl text-center font-bold tracking-tight sm:text-5xl md:text-6xl">
                  {template?.title}
                </h1>
                <AnimatedShinyText className="text-sm max-w-xl text-center  lg:text-xl">
                  {template?.description}
                </AnimatedShinyText>
                <div className="space-x-2 ">
                  <Link
                    href={`${config.renderer_endpoint}/${template.id}`}
                    target="_blank"
                  >
                    <Button
                      size={isMobile ? "sm" : "lg"}
                      variant={"outline"}
                      className="cursor-pointer"
                    >
                      Preview <Eye />
                    </Button>
                  </Link>
                  <Button
                    size={isMobile ? "sm" : "lg"}
                    variant={"outline"}
                    className="cursor-pointer"
                    onClick={() => {
                      pathname.includes("dashboard")
                        ? onSelect?.({
                            type: "Template",
                            data: { template: template.id },
                          })
                        : router.push("/dashboard");
                    }}
                  >
                    Use Template
                  </Button>
                </div>
                <div className="w-1/2 flex justify-center  h-2 mt-2">
                  <div className="flex justify-center items-center  h-1 flex-wrap relative w-2/5 sm:w-1/3 px-2">
                    {stack
                      .filter((tech) => hasIcon(tech))
                      .map((tech: string, techIndex: number) => {
                        const Icon = getIconComponent(tech);
                        return Icon ? (
                          <div
                            key={techIndex}
                            className=" rounded-full border p-0.5 bg-muted absolute"
                            style={{
                              left: techIndex * 20 + "%",
                              zIndex: techIndex,
                            }}
                          >
                            {Icon && <Icon className="size-6.5 rounded-full" />}
                          </div>
                        ) : null;
                      })}
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-7xl mt-10 sm:mt-20 xl:mt-50">
              <div className="flex flex-col h-full w-full gap-20">
                <div className="flex flex-col md:flex-row w-full h-full gap-8">
                  <div className=" w-full md:w-1/2 flex justify-center items-start flex-col">
                    <div className="lg:max-w-full xl:max-w-2/3 mx-auto lg:mx-0">
                      <h2 className="text-2xl text-center lg:text-left sm:text-3xl lg:text-4xl font-semibold w-full">
                        See It in Action 🚀
                      </h2>
                      <AnimatedShinyText className="text-xs lg:text-xl sm:text-sm max-w-full mx-0 text-center lg:text-left font-medium w-full block">
                        A quick tour of the template, live and fully deployed.
                      </AnimatedShinyText>
                    </div>
                  </div>
                  <div className="h-full md:w-1/2">
                    <Safari
                      className="h-full w-full"
                      videoSrc={template.video}
                    />
                  </div>
                </div>
                <div className="flex flex-col  md:flex-row-reverse w-full h-full gap-8">
                  <div className="w-full md:w-1/2 flex justify-center items-end flex-col">
                    <div className="lg:max-w-full xl:max-w-2/3 mx-auto lg:mx-0">
                      <h2 className="text-2xl text-center lg:text-right sm:text-3xl lg:text-4xl font-semibold w-full">
                        Stunning on Desktop
                      </h2>
                      <AnimatedShinyText className="text-xs lg:text-xl sm:text-sm max-w-full mx-0 text-center lg:text-right font-medium w-full block">
                        Dark or light mode - it's pixel-perfect either way.
                      </AnimatedShinyText>
                    </div>
                  </div>
                  <div className="h-full md:w-1/2 space-y-5">
                    <Carousel
                      plugins={[
                        Autoplay({
                          delay: 2000,
                          stopOnInteraction: false,
                          stopOnMouseEnter: false,
                        }),
                      ]}
                    >
                      <CarouselContent>
                        <CarouselItem>
                          <Safari
                            className="h-full w-full"
                            imageSrc={template.desktopPreview?.[0]}
                          />
                        </CarouselItem>
                        <CarouselItem>
                          <Safari
                            className="h-full w-full"
                            imageSrc={template.desktopPreview?.[1]}
                          />
                        </CarouselItem>
                      </CarouselContent>
                    </Carousel>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row w-full h-full gap-8">
                  <div className="w-full md:w-1/2 flex justify-center items-start flex-col">
                    <div className="lg:max-w-full xl:max-w-2/3 mx-auto lg:mx-0 ">
                      <h2 className="text-2xl text-center lg:text-left sm:text-3xl lg:text-4xl font-semibold w-full">
                        {" "}
                        Made for Your Pocket
                      </h2>
                      <AnimatedShinyText className="text-xs sm:text-sm lg:text-xl max-w-full mx-0 text-center lg:text-left font-medium w-full block">
                        Flawless, responsive design that looks great day or
                        night.
                      </AnimatedShinyText>
                    </div>
                  </div>
                  <div className="h-full md:w-1/2 flex gap-2">
                    {template.mobileDevice === "Iphone15Pro" &&
                      template.mobilePreview?.map((img, idx) => {
                        return (
                          <div key={idx} className="h-full w-1/2">
                            <Iphone15Pro className="h-full w-full" src={img} />
                          </div>
                        );
                      })}
                    {template.mobileDevice === "Android" &&
                      template.mobilePreview?.map((img, idx) => {
                        return (
                          <div key={idx} className="h-full w-1/2">
                            <Android className="h-full w-full" src={img} />
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function TemplateLoading() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <LoaderFive text="Loading Template . . ." />
    </div>
  );
}
const imagesDashboard = [
  "/assets/desktop-white.png",
  "/assets/desktop-black.png",
  "/assets/not-found.png",
  "/assets/banner.png",
  "/assets/home_page.png",

  "/assets/desktop-white.png",
  "/assets/desktop-black.png",
  "/assets/not-found.png",
  "/assets/banner.png",
  "/assets/home_page.png",

  "/assets/desktop-white.png",
  "/assets/desktop-black.png",
  "/assets/not-found.png",
  "/assets/banner.png",
  "/assets/home_page.png",

  "/assets/desktop-white.png",
  "/assets/desktop-black.png",
  "/assets/not-found.png",
  "/assets/banner.png",
  "/assets/home_page.png",

  "/assets/desktop-white.png",
  "/assets/desktop-black.png",
  "/assets/not-found.png",
  "/assets/banner.png",
  "/assets/home_page.png",

  "/assets/desktop-white.png",
  "/assets/desktop-black.png",
  "/assets/not-found.png",
  "/assets/banner.png",
  "/assets/home_page.png",
];
