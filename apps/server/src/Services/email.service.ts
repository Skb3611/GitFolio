import cron from "node-cron";
import { sendEmail } from "@workspace/email";
import prisma from "@workspace/db";

// 🕒 Schedule a task to run every 2 days at 9 AM
cron.schedule("0 9 */2 * *", async () => {
  console.log("📅 Running 2-day email scheduler...");

  const users = await prisma.user.findMany({});
  const onBoardingUsers = users.filter(
    (user) => user.onBoardingStatus == false
  );
  const templateUsers = users.filter((user) => !user.activeTemplateId);
  onBoardingUsers.forEach((user, i) => {
    setTimeout(async () => {
      try {
        await sendEmail(user.firstname, user.email, "onboarding");
        console.log(`✅ Email sent to ${user.email}`);
      } catch (e) {
        console.log(`❌ Error sending email to ${user.email}:`, e);
      }
    }, i * 1000);
  });
  templateUsers.forEach((user, i) => {
    setTimeout(async () => {
      try {
        await sendEmail(user.firstname, user.email, "template_reminder");
        console.log(`✅ Email sent to ${user.email}`);
      } catch (e) {
        console.log(`❌ Error sending email to ${user.email}:`, e);
      }
    }, i * 1000);
  });

  console.log("✅ All scheduled emails sent.");
});
