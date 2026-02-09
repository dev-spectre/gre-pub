import { ResetPasswordInit } from "@/components/Forms";

export default function ResetPasswordPageLoading() {
  return (
    <div className="px-fluid-container flex items-center justify-center bg-gradient-to-b from-[#e7ecf4] to-[#bec9df] py-28">
      <div className="relative isolate w-full max-w-[34rem]">
        <div className="rounded-2xl bg-white px-6 py-5 text-lg font-[400] shadow-lg shadow-[#1B438F4D] sm:px-10 sm:py-10 md:rounded-3xl md:px-12 md:py-8">
          <h2 className="mb-6 text-center text-2xl font-[900] text-[#1B438F] capitalize sm:text-4xl">
            Reset Password
          </h2>
          <ResetPasswordInit />
        </div>
      </div>
    </div>
  );
}
