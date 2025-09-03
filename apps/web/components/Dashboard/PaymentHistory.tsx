"use client";

import type React from "react";

// import useSWR from "swr"
import { useEffect, useMemo, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { config } from "@/config";
import { toast } from "@workspace/ui/components/sonner";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card";
type PaymentStatus = "SUCCESS" | "FAILED" | "PENDING";

type Payment = {
  id: string;
  amount: number;
  currency: "USD" | "INR";
  status: PaymentStatus;
  orderId: string;
  paymentId: string;
  metadata: any;
  createdAt: string;
  updatedAt: string;
  template: {
    id: string;
    title: string;
    category: string;
    USDpricing: number;
    INRpricing: number;
  };
};


export default function PaymentHistoryTable() {
  const [status, setStatus] = useState<PaymentStatus | "All">("All");
  const [q, setQ] = useState("");
  const { getToken } = useAuth();
  const [payments, setPayments] = useState<Payment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile()
  const [selectedPayment, setSelectedPayment] = useState<Payment|null>(null)
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    (async () => {
      const res = await fetch(config.server_endpoints.GET_USER_PAYMENTS, {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      });
      const payments = await res.json();
      if (payments.status != "success") {
        toast.error("Error in fetching payments. Try again Later");
        return;
      }
      setPayments(payments.data);
      setIsLoading(false);
    })();
  }, []);
  const filteredPayments = useMemo(() => {
    return payments.filter((pmt) => {
      const statusMatch = status === "All" || pmt.status === status;
      const queryMatch =
        q.trim() === "" ||
        pmt.template.title.toLowerCase().includes(q.toLowerCase()) ||
        pmt.orderId.toLowerCase().includes(q.toLowerCase()) ||
        (pmt.paymentId || "").toLowerCase().includes(q.toLowerCase());

      return statusMatch && queryMatch;
    });
  }, [payments, q, status]);
