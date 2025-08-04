import { Data as Templates } from "@workspace/templates/metadata";
import { TemplateData } from "@workspace/types";
import { NotFound } from "@workspace/ui/components/ui/not-found";
import { Metadata } from "next";
import { SITE_URL } from "../config";
export default async function Page({
  params,
}: {
  params: Promise<{ template: string }>;
}) {
  const id = decodeURIComponent((await params).template);
  const template = Templates.filter((temp: TemplateData) => temp.id == id);
  const Component = template[0]?.component;
  return Component ? <Component /> : <NotFound />;
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ template: string }>;
}): Promise<Metadata> {
  const id = decodeURIComponent((await params).template);
  const template = Templates.filter((temp: TemplateData) => temp.id == id);
  return {
    title: template[0]?.title,
    description: template[0]?.description,
    icons: {
      icon: `${SITE_URL}/favicon.ico`,
    },
    openGraph: {
      title: `${template[0]?.title} - GitFolio`,
      description: template[0]?.description,
      images: [
        {
          url: template[0]?.thumbnail || `${SITE_URL}/assets/banner-card.png`,
          width: 1200,
          height: 630,
          alt: "Template Thumbnail",
        },
      ],
      url: `${SITE_URL}/${template}/`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${template[0]?.title} - GitFolio`,
      images: [
        {
          url: template[0]?.thumbnail || `${SITE_URL}/assets/banner-card.png`,
          alt: "Template Thumbnail",
        },
      ], // ✅ twitter:image
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
