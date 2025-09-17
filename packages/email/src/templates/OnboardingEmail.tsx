import {
  Button,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import Wrapper from "./Wrapper";

import React from "react";
import { config } from "../config";

const OnBoardingEmail = ({ name }: { name: string }) => {
  return (
    <Wrapper>
      <Preview>Complete OnBoarding...</Preview>
      <Section
        style={{
          backgroundColor: "white",
        }}
      >
        <Row>
          <Text className="text-base font-semibold">
            Thanks for joining GitFolio! Complete your OnBoarding process to get
            started.
          </Text>
        </Row>
      </Section>

      <Section>
        <Text className="font-medium m-0">Hello {name} 👋,</Text>
        <Text className="m-0 font-medium">
          You're almost there! Just finish filling in your details so your
          portfolio looks complete. It only takes 2 minutes, and then your
          GitFolio site will be ready to share with the world.
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
      </Section>

      <Section className="text-center mt-10">
        <Button
          href={`${config.URLS.site_url}/onboarding`}
          target="_blank"
          className="rounded-md bg-black px-[18px] py-3  cursor-pointer text-white"
        >
          Complete OnBoarding
        </Button>
      </Section>
    </Wrapper>
  );
};

export default OnBoardingEmail;
