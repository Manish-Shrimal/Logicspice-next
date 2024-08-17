import { Inter } from "next/font/google";
import "../../globals.css";
import BaseAPI from "@/app/BaseAPI/BaseAPI";

import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Website Calculator Builder | Web Calculator Designer",
  description:
    "Create an online business calculator for your website. Get pricing, ROI, health, BMI, Medical, finance and other web calculators and Embed in your existing website.",
  keywords:
    "web calculator designer, web calculator, website calculator, create online calculator from excel, calculator builder, saas valuation calculator, create online calculator, website calculator builder",
  alternates: {
    // canonical: 'https://nextjs.org',
    canonical: `https://logicspice-next.vercel.app/custom-solutions/website-calculator-builder`,

    languages: {
      "en-US": "https://nextjs.org/en-US",
      "de-DE": "https://nextjs.org/de-DE",
    },
    media: {
      "only screen and (max-width: 600px)": "https://nextjs.org/mobile",
    },
    types: {
      "application/rss+xml": "https://nextjs.org/rss",
    },
  },
};

export default function RootLayout({ children, canonicalUrl }) {
  return (
    <html lang="en">
      <Head></Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
