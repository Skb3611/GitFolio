import WelcomeEmail from "./templates/WelcomeEmail";
import OnBoardingEmail from "./templates/OnboardingEmail";
import TemplateActivationReminderEmail from "./templates/TemplateActivationReminderEmail";
import { render } from "@react-email/components";

export const rednerWelcomeEmail = (name: string) =>render(WelcomeEmail({ name }));
export const renderOnBoardingEmail = (name: string) =>render(OnBoardingEmail({ name }));
export const renderTemplateActivationReminderEmail = (name: string) =>render(TemplateActivationReminderEmail({ name }));
