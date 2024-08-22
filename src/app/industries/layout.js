import { Inter } from "next/font/google";
import "../globals.css";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import Domain from "@/app/BaseAPI/Domain";

import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Industries We Served | LogicSpice",
  description:
    "We at logicspice Provide web and app development services, readymade clone scripts for business like hotels, job consultants, Doctors and many more.",
  keywords:
    "Industries We Served, Web development Services, mobile application development services, App development company",
  alternates: {
    // canonical: 'https://nextjs.org',
    canonical: `${Domain}/industries`,

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
