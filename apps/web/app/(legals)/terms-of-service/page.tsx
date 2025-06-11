import React from "react";
import { Separator } from "@workspace/ui/components/separator";
import { Meteors } from "@workspace/ui/components/magicui/meteors";
import { Particles } from "@workspace/ui/components/magicui/particles";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import BackHomeButton from "@/components/BackHomeButton";
const Page = () => {
  return (
    <div className="relative w-full min-h-screen p-0">
      <BackHomeButton />
      {/* <Meteors /> */}
      <Particles className="absolute h-full w-full" />

      <div className=" p-8 py-10 rounded-xl max-w-5xl mx-auto z-10">
        <div className="my-10">
          <div className="mb-8">
            <h1 className="text-3xl font-bold  mb-2">Terms of Service</h1>
            <AnimatedShinyText>
              <span>Last updated: {new Date().toLocaleDateString()}</span>
            </AnimatedShinyText>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold  mb-4">
                1. Acceptance of Terms
              </h2>

              <AnimatedShinyText>
                <span className=" leading-relaxed">
                  By accessing and using Gitfolio ("Service," "we," "us," or
                  "our"), you accept and agree to be bound by the terms and
                  provision of this agreement. If you do not agree to abide by
                  the above, please do not use this service.
                </span>
              </AnimatedShinyText>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold  mb-4">
                2. Description of Service
              </h2>
              <AnimatedShinyText>
                <span className=" leading-relaxed">
                  Gitfolio is a web-based platform that allows users to convert
                  their GitHub profiles and repositories into professional
                  portfolio websites. Our service integrates with GitHub's API
                  to fetch your public profile information and repository data.
                </span>
              </AnimatedShinyText>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold  mb-4">
                3. User Accounts and Registration
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium  mb-2">
                    Account Creation
                  </h3>
                  <AnimatedShinyText>
                    <span className=" leading-relaxed">
                      To create an account on Gitfolio, you must obey the
                      following guidelines:
                    </span>
                    <ul className="list-disc list-inside  space-y-2 ml-4">
                      <li><AnimatedShinyText>You must sign up using your GitHub account</AnimatedShinyText></li>
                      <li><AnimatedShinyText>
                        You must be at least 13 years old to use our service
                      </AnimatedShinyText></li>
                      <li><AnimatedShinyText>
                        You are responsible for maintaining the confidentiality
                        of your account
                      </AnimatedShinyText></li>
                      <li><AnimatedShinyText>
                        You agree to provide accurate and complete information
                      </AnimatedShinyText></li>
                    </ul>
                  </AnimatedShinyText>
                </div>
                <div>
                  <h3 className="text-lg font-medium  mb-2">
                    GitHub Integration
                  </h3>
                  <AnimatedShinyText>
                    <span className="leading-relaxed">
                      We use your GitHub account to authenticate and authorize
                      you to use our service. By using our service:
                    </span>
                    <ul className="list-disc list-inside  space-y-2 ml-4">
                      <li><AnimatedShinyText>
                        You grant us permission to access your public GitHub
                        profile and repository data
                      </AnimatedShinyText></li>
                      <li><AnimatedShinyText>
                        For private repositories, access is only granted with
                        your explicit manual consent
                      </AnimatedShinyText></li>
                      <li><AnimatedShinyText>
                        You can revoke our GitHub access at any time through
                        your GitHub account settings
                      </AnimatedShinyText></li>
                      <li><AnimatedShinyText>
                        We comply with GitHub's Terms of Service and API usage
                        guidelines
                      </AnimatedShinyText></li>
                    </ul>
                  </AnimatedShinyText>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold  mb-4">4. Acceptable Use</h2>
              <div className="space-y-4">
                  <h3 className="text-lg font-medium  mb-2">You May:</h3>
                <AnimatedShinyText>
                  <ul className="list-disc list-inside  space-y-2 ml-4">
                    <li><AnimatedShinyText>
                      Use the service for personal or professional portfolio
                      purposes
                    </AnimatedShinyText></li>
                    <li><AnimatedShinyText>
                      Generate multiple portfolio websites from your GitHub data
                    </AnimatedShinyText></li>
                    <li><AnimatedShinyText>Share your generated portfolio websites publicly</AnimatedShinyText></li>
                    <li><AnimatedShinyText>
                      Customize your portfolio within the available options
                    </AnimatedShinyText></li>
                    <li><AnimatedShinyText>
                      Use the service responsibly and in accordance with
                      applicable laws and regulations
                    </AnimatedShinyText></li>
                  </ul>
                  </AnimatedShinyText>
                  <h3 className="text-lg font-medium  mb-2">You May Not:</h3>
                  <AnimatedShinyText>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><AnimatedShinyText>
                      Use the service for illegal or unauthorized purposes
                    </AnimatedShinyText></li>
                    <li><AnimatedShinyText>
                      Attempt to gain unauthorized access to our systems or
                      other users' accounts
                    </AnimatedShinyText></li>
                    <li><AnimatedShinyText>
                      Upload malicious code or attempt to disrupt our service
                    </AnimatedShinyText></li>
                    <li><AnimatedShinyText>
                      Violate GitHub's Terms of Service while using our platform
                    </AnimatedShinyText></li>
                    <li><AnimatedShinyText>
                      Use automated tools to abuse our service or GitHub's API
                    </AnimatedShinyText></li>
                    <li><AnimatedShinyText>Impersonate others or provide false information</AnimatedShinyText></li>
                  </ul>
                </AnimatedShinyText>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold  mb-4">
                5. Intellectual Property
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium  mb-2">Your Content</h3>
                  <AnimatedShinyText>
                    <span>
                      You retain ownership of any content you generate using
                      Gitfolio.
                    </span>
                    <ul className="list-disc list-inside  space-y-2 ml-4">
                      <li><AnimatedShinyText>
                        You retain all rights to your GitHub repositories and
                        code
                      </AnimatedShinyText></li>
                      <li><AnimatedShinyText>
                        You grant us a license to display your GitHub content in
                        your generated portfolio
                      </AnimatedShinyText></li>
                      <li><AnimatedShinyText>
                        You are responsible for ensuring you have rights to all
                        content in your repositories
                      </AnimatedShinyText></li>
                    </ul>
                  </AnimatedShinyText>
                </div>
                <div>
                  <h3 className="text-lg font-medium  mb-2">
                  Our Service</h3>
                  <AnimatedShinyText>
                    <span>
                      We retain ownership of the service and its original
                      content, features, and functionality.
                    </span>
                    <ul className="list-disc list-inside  space-y-2 ml-4">
                      <li><AnimatedShinyText>
                      Gitfolio and its original content, features, and functionality are owned by us.</AnimatedShinyText></li>
                      <li><AnimatedShinyText>Our service is protected by copyright, trademark, and other intellectual property laws</AnimatedShinyText></li>
                      <li><AnimatedShinyText>You may not copy, modify, or distribute our proprietary code or design elements</AnimatedShinyText></li>
                    </ul>
                  </AnimatedShinyText>
                </div>
                <div>
                  <h3 className="text-lg font-medium  mb-2">Generated Portfolios</h3>
                  <AnimatedShinyText>
                    <span>
                      Your generated portfolio websites are your own creations and are not owned by us.
                    </span>
                    <ul className="list-disc list-inside  space-y-2 ml-4">
                      <li><AnimatedShinyText>Portfolio websites generated by our service belong to you</AnimatedShinyText></li>
                      <li><AnimatedShinyText>You may use, modify, and distribute your generated portfolio as you see fit</AnimatedShinyText></li>
                      <li><AnimatedShinyText>We retain no ownership rights over your generated portfolio websites</AnimatedShinyText></li>
                    </ul>
                  </AnimatedShinyText>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold  mb-4">
                6. Service Availability
              </h2>
              <div className="space-y-2">
                    <div>
                        <h3 className="font-medium  mb-2 text-lg">
                        Current Service Level
                        </h3>
                        <AnimatedShinyText>
                            <span>
                            We strive to provide our service with the highest level of availability. However, due to the nature of the internet and the services we rely on, there may be temporary disruptions or outages. We will do our best to notify you of any issues or delays, but we cannot guarantee a perfect service.
                            </span>
                            </AnimatedShinyText>
                    </div>
                    <div>
                        <h3 className="font-medium  mb-2 text-lg">Service Modifications</h3>
                        <AnimatedShinyText>
                            <span>
                            We reserve the right to modify, suspend, or discontinue our service,We will provide reasonable notice of any material changes to the service.

                            </span>
                        </AnimatedShinyText>
                    </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold  mb-4">7. Termination</h2>
              <AnimatedShinyText>
                <span className=" leading-relaxed">
                  We reserve the right to terminate or suspend your account and
                  access to the service at any time, for any reason, without
                  notice. We will provide reasonable notice of any termination or
                  suspension.
                </span>
              </AnimatedShinyText>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold  mb-4">8. Disclaimers</h2>
              <AnimatedShinyText>
                <span className=" leading-relaxed">
                  The information on this service is provided on an "as is"
                  basis. To the fullest extent permitted by law, this Company
                  excludes all representations, warranties, conditions and terms
                  whether express or implied.
                </span>
              </AnimatedShinyText>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold  mb-4">
                9. Limitation of Liability
              </h2>
              <AnimatedShinyText>
                <span className=" leading-relaxed">
                  In no event shall GitFolio, nor its directors,
                  employees, partners, agents, suppliers, or affiliates, be
                  liable for any indirect, incidental, special, consequential,
                  or punitive damages arising out of your use of the service.
                </span>
              </AnimatedShinyText>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold  mb-4">10. Governing Law</h2>
              <AnimatedShinyText>
                <span className=" leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Maharashtra, India.
                </span>
              </AnimatedShinyText>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold  mb-4">
                11. Changes to Terms
              </h2>
              <AnimatedShinyText>
                <span className=" leading-relaxed">
                  We reserve the right to modify or replace these Terms at any
                  time. If a revision is material, we will provide at least 30
                  days notice prior to any new terms taking effect.
                </span>
              </AnimatedShinyText>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
