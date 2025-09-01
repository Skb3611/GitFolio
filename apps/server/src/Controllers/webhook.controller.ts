import { Request, Response } from "express";
import { processClerkWebhook } from "../Services/clerk.service";
import { config } from "../config";
import { RZPWebhook } from "../Services/razorpay.service";
export const ClerkwebhookController = async (req: Request, res: Response) => {
  try {
    const event = req.body;
    const result = await processClerkWebhook(event);
    result
      ? res
          .json({ success: true, message: "Webhook processed successfully" })
          .status(200)
      : res
          .json({ success: false, message: "Webhook processing failed" })
          .status(400);
  } catch (error) {
    console.log(error);
    res.json({ succsess: false, message: "Something went wrong" }).status(500);
  }
};
export const RazorpayWebhookController = async (
  req: Request,
  res: Response
) => {
  try {
    const signature = req.headers["x-razorpay-signature"] as string;
    await RZPWebhook(req.body,signature)
  } catch (e) {
    console.log(e);
  }
};
