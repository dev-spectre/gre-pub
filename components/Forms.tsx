"use client";

import Link from "next/link";
import { Button } from "./Button";
import { useEffect, useState } from "react";

export function LeadGenerationForm({ showMessage }: { showMessage: boolean }) {
  const [isVisible, setIsVisible] = useState(showMessage);

  useEffect(() => {
    setIsVisible(showMessage);
  }, [showMessage]);

  const handleSubmit = () => {
    const name = document.getElementById("name") as HTMLInputElement;
    const email = document.getElementById("email") as HTMLInputElement;
    const contactNumber = document.getElementById(
      "contact-number",
    ) as HTMLInputElement;
    const message = document.getElementById("message") as HTMLInputElement;

    if (!(name?.value && email?.value && contactNumber?.value)) {
      return;
    }

    let formData = new FormData();
    formData.append("entry.2005620554", name.value);
    formData.append("entry.1045781291", email.value);
    formData.append("entry.1065046570", contactNumber.value);
    formData.append("entry.839337160", message.value);

    fetch(
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSenougX5zPABg13PXoYR1oWKhFlzTiHbpOQRX1MbpYb9RIKJA/formResponse",
      {
        method: "POST",
        body: formData,
        mode: "no-cors",
      },
    ).then(() => {
      const successMsg = document.getElementById("success-msg");
      successMsg?.classList.remove("hidden");

      setTimeout(() => {
        name.value = "";
        email.value = "";
        contactNumber.value = "";
        message.value = "";
        successMsg?.classList.add("hidden");
      }, 5000);
    });
  };

  return (
    <div className="inline-block max-w-[34rem] rounded-2xl bg-white px-6 py-5 text-lg font-[400] shadow-lg shadow-[#1B438F4D] sm:px-10 sm:py-10 md:rounded-3xl md:px-12 md:py-8">
      <h2 className="mb-6 text-center text-2xl font-[900] text-[#1B438F] capitalize sm:text-4xl">
        Request demo session
      </h2>
      {isVisible && (
        <p className="mb-6 text-center text-sm font-[500] text-[#FF9053]">
          Please fill this form
        </p>
      )}
      <form className="text-sm-0 @container flex flex-col gap-2 text-[#1F1D39]">
        <div>
          <label className="block" htmlFor="name">
            Name
          </label>
          <input
            required
            className="border/5 mt-1 mb-3 h-8 w-full rounded-md border border-gray-200 bg-black/5 px-2"
            placeholder="Eg.: John Doe"
            type="text"
            id="name"
          />
        </div>
        <div className="gap-2 gap-x-4 @min-[25rem]:flex">
          <div className="mb-2 flex-2/3 sm:mb-0">
            <label className="block" htmlFor="email">
              Email ID
            </label>
            <input
              required
              className="border/5 mt-1 mb-3 h-8 w-full rounded-md border border-gray-200 bg-black/5 px-2"
              placeholder="Eg.: johndoe@mail.com"
              type="email"
              id="email"
            />
          </div>
          <div>
            <label className="block capitalize" htmlFor="contactNumber">
              Contact number
            </label>
            <input
              required
              placeholder="Eg.: +91-7798773994"
              type="text"
              id="contact-number"
              pattern="+[0-9]{1,3}-[0-9]{10}"
              className="border/5 mt-1 mb-3 h-8 w-full rounded-md border border-gray-200 bg-black/5 px-2"
            />
          </div>
        </div>
        <div>
          <label className="block" htmlFor="message">
            Message
          </label>
          <textarea
            className="border/5 mt-1 mb-3 h-24 w-full resize-none rounded-md border border-gray-200 bg-black/5 px-2 py-1"
            placeholder="Eg.: GRE Universe Course"
            id="message"
          />
        </div>
        <div className="text-white">
          <Button label="Submit" onClick={handleSubmit} />
        </div>
      </form>
      <p
        id="success-msg"
        className="mt-7 hidden rounded-md border border-[#1B438F]/50 bg-[#D6E4FF]/50 p-3 text-center text-[#1B438F]"
      >
        We will contact you soon!
      </p>
    </div>
  );
}

