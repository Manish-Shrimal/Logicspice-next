import { Inter } from "next/font/google";
import "../../globals.css";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import Domain from "@/app/BaseAPI/Domain";


import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mobile App Development for eCommerce & Retail Industry-Logicspice",
  description:
    "Elevate your eCommerce and retail business with Logicspice's expert mobile app development services & solutions. Boost sales and customer engagement.",
  keywords:
    "ecommerce mobile app development, ecommerce app development, ecommerce app development services, ecommerce application development, ecommerce mobile app, best ecommerce apps, mobile apps for ecommerce, mobile apps for retail",
  alternates: {
    // canonical: 'https://nextjs.org',
    canonical: `${Domain}/industries/ecommerce-and-retail-apps`,

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






