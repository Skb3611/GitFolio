import { Request, Response } from "express";
import { processClerkWebhook } from "../Services/clerk.service";

export const webhookController = async (req: Request, res: Response) => {
  try {
    const event = req.body;
    const result = await processClerkWebhook(event);
    result
      ? res.json({success: true, message: "Webhook processed successfully", }) .status(200)
      : res.json({ success: false, message: "Webhook processing failed" }).status(400);
  } catch (error) {
    console.log(error);
    res.json({ succsess: false, message: "Internal server error" }).status(500);
  }
};
