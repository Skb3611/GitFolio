import { Router } from "express";
import { createOrderColtroller, verifyPaymentSignatureController } from "../../Controllers/razorpay.controller";

const router:Router = Router()

router.post("/create-order",createOrderColtroller)
router.post("/verify-payment",verifyPaymentSignatureController)

export default router 