import { DM_Sans } from "next/font/google";
import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";
import { Metadata } from "next";
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Gitfolio - From GitHub to Greatness.",
  description: "Turn Your GitHub Into a Personal Portfolio in Seconds.",
  openGraph: {
    title: "GitFolio - From GitHub to Greatness.",
    description: "Turn Your GitHub Into a Personal Portfolio in Seconds",
    url: "https://gitfolio-dev.vercel.app",
    siteName: "GitFolio",
    images: [
      {
        url: "/assets/banner.png",
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
    images: ["/assets/banner.png"],
  },
  metadataBase: new URL("https://gitfolio-dev.vercel.app")
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} font-sans antialiased `}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
