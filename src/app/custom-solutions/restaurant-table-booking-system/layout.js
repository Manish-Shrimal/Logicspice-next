import { Inter } from "next/font/google";
import "../../globals.css";
import BaseAPI from "@/app/BaseAPI/BaseAPI";

import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Restaurant Table Booking System Development | Opentable Clone",
  description:
    "Build your own custom restaurant table booking system, seat reservation app development, open table clone which meets your business requirements.",
  keywords:
    "restaurant reservation management, restaurant seat reservation system,restaurant table booking system,restaurant reservation management software,restaurant booking system,restaurant reservation software, opentable clone. restaurant table booking app development, restaurant table booking website development",
  alternates: {
    // canonical: 'https://nextjs.org',
    canonical: `https://logicspice-next.vercel.app/custom-solutions/restaurant-table-booking-system`,

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
