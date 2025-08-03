import Renderer from "@/app/components/Renderer";
import { Metadata, ResolvingMetadata } from "next";
import { SITE_URL, USERDATA_ENDPOINT } from "@/app/config";
export default async function Page({
  params,
}: {
  params: Promise<{ template: string; username: string }>;
}) {
  const { template, username } = await params;
  return <Renderer template={template} username={username} />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ username: string; template: string }>;
}): Promise<Metadata> {
  const { username } =await params;

  const res = await fetch(`${USERDATA_ENDPOINT}/${username}`);
  const result = await res.json();
  return {
    title: `${result.data.firstname}'s Portfolio - GitFolio`,
    description:
      result.data.bio ||
      result.data.tagline ||
      `A portfolio of ${result.data.name}'s projects on GitHub`,
    keywords: result.data.topics?.join(",") || "",
    creator: "GitFolio",
    icons: {
      icon: result.data.profileImg || `${SITE_URL}/favicon.ico`,
    },
        openGraph: {
      title: `${result.data.firstname}'s GitFolio`,
      description:
        result.data.bio ||
        result.data.tagline ||
        `See ${result.data.firstname}'s work on GitFolio`,
      images: [result.data.profileImg || `${SITE_URL}/assets/banner-card.png`], // ✅ og:image
      // url: `${SITE_URL}/${params.template}/${params.username}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${result.data.firstname}'s GitFolio`,
      images: [result.data.profileImg], // ✅ twitter:image
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
