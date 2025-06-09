import { Router } from "express";
import webhookRouter from "./webhook.route";
const router = Router();
router.use("/webhook", webhookRouter);
export default router;