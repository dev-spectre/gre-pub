import type { Metadata } from "next";
import {
  Montserrat
} from "next/font/google";
import "../globals.css";
import Navbar, { FooterNav } from "@/components/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Punit Mishra Prep - GRE Courses & 1:1 Tutoring | 337/340 Score",
  description: "Punit Mishra Prep: Your complete GRE prep solution. Join the GRE Universe Course or get 1:1 tutoring from Punit Mishra, a 337/340 GRE scorer.",
  icons: {
    icon: "/icons/favicon.png",
    shortcut: "/icons/favicon.png",
    apple: "/icons/favicon.png",
  },
  openGraph: {
    title: "Punit Mishra Prep - GRE Courses & 1:1 Tutoring",
    description: "Complete GRE preparation with Universe Course and 1:1 tutoring from a 337/340 scorer. 1200+ students mentored.",
    url: "https://punitmishraprep.com",
    type: "website",
    images: [
      {
        url: "https://www.punitmishraprep.com/logo/PM_Prep_Standard_Logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Punit Mishra Prep",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Punit Mishra Prep - GRE Courses & 1:1 Tutoring",
    description: "Complete GRE preparation with Universe Course and 1:1 tutoring from a 337/340 scorer.",
    images: ["https://www.punitmishraprep.com/logo/PM_Prep_Standard_Logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable}`}
    >
      <head>
        <meta name="darkreader-lock" />
      </head>
      <body className="antialiased font-montserrat">
        <Navbar />
        {children}
        <FooterNav />
      </body>
    </html>
  );
}
