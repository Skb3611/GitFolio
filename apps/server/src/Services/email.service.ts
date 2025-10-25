import cron from "node-cron";
import prisma from "@workspace/db";
import { emailQueue } from "@workspace/email/queue";
// 🕒 Schedule a task to run every 2 days at 9 AM
cron.schedule("*/2 * * * *", async () => {
  console.log("📅 Running 2-day email scheduler...");

  const users = await prisma.user.findMany({});
  const onBoardingUsers = users.filter(
    (user) => user.onBoardingStatus == false
  );
  const templateUsers = users.filter((user) => !user.activeTemplateId);
  for (const user of onBoardingUsers) {
    await emailQueue.add("onboarding", {
      name: user.firstname,
      email: user.email,
      type: "onboarding",
    });
  }
  for (const user of templateUsers) {
    await emailQueue.add("template_reminder", {
      name: user.firstname,
      email: user.email,
      type: "template_reminder",
    });
  }

  console.log("✅ All scheduled emails sent.");
});
