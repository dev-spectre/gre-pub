"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/#courses", label: "Universe course" },
    {
      href: "/#private-personalised-tutoring",
      label: "Private personalised tutoring",
    },
    { href: "/#testimonials", label: "Student results" },
    { href: "/#instructor", label: "Instructor" },
    { href: "/#request-demo-form", label: "Contact" },
  ];

  return (
    <div className="font-montserrat sticky top-0 right-0 left-0 z-60 bg-gradient-to-b from-[#081329] to-[#081329]">
      <nav className="px-fluid-container relative flex items-center justify-between py-6 text-white">
        <Link href="/" className="text-2xl font-[900]">
          PM Prep
        </Link>

        <ul className="hidden gap-8 font-[600] capitalize xl:flex 2xl:text-lg">
          {navLinks.map(({ href, label }, index) => (
            <li key={index}>
              <Link
                href={href}
                className="transition-all duration-200 ease-in hover:scale-105"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="rounded-md border border-white px-3 py-1 text-sm font-[400] lg:text-base"
          >
            Login
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none xl:hidden"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col items-center justify-center">
              <div
                className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "translate-y-1.5 rotate-45" : ""}`}
              ></div>
              <div
                className={`my-1 h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "scale-x-0" : ""}`}
              ></div>
              <div
                className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
              ></div>
            </div>
          </button>
        </div>
      </nav>

      <div
        className={`absolute top-full left-0 w-full overflow-hidden border-b border-gray-800 bg-[#09152d] text-sm text-white transition-all duration-500 ease-in-out lg:text-base xl:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-6 p-6 text-center font-[600] capitalize">
          {navLinks.map(({ href, label }, index) => (
            <li key={index}>
              <Link
                href={href}
                onClick={() => setIsOpen(false)}
                className="block py-2 hover:text-gray-300"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function FooterNav() {
  return (
    <div className="bg-gradient-to-b from-[#0f2247] to-[#0B172D] pt-20">
      <footer className="px-fluid-container bg-black/15 pt-13 text-white backdrop:blur sm:px-8 md:px-12 lg:px-36">
        {/* Header */}
        <div className="mb-5 flex items-center justify-between border-b border-b-white pb-8">
          <Link href="/" className="text-xl font-[400] md:text-2xl">
            PM Prep
          </Link>
          <ul className="flex items-center gap-3 sm:gap-8">
            <li>
              <Link href="#">
                <img
                  className="h-6 w-6 sm:h-7 sm:w-7 md:h-auto md:w-auto"
                  src="/icons/instagram.svg"
                  alt="Instagram"
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <img
                  className="h-6 w-6 sm:h-7 sm:w-7 md:h-auto md:w-auto"
                  src="/icons/youtube.svg"
                  alt="Youtube"
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <img
                  className="h-6 w-6 sm:h-7 sm:w-7"
                  src="/icons/linkedin-nav.svg"
                  alt="LinkedIn"
                />
              </Link>
            </li>
          </ul>
        </div>

        {/* Main */}
        <div className="mt-4.5 gap-16 pb-24 sm:flex">
          <div className="mb-5 flex flex-col gap-5">
            <div className="max-w-xl">
              <h4 className="mb-2 text-lg font-[500] uppercase md:text-xl">
                Important Links
              </h4>
              <ul className="flex flex-col flex-wrap gap-3 text-base font-[400] text-[#A19FBA] capitalize sm:flex-row md:flex-row md:gap-6 md:gap-y-2 md:text-lg">
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/#courses"}>Universe course</Link>
                </li>
                <li>
                  <Link href={"/#private-personalised-tutoring"}>
                    Private personalised tutoring
                  </Link>
                </li>
                <li>
                  <Link href={"/#testimonials"}>Student results</Link>
                </li>
                <li>
                  <Link href={"/#instructor"}>Instructor</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-[500] uppercase md:text-xl">
                Other Links
              </h4>
              <ul className="flex flex-wrap gap-3 text-base font-[400] text-[#A19FBA] md:text-lg">
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms">Terms and Conditions</Link>
                </li>
                <li>
                  <Link href="/refund">Refund and Cancellation Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 sm:flex-col">
            <div>
              <h4 className="mb-2 text-lg font-[500] md:text-xl">Mail</h4>
              <p className="text-base text-[#A19FBA] md:text-lg">
                hello@punitmishraprep.com
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-[500] md:text-xl">Phone</h4>
              <p className="text-base font-[400] text-[#A19FBA] md:text-lg">
                +91 - 9910 917 049
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function Sidebar() {
  return (
    <>
      <aside className="group row-span-2 inline-block min-h-[100lvh] min-w-24 border-r border-r-[#E5E5E5] bg-white px-6.5 pt-8.5">
        <label htmlFor="menu-btn" className="mb-8 ml-2 inline-block">
          <img src="/icons/menu.png" alt="" />
        </label>
        <input type="checkbox" id="menu-btn" className="peer hidden" />
        <nav className="peer-[:not(:checked)]:min-w-44">
          <ul className="space-y-3">
            <li>
              <Link
                href="#"
                className="flex items-center gap-2 rounded bg-[#1B438F1A] px-2 py-2"
              >
                <img src="/icons/view-grid.png" alt="" />
                <p>Dashboard</p>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-2 rounded px-2 py-2 hover:bg-[#1B438F1A]"
              >
                <img src="/icons/class-lesson.png" alt="" />
                <p>Courses</p>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-2 rounded px-2 py-2 hover:bg-[#1B438F1A]"
              >
                <img src="/icons/university.png" alt="" />
                <p>Universites</p>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-2 rounded px-2 py-2 hover:bg-[#1B438F1A]"
              >
                <img src="/icons/documents.png" alt="" />
                <p>Documents</p>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-2 rounded px-2 py-2 hover:bg-[#1B438F1A]"
              >
                <img
                  className="-ml-1 h-7"
                  src="/icons/exam-multiple-choice.png"
                  alt=""
                />
                <p>Mock test</p>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
