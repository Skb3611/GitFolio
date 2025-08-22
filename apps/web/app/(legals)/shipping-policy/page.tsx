import { SplitTextAnimation } from "@/components/SplitTextAnimation";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { AnimatedShinyText } from "@workspace/ui/components/magicui/animated-shiny-text";
import React from "react";
import ContactIcons from "@/components/Legals/Contact"

const page = () => {
  return (
    <div className="relative w-full min-h-screen p-0">
      <div className="p-8 py-10 mx-auto max-w-5xl z-10">
        <div className="my-10">
          <div className="mb-8">
            <SplitTextAnimation
              duration={0.8}
              staggerDelay={0.01}
              whileInView
              className="text-3xl font-bold mb-2"
            >
              Shipping Policy (Digital Services)
            </SplitTextAnimation>
            <AnimatedShinyText className="text-sm sm:text-base">
              <SplitTextAnimation
                duration={0.8}
                staggerDelay={0.01}
                whileInView
              >{`Last updated: 22/8/2025`}</SplitTextAnimation>
            </AnimatedShinyText>
          </div>

          <div className="space-y-8">
            <section>
              <SplitTextAnimation
                duration={0.8}
                staggerDelay={0.01}
                whileInView
                className="text-xl font-semibold mb-4"
              >
                Shipping Policy
              </SplitTextAnimation>
              <AnimatedShinyText className="text-sm sm:text-base">
                <SplitTextAnimation
                  duration={0.8}
                  staggerDelay={0.01}
                  whileInView
                  className=" leading-relaxed"
                >
                  At GitFolio, all our offerings are digital products and online
                  services. We do not sell or deliver any physical goods.
                </SplitTextAnimation>
              </AnimatedShinyText>
            </section>
            <Separator />
            <section>
              <SplitTextAnimation
                duration={0.8}
                staggerDelay={0.01}
                whileInView
                className="text-xl font-semibold mb-4"
              >
                Delivery Process:
              </SplitTextAnimation>
              <AnimatedShinyText className="text-sm sm:text-base">
                <ul className="list-disc list-inside  space-y-2 ml-4">
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation
                      duration={0.8}
                      staggerDelay={0.01}
                      as="li"
                      whileInView
                    >
                      Once your payment is confirmed, the purchased
                      template/plan will be instantly available through your
                      GitFolio account dashboard.
                    </SplitTextAnimation>
                  </AnimatedShinyText>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation
                      duration={0.8}
                      staggerDelay={0.01}
                      as="li"
                      whileInView
                    >
                      A confirmation email containing the transaction details
                      and access instructions will also be sent to the
                      registered email address.
                    </SplitTextAnimation>
                  </AnimatedShinyText>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation
                      duration={0.8}
                      staggerDelay={0.01}
                      as="li"
                      whileInView
                    >
                      In rare cases, delivery may take up to 1-2 hours due to
                      server delays or payment gateway confirmation issues.
                    </SplitTextAnimation>
                  </AnimatedShinyText>
                </ul>
              </AnimatedShinyText>
            </section>
            <Separator />
            <section>
              <SplitTextAnimation
                duration={0.8}
                staggerDelay={0.01}
                whileInView
                className="text-xl font-semibold mb-4"
              >
                No Physical Shipping:
              </SplitTextAnimation>
              <AnimatedShinyText className="text-sm sm:text-base">
                <ul className="list-decimal list-inside  space-y-2 ml-4">
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation
                      duration={0.8}
                      staggerDelay={0.01}
                      as="li"
                      whileInView
                    >
                      Since our services are fully digital, no shipping charges
                      apply.
                    </SplitTextAnimation>
                  </AnimatedShinyText>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation
                      duration={0.8}
                      staggerDelay={0.01}
                      as="li"
                      whileInView
                    >
                      Customers are not required to provide a physical shipping
                      address at any point during the purchase.
                    </SplitTextAnimation>
                  </AnimatedShinyText>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation
                      duration={0.8}
                      staggerDelay={0.01}
                      as="li"
                      whileInView
                    >
                      Provide screenshot of issue (if technical problem)
                    </SplitTextAnimation>
                  </AnimatedShinyText>
                </ul>
              </AnimatedShinyText>
            </section>
            <div className="space-y-2">
              <AnimatedShinyText className="text-sm sm:text-lg font-semibold">
                <SplitTextAnimation
                  duration={0.8}
                  staggerDelay={0.01}
                  as="p"
                  whileInView
                >
                  If you face any difficulty in accessing your purchased plan or
                  template, please contact us at gitfolio.com@gmail.com. Our
                  support team will assist you in resolving the issue promptly.
                </SplitTextAnimation>
              </AnimatedShinyText>
            <ContactIcons/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
