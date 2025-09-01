import { Router } from "express";
import { ClerkwebhookController,RazorpayWebhookController } from "../../Controllers/webhook.controller";

const router: Router = Router();

router.post("/clerk",ClerkwebhookController)
router.post("/razorpay",RazorpayWebhookController)

export default router;