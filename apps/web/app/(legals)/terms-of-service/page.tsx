import React from "react";
import { Separator } from "@workspace/ui/components/separator";
import { Particles } from "@workspace/ui/components/magicui/particles";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import BackHomeButton from "@/components/BackHomeButton";
import { SplitTextAnimation } from "@/components/SplitTextAnimation";
const Page = () => {
  return (
    <div className="relative w-full min-h-screen p-0">
      <BackHomeButton  />
      {/* <Meteors /> */}
      <Particles className="absolute h-full w-full" />

      <div className=" p-8 py-10 rounded-xl max-w-5xl mx-auto z-10">
        <div className="my-10">
          <div className="mb-8">
            <SplitTextAnimation
              whileInView
              duration={0.8}
              staggerDelay={0.01}
              className="text-3xl font-bold  mb-2"
            >
              Terms of Service
            </SplitTextAnimation>
            <AnimatedShinyText className="text-sm sm:text-base">
              <SplitTextAnimation
                whileInView
                duration={0.8}
                staggerDelay={0.01}
              >{`Last updated: ${new Date().toLocaleDateString()}`}</SplitTextAnimation>
            </AnimatedShinyText>
          </div>

          <div className="space-y-8">
            <section>
              <SplitTextAnimation
                as="h2"
                whileInView
                duration={0.8}
                staggerDelay={0.01}
                className="text-xl font-semibold  mb-4"
              >
                1. Acceptance of Terms
              </SplitTextAnimation>

              <AnimatedShinyText className="text-sm sm:text-base">
                <SplitTextAnimation
                  whileInView
                  duration={0.8}
                  staggerDelay={0.01}
                  className=" leading-relaxed"
                >
                  By accessing and using Gitfolio ("Service," "we," "us," or
                  "our"), you accept and agree to be bound by the terms and
                  provision of this agreement. If you do not agree to abide by
                  the above, please do not use this service.
                </SplitTextAnimation>
              </AnimatedShinyText>
            </section>

            <Separator />

            <section>
              <SplitTextAnimation
                as="h2"
                whileInView
                duration={0.8}
                staggerDelay={0.01}
                className="text-xl font-semibold  mb-4"
              >
                2. Description of Service
              </SplitTextAnimation>
              <AnimatedShinyText className="text-sm sm:text-base">
                <SplitTextAnimation
                  whileInView
                  duration={0.8}
                  staggerDelay={0.01}
                  className=" leading-relaxed"
                >
                  Gitfolio is a web-based platform that allows users to convert
                  their GitHub profiles and repositories into professional
                  portfolio websites. Our service integrates with GitHub's API
                  to fetch your public profile information and repository data.
                </SplitTextAnimation>
              </AnimatedShinyText>
            </section>

            <Separator />

            <section>
              <SplitTextAnimation
                as="h2"
                whileInView
                duration={0.8}
                staggerDelay={0.01}
                className="text-xl font-semibold  mb-4"
              >
                3. User Accounts and Registration
              </SplitTextAnimation>
              <div className="space-y-4">
                <div>
                  <SplitTextAnimation
                    whileInView
                    duration={0.8}
                    staggerDelay={0.01}
                    as="h3"
                    className="text-lg font-medium  mb-2"
                  >
                    Account Creation
                  </SplitTextAnimation>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation
                      whileInView
                      duration={0.8}
                      staggerDelay={0.01}
                      className=" leading-relaxed"
                    >
                      To create an account on Gitfolio, you must obey the
                      following guidelines:
                    </SplitTextAnimation>
                    <ul className="list-disc list-inside  space-y-2 ml-4">
                      <AnimatedShinyText className="text-sm sm:text-base">
                       <SplitTextAnimation as="li" duration={0.8}
                       staggerDelay={0.01} whileInView>You must sign up using your GitHub account</SplitTextAnimation>
                      </AnimatedShinyText>
                      <AnimatedShinyText className="text-sm sm:text-base">
                        <SplitTextAnimation as="li" duration={0.8}
                        staggerDelay={0.01} whileInView>You must be at least 13 years old to use our service</SplitTextAnimation>
                      </AnimatedShinyText>
                      <AnimatedShinyText className="text-sm sm:text-base">
                        <SplitTextAnimation as="li" duration={0.8}
                        staggerDelay={0.01} whileInView>You are responsible for maintaining the confidentiality
                        of your account</SplitTextAnimation>
                      </AnimatedShinyText>
                      <AnimatedShinyText className="text-sm sm:text-base">
                        <SplitTextAnimation as="li" duration={0.8}
                        staggerDelay={0.01} whileInView>You agree to provide accurate and complete information</SplitTextAnimation>
                      </AnimatedShinyText>
                    </ul>
                  </AnimatedShinyText>
                </div>
                <div>
                  <SplitTextAnimation
                    whileInView
                    duration={0.8}
                    staggerDelay={0.01}
                    as="h3"
                    className="text-lg font-medium  mb-2"
                  >
                    GitHub Integration
                  </SplitTextAnimation>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation
                      whileInView
                      duration={0.8}
                      staggerDelay={0.01}
                      className="leading-relaxed"
                    >
                      We use your GitHub account to authenticate and authorize
                      you to use our service. By using our service:
                    </SplitTextAnimation>
                    <ul className="list-disc list-inside  space-y-2 ml-4">
                      
                        <AnimatedShinyText className="text-sm sm:text-base"><SplitTextAnimation whileInView as="li" duration={0.8}
                        staggerDelay={0.01}>
                          You grant us permission to access your public GitHub
                          profile and repository data
                        </SplitTextAnimation></AnimatedShinyText>
                      
                      
                        <AnimatedShinyText className="text-sm sm:text-base"><SplitTextAnimation whileInView as="li" duration={0.8}
                        staggerDelay={0.01}>
                          For private repositories, access is only granted with
                          your explicit manual consent
                        </SplitTextAnimation></AnimatedShinyText>
                      
                      
                        <AnimatedShinyText className="text-sm sm:text-base"><SplitTextAnimation whileInView as="li" duration={0.8}
                        staggerDelay={0.01}>
                          You can revoke our GitHub access at any time through
                          your GitHub account settings
                        </SplitTextAnimation></AnimatedShinyText>
                      
                      
                        <AnimatedShinyText className="text-sm sm:text-base"><SplitTextAnimation whileInView as="li" duration={0.8}
                        staggerDelay={0.01}>
                          We comply with GitHub's Terms of Service and API usage
                          guidelines
                        </SplitTextAnimation></AnimatedShinyText>
                      
                    </ul>
                  </AnimatedShinyText>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <SplitTextAnimation
                as="h2"
                whileInView
                duration={0.8}
                staggerDelay={0.01}
                className="text-xl font-semibold  mb-4"
              >
                4. Acceptable Use
              </SplitTextAnimation>
              <div className="space-y-4">
                <SplitTextAnimation
                  whileInView
                  duration={0.8}
                  staggerDelay={0.01}
                  as="h3"
                  className="text-lg font-medium  mb-2"
                >
                  You May:
                </SplitTextAnimation>
                <AnimatedShinyText className="text-sm sm:text-base">
                  <ul className="list-disc list-inside  space-y-2 ml-4">
                    
                      <AnimatedShinyText className="text-sm sm:text-base"><SplitTextAnimation whileInView duration={0.8}
                      staggerDelay={0.01} as="li">
                        Use the service for personal or professional portfolio
                      </SplitTextAnimation>
                        purposes
                      </AnimatedShinyText>
                    
                    
                      <AnimatedShinyText className="text-sm sm:text-base"><SplitTextAnimation whileInView duration={0.8}
                      staggerDelay={0.01} as="li">
                        Generate multiple portfolio websites from your GitHub
                      </SplitTextAnimation>
                        data
                      </AnimatedShinyText>
                    
                    
                      <AnimatedShinyText className="text-sm sm:text-base"><SplitTextAnimation whileInView duration={0.8}
                      staggerDelay={0.01} as="li">
                        Share your generated portfolio websites publicly
                      </SplitTextAnimation>
                      </AnimatedShinyText>
                    
                    
                      <AnimatedShinyText className="text-sm sm:text-base"><SplitTextAnimation whileInView duration={0.8}
                      staggerDelay={0.01} as="li">
                        Customize your portfolio within the available options
                      </SplitTextAnimation>
                      </AnimatedShinyText>
                    
                    
                      <AnimatedShinyText className="text-sm sm:text-base">
                        Use the service responsibly and in accordance with
                        applicable laws and regulations
                      </AnimatedShinyText>
                    
                  </ul>
                </AnimatedShinyText>
                <SplitTextAnimation
                  whileInView
                  duration={0.8}
                  staggerDelay={0.01}
                  as="h3"
                  className="text-lg font-medium  mb-2"
                >
                  You May Not:
                </SplitTextAnimation>
                <AnimatedShinyText className="text-sm sm:text-base">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    
                      <AnimatedShinyText className="text-sm sm:text-base"> <SplitTextAnimation whileInView duration={0.8}
                      staggerDelay={0.01} as="li">
                        Use the service for illegal or unauthorized purposes
                      </SplitTextAnimation>
                      </AnimatedShinyText>
                    
                    
                      <AnimatedShinyText className="text-sm sm:text-base"> <SplitTextAnimation whileInView duration={0.8}
                      staggerDelay={0.01} as="li">
                        Attempt to gain unauthorized access to our systems or
                      </SplitTextAnimation>
                        other users' accounts
                      </AnimatedShinyText>
                    
                    
                      <AnimatedShinyText className="text-sm sm:text-base"> <SplitTextAnimation whileInView duration={0.8}
                      staggerDelay={0.01} as="li">
                        Upload malicious code or attempt to disrupt our service
                      </SplitTextAnimation>
                      </AnimatedShinyText>
                    
                    
                      <AnimatedShinyText className="text-sm sm:text-base"> <SplitTextAnimation whileInView duration={0.8}
                      staggerDelay={0.01} as="li">
                        Violate GitHub's Terms of Service while using our
                      </SplitTextAnimation>
                        platform
                      </AnimatedShinyText>
                    
                    
                      <AnimatedShinyText className="text-sm sm:text-base"> <SplitTextAnimation whileInView duration={0.8}
                      staggerDelay={0.01} as="li">
                        Use automated tools to abuse our service or GitHub's API
                      </SplitTextAnimation>
                      </AnimatedShinyText>
                    
                    
                      <AnimatedShinyText className="text-sm sm:text-base"> <SplitTextAnimation whileInView duration={0.8}
                      staggerDelay={0.01} as="li">
                        Impersonate others or provide false information
                      </SplitTextAnimation>
                      </AnimatedShinyText>
                    
                  </ul>
                </AnimatedShinyText>
              </div>
            </section>

            <Separator />

            <section>
              <SplitTextAnimation
                as="h2"
                whileInView
                duration={0.8}
                staggerDelay={0.01}
                className="text-xl font-semibold  mb-4"
              >
                5. Intellectual Property
              </SplitTextAnimation>
              <div className="space-y-4">
                <div>
                  <SplitTextAnimation
                    whileInView
                    duration={0.8}
                    staggerDelay={0.01}
                    as="h3"
                    className="text-lg font-medium  mb-2"
                  >
                    Your Content
                  </SplitTextAnimation>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation whileInView duration={0.8}
                    staggerDelay={0.01}>
                      You retain ownership of any content you generate using
                      Gitfolio.
                    </SplitTextAnimation>
                    <ul className="list-disc list-inside  space-y-2 ml-4">
                      
                        <AnimatedShinyText className="text-sm sm:text-base"><SplitTextAnimation duration={0.8}
                        staggerDelay={0.01} whileInView as="li">
                          You retain all rights to your GitHub repositories and
                          code
                        </SplitTextAnimation>
                        </AnimatedShinyText>
                      
                      
                        <AnimatedShinyText className="text-sm sm:text-base"><SplitTextAnimation duration={0.8}
                        staggerDelay={0.01} whileInView as="li">
                          You grant us a license to display your GitHub content
                          in your generated portfolio
                        </SplitTextAnimation>
                        </AnimatedShinyText>
                      
                      
                        <AnimatedShinyText className="text-sm sm:text-base"><SplitTextAnimation duration={0.8}
                        staggerDelay={0.01} whileInView as="li">
                          You are responsible for ensuring you have rights to
                          all content in your repositories
                        </SplitTextAnimation>
                        </AnimatedShinyText>
                      
                    </ul>
                  </AnimatedShinyText>
                </div>
                <div>
                  <SplitTextAnimation
                    whileInView
                    duration={0.8}
                    staggerDelay={0.01}
                    as="h3"
                    className="text-lg font-medium  mb-2"
                  >
                    Our Service
                  </SplitTextAnimation>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation whileInView duration={0.8}
                    staggerDelay={0.01}>
                      We retain ownership of the service and its original
                      content, features, and functionality.
                    </SplitTextAnimation>
                    <ul className="list-disc list-inside  space-y-2 ml-4">
                      
                        <AnimatedShinyText className="text-sm sm:text-base"><SplitTextAnimation duration={0.8}
                        staggerDelay={0.01} whileInView as="li">
                          Gitfolio and its original content, features, and
                          functionality are owned by us.
                        </SplitTextAnimation>
                        </AnimatedShinyText>
                      
                      
                        <AnimatedShinyText className="text-sm sm:text-base"><SplitTextAnimation duration={0.8}
                        staggerDelay={0.01} whileInView as="li">
                          Our service is protected by copyright, trademark, and
                          other intellectual property laws
                        </SplitTextAnimation>
                        </AnimatedShinyText>
                      
                      
                        <AnimatedShinyText className="text-sm sm:text-base"><SplitTextAnimation duration={0.8}
                        staggerDelay={0.01} whileInView as="li">
                          You may not copy, modify, or distribute our
                          proprietary code or design elements
                        </SplitTextAnimation>
                        </AnimatedShinyText>
                      
                    </ul>
                  </AnimatedShinyText>
                </div>
                <div>
                  <SplitTextAnimation
                    whileInView
                    duration={0.8}
                    staggerDelay={0.01}
                    as="h3"
                    className="text-lg font-medium  mb-2"
                  >
                    Generated Portfolios
                  </SplitTextAnimation>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation whileInView duration={0.8}
                    staggerDelay={0.01}>
                      Your generated portfolio websites are your own creations
                      and are not owned by us.
                    </SplitTextAnimation>
                    <ul className="list-disc list-inside  space-y-2 ml-4">
                      
                        <AnimatedShinyText className="text-sm sm:text-base"><SplitTextAnimation whileInView duration={0.8}
                        staggerDelay={0.01} as="li">
                          Portfolio websites generated by our service belong to
                          you
                        </SplitTextAnimation>
                        </AnimatedShinyText>
                      
                      
                        <AnimatedShinyText className="text-sm sm:text-base"><SplitTextAnimation whileInView duration={0.8}
                        staggerDelay={0.01} as="li">
                          You may use, modify, and distribute your generated
                          portfolio as you see fit
                        </SplitTextAnimation>
                        </AnimatedShinyText>
                      
                      
                        <AnimatedShinyText className="text-sm sm:text-base"><SplitTextAnimation whileInView duration={0.8}
                        staggerDelay={0.01} as="li">
                          We retain no ownership rights over your generated
                          portfolio websites
                        </SplitTextAnimation>
                        </AnimatedShinyText>
                      
                    </ul>
                  </AnimatedShinyText>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <SplitTextAnimation
                as="h2"
                whileInView
                duration={0.8}
                staggerDelay={0.01}
                className="text-xl font-semibold  mb-4"
              >
                6. Service Availability
              </SplitTextAnimation>
              <div className="space-y-2">
                <div>
                  <SplitTextAnimation
                    whileInView
                    duration={0.8}
                    staggerDelay={0.01}
                    as="h3"
                    className="font-medium  mb-2 text-lg"
                  >
                    Current Service Level
                  </SplitTextAnimation>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation whileInView duration={0.8}
                    staggerDelay={0.01}>
                      We strive to provide our service with the highest level of
                      availability. However, due to the nature of the internet
                      and the services we rely on, there may be temporary
                      disruptions or outages. We will do our best to notify you
                      of any issues or delays, but we cannot guarantee a perfect
                      service.
                    </SplitTextAnimation>
                  </AnimatedShinyText>
                </div>
                <div>
                  <SplitTextAnimation
                    whileInView
                    duration={0.8}
                    staggerDelay={0.01}
                    as="h3"
                    className="font-medium  mb-2 text-lg"
                  >
                    Service Modifications
                  </SplitTextAnimation>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation whileInView duration={0.8}
                    staggerDelay={0.01}>
                      We reserve the right to modify, suspend, or discontinue
                      our service,We will provide reasonable notice of any
                      material changes to the service.
                    </SplitTextAnimation>
                  </AnimatedShinyText>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <SplitTextAnimation
                as="h2"
                whileInView
                duration={0.8}
                staggerDelay={0.01}
                className="text-xl font-semibold  mb-4"
              >
                7. Termination
              </SplitTextAnimation>
              <AnimatedShinyText className="text-sm sm:text-base">
                <SplitTextAnimation
                  whileInView
                  duration={0.8}
                  staggerDelay={0.01}
                  className=" leading-relaxed"
                >
                  We reserve the right to terminate or suspend your account and
                  access to the service at any time, for any reason, without
                  notice. We will provide reasonable notice of any termination
                  or suspension.
                </SplitTextAnimation>
              </AnimatedShinyText>
            </section>

            <Separator />

            <section>
              <SplitTextAnimation
                as="h2"
                whileInView
                duration={0.8}
                staggerDelay={0.01}
                className="text-xl font-semibold  mb-4"
              >
                8. Disclaimers
              </SplitTextAnimation>
              <AnimatedShinyText className="text-sm sm:text-base">
                <SplitTextAnimation
                  whileInView
                  duration={0.8}
                  staggerDelay={0.01}
                  className=" leading-relaxed"
                >
                  The information on this service is provided on an "as is"
                  basis. To the fullest extent permitted by law, this Company
                  excludes all representations, warranties, conditions and terms
                  whether express or implied.
                </SplitTextAnimation>
              </AnimatedShinyText>
            </section>

            <Separator />

            <section>
              <SplitTextAnimation
                as="h2"
                whileInView
                duration={0.8}
                staggerDelay={0.01}
                className="text-xl font-semibold  mb-4"
              >
                9. Limitation of Liability
              </SplitTextAnimation>
              <AnimatedShinyText className="text-sm sm:text-base">
                <SplitTextAnimation
                  whileInView
                  duration={0.8}
                  staggerDelay={0.01}
                  className=" leading-relaxed"
                >
                  In no event shall GitFolio, nor its directors, employees,
                  partners, agents, suppliers, or affiliates, be liable for any
                  indirect, incidental, special, consequential, or punitive
                  damages arising out of your use of the service.
                </SplitTextAnimation>
              </AnimatedShinyText>
            </section>

            <Separator />

            <section>
              <SplitTextAnimation
                as="h2"
                whileInView
                duration={0.8}
                staggerDelay={0.01}
                className="text-xl font-semibold  mb-4"
              >
                10. Governing Law
              </SplitTextAnimation>
              <AnimatedShinyText className="text-sm sm:text-base">
                <SplitTextAnimation
                  whileInView
                  duration={0.8}
                  staggerDelay={0.01}
                  className=" leading-relaxed"
                >
                  These terms shall be governed by and construed in accordance
                  with the laws of India. Any disputes arising under these terms
                  shall be subject to the exclusive jurisdiction of the courts
                  in Maharashtra, India.
                </SplitTextAnimation>
              </AnimatedShinyText>
            </section>

            <Separator />

            <section>
              <SplitTextAnimation
                as="h2"
                whileInView
                duration={0.8}
                staggerDelay={0.01}
                className="text-xl font-semibold  mb-4"
              >
                11. Changes to Terms
              </SplitTextAnimation>
              <AnimatedShinyText className="text-sm sm:text-base">
                <SplitTextAnimation
                  whileInView
                  duration={0.8}
                  staggerDelay={0.01}
                  className=" leading-relaxed"
                >
                  We reserve the right to modify or replace these Terms at any
                  time. If a revision is material, we will provide at least 30
                  days notice prior to any new terms taking effect.
                </SplitTextAnimation>
              </AnimatedShinyText>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
