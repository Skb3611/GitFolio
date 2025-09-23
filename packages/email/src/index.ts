import WelcomeEmail from "./templates/WelcomeEmail";
import OnBoardingEmail from "./templates/OnboardingEmail";
import TemplateActivationReminderEmail from "./templates/TemplateActivationReminderEmail";
import { render } from "@react-email/components";
import {Resend} from "resend"
import dotenv from "dotenv"
dotenv.config()

type EmailType = "welcome" | "onboarding" | "template_reminder";
const resend = new Resend(process.env.RESEND_API_KEY)

export const rednerWelcomeEmail = (name: string) =>render(WelcomeEmail({ name }));
export const renderOnBoardingEmail = (name: string) =>render(OnBoardingEmail({ name }));
export const renderTemplateActivationReminderEmail = (name: string) =>render(TemplateActivationReminderEmail({ name }));

export const sendEmail = async (name: string, email: string, type: EmailType) => {
  let subject, template;
  switch (type) {
    case "welcome":
      subject = "Welcome to GitFolio";
      template = rednerWelcomeEmail;
      break;
    case "onboarding":
      subject = "Complete OnBoarding Process";
      template = renderOnBoardingEmail;
      break;
    case "template_reminder":
      subject = "Active a Template";
      template = renderTemplateActivationReminderEmail;
      break;
  }
  return await resend.emails.send({
    from: "GitFolio <notify@updates.gitfolio.in>",
    to: email,
    subject: subject,
    html: await template(name),
  });
};