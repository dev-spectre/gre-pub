"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function useRedirectToPaymentPage() {
  const BASE_URL = "https://pages.razorpay.com/pl_SIjHdXZ7u3cFsR/view";
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