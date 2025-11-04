"use client";
import { config } from "@/config";
import { useAuth } from "@clerk/nextjs";
import { Button } from "@workspace/ui/components/button";
import Script from "next/script";
import React from "react";

const PaymentPage = () => {
  const { getToken } = useAuth();
  const handlePayment = async () => {
    const res = await fetch(config.server_endpoints.RAZORPAY_ORDER, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${await getToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ templateName: "DevPro", currency: "INR" }),
    });
    const order = await res.json();
    // 2. Open Razorpay Checkout
    if (order) {
      const options = {
        key: "rzp_test_R8jPShueKFRyNr", // from Dashboard
        //   subscription_id:"sub_R8uquiqqgzYZqJ",`
        //   currency: "",
        name: "GitFolio SUB",
        description: "Purchase Template",
        order_id: order.data.order_id,
        // amount:order.amount,
        // currency:order.data.currency,
        handler: async function (response: any) {
          await fetch(config.server_endpoints.RAZORPAY_VERIFY, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${await getToken()}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              orderId: response.razorpay_order_id,
              rzp_payment_id: response.razorpay_payment_id,
              rzp_signature: response.razorpay_signature,
            }),
          });
        },
      };

      const rzp1 = new (window as any).Razorpay(options);
      rzp1.open();
    }
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      <div className="h-screen w-screen flex justify-center items-center">
        <Button onClick={handlePayment}>Open Payment</Button>
      </div>
    </>
  );
};

export default PaymentPage;
