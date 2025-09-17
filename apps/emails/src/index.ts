import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";
import {
  rednerWelcomeEmail,
  renderOnBoardingEmail,
  renderTemplateActivationReminderEmail,
} from "@workspace/email";
import prisma from "@workspace/db";
dotenv.config();
const resend = new Resend(process.env.RESEND_API_KEY);
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  let a = await resend.emails.send({
    from: "GitFolio <notify@updates.gitfolio.in>",
    to: "dhumalomkar233@gmail.com",
    subject: "Welcome Email",
    html: await renderTemplateActivationReminderEmail("Omkar"),
  });
  res.send(a);
});

app.listen(8000, () => console.log("app running"));

const onBoardingReminder = async () => {
  try {
    const users = await prisma.user.findMany({
      where: {
        onBoardingStatus: false,
      },
    });
    console.log(users);
    await Promise.all(
      users.map((user) => sendEmail(user.firstname, user.email, "onboarding"))
    );
  } catch (e) {
    console.log(e);
  }
};

const templateActivationReminder = async () => {
  const users = await prisma.user.findMany({
    where: { activeTemplateId: null },
  });
  for (const user of users) {
    try {
      let a = await sendEmail(user.firstname, user.email, "template_reminder");
      console.log(a);
    } catch (e) {
      console.log(e);
    }
  }
};

type EmailType = "welcome" | "onboarding" | "template_reminder";
const sendEmail = async (name: string, email: string, type: EmailType) => {
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
