import { Inter } from "next/font/google";
import "../../globals.css";
import BaseAPI from "@/app/BaseAPI/BaseAPI";

import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GPS Vehicle Tracking System | Fleet Management Software",
  description:
    "Our popular custom GPS vehicle tracking software and fleet management system track your commercial vehicles, trucks, motorcycles, boats, ships, trains.",
  keywords:
    "gps vehicle tracking software, fleet management system, gps vehicle tracking system, commercial vehicle tracking, gps software development, gps tracking system source code",
  alternates: {
    // canonical: 'https://nextjs.org',
    canonical: `https://logicspice-next.vercel.app/custom-solutions/gps-vehicle-tracking-system`,

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
