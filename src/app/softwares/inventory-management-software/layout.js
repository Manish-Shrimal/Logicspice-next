

import { Inter } from "next/font/google";
import "../../globals.css";
import BaseAPI from "@/app/BaseAPI/BaseAPI";

import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web Based Inventory Management Software- LS Inventorizerr",
  description:
    "Elevate your inventory management with LS Inventorizerr: A powerful web based inventory management system for efficient control and organization.",
  keywords:
    "inventory management software, best inventory management software, inventory software, inventory management system, inventory tracking software, web based inventory management system, warehouse management system software, web based inventory management software",
  alternates: {
    // canonical: 'https://nextjs.org',
    canonical: `https://www.logicspice.com/softwares/inventory-management-software`,

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
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        {/* Use canonicalUrl prop or a default value if not provided */}
        <link
          rel="canonical"
          href={canonicalUrl || "https://www.default-canonical-url.com"}
        />
        <title>{metadata.title}</title>
        
      </Head>
      <body className={inter.className}>{children}</body>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    </html>
  );
}
