import { Inter } from "next/font/google";
import "../../globals.css";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import Domain from "@/app/BaseAPI/Domain";


import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mobile App Development For Hotels Industry - Logicspice",
  description:
    "We at logicspice has expert Android & iPhone app developers to deliver best mobile app development services for your hotel industry.",
  keywords:
    "online hotel booking app development company,mobile app development comapny,hire online booking app developers,mobile app development services,mobile app development for hotel booking",
  alternates: {
    // canonical: 'https://nextjs.org',
    canonical: `${Domain}/industries/Hotels-apps`,

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






