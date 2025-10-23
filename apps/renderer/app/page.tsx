import { Metadata } from "next";
import Gallery from "./components/Gallery";
import { Notion_Theme } from "@workspace/templates";

export default function Page() {
  return (
    // <Gallery/>
    <Notion_Theme/>
  );
}

export const metadata: Metadata = {
  title:
    "Gitfolio Templates - Collection of Handly Crafted Templates from GitFolio. ",
  description:
    "Browse a collection of modern, responsive templates tailored for developers. Designs Made for Developers ✨.",
  keywords: ["GitHub", "Portfolio", "Resume", "Gitfolio"],
  openGraph: {
    title:
      "Gitfolio Templates - Collection of Handly Crafted Templates from GitFolio. ",
    description:
      "Browse a collection of modern, responsive templates tailored for developers. Designs Made for Developers ✨.",
    url: "https://potfolio.gitfolio.in",
    siteName: "GitFolio Templates",
    images: [
      {
        url: "/imgs/og.png",
        width: 1200,
        height: 630,
        alt: "GitFolio Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Gitfolio Templates - Collection of Handly Crafted Templates from GitFolio. .",
    description:
      "Browse a collection of modern, responsive templates tailored for developers. Designs Made for Developers ✨.",
    images: ["/imgs/og.png"],
  },
  metadataBase: new URL("https://portfolio.gitfolio.in"),
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
