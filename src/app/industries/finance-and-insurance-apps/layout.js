import { Inter } from "next/font/google";
import "../../globals.css";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import Domain from "@/app/BaseAPI/Domain";

import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mobile App Development for the Finance & Insurance Industry",
  description:
    "Tailored mobile app development solutions for the finance & insurance industry. Elevate your services with our expertise solutions. Contact us today.",
  keywords:
    "mobile apps for insurance, insurance application development, finance app development company, finance app development, apps for finance, mobile app development services, mobile application development services",
  alternates: {
    // canonical: 'https://nextjs.org',
    canonical: `${Domain}/industries/finance-and-insurance-apps`,

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






