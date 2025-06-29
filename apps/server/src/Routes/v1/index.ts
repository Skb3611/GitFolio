import { Router } from "express";
import webhookRouter from "./webhook.route";
import dashboardRouter from "./dashboard.route";
import { authMiddleware } from "../../middleware/authMiddleware";
import { RequestHandler } from "express";
const router:Router = Router();
router.use("/webhook", webhookRouter);
router.use("/dashboard", authMiddleware as RequestHandler, dashboardRouter);
export default router;