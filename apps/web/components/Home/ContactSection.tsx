import { Button } from "@workspace/ui/components/button";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { BorderBeam } from "@workspace/ui/components/magicui/border-beam";
import { OrbitingCircles } from "@workspace/ui/components/magicui/orbiting-circles";
import { ShineBorder } from "@workspace/ui/components/magicui/shine-border";
import { Linkedin, MessageCircle, Twitter, Users, X } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Card, CardContent, CardHeader } from "@workspace/ui/components/card";
import SectionLabel from "../SectionLabel";
import Link from "next/link";
import { config } from "@/config";
const ContactSection = () => {
  return (
    <div
      id="contact"
      className="w-full lg:max-w-6xl mx-auto my-20 p-4 sm:p-8 overflow-hidden"
    >
      <SectionLabel title="✨ Let's Connect"/>

      <h2 className="text-3xl md:text-6xl font-semibold w-full mb-2 text-center">
        We're Just a Message Away
      </h2>
      <AnimatedShinyText className="w-full mx-auto">
        <p className="text-center md:max-w-xl mx-auto text-sm sm:text-lg">
          Whether it's feedback, a feature request, or a quick hello — find us
          on LinkedIn or X.
        </p>
      </AnimatedShinyText>
       <div className="grid md:grid-cols-2 gap-6 my-10">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto relative">
                {/* <Twitter className="h-8 w-8 text-white" /> */}
                <Image src={"/icons/x.png"} fill alt="X" className="rounded-full"/>
              </div>
              <h3 className="text-xl font-semibold">Follow us on X</h3>
              <p className="text-muted-foreground">
                Get the latest updates, insights, and join conversations with our community.
              </p>
              <Link target="_blank" href={config.links.X}>
              <Button className="w-full gap-2">
                <Twitter className="h-4 w-4" />
                @Skb3611
              </Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <Linkedin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Connect on LinkedIn</h3>
              <p className="text-muted-foreground">
                Professional networking, industry insights, and business opportunities.
              </p>
              <Link target="_blank" href={config.links.LINKEDIN}>
              <Button variant="outline" className="w-full gap-2 bg-transparent">
                <Linkedin className="h-4 w-4" />
                Linkedin Profile
              </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
  );
};

export default ContactSection;
