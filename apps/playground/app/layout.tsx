import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "@workspace/ui/globals.css";
import { Analytics } from "@vercel/analytics/next"

const manRope = Manrope({
  display: "swap",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GitFolio Playround ",
  description: "Explore the premium features of GitFolio.in",
  openGraph: {
    title: "GitFolio Playround ",
    description: "Explore the premium features of GitFolio.in",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "GitFolio Playround ",
    description: "Explore the premium features of GitFolio.in",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`  ${manRope.className} antialiased dark overflow-x-hidden max-w-screen h-full`}
      >
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