export function SignUpForm() {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <div className="relative isolate w-full max-w-[34rem]">
      <div className="rounded-2xl bg-white px-6 py-5 text-lg font-[400] shadow-lg shadow-[#1B438F4D] sm:px-10 sm:py-10 md:rounded-3xl md:px-12 md:py-8">
        <h2 className="mb-6 text-center text-2xl font-[900] text-[#1B438F] capitalize sm:text-4xl">
          Sign Up
        </h2>
        <form className="text-sm-0 @container flex flex-col gap-2 text-[#1F1D39]">
          <div>
            <label className="block" htmlFor="name">
              Name
            </label>
            <input
              required
              className="border/5 mt-1 mb-3 h-8 w-full rounded-md border border-gray-200 bg-black/5 px-2"
              placeholder="Eg.: John Doe"
              type="text"
              id="name"
            />
          </div>
          <div className="mb-2 flex-2/3 sm:mb-0">
            <label className="block" htmlFor="email">
              Email ID
            </label>
            <input
              required
              className="border/5 mt-1 mb-3 h-8 w-full rounded-md border border-gray-200 bg-black/5 px-2"
              placeholder="Eg.: johndoe@mail.com"
              type="email"
              id="email"
            />
          </div>
          <div>
            <label className="block" htmlFor="password">
              Password
            </label>
            <div className="border/5 mt-1 mb-3 flex rounded-md border border-gray-200 bg-black/5">
              <input
                type={hidePassword ? "password" : "text"}
                className="w-full px-2 py-1"
                placeholder="Enter your password"
                id="password"
              />
              <button
                className="px-2"
                type="button"
                onClick={() => setHidePassword((hidePassword) => !hidePassword)}
              >
                {!hidePassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="mt-2 text-white">
            <Button label="Sign Up" />
          </div>
        </form>
        <div className="my-3 flex items-center justify-center gap-2">
          <div className="mt-1 h-[1.5px] w-full rounded bg-[#1F1D3923]"></div>
          <p className="text-sm-0 w-min text-[#1F1D39]">or</p>
          <div className="mt-1 h-[1.5px] w-full rounded bg-[#1F1D3923]"></div>
        </div>
        <button className="font-roboto text-card-xs-0 flex w-full items-center justify-center gap-3 rounded-md border border-[#1f1d398f] py-3 font-medium text-[#1F1D39] hover:cursor-pointer hover:bg-black/5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="24px"
            height="24px"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
            />
            <path
              fill="#FBBC05"
              d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
            />
            <path
              fill="#34A853"
              d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
            />
          </svg>
          <p>Sign up with Google</p>
        </button>
      </div>
      <p className="text-sm-0 absolute mt-3 w-full text-center">
        Already have an account?{" "}
        <Link className="font-semibold text-[#1B438F]" href={"/signin"}>
          Sign In
        </Link>{" "}
      </p>
    </div>
  );
}

export function SignInForm() {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <div className="relative isolate w-full max-w-[34rem]">
      <div className="rounded-2xl bg-white px-6 py-5 text-lg font-[400] shadow-lg shadow-[#1B438F4D] sm:px-10 sm:py-10 md:rounded-3xl md:px-12 md:py-8">
        <h2 className="mb-6 text-center text-2xl font-[900] text-[#1B438F] capitalize sm:text-4xl">
          Sign In
        </h2>
        <form className="text-sm-0 @container flex flex-col gap-2 text-[#1F1D39]">
          <div className="mb-2 flex-2/3 sm:mb-0">
            <label className="block" htmlFor="email">
              Email ID
            </label>
            <input
              required
              className="border/5 mt-1 mb-3 h-8 w-full rounded-md border border-gray-200 bg-black/5 px-2"
              placeholder="Eg.: johndoe@mail.com"
              type="email"
              id="email"
            />
          </div>
          <div>
            <label className="block" htmlFor="password">
              Password
            </label>
            <div className="border/5 mt-1 mb-3 flex rounded-md border border-gray-200 bg-black/5">
              <input
                type={hidePassword ? "password" : "text"}
                className="w-full px-2 py-1"
                placeholder="Enter your password"
                id="password"
              />
              <button
                className="px-2"
                type="button"
                onClick={() => setHidePassword((hidePassword) => !hidePassword)}
              >
                {!hidePassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="mt-2 text-white">
            <Button label="Sign in" />
          </div>
        </form>
        <div className="my-3 flex items-center justify-center gap-2">
          <div className="mt-1 h-[1.5px] w-full rounded bg-[#1F1D3923]"></div>
          <p className="text-sm-0 w-min text-[#1F1D39]">or</p>
          <div className="mt-1 h-[1.5px] w-full rounded bg-[#1F1D3923]"></div>
        </div>
        <button className="font-roboto text-card-xs-0 flex w-full items-center justify-center gap-3 rounded-md border border-[#1f1d398f] py-3 font-medium text-[#1F1D39] hover:cursor-pointer hover:bg-black/5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="24px"
            height="24px"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
            />
            <path
              fill="#FBBC05"
              d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
            />
            <path
              fill="#34A853"
              d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
            />
          </svg>
          <p>Sign in with Google</p>
        </button>
      </div>
      <p className="text-sm-0 absolute mt-3 w-full text-center">
        New here?{" "}
        <Link className="font-semibold text-[#1B438F]" href={"/signup"}>
          Sign Up
        </Link>{" "}
      </p>
    </div>
  );
}
