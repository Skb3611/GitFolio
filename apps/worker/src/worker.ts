import { createEmailWorker } from "@workspace/email/queue";
import { sendEmail } from "@workspace/email";
import dotenv from "dotenv";
dotenv.config();

createEmailWorker(async (job: any) => {
  console.log("Worker Created for job", job.id);
  const { email, name, type } = job.data;

  console.log("Sending email to", email);
  try {
    const result = await sendEmail(name, email, type);
  } catch (e) {
    console.log("Failed to send email to", email, e);
  }
});
