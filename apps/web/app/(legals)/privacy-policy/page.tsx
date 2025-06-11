import React from "react";
import { Separator } from "@workspace/ui/components/separator";
import { Particles } from "@workspace/ui/components/magicui/particles";
import BackHomeButton from "@/components/BackHomeButton";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import { Button } from "@workspace/ui/components/button";
import Image from "next/image";
import { Linkedin } from "lucide-react";
const page = () => {
  return (
    <div className="relative min-h-screen w-full">
      <Particles className="absolute h-full w-full" />
      <BackHomeButton />
      <div className="p-8 py-10 mx-auto max-w-5xl z-10">
        <div className="my-10">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
            <AnimatedShinyText>
              <span>Last updated: {new Date().toLocaleDateString()}</span>
            </AnimatedShinyText>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
              <AnimatedShinyText>
                <span className=" leading-relaxed">
                Welcome to Gitfolio ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service that converts GitHub portfolios into portfolio websites.
                </span>
              </AnimatedShinyText>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-4">
                2. Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium  mb-2">
                  GitHub Account Information
                  </h3>
                  <AnimatedShinyText>
                    <span className=" leading-relaxed mb-2">
                    When you sign up using your GitHub account, we collect:
                    </span>
                    <ul className="list-disc list-inside  space-y-1 ml-4">
                      <li><AnimatedShinyText>
                      Your GitHub username
                      </AnimatedShinyText></li>
                      <li><AnimatedShinyText>Your public profile information (name, bio, avatar, location, company)</AnimatedShinyText></li>
                      <li><AnimatedShinyText>Your public repositories and their metadata</AnimatedShinyText></li>
                      <li><AnimatedShinyText>Your GitHub profile statistics (followers, following, public repos count)</AnimatedShinyText></li>
                    </ul>
                  </AnimatedShinyText>
                </div>
                <div>
                  <h3 className="text-lg font-medium  mb-2">
                  Additional Information with Your Consent
                  </h3>
                  <AnimatedShinyText>
                    <span className=" leading-relaxed mb-2">
                    If you manually grant access to private repositories, we may collect:
                    </span>
                    <ul className="list-disc list-inside  space-y-1 ml-4">
                      <li><AnimatedShinyText>
                      Private repository information that you specifically choose to include in your portfolio
                      </AnimatedShinyText></li>
                    </ul>
                  </AnimatedShinyText>
                </div>

                <div>
                  <h3 className="text-lg font-medium  mb-2">
                    Automatically Collected Information
                  </h3>
                  <AnimatedShinyText>
                    <span>
                      <ul className="list-disc list-inside  space-y-1 ml-4">
                        <li><AnimatedShinyText>IP address and device information</AnimatedShinyText></li>
                        <li><AnimatedShinyText>Browser type and version</AnimatedShinyText></li>
                        <li><AnimatedShinyText>Usage data and analytics</AnimatedShinyText></li>
                        <li><AnimatedShinyText>Cookies and similar tracking technologies</AnimatedShinyText></li>
                      </ul>
                    </span>
                  </AnimatedShinyText>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-4">
                3. How We Use Your Information
              </h2>
              <AnimatedShinyText>
                <span className=" leading-relaxed mb-4">
                  We use your information for the following purposes:
                </span>
                <ul className="list-disc list-inside  space-y-2 ml-4">
                  <li><AnimatedShinyText>Generate and customize your portfolio website</AnimatedShinyText></li>
                  <li><AnimatedShinyText>Provide, maintain, and improve our services</AnimatedShinyText></li>
                  <li><AnimatedShinyText>Authenticate your identity through GitHub</AnimatedShinyText></li>
                  <li><AnimatedShinyText>Display your GitHub profile and repository information on your portfolio</AnimatedShinyText></li>
                  <li><AnimatedShinyText>Analyze usage patterns to enhance user experience</AnimatedShinyText></li>
                  <li><AnimatedShinyText>Communicate with you about our services</AnimatedShinyText></li>
                </ul>
              </AnimatedShinyText>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <AnimatedShinyText>
                <span className=" leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share information in the following circumstances:
                </span>
                <ul className="list-disc list-inside  space-y-2 ml-4">
                  <li><AnimatedShinyText>With service providers who assist in our operations</AnimatedShinyText></li>
                  <li><AnimatedShinyText>When required by law or legal process</AnimatedShinyText></li>
                  <li><AnimatedShinyText>To protect our rights and safety</AnimatedShinyText></li>
                  <li><AnimatedShinyText>In connection with a business transfer or merger</AnimatedShinyText></li>
                  <li><AnimatedShinyText>With your explicit consent</AnimatedShinyText></li>
                </ul>
              </AnimatedShinyText>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-4">5. Business Transfers</h2>
              <AnimatedShinyText>
                <span className=" leading-relaxed">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
                </span>
              </AnimatedShinyText>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-4">6. Data Storage and Security</h2>
              <AnimatedShinyText>
                <span className=" leading-relaxed mb-4">
                  We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
                </span>
                <ul className="list-disc list-inside  space-y-2 ml-4">
                  <li><AnimatedShinyText>We store your GitHub profile data and repository information on secure servers</AnimatedShinyText></li>
                  <li><AnimatedShinyText>We implement industry-standard security measures to protect your information</AnimatedShinyText></li>
                  <li><AnimatedShinyText>We retain your data only as long as necessary to provide our services</AnimatedShinyText></li>
                  <li><AnimatedShinyText>We regularly review and update our security practices</AnimatedShinyText></li>
                </ul>
              </AnimatedShinyText>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-4">
                7. Your Rights and Choices
              </h2>
              <AnimatedShinyText>
                <span className=" leading-relaxed">
                You have the right to:
                <ul className="list-disc list-inside  space-y-2 ml-4">
                  <li><AnimatedShinyText>Access your stored data by contacting us</AnimatedShinyText></li>
                  <li><AnimatedShinyText>Update your information by reconnecting your GitHub account</AnimatedShinyText></li>
                  <li><AnimatedShinyText>Delete your account and associated data at any time</AnimatedShinyText></li>
                  <li><AnimatedShinyText>Withdraw consent for private repository access</AnimatedShinyText></li>
                  <li><AnimatedShinyText>Export your portfolio data</AnimatedShinyText></li>
                </ul>
                </span>
              </AnimatedShinyText>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-4">
                8. GitHub Integration
              </h2>
              <AnimatedShinyText>
                <span className=" leading-relaxed">
                  We use GitHub's OAuth system to authenticate users and access their GitHub profile information. By using our service, you consent to the following:
                  <ul>
                    <li><AnimatedShinyText>We only access GitHub data that you explicitly authorize through GitHub's OAuth system</AnimatedShinyText></li>
                    <li><AnimatedShinyText>We use GitHub's API in compliance with their Terms of Service</AnimatedShinyText></li>
                    <li><AnimatedShinyText>You can revoke our access to your GitHub account at any time through your GitHub settings</AnimatedShinyText></li>
                    <li><AnimatedShinyText>We do not store your GitHub credentials or access tokens beyond the session</AnimatedShinyText></li>
                  </ul>
                </span>
              </AnimatedShinyText>
            </section>
            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-4">
                9. Children's Privacy
              </h2>
              <AnimatedShinyText>
                <span className=" leading-relaxed">
                  Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information without parental consent, please contact us immediately.
                </span>
              </AnimatedShinyText>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-4">
                10. Changes to this Privacy Policy
              </h2>
              <AnimatedShinyText>
                <span className=" leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be effective immediately upon posting the updated Privacy Policy on our website.
                </span>
              </AnimatedShinyText>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold mb-4">
                11. Contact Us
              </h2>
              <AnimatedShinyText>
                <span className=" leading-relaxed">
                  If you have any questions or concerns about this Privacy Policy, please contact us at{" "}
                  .
                </span>
              </AnimatedShinyText>
              <div className='flex w-full gap-5 items-center justify-center my-5'>  
        <Button
        className='h-18 w-18 rounded-full cursor-pointer p-0'
        variant={'outline'}
        size={'default'}
        >
          <div className='bg-white rounded-2xl'>
            <Image
            src={'/icons/x.png'}
            height={50}
            width={50}
            alt='X'
            className=''
            />
            </div>
        </Button>
        <Button
        className='h-18 w-18 rounded-full cursor-pointer'
        variant={'outline'}
        size={'default'}
        >
         <Linkedin className="size-10 " />
        </Button>
        


      </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
