import { Montserrat } from "next/font/google";
import "@/app/globals.css";
import { Sidebar, DashboardNavbar } from "@/components/Navbar";
import { Metadata } from "next/types";

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
        <DashboardNavbar />
        <div className="mr-4">{children}</div>
      </body>
    </html>
  );
}

