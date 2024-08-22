import { Inter } from "next/font/google";
import "../../globals.css";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import Domain from "@/app/BaseAPI/Domain";



import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Accountants and Finance App & Web Application Development",
  description:
    "Hire expert app developers to build customized mobile apps for your accountants and financial need.Manage your accountants and financial services.",
  keywords:
    "App & Web Development Company For Accountants, android app development company for financial business, apps for accounts and finanace, iPhone Apps for accounting management, acconts management softwares, web development for online accounts management",
  alternates: {
    // canonical: 'https://nextjs.org',
    canonical: `${Domain}/industries/accountants-and-financial-services-apps`,

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






