import { Inter } from "next/font/google";
import "../../globals.css";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import Domain from "@/app/BaseAPI/Domain";


import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Online Educational Apps | E- Learning App Development Company",
  description:
    "Mobile app development company that offers e-learning solutions for teacher and students to access all courses, tutorial & education programs online.",
  keywords:
    "android app development company for educational industry,online learning app development services,iphone/ipad app development for online education,e-learning apps,online learning apps,app for online cources,online faculty management company",
  alternates: {
    // canonical: 'https://nextjs.org',
    canonical: `${Domain}/industries/schools-and-education-apps`,

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






