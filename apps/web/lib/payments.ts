import { config } from "@/config";
import { toast } from "@workspace/ui/components/sonner";

export const createOrder = async (
  token: string,
  body: { templateName: string; currency: "INR" | "USD" }
) => {
  try {
    const order = await fetch(config.server_endpoints.RAZORPAY_ORDER, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const res = await order.json();
    return res?.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
export const checkOut = async (
  order_id: string,
  name: string,
  desc: string,
  token: string
) => {
  try {
    const options = {
      key: config.razorpay.key,
      name: "GitFolio",
      description: name + " - " + desc,
      order_id: order_id,
      handler: async function (response: any) {
        await verifyPayment(token, response);
      },
      notes:{
        Template:name,
        Description:desc
      },
    };
    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  } catch (e) {
    console.log(e);
  }
};

export const verifyPayment = async (token: string, response: any) => {
  try {
    const res = await fetch(config.server_endpoints.RAZORPAY_VERIFY, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderId: response.razorpay_order_id,
        rzp_payment_id: response.razorpay_payment_id,
        rzp_signature: response.razorpay_signature,
      }),
    });
    const isVerifed = await res.json();
    isVerifed.status
      ? toast.success("Payment Done !")
      : toast.info(
          "Payment Unverified. Check your dashboard for more details."
        );
  } catch (e) {
    console.log(e);
  }
};
