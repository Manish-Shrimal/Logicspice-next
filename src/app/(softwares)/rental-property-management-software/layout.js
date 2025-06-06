import { Inter } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import MetadataApi from "@/app/BaseAPI/MetadataApi";
import Domain from "@/app/BaseAPI/Domain";
import CookiesConsent from "@/app/Components/CookiesConsent";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params, searchParams }, parent) {
  // Fetch data
  const product = await fetch(
    `${MetadataApi}/rental-property-management-software`,{
      cache: "no-store",
    }
  ).then((res) => res.json());
  // console.log(product)

  let text = product.data.schema;

  let schemaOrg = null;
  if (text) {
    try {
      // Clean and parse JSON schema
      const cleanedText = text
        .replace(/\\r\\n/g, "")
        .replace(/\\n/g, "")
        .replace(/\\r/g, "")
        .replace(/\\+/g, "")
        .replace(/[\u0000-\u001F\u007F]/g, "");

      schemaOrg = cleanedText && JSON.parse(cleanedText);
    } catch (error) {
      console.error("Error parsing schemaOrg JSON:", error);
      schemaOrg = null;
    }
  }

  // Return metadata
  return {
    title: product.data.meta_title,
    description: product.data.meta_description,
    keywords: product.data.meta_keyword,
    // Add other meta tags as needed
    alternates: {
      canonical: `${Domain}/rental-property-management-software`,
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
    schemaOrg: schemaOrg || null,
  };
}

export default async function RootLayout({ children, params, searchParams }) {
  // Fetch metadata using the generateMetadata function
  const metadata = await generateMetadata({ params, searchParams });
  //   console.log(metadata);

  return (
    <html lang="en">
      <Head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <title>{metadata.title}</title>
      </Head>
      <CookiesConsent />
      <body className={inter.className}>{children}</body>
      {metadata.schemaOrg && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(metadata.schemaOrg),
          }}
        />
      )}
    </html>
  );
}
