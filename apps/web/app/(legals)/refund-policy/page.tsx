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
              Refund Policy ( Digital Services )
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
                Refund Policy
              </SplitTextAnimation>
              <AnimatedShinyText className="text-sm sm:text-base">
                <SplitTextAnimation
                  duration={0.8}
                  staggerDelay={0.01}
                  whileInView
                  className=" leading-relaxed"
                >
                  At GitFolio, we provide digital services and templates that
                  are accessible immediately upon purchase. Because of the
                  nature of digital products, all sales are final and we do not
                  issue refunds once a purchase has been completed.
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
                However, exceptions may be made in the following cases:
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
                      You were charged twice for the same purchase.
                    </SplitTextAnimation>
                  </AnimatedShinyText>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation
                      duration={0.8}
                      staggerDelay={0.01}
                      as="li"
                      whileInView
                    >
                      You did not receive access to the purchased template/plan
                      due to a technical issue.
                    </SplitTextAnimation>
                  </AnimatedShinyText>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation
                      duration={0.8}
                      staggerDelay={0.01}
                      as="li"
                      whileInView
                    >
                      Any other valid payment error at our discretion.
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
                How To Request
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
                      Email refund request at gitfolio.com@gmail.com
                    </SplitTextAnimation>
                  </AnimatedShinyText>
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation
                      duration={0.8}
                      staggerDelay={0.01}
                      as="li"
                      whileInView
                    >
                      Include order/transaction ID and reason for refund.
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
                  <AnimatedShinyText className="text-sm sm:text-base">
                    <SplitTextAnimation
                      duration={0.8}
                      staggerDelay={0.01}
                      as="li"
                      whileInView
                    >
                      All approved refunds will be credited back to your
                      original payment method within 7 - 10 business days
                      (processing times may vary depending on your bank/payment
                      provider).
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
                  Please note: Refunds will not be issued for reasons such as
                  change of mind, incorrect purchase, or lack of usage of the
                  product after successful delivery.
                </SplitTextAnimation>
              </AnimatedShinyText>
            </div>
            <ContactIcons/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
