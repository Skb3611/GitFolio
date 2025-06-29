import { Router } from "express";
import { webhookController } from "../../Controllers/webhook.controller";

const router: Router = Router();

router.post("/",webhookController)

export default router;