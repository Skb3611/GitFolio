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

const WelcomeEmail = ({ name }: { name: string }) => {
  return (
    <Wrapper>
      <Preview>GitFolio Welcome</Preview>
      <Section
      style={{
            backgroundColor:"white"
          }}
      >
        <Row>
          <Text className="text-base font-semibold">
            Thanks for joining GitFolio! Let's build your developer portfolio
          </Text>
        </Row>
      </Section>

      <Section>
        <Text className="font-medium m-0">Hello {name} 👋,</Text>
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

      <Section className="text-center mt-10">
        <Button
          href={`${config.URLS.site_url}/dashboard`}
          target="_blank"
          className="rounded-md bg-black text-white px-[18px] py-3  cursor-pointer btn"
        >
          Visit Dashboard
        </Button>
      </Section>
    </Wrapper>
  );
};

export default WelcomeEmail;
