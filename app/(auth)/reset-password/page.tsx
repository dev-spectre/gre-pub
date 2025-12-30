import { Suspense } from "react"; // 1. Add this import
import { ResetPasswordForm } from "@/components/Forms";

export default function ResetPasswordPage() {
  return (
    <div className="px-fluid-container flex min-h-[100dvh] items-center justify-center bg-gradient-to-b from-[#e7ecf4] to-[#bec9df] py-12">
      <Suspense fallback={<div>Loading...</div>}>
        <ResetPasswordForm />
      </Suspense>
    </div>
  );
}