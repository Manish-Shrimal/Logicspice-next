import { Inter } from "next/font/google";
import "../../globals.css";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import Domain from "@/app/BaseAPI/Domain";


import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "App Development Services For Contractors & Cleaning Industry",
  description:
    "We offers custom industrial web design and development services alog with mobile app development services for contractors & cleaning industry.",
  keywords:
    "mobile app development for contractors business, mobile apps for cleaning industry, industrial app development company, online booking app development services",
  alternates: {
    // canonical: 'https://nextjs.org',
    canonical: `${Domain}/industries/service-contractors-and-cleaning-companies-apps`,

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






