import { Button } from "@workspace/ui/components/button";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { BorderBeam } from "@workspace/ui/components/magicui/border-beam";
import { OrbitingCircles } from "@workspace/ui/components/magicui/orbiting-circles";
import { ShineBorder } from "@workspace/ui/components/magicui/shine-border";
import { Linkedin, X } from "lucide-react";
import Image from "next/image";
import React from "react";
import { MagicCard } from "@workspace/ui/components/magicui/magic-card";
const ContactSection = () => {
  return (
    <div
      id="contact"
      className="w-full lg:max-w-7xl mx-auto my-20 p-4 sm:p-8 overflow-hidden"
    >
      <h2 className="text-3xl md:text-6xl font-semibold w-full mb-2 text-center">
        We're Just a Message Away
      </h2>
      <AnimatedShinyText className="w-full mx-auto">
        <p className="text-center md:max-w-xl mx-auto text-sm sm:text-lg">
          Whether it's feedback, a feature request, or a quick hello — find us
          on LinkedIn or X.
        </p>
      </AnimatedShinyText>
      <div className="w-full lg:max-w-3xl mx-auto my-10 flex flex-col  sm:flex-row gap-10 justify-center items-center">
        <div className="relative h-full lg:w-1/2 rounded-xl w-full">
          <BorderBeam size={200} initialOffset={0} />
          <BorderBeam size={200} initialOffset={50} />
          <div className="relative flex flex-col space-y-3 items-center border p-4 sm:p-8 rounded-xl">
            <div className="size-20 bg-blue-500 rounded-2xl flex justify-center items-center">
              <Linkedin className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-2xl font-medium">Linkedin</h3>
            <AnimatedShinyText className="text-center">
              Connect with us professionally.
            </AnimatedShinyText>
            <Button variant={"outline"} size={"lg"}>
              Connect on LinkedIn
            </Button>
          </div>
        </div>
        <div className="relative h-full lg:w-1/2 rounded-xl w-full">
          <BorderBeam size={200} initialOffset={0} />
          <BorderBeam size={200} initialOffset={50} />
          <div className="relative flex flex-col space-y-3 items-center  p-4 sm:p-8 border rounded-xl">
            <div className="size-20 bg-white rounded-2xl flex justify-center items-center relative">
              <Image src={"/icons/x.png"} alt={"x"} fill />
            </div>
            <h3 className="text-2xl font-medium">X (Twitter)</h3>
            <AnimatedShinyText className="text-center">
              Follow for real-time updates
            </AnimatedShinyText>
            <Button variant={"outline"} size={"lg"}>
              Follow Us on X
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
