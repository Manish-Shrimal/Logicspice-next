import { Inter } from "next/font/google";
import "../../globals.css";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import Domain from "@/app/BaseAPI/Domain";



import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mobile App Development For Commercial & Real Estate Industry",
  description:
    "Logicspice provides best android & iPhone app solutions for Commercial & Real Estate Industry. Get customized mobile apps to manage your properties.",
  keywords:
    "android app development for real estate industry, Commercial mobile app development company, Commercial iPhone app development comapny, real-estate app development company, business mobile apps development company",
  alternates: {
    // canonical: 'https://nextjs.org',
    canonical: `${Domain}/industries/commercial-and-residential-real-estate-apps`,

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






