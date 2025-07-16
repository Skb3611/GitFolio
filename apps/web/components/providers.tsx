"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ClerkProvider } from "@clerk/nextjs"
import {dark} from "@clerk/themes"
import {Toaster} from "@workspace/ui/components/sonner"
import { useIsMobile } from "@/hooks/use-mobile"
export function Providers({ children }: { children: React.ReactNode }) {
  const isMobile=useIsMobile()
  return (
    <ClerkProvider
    appearance={{
      baseTheme: dark,
    }}
    >
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      <Toaster richColors
      invert
      duration={2500}
      // offset={{right:50}}
      position={isMobile?"top-center":"bottom-right"}
      />
      {children}
    </NextThemesProvider>
    </ClerkProvider>
  )
}
