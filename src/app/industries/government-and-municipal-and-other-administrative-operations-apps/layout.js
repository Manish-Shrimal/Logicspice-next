import { Inter } from "next/font/google";
import "../../globals.css";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import Domain from "@/app/BaseAPI/Domain";


import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "App Solutions For Government & Other Administrative Operations",
  description:
    "Logicspice offers best web and app solutions for all government & other administrative mobile app development operations need with user friendly approach.",
  keywords:
    "Mobile app development for government projects, online app development company for Administrative apps, website development services for business, Online business mobile apps development, online management business apps, apps for government programs",
  alternates: {
    // canonical: 'https://nextjs.org',
    canonical: `${Domain}/industries/government-and-municipal-and-other-administrative-operations-apps`,

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






