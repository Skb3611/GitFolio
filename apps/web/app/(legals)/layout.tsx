import BackHomeButton from "@/components/BackHomeButton";
import Footer from "@/components/Footer/Footer";
import { Particles } from "@workspace/ui/components/magicui/particles";
import React from "react";

export default async function LegalsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full">
      <BackHomeButton  />
      <Particles size={0.2} quantity={50} className="absolute h-full w-full" />
      {children}
      <Footer />
    </div>
  );
}
