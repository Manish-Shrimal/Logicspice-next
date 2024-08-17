import { Inter } from "next/font/google";
import "../../globals.css";
import BaseAPI from "@/app/BaseAPI/BaseAPI";

import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LogicSpice - Find Our Client Testimonials & Reviews",
  description:
    "Check out our Client Reviews and Feedback for our services in Website & Mobile App Development and get solutions via hire our skilled developers.",
  keywords:
    "Logicspice reviews, Logicspice Client Testimonials, Logicspice Client Reviews, Logicspice Client Feedback",
  alternates: {
    // canonical: 'https://nextjs.org',
    canonical: `https://logicspice-next.vercel.app/company/testimonials-and-reviews`,

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
