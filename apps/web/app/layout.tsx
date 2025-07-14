import { DM_Sans } from "next/font/google"
import "@workspace/ui/globals.css"
import { Providers } from "@/components/providers"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer/Footer"
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Gitfolio",
  description: "Turn Your GitHub Into a Personal Portfolio in Seconds.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} font-sans antialiased `}
      >
        <Providers>
          {children}
          </Providers>
      </body>
    </html>
  )
}
