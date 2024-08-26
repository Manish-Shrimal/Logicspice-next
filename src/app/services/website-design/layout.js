import { Inter } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import MetadataApi from "@/app/BaseAPI/MetadataApi";
import Domain from "@/app/BaseAPI/Domain";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params, searchParams }, parent) {
  try {
    // Fetch data
    const product = await fetch(
      `${MetadataApi}/website-design`
    ).then((res) => res.json());

    // Clean up the schema string
    let text = product.data.schema;
    const cleanedText = text
      .replace(/[\u0000-\u001F\u007F-\u009F]/g, "") // Remove control characters
      .replace(/\\'/g, "'") // Fix escaped single quotes
      .replace(/\\"/g, '"') // Fix escaped double quotes
      .replace(/\\&/g, "&") // Fix escaped ampersands
      .replace(/\\\//g, "/") // Fix escaped slashes
      .replace(/\\b/g, "") // Remove backspace characters
      .replace(/\\f/g, "") // Remove form feed characters
      .replace(/\\n/g, "") // Remove newlines
      .replace(/\\r/g, "") // Remove carriage returns
      .replace(/\\t/g, "") // Remove tabs
      .replace(/\\v/g, "") // Remove vertical tabs
      .replace(/\\+/g, "");

    // Parse the cleaned string as JSON
    const schemaOrg = JSON.parse(cleanedText);

    // Return metadata
    return {
      title: product.data.meta_title,
      description: product.data.meta_description,
      keywords: product.data.meta_keyword,
      alternates: {
        canonical: `${Domain}/services/website-design`,
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
      schemaOrg: schemaOrg,
    };
  } catch (error) {
    console.error("Failed to generate metadata:", error);
    return {
      title: "Default Title",
      description: "Default description",
      keywords: "default, keywords",
      alternates: {
        canonical: `${Domain}/services/website-design`,
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
      schemaOrg: null,
    };
  }
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
