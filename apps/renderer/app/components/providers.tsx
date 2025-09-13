"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
export function Providers({ children }: { children: React.ReactNode }) {
     const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      {children}
    </NextThemesProvider>
  )
}
