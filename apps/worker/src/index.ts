// apps/worker/index.ts
import dotenv from "dotenv";
import { createEmailWorker } from "@workspace/email/queue";
import { sendEmail } from "@workspace/email";
import express from "express";
dotenv.config();

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Worker is running");
});
app.listen(3000, () => {
  console.log("Worker is running on port 3000");
});

createEmailWorker(async (job: any) => {
  const { email, name, type } = job.data;

  console.log("Sending email to", email);

  const result = await sendEmail(name, email, type);

  console.log("Sent!", result);
});
