import express from "express";
import "./worker";
import { emailQueue } from "@workspace/email/queue";

const app = express();
app.use(express.json());
app.get("/", async(req, res) => {
  const count = await emailQueue.getJobCounts()
  res.send(`Worker is running, ${count} jobs in queue`);
});
app.listen(3000, () => {
  console.log("Worker is running on port 3000");
});
