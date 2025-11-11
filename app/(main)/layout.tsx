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
  title: "GRE",
  description: "World's Most Affordable Complete GRE Prep at 599/- per month.",
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
