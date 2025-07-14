import { Router } from "express";
import webhookRouter from "./webhook.route";
import dashboardRouter from "./dashboard.route";
import { authMiddleware } from "../../middleware/authMiddleware";
import { RequestHandler } from "express";
import S3Router from "./S3.route";

const router:Router = Router();
router.use("/webhook", webhookRouter);
router.use("/dashboard", authMiddleware as RequestHandler, dashboardRouter);
router.use("/s3",authMiddleware as RequestHandler,S3Router)
export default router;