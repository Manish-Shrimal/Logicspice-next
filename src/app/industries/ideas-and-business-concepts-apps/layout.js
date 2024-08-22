import { Inter } from "next/font/google";
import "../../globals.css";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import Domain from "@/app/BaseAPI/Domain";



import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mobile App Development Services For Your Business Concepts",
  description:
    "Let consult your business ideas & concept with our expert web & app developers and get right mobile app solutions for android & iPhone.",
  keywords:
    "android app for your business idea,business mobile app development services,customized business apps for android and iphone,iphone app development for business,customize your business need",
  alternates: {
    // canonical: 'https://nextjs.org',
    canonical: `${Domain}/industries/ideas-and-business-concepts-apps`,

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






