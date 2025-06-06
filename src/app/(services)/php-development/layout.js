import { Inter } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import BaseAPI from "../../BaseAPI/BaseAPI";
import MetadataApi from "../../BaseAPI/MetadataApi";
import Domain from "../../BaseAPI/Domain";
import Chatbot from "../../Components/Chatbot";
import CookiesConsent from "../../Components/CookiesConsent";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params, searchParams }, parent) {
  // Fetch data
  const product = await fetch(`${MetadataApi}/php-development`,{
    cache: "no-store",
  }).then((res) =>
    res.json()
  );
  // console.log(product)

  // Return metadata
  return {
    title: product.data.meta_title,
    description: product.data.meta_description,
    keywords: product.data.meta_keyword,
    // Add other meta tags as needed
    alternates: {
      canonical: `${Domain}/php-development`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    schemaOrg: product.data.schema && JSON.parse(product.data.schema),
  };
}

export default async function RootLayout({ children, params, searchParams }) {
  // Fetch metadata using the generateMetadata function
  const metadata = await generateMetadata({ params, searchParams });
 

  return (
    <html lang="en">
      <Head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <title>{metadata.title}</title>
      </Head>
      <Chatbot />
      <CookiesConsent />
      <body className={inter.className}>{children}</body>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(metadata.schemaOrg) }}
      />
    </html>
  );
}
