import { Inter } from "next/font/google";
import "../../../globals.css";
import BaseAPI from "@/app/BaseAPI/BaseAPI";


import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "View Photos of Amber Vatika - Logicspice",
  description:
    "Visit our Gallery Page where you will see full detail of our Diwali celebration, amber vatika trip, logicspice trips, chokhi dhani tour, logicspice party etc.",
  keywords:
    "diwali celebration 2015,diwali celebration,amber vatika trip,logicspice trips,chokhi dhani tour,logicspice party",
  alternates: {
    // canonical: 'https://nextjs.org',
    canonical: `https://logicspice-next.vercel.app/company/gallery/view/amber-vatika`,

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
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Inventory Management Software",
  image: "/img/inventory-management/inventory-banner-img.png",
  description: "Inventory Management Software",
};

export default function RootLayout({ children, canonicalUrl }) {
  return (
    <html lang="en">
      <Head>
        
      </Head>
      <body className={inter.className}>{children}</body>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    </html>
  );
}






