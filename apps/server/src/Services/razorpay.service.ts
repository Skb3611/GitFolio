import Razorpay from "razorpay";
import { config } from "../config";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import crypto from "crypto";
import prisma, { PaymentStatus } from "@workspace/db";
import { clerkClient } from "./onboarding.service";

// console.log(config.RAZORPAY_KEY_ID)
const rzp = new Razorpay({
  key_id: config.RAZORPAY_KEY_ID,
  key_secret: config.RAZORPAY_KEY_SECRET,
});
type OrderOptions = {
  amount: number;
  currency: "USD" | "INR";
  template_id: string;
};
type VerifyPaymentOptions = {
  orderId?: string;
  subscriptionId?: string;
  rzp_payment_id: string;
  rzp_signature: string;
};

export const createOrder = async (options: OrderOptions, userId: string) => {
  try {
    const order = await rzp.orders.create({
      amount: options.amount * 100,
      currency: options.currency,
      receipt: `receipt_${Date.now()}`,
      notes: { userId, templateId: options.template_id },
    });
    if (order) {
      await prisma.payments.create({
        data: {
          userId: userId,
          amount: Number(order.amount),
          currency: order.currency,
          templateId: options.template_id || null,
          orderId: order.id,
        },
      });
      return order;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const verifyPaymentSignature = async (
  options: VerifyPaymentOptions,
  userId: string
) => {
  try {
    if (!options.orderId) throw Error("No orderId passed");
    const generatedSignature = crypto
      .createHmac("SHA256", config.RAZORPAY_KEY_SECRET!)
      .update(options.orderId + "|" + options.rzp_payment_id)
      .digest("hex");
    if (generatedSignature != options.rzp_signature) {
      return false;
    }
    const isValid = validatePaymentVerification(
      {
        order_id: options.orderId,
        payment_id: options.rzp_payment_id,
      },
      generatedSignature,
      config.RAZORPAY_KEY_SECRET!
    );
    if (isValid) {
      await prisma.payments.update({
        where: {
          userId_orderId: {
            userId: userId,
            orderId: options.orderId,
          },
        },
        data: {
          paymentId: options.rzp_payment_id,
        },
      });
    }
    return isValid;
  } catch (e) {
    console.log(e);
  }
};

export const createSubscription = async (userId: string) => {
  try {
    const sub = await rzp.subscriptions.create({
      plan_id: config.SUB_PLAN_ID!,
      total_count: 12,
      customer_notify: 1,
      notes: { userId },
    });
    sub
      ? await prisma.subscriptions.create({
          data: {
            userId: userId,
            plan: config.SUB_PLAN_ID!,
          },
        })
      : null;
    return sub;
  } catch (e) {
    console.log(e);
  }
};

export const verifySubscription = async (
  options: VerifyPaymentOptions,
  userId: string
) => {
  try {
    if (!options.subscriptionId) return Error("No subscription id passed");
    const generatedSignature = crypto
      .createHmac("SHA256", config.RAZORPAY_KEY_SECRET!)
      .update(options.subscriptionId + "|" + options.rzp_payment_id)
      .digest("hex");
    if (generatedSignature != options.rzp_signature) {
      return false;
    }
    await prisma.subscriptions.update({
      where: {
        userId_razorpaySubscriptionId: {
          userId: userId,
          razorpaySubscriptionId: options.subscriptionId,
        },
      },
      data: {
        status: "PENDING_VERIFICATION",
        paymentRef: options.rzp_payment_id,
      },
    });
    return true;
  } catch (e) {
    console.log(e);
  }
};

export const RZPWebhook = async (
  webhookBody: any,
  webhookSignature: string
) => {
  try {
    const generatedSignature = crypto
      .createHmac("SHA256", config.RAZORPAY_WEBHOOK_SECRET!)
      .update(JSON.stringify(webhookBody))
      .digest("hex");
    const isVerified = generatedSignature == webhookSignature;
    console.log(isVerified);
    if (!isVerified) {
      console.log("Not a valid Webhook");
    } else {
      switch (webhookBody.event) {
        case "payment.captured": {
          const paymentEntity = webhookBody.payload.payment.entity;
          await prisma.payments.update({
            where: {
              userId_orderId: {
                orderId: paymentEntity.order_id,
                userId: paymentEntity.notes.userId,
              },
            },
            data: {
              paymentId: paymentEntity.id,
              status: PaymentStatus.SUCCESS,
              metadata: {
                method: paymentEntity.method,
              },
            },
          });
          const temp = await prisma.userTemplate.create({
            data: {
              userId: paymentEntity.notes.userId,
              templateId: paymentEntity.notes.templateId,
            },
            include:{
              template:true
            }
          });
          const user = await clerkClient.users.getUser(
            paymentEntity.notes.userId
          );

          const currentTemplates =
            (user.publicMetadata.purchasedTemplates as string[]) || [];

          // Step 2: Merge with the new template (avoid duplicates if you want)
          const updatedTemplates = Array.from(
            new Set([...currentTemplates, temp.template.title])
          );

          // Step 3: Update metadata
          await clerkClient.users.updateUserMetadata(
            paymentEntity.notes.userId,
            {
              publicMetadata: {
                purchasedTemplates: updatedTemplates,
              },
            }
          );
          break;
        }
        case "payment.failed":
          {
            const paymentEntity = webhookBody.payload.payment.entity;
            await prisma.payments.update({
              where: {
                userId_orderId: {
                  userId: paymentEntity.notes.userId,
                  orderId: paymentEntity.order_id,
                },
              },
              data: {
                status: PaymentStatus.FAILED,
                paymentId: paymentEntity.id,
                metadata: {
                  error_code: paymentEntity.error_code,
                  error_description: paymentEntity.error_description,
                  error_reason: paymentEntity.error_reason,
                },
              },
            });
          }
          break;
        // case "subscription.authenticated":
        //   console.log(
        //     "Subscription authenticated:",
        //     webhookBody.payload.subscription.entity.id
        //   );
        //   // Mark subscription as pending in DB
        //   break;

        // case "subscription.activated":
        //   console.log(
        //     "Subscription activated:",
        //     webhookBody.payload.subscription.entity.id
        //   );
        //   // Activate Pro features in DB
        //   break;

        // case "subscription.charged":
        //   console.log(
        //     "Subscription charged:",
        //     webhookBody.payload.subscription.entity.id
        //   );
        //   // Extend subscription validity in DB
        //   break;

        // case "subscription.halted":
        //   console.log(
        //     "Subscription halted:",
        //     webhookBody.payload.subscription.entity.id
        //   );
        //   // Mark subscription as paused
        //   break;

        // case "subscription.cancelled":
        //   console.log(
        //     "Subscription cancelled:",
        //     webhookBody.payload.subscription.entity.id
        //   );
        //   // Revoke Pro features at end of billing cycle
        //   break;

        // 🔑 Payment related events (important for failures)

        case "refund.processed":
          console.log(
            "Refund processed:",
            webhookBody.payload.refund.entity.id
          );
          break;
      }
    }
  } catch (e) {
    console.log(e);
  }
};

// export const createPlan = async () => {
//   try {
//     // await rzp.plans.create({
//     //   item: {
//     //     name: "GitFolio Pro",
//     //     currency: "INR",
//     //     amount: 29900,
//     //     description:"Build your perfect developer portfolio with GitFolio. Unlock premium features to showcase your work professionally."
//     //   },
//     //   period: "monthly",
//     //   interval: 1,
//     // });
//     await rzp.plans.create({
//       item: {
//         name: "GitFolio Pro",
//         currency: "USD",
//         amount: 399,
//         description:"Build your perfect developer portfolio with GitFolio. Unlock premium features to showcase your work professionally."
//       },
//       period: "monthly",
//       interval: 1,
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };
