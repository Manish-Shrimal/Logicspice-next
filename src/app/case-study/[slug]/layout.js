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
  const response = await fetch(`https://manage.logicspice.com/api/case-studies/${params.slug}`,{
    cache: "no-store",
  }).then((res) =>
    res.json()
  );

  // console.log(response.allblogs, "Test");

  let pageSlug = params;

  let product = response?.allblogs;


  // Return metadata
  return {
    title: product?.meta_title,
    description: product?.meta_description,
    keywords: product?.meta_keyword,
    // Add other meta tags as needed
    alternates: {
      canonical: `${Domain}/case-study/${pageSlug.slug}`,
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
      <CookiesConsent />
      <body className={inter.className}>{children}</body>
      
    </html>
  );
}
