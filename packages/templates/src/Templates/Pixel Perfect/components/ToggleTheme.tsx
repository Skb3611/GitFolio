"use client";

import { MoonStarIcon, SunIcon } from "@workspace/ui/icons";
import { useTheme } from "next-themes";
import React, { useCallback } from "react";

import { Button } from "@workspace/ui/components/button";

export function ToggleTheme() {
  const { resolvedTheme, setTheme } = useTheme();

  const switchTheme = useCallback(() => {
    soundManager.playClick();
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
 
  }, [resolvedTheme, setTheme]);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        if (!document.startViewTransition) switchTheme();
        document.startViewTransition(switchTheme);
      }}
    >
      <MoonStarIcon className="hidden [html.dark_&]:block" />
      <SunIcon className="hidden [html.light_&]:block" />
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
}

class SoundManager {
  private audioCache: Map<string, HTMLAudioElement> = new Map();

  playAudio(url: string) {
    if (typeof window === "undefined") return;

    let audio = this.audioCache.get(url);

    if (!audio) {
      audio = new Audio(url);
      audio.preload = "auto";
      this.audioCache.set(url, audio);
    }

    audio.currentTime = 0;
    audio.play().catch((err) => {
      console.warn(`Audio play failed for ${url}:`, err);
    });
  }

  playClick() {
    this.playAudio(
      "https://assets.chanhdai.com/audio/ui-sounds/click.wav" // Source: iOS UI Sounds
    );
  }
}

const soundManager = new SoundManager();

export default soundManager;
