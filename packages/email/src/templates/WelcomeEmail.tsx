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
import { Icons } from "@workspace/ui/icons";
import { config } from "src/config";

interface NetlifyWelcomeEmailProps {
  steps: {
    id: number;
    Description: React.ReactNode;
  }[];
  links: {
    title: string;
    href: string;
  }[];
}

const baseUrl = `http://localhost:3000`;

export const WelcomeEmail = () => {
  return (
    <Html>
      <Head />
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
        <Preview>GitFolio Welcome</Preview>
        <Body className="bg-offwhite font-sans text-base">
          <Img
            src={`${baseUrl}/assets/brand-light.png`}
            alt="Netlify"
            className="mx-auto my-20 object-cover "
          />
          <Container className="bg-white p-45">
            <Heading className="my-0 text-center leading-8">
              Welcome to GitFolio
            </Heading>

            <Section>
              <Row>
                <Text className="text-base font-semibold">
                  Thanks for joining GitFolio! Let's build your developer
                  portfolio
                </Text>
              </Row>
            </Section>

            <Section>
              <Text className="font-medium m-0">Hi SKB,</Text>
              <Text className="m-0 font-medium">
                Welcome to GitFolio! 🎉 We're excited to have you onboard.
              </Text>
              <Text className="font-medium">With GitFolio, you can:</Text>

              <ul className="list-outside list-none">
                <li>
                  🚀 Instantly create a professional portfolio from your GitHub
                  projects
                </li>
                <li>🎨 Choose from modern, developer-friendly templates</li>
                <li>🌐 Share your work with the world in just a few clicks</li>
              </ul>
              <Row>
                👉 Next step: Log in to your dashboard and set up your first
                portfolio.
              </Row>
            </Section>

            <Section className="text-center">
              <Link href={`${baseUrl}/dashboard`}>
                <Button className="rounded-md bg-black px-[18px] py-3 text-white">
                  Visit Dashboard
                </Button>
              </Link>
            </Section>
            <Section className="text-center mt-10">
              <table className="w-full">
                <tr className="w-full">
                  <td align="center">
                    <Img
                      alt="React Email logo"
                      height="42"
                      src={`${baseUrl}/assets/brand-light.png`}
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
                      <Column className="pr-[8px]">
                        <Link href={config.social_links.x}>
                          <Icons.twitter className="size-5 text-black"/>
                        </Link>
                      </Column>
                      <Column className="pr-[8px]">
                        <Link href={config.social_links.linkedin}>
                          <Icons.linkedin className="size-5 text-black"/>
                        </Link>
                      </Column>
                      <Column className="pr-[8px]">
                        <Link href={config.social_links.github}>
                          <Icons.github className="size-5 text-black"/>
                        </Link>
                      </Column>
                      <Column>
                        <Link href={config.social_links.peerlist}>
                          <Icons.peerlist className="size-5 text-black"/>
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


export default WelcomeEmail;
