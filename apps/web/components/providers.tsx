"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ClerkProvider } from "@clerk/nextjs"
import {dark,experimental__simple,experimental_createTheme,neobrutalism,shadesOfPurple} from "@clerk/themes"
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
      {children}
    </NextThemesProvider>
    </ClerkProvider>
  )
}
