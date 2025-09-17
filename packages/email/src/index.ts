import WelcomeEmail from "./templates/WelcomeEmail";
import OnBoardingEmail from "./templates/OnboardingEmail";
import TemplateActivationReminderEmail from "./templates/TemplateActivationReminderEmail";
import { render } from "@react-email/components";
import {Resend} from "resend"

type EmailType = "welcome" | "onboarding" | "template_reminder";
const resend = new Resend("re_cvrvGxDK_9oMkcct3A9a7N3vKzv6cxqWt")

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