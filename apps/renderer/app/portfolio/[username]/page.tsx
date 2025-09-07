import Renderer from "@/app/components/Renderer";
import { USERDATA_ENDPOINT, BASE_URL, SITE_URL } from "@/app/config";
import { Metadata } from "next";
export default async function Page({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  return <Renderer username={username} />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ username: string; template: string }>;
}): Promise<Metadata | null> {
  const { username } = await params;
  try {
    const res = await fetch(`${USERDATA_ENDPOINT}/${username}`);
    const result = await res.json();
    if (!result.status) return null;
    const encodedName = encodeURIComponent(
      result.data.firstname || result.data.username || ""
    );
    const encodedImg = result.data.profileImg
      ? encodeURIComponent(result.data.profileImg)
      : "";
    const ogImageUrl = `${BASE_URL}/api/og?name=${encodedName}${encodedImg ? `&img=${encodedImg}` : ""}`;
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
        images: [
          {
            url: ogImageUrl,
            width: 1200,
            height: 630,
            alt: `${result.data.firstname}'s Portfolio`,
            type: "image/png",
          },
        ], // ✅ og:image
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: `${result.data.firstname}'s GitFolio`,
        description:
          result.data.bio ||
          result.data.tagline ||
          `See ${result.data.firstname}'s work on GitFolio`,
        images: [
          {
            url: ogImageUrl,
            width: 1200,
            height: 630,
            alt: `${result.data.firstname}'s Portfolio`,
          },
        ], // ✅ og:image
      },
      other: {
        "og:image:width": "1200",
        "og:image:height": "630",
        "og:image:type": "image/png",
        "twitter:image:src": ogImageUrl,
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
  } catch (e) {
    console.error("Error generating metadata:", e);
    return {
      title: `${username}'s Portfolio - GitFolio`,
      description: `A portfolio of ${username}'s projects on GitHub`,
      openGraph: {
        title: `${username}'s GitFolio`,
        description: `See ${username}'s work on GitFolio`,
        images: [
          {
            url: `${BASE_URL}/api/og?name=${encodeURIComponent(username)}`,
            width: 1200,
            height: 630,
          },
        ],
        type: "website",
      },
    };
  }
}
