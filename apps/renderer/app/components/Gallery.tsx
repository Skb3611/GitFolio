"use client"
import React from "react";
import { Code, Gem, Gift, MoveRight } from "@workspace/ui/icons";
import { SITE_URL } from "../config";
import { Data as Templates } from "@workspace/templates/metadata";
import { Particles } from "@workspace/ui/components/magicui/particles";
import Link from "next/link";
import { Card } from "@/app/components/TemplateCard";
import { useTheme } from "next-themes";

const Gallery = () => {
  const { setTheme } = useTheme();
  React.useEffect(() => setTheme("dark"), []);
  return (
    <section
      id="gallery"
      className="py-24 px-4 relative w-full min-h-screen overflow-hidden"
    >
      <Link href={SITE_URL}>
        <div className="absolute top-5 left-5 sm:top-8 sm:left-8 z-50 flex items-center space-x-3 cursor-pointer">
          <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-md sm:rounded-xl bg-white flex items-center justify-center">
            <Code className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
          </div>
          <span className="text-2xl sm:text-3xl flex items-center justify-center gap-3 text-white bg-clip-text">
            GitFolio
          </span>
        </div>
      </Link>
      <Particles className="absolute h-full w-full opacity-70" />
      <div className="container mx-auto z-50">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-balance mb-6">
            GitFolio <span className="text-primary">Templates</span>
          </h2>

          <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Browse a collection of modern, responsive templates tailored for
            developers. Designs Made for Developers ✨
          </p>
        </div>

        {/* Category Filter */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-6">
          {Templates.map((item, idx) => {
            return <Card key={idx} template={item} idx={idx} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
