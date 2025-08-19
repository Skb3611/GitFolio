import { Geist, Geist_Mono } from "next/font/google";
import "@workspace/ui/globals.css";
import { Providers } from "./components/providers";
import { Analytics } from "@vercel/analytics/next";
import Maintenance from "@workspace/ui/components/ui/Maintenance";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-domain="gitfolio-template.vercel.app"
          src="https://plausible.io/js/script.js"
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
          {/* <Maintenance/> */}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
