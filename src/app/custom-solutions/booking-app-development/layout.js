import { Inter } from "next/font/google";
import "../../globals.css";
import BaseAPI from "@/app/BaseAPI/BaseAPI";

import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Custom Online Booking App Software Development",
  description:
    "Start your online booking business with help of our customized booking software. Develop your own custom booking app, booking software for website.",
  keywords:
    "online booking system,online booking software,booking app development,booking system development,booking software for website, custom booking app",
  alternates: {
    // canonical: 'https://nextjs.org',
    canonical: `https://logicspice-next.vercel.app/custom-solutions/booking-app-development`,

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
