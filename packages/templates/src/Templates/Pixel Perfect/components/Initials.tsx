import { cn } from "@workspace/ui/lib/utils";
type Size = "sm" | "md" | "xl";
export default function Initial({ size, name }: { size: Size; name: string }) {
  const getFontSize = (size: Size) => {
    switch (size) {
      case "sm":
        return "text-5xl";
      case "md":
        return "text-8xl";
      case "xl":
        return "text-[9rem]";
    }
  };

  return (
    <>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Bytesized&family=Geist:wght@100..900&display=swap');`}
      </style>
      <span
        className={cn("bytesized-regular overflow-hidden", getFontSize(size))}
        style={{ fontFamily: "'Bytesized', 'Geist', sans-serif" }}
      >
        {name
          .split(" ")
          .map((word) => word[0])
          .join("")
          .toUpperCase()}
      </span>
    </>
  );
}
