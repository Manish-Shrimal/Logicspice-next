import { Inter } from "next/font/google";
import "../../globals.css";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import Domain from "@/app/BaseAPI/Domain";


import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Logistics and Transportation Mobile App Development Services",
  description:
    "Customized mobile apps for Android and iPhones to manage logistics and transportation online. .",
  keywords:
    "mobile app development for transportation industry,web & mobile app development company for logistics,android app development for logistics,book you logistics online,online transportation management app,web & mobile app development company for logistics",
  alternates: {
    // canonical: 'https://nextjs.org',
    canonical: `${Domain}/industries/transportation-apps`,

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