const handleOpenModal =(ptm:Payment) => {
  setSelectedPayment(ptm)
  setIsOpen(true)
}

  return (
    <div className="space-y-4 overflow-hidden">
      {/* Controls */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex max-w-full flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative w-full sm:max-w-xs">
            <label htmlFor="search" className="sr-only">
              Search payments
            </label>
            <input
              id="search"
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
              }}
              placeholder="Search by description"
              className="w-full rounded-md border bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="status" className="text-sm text-muted-foreground">
              Status
            </label>
            <select
              id="status"
              value={status}
              onChange={(e) => {
                setStatus(e.target.value as any);
              }}
              className="rounded-md border bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {(["All", "SUCCESS", "FAILED", "PENDING"] as const).map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto no-scrollbar w-full">
        <table className=" text-sm w-full">
          <thead className="bg-secondary/60">
            <tr className="text-left">
              <Th>Date</Th>
              {!isMobile && <>
              <Th>Order ID</Th>
              <Th>Payment ID</Th>
              </>
              }
              <Th>Description</Th>
              <Th className="text-right">Amount</Th>
              <Th>Status</Th>
              {
                !isMobile && <Th>Method</Th>
              }
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td
                  colSpan={7}
                  className="p-6 text-center text-muted-foreground"
                >
                  Loading payments…
                </td>
              </tr>
            ) : filteredPayments.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="p-6 text-center text-muted-foreground"
                >
                  No payments found.
                </td>
              </tr>
            ) : (
              filteredPayments.map((pmt) => (
                <tr key={pmt.id} className="border-b last:border-0" onClick={()=>handleOpenModal(pmt)}>
                  <Td>{new Date(pmt.createdAt).toLocaleDateString()}</Td>
                  {!isMobile && <>
                  <Td>
                    <code className="rounded bg-muted/50 px-1.5 py-0.5 font-mono text-xs">
                      {pmt.orderId}
                    </code>
                  </Td>
                  <Td>
                    <code className="rounded bg-muted/50 px-1.5 py-0.5 font-mono text-xs">
                      {pmt.paymentId || "No payment done"}
                    </code>
                  </Td>
                  </>
                  }
                  <Td className="max-w-[360px] truncate">
                    {pmt.template.title}
                  </Td>
                  <Td className="text-right font-medium">
                    <span className="text-sm text-muted-foreground">
                      {pmt.currency === "INR" ? "₹ " : "$ "}
                    </span>
                    {pmt.amount / 100}
                  </Td>
                  <Td>
                    <StatusPill status={pmt.status} />
                  </Td>
                  {
                    !isMobile && 
                  <Td>{pmt.metadata?.method?.toUpperCase()}</Td>
                  }
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {isMobile && <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
          <DialogTitle>
            Payment Details
          </DialogTitle>
          </DialogHeader>
          <Card className="w-full max-w-xl">
      <CardHeader className="space-y-2">
        <div className="flex items-center justify-between gap-3">
          <div>
            <CardTitle className="text-pretty">{selectedPayment?.template.title}</CardTitle>
            <CardDescription className="text-pretty">Overview of this payment</CardDescription>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">Amount</div>
            <div className="text-lg font-medium">{ selectedPayment?.currency=="INR"?"₹ ":"$ "} { selectedPayment?.amount! /100 }</div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <dl className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-1">
            <dt className="text-xs text-muted-foreground">Date</dt>
            <dd className="text-sm">{selectedPayment?.createdAt ? new Date(selectedPayment.createdAt).toLocaleDateString() : '-'}</dd>
          </div>

          <div className="flex flex-col gap-1">
            <dt className="text-xs text-muted-foreground">Status</dt>
            <dd className="text-sm">
              <StatusPill status={selectedPayment?.status || "PENDING"} />
            </dd>
          </div>

          <div className="flex flex-col gap-1">
            <dt className="text-xs text-muted-foreground">Order ID</dt>
            <dd className="text-sm font-medium break-all">{selectedPayment?.orderId}</dd>
          </div>

          <div className="flex flex-col gap-1">
            <dt className="text-xs text-muted-foreground">Payment ID</dt>
            <dd className="text-sm break-all">{selectedPayment?.paymentId}</dd>
          </div>

          <div className="flex flex-col gap-1 md:col-span-2">
            <dt className="text-xs text-muted-foreground">Description</dt>
            <dd className="text-sm text-pretty">{selectedPayment?.template.title || "—"}</dd>
          </div>

          <div className="flex flex-col gap-1">
            <dt className="text-xs text-muted-foreground">Payment Method</dt>
            <dd className="text-sm">{selectedPayment?.metadata?.method?.toUpperCase()}</dd>
          </div>

          <div className="flex flex-col gap-1">
            <dt className="text-xs text-muted-foreground">Currency</dt>
            <dd className="text-sm">{selectedPayment?.currency}</dd>
          </div>
        </dl>
      </CardContent>
    </Card>
        </DialogContent>
        </Dialog>}
    </div>
  );
}

function StatusPill({ status }: { status: PaymentStatus }) {
  const label = status[0]!.toUpperCase() + status.slice(1);
  // Use theme tokens to stay within palette: primary for paid, destructive for failed,
  // muted for pending, and foreground for refunded.
  const color =
    status === "SUCCESS"
      ? "text-green-500"
      : status === "FAILED"
        ? "text-destructive"
        : status === "PENDING"
          ? "text-muted-foreground"
          : "text-foreground";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs ${color} `}
      aria-label={`Status: ${label}`}
    >
      <span
        className="h-1.5 w-1.5 rounded-full bg-current"
        aria-hidden="true"
      />
      {label}
    </span>
  );
}

function Th(props: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) {
  const { className = "", ...rest } = props;
  return (
    <th
      className={`px-3 py-2 text-xs font-medium uppercase tracking-wide text-muted-foreground ${className}`}
      {...rest}
    />
  );
}

function Td(props: React.TdHTMLAttributes<HTMLTableCellElement>) {
  const { className = "", ...rest } = props;
  return <td className={`px-3 py-3 align-middle ${className}`} {...rest} />;
}


