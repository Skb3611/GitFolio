"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "@workspace/ui/components/sonner";
import { config } from "@/config";
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        layout: {
          animations: true,
          privacyPageUrl: `https://gitfolio.in/privacy-policy`,
          shimmer: true,
          termsPageUrl: "https://gitfolio.in/terms-of-service",
          socialButtonsPlacement: "bottom",
        },
      }}
    >
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
        enableColorScheme
      >
        <Toaster richColors invert duration={2500} />
        {children}
      </NextThemesProvider>
    </ClerkProvider>
  );
}
