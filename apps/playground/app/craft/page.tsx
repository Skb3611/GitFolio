"use client";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
} from "@workspace/ui/components/sidebar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@workspace/ui/components/sheet";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Button } from "@workspace/ui/components/button";
import { SiteHeader } from "@/components/sidebar-header";
import { X } from "@workspace/ui/icons";
import { Onboarding } from "../../components/Onboarding";
import TemplateSelect from "@/components/TemplateSelect";
import TemplatePreview from "@/components/TemplatePreview";
import { DATA as USER_DETAILS } from "@workspace/types";
export default function Page() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [state, setState] = useState<State>("onboarding");
  const [slug, setSlug] = useState<string>("");
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const [user, setUser] = useState<USER_DETAILS|null>();
  useEffect(() => {
    const tempId = localStorage.getItem("selectedTemplateId");
    const user = localStorage.getItem("user");
    if (user && tempId) {
      setSelectedTemplateId(tempId);
      setUser(JSON.parse(user));
      setState("craft");
    } else if (user) {
      setUser(JSON.parse(user));
      setState("template-select");
    } else {
      setState("onboarding");
    }
  }, []);

  useEffect(() => {
    const state = searchParams.get("state");
    if (state && state == "onboarding") {
      setState("onboarding");
      router.replace("/craft", { scroll: false });
      localStorage.clear();
      setUser(null);
    }
    setSlug(searchParams.get("edit") || "");
  }, [searchParams]);
  useEffect(() => {
    if (selectedTemplateId != "") {
      setState("craft");
    }
  }, [selectedTemplateId]);
  useEffect(() => {
    if (slug != "" && slug != "templates") {
      setIsOpen(true);
    } else if (slug == "templates") {
      localStorage.removeItem("selectedTemplateId");
      setIsOpen(false);
      setSelectedTemplateId("");
      setState("template-select");
      setSlug("");
      router.replace("craft", { scroll: false });
    }
  }, [slug]);
  const closeSheet = () => {
    console.log("close sheet");
    router.replace("craft", { scroll: false });
    setSlug("");
  };
  const renderComp = (state: State) => {
    switch (state) {
      case "onboarding":
        return <Onboarding setState={setState} setUser={setUser} user={user} />;
      case "template-select":
        return <TemplateSelect setSelectedTemplateId={setSelectedTemplateId} />;
      case "craft":
        return <TemplatePreview id={selectedTemplateId} />;
    }
  };

  const returnText = (state: State) => {
    switch (state) {
      case "onboarding":
        return "Onboarding Process";
      case "template-select":
        return "Select a Template";
      case "craft":
        return "Craft your Portfolio";
    }
  };

  return (
    <SidebarProvider>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent>
          <SheetClose asChild>
            <button
              className=" cursor-pointer absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none z-50"
              onClick={closeSheet}
            >
              <X className="h-4 w-4" />
            </button>
          </SheetClose>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <Button
              type="submit"
              className="bg-white/90 hover:bg-white/70  text-black font-semibold cursor-pointer"
            >
              Save changes
            </Button>
            <SheetClose asChild>
              <Button variant="outline" onClick={closeSheet}>
                Close
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <AppSidebar
        state={state}
        userDetails={{
          username: user?.personalInfo.username,
          name: user?.personalInfo.full_name,
          email: user?.personalInfo.email,
          avatar: user?.personalInfo.profileImg,
        }}
      />
      <SidebarInset className="relative">
        <SiteHeader text={returnText(state)} />
        {renderComp(state)}
      </SidebarInset>
    </SidebarProvider>
  );
}
