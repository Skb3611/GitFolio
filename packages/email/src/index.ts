import { Resend } from "resend";
import WelcomeEmail from "./templates/WelcomeEmail";
import OnBoardingEmail from "./templates/OnboardingEmail";
import TemplateActivationReminderEmail from "./templates/TemplateActivationReminderEmail";
const resend = new Resend();
type EmailType = "welcome" | "onboarding" | "template_activation";
export const SendEmail = async (
  type: EmailType,
  name: string,
  email: string
) => {
  const emailDetails = getEmailDetails(type);
  await resend.emails.send({
    from: "updates.gitfolio.in",
    to: email,
    subject: `GitFolio - ${emailDetails.subject}`,
    react: emailDetails.template({ name }),
  });
};

const getEmailDetails = (type: EmailType) => {
  switch (type) {
    case "welcome":
      return { subject: "Welcome User", template: WelcomeEmail };
    case "onboarding":
      return {
        subject: "Complete OnBoarding Process",
        template: OnBoardingEmail,
      };
    case "template_activation":
      return {
        subject: "Activate your Template",
        template: TemplateActivationReminderEmail,
      };
  }
};
(async()=>{

    await SendEmail("welcome","SKB","binod.58902@gmail.com")
})()