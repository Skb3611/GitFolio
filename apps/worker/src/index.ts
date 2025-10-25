// apps/worker/index.ts
import dotenv from "dotenv";
import { createEmailWorker } from "@workspace/email/queue";
import { sendEmail } from "@workspace/email";

dotenv.config();

createEmailWorker(async (job: any) => {
  const { email, name, type } = job.data;

  console.log("Sending email to", email);

  const result = await sendEmail(name, email, type);

  console.log("Sent!", result);
});
