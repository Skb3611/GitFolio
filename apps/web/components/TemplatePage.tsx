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
import { motion } from "motion/react";
import { useAuth, useUser } from "@clerk/nextjs";
import { toast } from "@workspace/ui/components/sonner";
import { useUserLocation } from "@/hooks/getUserLocation";
import { checkOut, createOrder, verifyPayment } from "@/lib/payments";
import Script from "next/script";
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
  const { user } = useUser();
  const { getToken, isSignedIn } = useAuth();
  const [isPurchased, setIsPurchased] = useState<boolean>(false);
  const { country } = useUserLocation();
  useEffect(() => {
    const template = TemplateMetaData.find(
      (template) => template.id === decodeURIComponent(templateId)
    );
    if (template) {
      let desktopPreview: string[] = [];
      let mobilePreview: string[] = [];
      console.log(template.theme);
      if (template.theme == "both") {
        desktopPreview.push(
          `${BASE_URL}/${templateId}/preview/desktop-dark.png`,
          `${BASE_URL}/${templateId}/preview/desktop-light.png`
        );
        mobilePreview.push(
          `${BASE_URL}/${templateId}/preview/mobile-dark.png`,
          `${BASE_URL}/${templateId}/preview/mobile-light.png`
        );
      } else if (template.theme == "dark") {
        console.log("in dark");
        desktopPreview.push(
          `${BASE_URL}/${templateId}/preview/desktop-dark.png`
        );
        mobilePreview.push(`${BASE_URL}/${templateId}/preview/mobile-dark.png`);
      } else if (template.theme == "light") {
        console.log("in light");
        desktopPreview.push(
          `${BASE_URL}/${templateId}/preview/desktop-light.png`
        );
        mobilePreview.push(
          `${BASE_URL}/${templateId}/preview/mobile-light.png`
        );
      }

      setTemplate({
        ...template,
        desktopPreview,
        mobilePreview,
      });
      const baseImages = [...desktopPreview, "/assets/og.png"];
      console.log(baseImages);
      setImages(
        Array(template.theme == "both" ? 10 : 20)
          .fill(baseImages)
          .flat()
      );
      if (user?.publicMetadata.purchasedTemplates) {
        (user?.publicMetadata.purchasedTemplates as string[]).map(
          (templateName: string) => {
            templateName == templateId ? setIsPurchased(true) : null;
          }
        );
      }
      setIsLoading(false);
    } else {
      setTemplate(undefined);
      setIsLoading(false);
    }
  }, [templateId, user]);
  const [template, setTemplate] = useState<TemplateData>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [images, setImages] = useState<string[]>([]);
  const handleClick = async (id: string) => {
    if (!isSignedIn) {
      toast.info("Sign in to purchase template");
      router.push("/sign-up");
      return;
    } else if (isSignedIn && !isPurchased && template?.category != "FREE") {
      let token = await getToken();
      if (!token) return;
      const order = await createOrder(token, {
        templateName: id,
        currency: country == "IN" ? "INR" : "USD",
      });
      console.log(order);
      if (order) {
        token = await getToken();
        const response = await checkOut(
          order?.order_id,
          template?.title || id,
          template?.description || "",
          token!
        );
      }
    } else
      pathname.includes("dashboard")
        ? onSelect?.({
            type: "Template",
            data: { activeTemplateId: id },
          })
        : router.push("/dashboard");
  };

  if (isLoading) return <TemplateLoading />;
  if (!template) return <NotFound />;
  return (
    <div className="mt-10 sm:mt-0 overflow-hidden">
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      <main
        className={`flex-1 ${!pathname.includes("dashboard") ? "py-12 md:py-24 lg:py-32" : "py-10"} z-20`}
      >
        <div
          className={`container mx-auto  md:px-6 ${!pathname.includes("dashboard") ? "px-4" : "px-0"}`}
        >
          <div className="flex flex-col gap-8 lg:grid-rows-2 ">
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="min-h-full sm:min-h-[70dvh] relative  flex w-full max-w-7xl mx-auto justify-center items-center overflow-hidden py-14 rounded-2xl"
            >
              <div className="absolute inset-0 z-10 h-full w-full bg-black/60 "></div>

              <ThreeDMarquee
                key={`marquee-${templateId}-${images.length}`}
                className="pointer-events-none absolute inset-0 h-full w-full  opacity-50 "
                images={images}
              />

              <div className="space-y-6 flex justify-center  flex-col items-center z-50">
                <h1 className="text-3xl text-center font-bold tracking-tight sm:text-5xl md:text-6xl">
                  {template?.title}
                </h1>
                <AnimatedShinyText className="text-sm max-w-xl text-center  lg:text-xl">
                  {template?.description}
                </AnimatedShinyText>
                {/* <span className="text-sm max-w-xl text-white text-center line-through  lg:text-2xl ">
                  $ {template?.pricing.toString()}
                </span> */}
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
                    className="cursor-pointer bg-white text-black hover:bg-white/80 hover:text-black"
                    onClick={() => handleClick(template.id)}
                  >
                    {" "}
                    {isPurchased || template.category == "FREE" ? (
                      "Use Template"
                    ) : (
                      <>
                        {" "}
                        Buy Template{" "}
                        <span className="font-bold">
                          {country !== "IN" ? "$ " : "₹ "}
                          {country !== "IN"
                            ? template.USDpricing
                            : template.INRpricing}
                        </span>
                      </>
                    )}
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
            </motion.div>
            <div className="mx-auto max-w-7xl mt-10 sm:mt-20 xl:mt-50">
              <div className="flex flex-col h-full w-full gap-20">
                <div className="flex flex-col md:flex-row w-full h-full gap-8">
                  <motion.div
                    variants={girdVariants.fromLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: 0.3,
                    }}
                    className=" w-full md:w-1/2 flex justify-center items-start flex-col"
                  >
                    <div className="lg:max-w-full xl:max-w-[80%] mx-auto lg:mx-0">
                      <h2 className="text-2xl text-center lg:text-left sm:text-3xl lg:text-4xl font-semibold w-full">
                        ✨ Experience It in Motion
                      </h2>
                      <AnimatedShinyText className="text-xs lg:text-xl sm:text-sm max-w-full mx-0 text-center lg:text-left font-medium w-full block">
                        See the template in action — smooth transitions,
                        engaging animations, and the complete user journey
                        brought to life
                      </AnimatedShinyText>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={girdVariants.fromRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: 0.3,
                    }}
                    className="h-full md:w-1/2"
                  >
                    <Safari
                      className="h-full w-full"
                      videoSrc={template.video}
                    />
                  </motion.div>
                </div>
                <div className="flex flex-col  md:flex-row-reverse w-full h-full gap-8">
                  <motion.div
                    variants={girdVariants.fromRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: 0.3,
                    }}
                    className="w-full md:w-1/2 flex justify-center items-end flex-col"
                  >
                    <div className="lg:max-w-full xl:max-w-[75%]  mx-auto lg:mx-0">
                      <h2 className="text-2xl text-center lg:text-right sm:text-3xl lg:text-4xl font-semibold w-full">
                        🥱 Stunning on Desktop
                      </h2>
                      <AnimatedShinyText className="text-xs lg:text-xl sm:text-sm max-w-full mx-0 text-center lg:text-justify tracking-tight font-medium block ">
                        Explore the template in its full-sized glory, optimized
                        for clarity, detail, and a professional desktop browsing
                        experience.
                      </AnimatedShinyText>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={girdVariants.fromLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: 0.3,
                    }}
                    className="h-full md:w-1/2 space-y-5"
                  >
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
                        {template?.desktopPreview?.map(
                          (img: string, idx: number) => {
                            return (
                              <CarouselItem key={idx}>
                                <Safari
                                  className="h-full w-full"
                                  imageSrc={img}
                                />
                              </CarouselItem>
                            );
                          }
                        )}
                      </CarouselContent>
                    </Carousel>
                  </motion.div>
                </div>
                <div className="flex flex-col md:flex-row w-full h-full gap-8">
                  <motion.div
                    variants={girdVariants.fromLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: 0.3,
                    }}
                    className="w-full md:w-1/2 flex justify-center items-start flex-col"
                  >
                    <div className="lg:max-w-full xl:max-w-[80%] mx-auto lg:mx-0 ">
                      <h2 className="text-2xl text-center lg:text-left sm:text-3xl lg:text-4xl font-semibold w-full">
                        {" "}
                        🫣 Pocket-Perfect Design
                      </h2>
                      <AnimatedShinyText className="text-xs sm:text-sm lg:text-xl max-w-full mx-0 text-center lg:text-left font-medium w-full block">
                        Preview how the template adapts seamlessly to mobile,
                        ensuring effortless navigation and stunning visuals on
                        the go.
                      </AnimatedShinyText>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={girdVariants.fromRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: 0.3,
                    }}
                    className="h-full md:w-1/2 flex justify-center gap-2"
                  >
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
                  </motion.div>
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
const girdVariants = {
  fromLeft: {
    hidden: {
      x: -100,
      opacity: 0,
      filter: "blur(10px)",
    },
    visible: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
  },
  fromRight: {
    hidden: {
      x: 100,
      opacity: 0,
      filter: "blur(10px)",
    },
    visible: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
  },
};
