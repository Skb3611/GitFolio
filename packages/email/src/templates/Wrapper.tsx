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


export const Wrapper = ({children}:{children:React.ReactNode}) => {
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
        <Body className="bg-offwhite font-sans text-base">
          <Img
            src={`${config.URLS.site_url}/assets/brand-light.png`}
            alt="Netlify"
            className="mx-auto my-20 object-cover w-[50%]"
          />
          <Container className="bg-white p-45">
            <Heading className="my-0 text-center leading-8">
              Welcome to GitFolio
            </Heading>

            {children}
            <Section className="text-center mt-10">
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


export default Wrapper;
