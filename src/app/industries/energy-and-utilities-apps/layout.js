import { Inter } from "next/font/google";
import "../../globals.css";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import Domain from "@/app/BaseAPI/Domain";


import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Mobile App Development for the Energy & Utilities Industry-Logicspice",
  description:
    "Energize your business with Logicspice's mobile app development solutions tailored for the Energy & Utilities industry. Empower your operations today!",
  keywords:
    "energy and utilities mobile app development, utility app development, mobile app development company, mobile app development services, mobile application development services, hire mobile app developers",
  alternates: {
    // canonical: 'https://nextjs.org',
    canonical: `${Domain}/industries/energy-and-utilities-apps`,

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
