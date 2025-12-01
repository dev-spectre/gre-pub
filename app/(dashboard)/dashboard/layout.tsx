import { Montserrat } from "next/font/google";
import "@/app/globals.css";
import { Sidebar } from "@/components/Navbar";
import { Metadata } from "next/types";
import Link from "next/link";

const montserrat = Montserrat({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Dashboard - Punit Mishra Prep",
  description: "Access your GRE prep dashboard. Learn with the best GRE strategies from a 337/340 scorer.",
  openGraph: {
    title: "Dashboard - Punit Mishra Prep",
    description: "Your personalized GRE learning dashboard with courses, mock tests, and study materials.",
    url: "https://punitmishraprep.com/dashboard",
    type: "website",
    images: [
      {
        url: "https://punitmishraprep.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Punit Mishra Prep Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dashboard - Punit Mishra Prep",
    description: "Your personalized GRE learning dashboard.",
    images: ["https://punitmishraprep.com/og-image.png"],
  },
};

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <head>
        <meta name="darkreader-lock" />
      </head>
      <body
        className={`${montserrat.className} grid grid-cols-[min-content_1fr] grid-rows-[min-content_1fr] gap-4 bg-[#EEF2F6]`}
      >
        <Sidebar />
        <div className="mt-4.5 mr-4 flex items-center justify-between rounded-md border border-[#E5E5E5] bg-white px-5 py-5">
          <Link href={"/"}>
            <h1 className="font-montserrat text-xl font-[400] text-[#1B438F]">
              GRE NextEra
            </h1>
          </Link>
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5 rounded-lg bg-gradient-to-t from-[#1b438f] to-[#34a0bd] px-[2px] py-[2px] font-[500] text-white capitalize">
              <button className="flex gap-1.5 px-3 py-1">
                <img src="/icons/sparkles.svg" alt="" />
                <span className="underline">Upgrade now</span>
              </button>
            </div>
            <button>
              <img src="/icons/notification-icon.svg" alt="notification" />
            </button>
            <img
              className="h-9 w-9 rounded-full"
              src="/images/profile.png"
              alt="profile picture"
            />
          </div>
        </div>
        <div className="mr-4">{children}</div>
      </body>
    </html>
  );
}
