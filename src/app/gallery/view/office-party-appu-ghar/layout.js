import { Inter } from "next/font/google";
import "../../../globals.css";
import BaseAPI from "@/app/BaseAPI/BaseAPI";

import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "View Photos of Office Party - Appu Ghar - Logicspice",
  description:
    "Visit our Gallery Page where you will see full detail of our Diwali celebration, amber vatika trip, logicspice trips, chokhi dhani tour, logicspice party etc.",
  keywords:
    "diwali celebration 2015,diwali celebration,amber vatika trip,logicspice trips,chokhi dhani tour,logicspice party",
  alternates: {
    // canonical: 'https://nextjs.org',
    canonical: `https://logicspice-next.vercel.app/company/gallery/view/office-party-appu-ghar`,

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
