import { Inter } from "next/font/google";

import BaseAPI from "@/app/BaseAPI/BaseAPI";

import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web Development Company | Mobile App Development - LogicSpice",
  description:
    "Logicspice is a respected company and have experienced team of web and mobile app developers that provide custom and advanced technological solutions",
  keywords:
    "Mobile application development company, android app development company, ios app development Company, software development company, custom web development company, PHP Programming Services, web designing services,Laravel development company, Laravel development agency",
  alternates: {
    // canonical: 'https://nextjs.org',
    canonical: `https://logicspice-next.vercel.app/company/`,

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
