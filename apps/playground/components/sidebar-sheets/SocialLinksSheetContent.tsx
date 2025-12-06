import { DATA, SocialLinks } from "@workspace/types";
import { Input } from "@workspace/ui/components/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@workspace/ui/components/input-group";
import { Label } from "@workspace/ui/components/label";
import { getIconComponent } from "@workspace/ui/icons";
import { Dispatch, SetStateAction } from "react";

const SocialLinksSheetContent = ({
  links,
  setUser,
}: {
  links: SocialLinks;
  setUser: Dispatch<SetStateAction<DATA>>;
}) => {
  const handleChange = (key: keyof SocialLinks, value: string) => {
    setUser((prevUser) => {
      if (!prevUser) return prevUser;
      return {
        ...prevUser,
        socialLinks: {
          ...prevUser.socialLinks,
          [key]: value,
        },
      };
    });
  };
  return (
    <section className="space-y-3">
      {Object?.entries(links).map(([key, value]) => {
        const Icon = getIconComponent(key);

        return (
          <div className="grid w-full max-w-sm items-center gap-2" key={key}>
            <Label>{key.charAt(0).toUpperCase() + key.slice(1)}</Label>
            <InputGroup>
              {Icon && (
                <InputGroupAddon>
                  <InputGroupButton size={"icon-xs"} variant={"secondary"}>
                    <Icon className="size-4" />
                  </InputGroupButton>
                </InputGroupAddon>
              )}
              <InputGroupAddon>
                <InputGroupText>https:// </InputGroupText>
              </InputGroupAddon>
              <InputGroupInput
                placeholder={`Your ${key.charAt(0).toUpperCase() + key.slice(1)} link here`}
                value={value.replace("https://", "")}
                className="pl-1!"
                onChange={(e) =>
                  handleChange(key as keyof SocialLinks, e.target.value)
                }
                pattern="https://.*"
              />
            </InputGroup>
          </div>
        );
      })}
    </section>
  );
};

export default SocialLinksSheetContent;
