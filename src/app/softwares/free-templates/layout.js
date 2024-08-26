import { Inter } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import MetadataApi from "@/app/BaseAPI/MetadataApi";
import Domain from "@/app/BaseAPI/Domain";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params, searchParams }, parent) {
  // Fetch data
  const product = await fetch(
    `${MetadataApi}/free-templates`
  ).then((res) => res.json());
  // console.log(product)

  let text = product.data.schema;
  const cleanedText = text.replace(/\\r\\n/g, '').replace(/\\+/g, '');
  const schemaOrg = JSON.parse(cleanedText);

  // Return metadata
  return {
    title: "Free templates",
    description: product.data.meta_description,
    keywords: product.data.meta_keyword,
    // Add other meta tags as needed
    alternates: {
      canonical: `${Domain}/softwares/food-ordering-script`,
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
    // schemaOrg: product.data.schema && JSON.parse(product.data.schema),
    schemaOrg: schemaOrg,
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
      <body className={inter.className}>{children}</body>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(metadata.schemaOrg) }}
      />
    </html>
  );
}
