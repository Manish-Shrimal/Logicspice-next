import { Inter } from "next/font/google";
import "../../globals.css";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import Domain from "@/app/BaseAPI/Domain";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HealthCare Mobile App Development Services | Medical Apps",
  description:
    "Logicspice has delivered thousands of simplified and unique medical & HealthCare mobile apps specialize in mobile app development.",
  keywords:
    "HealthCare App Development Company, Medical Mobile Apps, Android apps for healthcare market, iPhone apps development for healthcare, mobile app development for medical industry",
  alternates: {
    // canonical: 'https://nextjs.org',
    canonical: `${Domain}/industries/health-care-apps`,

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






