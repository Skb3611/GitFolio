"use client"
import React from "react";
import { Separator } from "@workspace/ui/components/separator";
import { Particles } from "@workspace/ui/components/magicui/particles";
import BackHomeButton from "@/components/BackHomeButton";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { Button, buttonVariants } from "@workspace/ui/components/button";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { SplitTextAnimation } from "@/components/SplitTextAnimation";
import { motion } from "motion/react";
const page = () => {
  return (
    <div className="relative min-h-screen w-full">
      <Particles className="absolute h-full w-full" />
      <BackHomeButton />
      <div className="p-8 py-10 mx-auto max-w-5xl z-10">
        <div className="my-10">
          <div className="mb-8">
            <SplitTextAnimation duration={0.8}
            staggerDelay={0.01} whileInView className="text-3xl font-bold mb-2">
              Privacy Policy
            </SplitTextAnimation>
            <AnimatedShinyText className="text-sm sm:text-base">
              <SplitTextAnimation duration={0.8}
              staggerDelay={0.01}
                whileInView
              >{`Last updated: ${new Date().toLocaleDateString()}`}</SplitTextAnimation>
            </AnimatedShinyText>
          </div>

          <div className="space-y-8">
            <section>
              <SplitTextAnimation duration={0.8}
              staggerDelay={0.01}
                whileInView
                className="text-xl font-semibold mb-4"
              >
                1. Introduction
              </SplitTextAnimation>
              <AnimatedShinyText className="text-sm sm:text-base">
                <SplitTextAnimation duration={0.8}
                staggerDelay={0.01} whileInView className=" leading-relaxed">
                  Welcome to Gitfolio ("we," "our," or "us"). This Privacy
                  Policy explains how we collect, use, disclose, and safeguard
                  your information when you use our service that converts GitHub
                  portfolios into portfolio websites.
                </SplitTextAnimation>
              </AnimatedShinyText>
            </section>

            <Separator />

            <section>
              <SplitTextAnimation duration={0.8}
              staggerDelay={0.01}
                whileInView
                className="text-xl font-semibold mb-4"
              >
                2. Information We Collect
              </SplitTextAnimation>
              <div className="space-y-4">
                <div>
                  <SplitTextAnimation duration={0.8}
                  staggerDelay={0.01} className="text-lg font-medium  mb-2">
                    GitHub Account Information
                  </SplitTextAnimation>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation duration={0.8}
                    staggerDelay={0.01}
                      whileInView
                      className=" leading-relaxed mb-2"
                    >
                      When you sign up using your GitHub account, we collect:
                    </SplitTextAnimation>
                    <ul className="list-disc list-inside  space-y-1 ml-4">
                      <AnimatedShinyText className="text-sm sm:text-base">
                        <SplitTextAnimation duration={0.8}
                        staggerDelay={0.01} whileInView as="li">
                          Your GitHub username
                        </SplitTextAnimation>
                      </AnimatedShinyText>
                      <AnimatedShinyText className="text-sm sm:text-base">
                        <SplitTextAnimation duration={0.8}
                        staggerDelay={0.01} whileInView as="li">
                          Your public profile information (name, bio, avatar,
                          location, company)
                        </SplitTextAnimation>
                      </AnimatedShinyText>
                      <AnimatedShinyText className="text-sm sm:text-base">
                        <SplitTextAnimation duration={0.8}
                        staggerDelay={0.01} whileInView as="li">
                          Your public repositories and their metadata
                        </SplitTextAnimation>
                      </AnimatedShinyText>
                      <AnimatedShinyText className="text-sm sm:text-base">
                        <SplitTextAnimation duration={0.8}
                        staggerDelay={0.01} whileInView as="li">
                          Your GitHub profile statistics (followers, following,
                          public repos count)
                        </SplitTextAnimation>
                      </AnimatedShinyText>
                    </ul>
                  </AnimatedShinyText>
                </div>
                <div>
                  <SplitTextAnimation duration={0.8}
                  staggerDelay={0.01} className="text-lg font-medium  mb-2">
                    Additional Information with Your Consent
                  </SplitTextAnimation>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation duration={0.8}
                    staggerDelay={0.01}
                      whileInView
                      className=" leading-relaxed mb-2"
                    >
                      If you manually grant access to private repositories, we
                      may collect:
                    </SplitTextAnimation>
                    <ul className="list-disc list-inside  space-y-1 ml-4">
                      <AnimatedShinyText className="text-sm sm:text-base">
                        <SplitTextAnimation duration={0.8}
                        staggerDelay={0.01} whileInView as="li">
                          Private repository information that you specifically
                          choose to include in your portfolio
                        </SplitTextAnimation>
                      </AnimatedShinyText>
                    </ul>
                  </AnimatedShinyText>
                </div>

                <div>
                  <SplitTextAnimation duration={0.8}
                  staggerDelay={0.01} className="text-lg font-medium  mb-2">
                    Automatically Collected Information
                  </SplitTextAnimation>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <span>
                      <ul className="list-disc list-inside  space-y-1 ml-4">
                        <AnimatedShinyText className="text-sm sm:text-base">
                          <SplitTextAnimation duration={0.8}
                          staggerDelay={0.01} as="li" whileInView>
                            IP address and device information
                          </SplitTextAnimation>
                        </AnimatedShinyText>
                        <AnimatedShinyText className="text-sm sm:text-base">
                          <SplitTextAnimation duration={0.8}
                          staggerDelay={0.01} as="li" whileInView>
                            Browser type and version
                          </SplitTextAnimation>
                        </AnimatedShinyText>
                        <AnimatedShinyText className="text-sm sm:text-base">
                          <SplitTextAnimation duration={0.8}
                          staggerDelay={0.01} as="li" whileInView>
                            Usage data and analytics
                          </SplitTextAnimation>
                        </AnimatedShinyText>
                        <AnimatedShinyText className="text-sm sm:text-base">
                          <SplitTextAnimation duration={0.8}
                          staggerDelay={0.01} as="li" whileInView>
                            Cookies and similar tracking technologies
                          </SplitTextAnimation>
                        </AnimatedShinyText>
                      </ul>
                    </span>
                  </AnimatedShinyText>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <SplitTextAnimation duration={0.8}
              staggerDelay={0.01}
                whileInView
                className="text-xl font-semibold mb-4"
              >
                3. How We Use Your Information
              </SplitTextAnimation>
              <AnimatedShinyText className="text-sm sm:text-base">
                <SplitTextAnimation duration={0.8}
                staggerDelay={0.01}
                  whileInView
                  className=" leading-relaxed mb-4"
                >
                  We use your information for the following purposes:
                </SplitTextAnimation>
                <ul className="list-disc list-inside  space-y-2 ml-4">
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation duration={0.8}
                    staggerDelay={0.01} as="li" whileInView>
                      Generate and customize your portfolio website
                    </SplitTextAnimation>
                  </AnimatedShinyText>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation duration={0.8}
                    staggerDelay={0.01} as="li" whileInView>
                      Provide, maintain, and improve our services
                    </SplitTextAnimation>
                  </AnimatedShinyText>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation duration={0.8}
                    staggerDelay={0.01} as="li" whileInView>
                      Authenticate your identity through GitHub
                    </SplitTextAnimation>
                  </AnimatedShinyText>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation duration={0.8}
                    staggerDelay={0.01} as="li" whileInView>
                      Display your GitHub profile and repository information on
                      your portfolio
                    </SplitTextAnimation>
                  </AnimatedShinyText>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation duration={0.8}
                    staggerDelay={0.01} as="li" whileInView>
                      Analyze usage patterns to enhance user experience
                    </SplitTextAnimation>
                  </AnimatedShinyText>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation duration={0.8}
                    staggerDelay={0.01} as="li" whileInView>
                      Communicate with you about our services
                    </SplitTextAnimation>
                  </AnimatedShinyText>
                </ul>
              </AnimatedShinyText>
            </section>

            <Separator />

            <section>
              <SplitTextAnimation duration={0.8}
              staggerDelay={0.01}
                whileInView
                className="text-xl font-semibold mb-4"
              >
                4. Information Sharing and Disclosure
              </SplitTextAnimation>
              <AnimatedShinyText className="text-sm sm:text-base">
                <SplitTextAnimation duration={0.8}
                staggerDelay={0.01}
                  whileInView
                  className=" leading-relaxed mb-4"
                >
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share information in the following
                  circumstances:
                </SplitTextAnimation>
                <ul className="list-disc list-inside  space-y-2 ml-4">
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation duration={0.8}
                    staggerDelay={0.01} whileInView as="li">
                      With service providers who assist in our operations
                    </SplitTextAnimation>
                  </AnimatedShinyText>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation duration={0.8}
                    staggerDelay={0.01} whileInView as="li">
                      When required by law or legal process
                    </SplitTextAnimation>
                  </AnimatedShinyText>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation duration={0.8}
                    staggerDelay={0.01} whileInView as="li">
                      To protect our rights and safety
                    </SplitTextAnimation>
                  </AnimatedShinyText>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation duration={0.8}
                    staggerDelay={0.01} whileInView as="li">
                      In connection with a business transfer or merger
                    </SplitTextAnimation>
                  </AnimatedShinyText>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation duration={0.8}
                    staggerDelay={0.01} whileInView as="li">
                      With your explicit consent
                    </SplitTextAnimation>
                  </AnimatedShinyText>
                </ul>
              </AnimatedShinyText>
            </section>

            <Separator />

            <section>
              <SplitTextAnimation duration={0.8}
              staggerDelay={0.01}
                whileInView
                className="text-xl font-semibold mb-4"
              >
                5. Business Transfers
              </SplitTextAnimation>
              <AnimatedShinyText className="text-sm sm:text-base">
                <SplitTextAnimation duration={0.8}
                staggerDelay={0.01} whileInView className=" leading-relaxed">
                  In the event of a merger, acquisition, or sale of assets, your
                  information may be transferred as part of that transaction.
                </SplitTextAnimation>
              </AnimatedShinyText>
            </section>

            <Separator />

            <section>
              <SplitTextAnimation duration={0.8}
              staggerDelay={0.01}
                whileInView
                className="text-xl font-semibold mb-4"
              >
                6. Data Storage and Security
              </SplitTextAnimation>
              <AnimatedShinyText className="text-sm sm:text-base">
                <SplitTextAnimation duration={0.8}
                staggerDelay={0.01}
                  whileInView
                  className=" leading-relaxed mb-4"
                >
                  We implement reasonable security measures to protect your
                  personal information from unauthorized access, disclosure,
                  alteration, or destruction.
                </SplitTextAnimation>
                <ul className="list-disc list-inside  space-y-2 ml-4">
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation duration={0.8}
                    staggerDelay={0.01} whileInView as="li">
                      We store your GitHub profile data and repository
                      information on secure servers
                    </SplitTextAnimation>
                  </AnimatedShinyText>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation duration={0.8}
                    staggerDelay={0.01} whileInView as="li">
                      We implement industry-standard security measures to
                      protect your information
                    </SplitTextAnimation>
                  </AnimatedShinyText>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation duration={0.8}
                    staggerDelay={0.01} whileInView as="li">
                      We retain your data only as long as necessary to provide
                      our services
                    </SplitTextAnimation>
                  </AnimatedShinyText>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation duration={0.8}
                    staggerDelay={0.01} whileInView as="li">
                      We regularly review and update our security practices
                    </SplitTextAnimation>
                  </AnimatedShinyText>
                </ul>
              </AnimatedShinyText>
            </section>

            <Separator />

            <section>
              <SplitTextAnimation duration={0.8}
              staggerDelay={0.01}
                whileInView
                className="text-xl font-semibold mb-4"
              >
                7. Your Rights and Choices
              </SplitTextAnimation>
              <AnimatedShinyText className="text-sm sm:text-base">
                <SplitTextAnimation duration={0.8}
                staggerDelay={0.01} className=" leading-relaxed">
                  You have the right to:
                </SplitTextAnimation>
                <ul className="list-disc list-inside  space-y-2 ml-4">
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation duration={0.8}
                    staggerDelay={0.01} whileInView as="li">
                      Access your stored data by contacting us
                    </SplitTextAnimation>
                  </AnimatedShinyText>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation duration={0.8}
                    staggerDelay={0.01} whileInView as="li">
                      Update your information by reconnecting your GitHub
                      account
                    </SplitTextAnimation>
                  </AnimatedShinyText>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation duration={0.8}
                    staggerDelay={0.01} whileInView as="li">
                      Delete your account and associated data at any time
                    </SplitTextAnimation>
                  </AnimatedShinyText>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation duration={0.8}
                    staggerDelay={0.01} whileInView as="li">
                      Withdraw consent for private repository access
                    </SplitTextAnimation>
                  </AnimatedShinyText>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation duration={0.8}
                    staggerDelay={0.01} whileInView as="li">
                      Export your portfolio data
                    </SplitTextAnimation>
                  </AnimatedShinyText>
                </ul>
              </AnimatedShinyText>
            </section>

            <Separator />

            <section>
              <SplitTextAnimation duration={0.8}
              staggerDelay={0.01}
                whileInView
                className="text-xl font-semibold mb-4"
              >
                8. GitHub Integration
              </SplitTextAnimation>
              <AnimatedShinyText className="text-sm sm:text-base">
                <SplitTextAnimation duration={0.8}
                staggerDelay={0.01} whileInView className=" leading-relaxed">
                  We use GitHub's OAuth system to authenticate users and access
                  their GitHub profile information. By using our service, you
                  consent to the following:
                </SplitTextAnimation>
                <ul className="list-disc list-inside  space-y-2 ml-4">
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation duration={0.8}
                    staggerDelay={0.01} whileInView as="li">
                      We only access GitHub data that you explicitly authorize
                      through GitHub's OAuth system
                    </SplitTextAnimation>
                  </AnimatedShinyText>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation duration={0.8}
                    staggerDelay={0.01} whileInView as="li">
                      We use GitHub's API in compliance with their Terms of
                      Service
                    </SplitTextAnimation>
                  </AnimatedShinyText>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation duration={0.8}
                    staggerDelay={0.01} whileInView as="li">
                      You can revoke our access to your GitHub account at any
                      time through your GitHub settings
                    </SplitTextAnimation>
                  </AnimatedShinyText>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation duration={0.8}
                    staggerDelay={0.01} whileInView as="li">
                      We do not store your GitHub credentials or access tokens
                      beyond the session
                    </SplitTextAnimation>
                  </AnimatedShinyText>
                </ul>
              </AnimatedShinyText>
            </section>
            <Separator />

            <section>
              <SplitTextAnimation duration={0.8}
              staggerDelay={0.01}
                whileInView
                className="text-xl font-semibold mb-4"
              >
                9. Children's Privacy
              </SplitTextAnimation>
              <AnimatedShinyText className="text-sm sm:text-base">
                <SplitTextAnimation duration={0.8}
                staggerDelay={0.01} whileInView className=" leading-relaxed">
                  Our services are not intended for individuals under the age of
                  13. We do not knowingly collect personal information from
                  children. If you become aware that a child has provided us
                  with personal information without parental consent, please
                  contact us immediately.
                </SplitTextAnimation>
              </AnimatedShinyText>
            </section>

            <Separator />

            <section>
              <SplitTextAnimation duration={0.8}
              staggerDelay={0.01}
                whileInView
                className="text-xl font-semibold mb-4"
              >
                10. Changes to this Privacy Policy
              </SplitTextAnimation>
              <AnimatedShinyText className="text-sm sm:text-base">
                <SplitTextAnimation duration={0.8}
                staggerDelay={0.01} whileInView className=" leading-relaxed">
                  We may update this Privacy Policy from time to time. Any
                  changes will be effective immediately upon posting the updated
                  Privacy Policy on our website.
                </SplitTextAnimation>
              </AnimatedShinyText>
            </section>

            <Separator />

            <section>
              <SplitTextAnimation duration={0.8}
              staggerDelay={0.01}
                whileInView
                className="text-xl font-semibold mb-4"
              >
                11. Contact Us
              </SplitTextAnimation>
              <AnimatedShinyText className="text-sm sm:text-base">
                <SplitTextAnimation duration={0.8}
                staggerDelay={0.01} whileInView className=" leading-relaxed">
                  If you have any questions or concerns about this Privacy
                  Policy, please contact us at.
                </SplitTextAnimation>
              </AnimatedShinyText>
              <div className="flex w-full gap-5 items-center justify-center my-5">
                <motion.div
                  variants={ButtonVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Button
                    className="h-18 w-18 rounded-full cursor-pointer p-0"
                    variant={"outline"}
                    size={"default"}
                  >
                    <div className="bg-white rounded-2xl">
                      <Image
                        src={"/icons/x.png"}
                        height={50}
                        width={50}
                        alt="X"
                        className=""
                      />
                    </div>
                  </Button>
                </motion.div>
                <motion.div
                  variants={ButtonVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Button
                    className="h-18 w-18 rounded-full cursor-pointer"
                    variant={"outline"}
                    size={"default"}
                  >
                    <Linkedin className="size-10 " />
                  </Button>
                </motion.div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

const ButtonVariant = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};
