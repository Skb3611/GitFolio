import { Queue, Worker } from "bullmq";
import IORedis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export const connection = new IORedis(process.env.REDIS_URL || "", {
  maxRetriesPerRequest: null,
});

export const emailQueue = new Queue("email-queue", {
  connection,
  defaultJobOptions: {
    removeOnComplete: true,
    removeOnFail: false,
  },
});

// Worker creator utility
export const createEmailWorker = (handler: any) =>
  new Worker("email-queue", handler, {
    connection,
    // Stops orphaned job issues (replacement for QueueScheduler)
    useWorkerThreads: false,
    limiter: {
      max: 1,
      duration: 1000,
    },
  });
