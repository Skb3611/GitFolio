import React from "react";
import Wrapper from "./Wrapper";
import {
  Button,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { config } from "../config";
const TemplateActivationReminderEmail = ({name}:{name:string}) => {
  return (
    <Wrapper>
      <Preview>Activte a Template</Preview>
      <Section>
        <Row>
          <Text className="text-base font-semibold">
            Thanks for joining GitFolio! Activte a template and make your
            portfolio visible !
          </Text>
        </Row>
      </Section>
      <Section>
        <Text className="font-medium m-0">Hello {name},</Text>
        <Text className="m-0 font-medium">
          You’re almost there! Just finish filling in your details so your
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
        <Link href={`${config.URLS.site_url}/onboarding`}>
          <Button className="rounded-md bg-black px-[18px] py-3 text-white">
            Visit DashBoard
          </Button>
        </Link>
      </Section>
    </Wrapper>
  );
};

export default TemplateActivationReminderEmail;
