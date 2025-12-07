"use client";
import { useTheme } from "next-themes";

export default function DebugTheme() {
  const t = useTheme();
  return <pre>{JSON.stringify(t, null, 2)}</pre>;
}
