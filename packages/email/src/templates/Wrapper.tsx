import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  pixelBasedPreset,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import type * as React from "react";
import { config } from "../config";

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Html>
      <Head>
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
      </Head>
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
          theme: {
            extend: {
              colors: {
                brand: "#2250f4",
                offwhite: "#fafbfb",
              },
              spacing: {
                0: "0px",
                20: "20px",
                45: "45px",
              },
            },
          },
        }}
      >
        <Body
          className="force-light font-sans text-base"
          style={{
            backgroundColor: "white",
          }}
        >
          <Img
            src={`${config.URLS.site_url}/assets/brand-dark.png`}
            alt="GitFolio"
            className="mx-auto my-20 object-cover w-[35%] brand-logo"
          />

          <Container
            className=" force-light p-45"
            style={{
              backgroundColor: "white",
            }}
          >
            <Heading className="my-0 text-center leading-8">
              Welcome to GitFolio
            </Heading>

            {children}
            <Section
              style={{
                backgroundColor: "white",
              }}
              className="text-center mt-10"
            >
              <table className="w-full">
                <tr className="w-full">
                  <td align="center">
                    <Img
                      alt="React Email logo"
                      height="42"
                      src={`${config.URLS.site_url}/assets/brand-light.png`}
                    />
                  </td>
                </tr>
                <tr className="w-full">
                  <td align="center">
                    <Text className="mt-[4px] mb-0 text-[16px] text-gray-500 leading-[24px]">
                      From GitHub to Greatness
                    </Text>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <Row className="table-cell h-[44px] w-[56px] align-bottom">
                      <Column className="pr-[8px] w-full h-full">
                        <Link href={config.social_links.x}>
                          <Img
                            className="size-7"
                            src={`${config.URLS.site_url}/icons/x.png`}
                          />
                        </Link>
                      </Column>
                      <Column className="pr-[8px] w-full h-full">
                        <Link
                          href={config.social_links.linkedin}
                          className="w-full h-full"
                        >
                          <Img
                            className="size-7"
                            src={`${config.URLS.site_url}/icons/linkedin.png`}
                          />
                        </Link>
                      </Column>
                      <Column className="pr-[8px] w-full h-full">
                        <Link href={config.social_links.github}>
                          <Img
                            className="size-7"
                            src={`${config.URLS.site_url}/icons/github-black.png`}
                          />
                        </Link>
                      </Column>
                    </Row>
                  </td>
                </tr>
              </table>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Wrapper;
