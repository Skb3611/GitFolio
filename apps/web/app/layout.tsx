import { DM_Sans } from "next/font/google";
import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { auth } from "@clerk/nextjs/server";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Gitfolio - From GitHub to Greatness.",
  description: "Turn Your GitHub Into a Personal Portfolio in Seconds.",
  keywords:["GitHub", "Portfolio", "Resume"],
  openGraph: {
    title: "GitFolio - From GitHub to Greatness.",
    description: "Turn Your GitHub Into a Personal Portfolio in Seconds",
    url: "https://gitfolio-dev.vercel.app",
    siteName: "GitFolio",
    images: [
      {
        url: "/assets/banner-card.png",
        width: 1200,
        height: 630,
        alt: "GitFolio Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GitFolio - From GitHub to Greatness.",
    description: "Turn Your GitHub Into a Personal Portfolio in Seconds",
    images: ["/assets/banner-card.png"],
  },
  metadataBase: new URL("https://gitfolio-dev.vercel.app"),
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
import Maintainance from "@workspace/ui/components/ui/Maintenance"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <script defer data-domain="gitfolio-dev.vercel.app" src="https://plausible.io/js/script.js"></script>
      </head>
      <body className={`${dmSans.variable} font-sans antialiased `}>
        <Providers>
          {children}
        {/* <Maintainance/> */}
          <Analytics/>
        </Providers>
      </body>
    </html>
  );
}
