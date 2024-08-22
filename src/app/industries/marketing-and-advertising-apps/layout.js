import { Inter } from "next/font/google";
import "../../globals.css";
import BaseAPI from "@/app/BaseAPI/BaseAPI";

import Domain from "@/app/BaseAPI/Domain";

import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mobile App Development for the Marketing & Advertising Industry",
  description:
    "Enhance your marketing and advertising strategies with our expert mobile app development solutions. Drive success in the industry. Connect with Logicspice today.",
  keywords:
    "mobile app development services, mobile apps for marketing, mobile application development services, mobile app development agency",
  alternates: {
    // canonical: 'https://nextjs.org',
    canonical: `${Domain}/industries/marketing-and-advertising-apps`,

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
      <Head>
        
      </Head>
      <body className={inter.className}>{children}</body>
    
    </html>
  );
}






