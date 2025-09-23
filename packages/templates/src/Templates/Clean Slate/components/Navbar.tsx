"use client";

import { SocialLinks } from "@workspace/types";
import { getIconComponent } from "@workspace/ui/icons";
import { useState, useEffect } from "react";
import { ModeToggle } from "../../components/mode-toggle";
import {
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  Sheet,
  SheetTrigger,
} from "@workspace/ui/components/sheet";
import { Button } from "@workspace/ui/components/button";

export default function Navbar({
  activeSocialLinks,
}: {
  activeSocialLinks: SocialLinks;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* <style jsx global>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }
        
        .animate-slide-down {
          animation: slideDown 0.3s ease-out;
        }
      `}</style> */}

      {/* Desktop Header */}
      <header className="hidden sm:flex items-center justify-center fixed top-10 z-50 px-4 py-3 w-full">
        <div className="flex items-center px-4 py-3 rounded-2xl border border-accent-foreground/20 bg-background/80 backdrop-blur-lg text-foreground w-fit">
          <a
            className="hover:opacity-80 transition-opacity mx-auto flex items-center justify-center pl-2"
            aria-label="Home"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-house"
              aria-hidden="true"
            >
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
              <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            </svg>
          </a>
          <div className="w-px h-5 bg-zinc-200 mx-6"></div>
          <div className="space-x-8 flex items-center">
            {Array.from(Object.entries(activeSocialLinks)).map(
              ([name, link]) => {
                if (link.length == 0) return;
                const IconComponent = getIconComponent(name);
                return (
                  <a
                    key={Math.random()}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                    aria-label={link.name}
                  >
                    {IconComponent && (
                      <IconComponent className="flex-shrink-0 w-[23px] h-[23px]" />
                    )}
                  </a>
                );
              }
            )}
          </div>
          <div className="w-px h-5 bg-zinc-200 mx-6"></div>
          <ModeToggle />
        </div>
      </header>

      {/* Mobile Header */}
      <header className="sm:hidden w-full py-3 px-4 border-b border-muted sticky z-20 top-0 bg-background backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
        <Sheet>
          <div className="flex items-center justify-between w-full text-foreground">
            <div className="flex gap-2 justify-center items-center">
              <ModeToggle variant="outline" />
            </div>
            <SheetTrigger>
              <Button
                asChild={true}
                variant={"outline"}
                size={"icon"}
                className="p-2 hover:opacity-80 transition-opacity"
                aria-label="Toggle menu"
              >
                <div style={{ transform: "none" }}>
                  {isMenuOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-x size-6"
                      aria-hidden="true"
                    >
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-menu size-6"
                      aria-hidden="true"
                    >
                      <path d="M4 12h16"></path>
                      <path d="M4 18h16"></path>
                      <path d="M4 6h16"></path>
                    </svg>
                  )}
                </div>
              </Button>
            </SheetTrigger>
          </div>
          <SheetContent className="w-full h-full" side="top">
            <SheetHeader>
              <SheetTitle> Social Links</SheetTitle>
            </SheetHeader>
            <>
              <div className="flex-1 px-6 py-4">
                <div className="space-y-4">
                  {Object.entries(activeSocialLinks).map(([name, link]) => {
                    if (link.length == 0) return;
                    const IconComponent = getIconComponent(name);
                    return (
                      <a
                        key={Math.random()}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 text-foreground hover:opacity-80 transition-opacity py-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {IconComponent && <IconComponent className="w-6 h-6" />}
                        <span className="text-lg font-medium text-foreground">
                          {name.split("")[0]?.toUpperCase() +
                            name.slice(1, name.length)}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </>
            <SheetClose />
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
}
