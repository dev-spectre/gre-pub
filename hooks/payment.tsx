"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function useRedirectToPaymentPage() {
  const BASE_URL = "https://pages.razorpay.com/pl_S69blD7VGmwnK1/view"; //"https://rzp.io/rzp/rCNGqsKz";
  const router = useRouter();
  const { data, status } = useSession();

  const getPaymentPageUrl = () => {
    const params = new URLSearchParams();
    if (status === "authenticated") {
      params.append("email", data.user.email);
    }
    return `${BASE_URL}?${params.toString()}`;
  };

  const redirectToPaymentPage = () => {
    const url = getPaymentPageUrl();
    if (!url || status !== "authenticated") {
      router.push("/signin");
      return;
    }
    router.push(url);
  };

  return { getPaymentPageUrl, redirectToPaymentPage };
}