"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ClerkProvider } from "@clerk/nextjs"
import {dark} from "@clerk/themes"
import {Toaster} from "@workspace/ui/components/sonner"
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: dark,
    }}
    >
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      <Toaster richColors
      invert
      duration={2500}
      // offset={{right:50}}
      />
      {children}
    </NextThemesProvider>
    </ClerkProvider>
  )
}
