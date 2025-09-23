import { Request, Response } from "express";
import {
  createOrder,
  createSubscription,
  verifyPaymentSignature,
} from "../Services/razorpay.service";
import { getTemplateDetails } from "../Services/dashboard.service";
export const createOrderColtroller = async (req: Request, res: Response) => {
  try {
    const { templateName, currency } = req.body;
    const userId = req.auth?.userId;
    if (!userId) {
      res.send(401).json({ status: false, message: "Unauthorized" });
      return;
    }
    if (!templateName) {
      res.status(400).json({ status: false, message: "Invalid Parameters" });
      return;
    }
    const templateData = await getTemplateDetails(templateName);
    if (!templateData) {
      res.status(404).json({ status: false, message: "No template found." });
      return;
    } else if (templateData.category == "Free") {
      res
        .status(200)
        .json({ status: false, message: "Order Failed , Free Template!" });
      return;
    }
    const order = await createOrder(
      {
        amount:
          currency == "USD" ? templateData.USDpricing : templateData.INRpricing,
        currency,
        template_id: templateData.id,
      },
      userId
    );
    order
      ? res.status(201).json({
          status: true,
          message: "Order Created.",
          data: {
            order_id: order.id,
            amount: order.amount,
            currency: order.currency,
            receipt: order.receipt,
          },
        })
      : res.status(200).json({ status: false, message: "Order Failed" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

export const verifyPaymentSignatureController = async (
  req: Request,
  res: Response
) => {
  try {
    const { orderId, rzp_payment_id, rzp_signature } = req.body;
    const userId = req.auth?.userId;
    if (!userId) {
      res.send(401).json({ status: false, message: "Unauthorized" });
      return;
    }
    if (!orderId || !rzp_payment_id || !rzp_signature) {
      res.send(400).json({ status: false, message: "Invalid Parameters" });
      return;
    }
    const isVerified = await verifyPaymentSignature(
      {
        orderId,
        rzp_payment_id,
        rzp_signature,
      },
      userId
    );
    if (isVerified) {
      res.status(200).json({ status: true, message: "Payment Verified." });
      return;
    } else {
      res.status(403).json({ status: false, message: "Payment not Verified." });
      return;
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

// export const createSubscriptionController = async (
//   req: Request,
//   res: Response
// ) => {
//   try {

//     const sub = await createSubscription();
//     sub
//       ? res.status(201).json({
//           status: true,
//           message: "Sub created",
//           data: {
//             sub_id: sub.id,
//             plan_id: sub.plan_id,
//             status: sub.status,
//           },
//         })
//       : res.status(400).json({ status: false, message: "Sub creation Failed" });
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({ status: false, message: "Internal Server Error" });
//   }
// };
