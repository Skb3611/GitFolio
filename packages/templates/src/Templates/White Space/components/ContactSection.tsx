import { SocialLinks } from "@workspace/types";
import { getIconComponent } from "@workspace/ui/icons";
import React from "react";
import AnimatedSection from "../../components/AnimatedSection";

const ContactSection = ({ links }: { links: SocialLinks }) => {
  return (
    <AnimatedSection>
      <div id="contact" className="px-4 sm:px-8 md:px-14 my-20">
        <div className="grid text-wrap">
          <h1 className="text-black font-bold text-3xl">Get in touch</h1>

          <p className="prose mt-2 text-gray-600">
            Whether it&apos;s a freelance gig, a collaboration, or a full-time
            opportunity, or want to say hi? I&apos;m always excited to connect
            with people who love building meaningful things. Drop a message, and
            I&apos;ll get back to you as soon as I can!
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 my-10">
          {Object.entries(links).map(([key, value]) => {
            if (value === "" || value.length <= 0) return null;
            const IconComponent = getIconComponent(key);
            console.log(value);
            return (
              <a
                key={key}
                href={value}
                target={value != "#" || value.length > 1 ? "_blank" : "_self"}
              >
                <div className="flex flex-1 md:gap-2 p-1 rounded-xl border hover:bg-muted transition-colors duration-200 items-center cursor-pointer">
                  <div className={`p-3  rounded-lg w-fit`}>
                    {IconComponent && <IconComponent className="size-7" />}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-lg font-medium">
                      {key[0]?.toUpperCase() + key.slice(1)}
                    </h4>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
