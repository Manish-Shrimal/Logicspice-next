

import { Inter } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import Domain from "@/app/BaseAPI/Domain";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Big Data Consulting Services & Analytics Solutions - Logicspice",
  description:
    "Unlock the power of data with Logicspice's Big Data consulting services & analytics solutions. Transform your business with expert insights. Contact us today.",
  keywords:
    "big data companies, big data services, big data consulting, big data consulting companies, big data analytics companies, big data analytics services, big data development company, big data development services, big data consulting company, data consulting services, big data consulting services, data integration consulting, big data analytics solutions",
  alternates: {
    canonical: `${Domain}/services/big-data-development`,
    
  },
};


    const jsonLd = {
        "@context": "http://schema.org/",
        "@type": "ProfessionalService",
        "name": "Big Data Consulting Services & Analytics Solutions - Logicspice", 
        "image": [ `${Domain}/img/bigdatadevelopment/bigdata-img.png` ],
        "description": "Unlock the power of data with Logicspice's Big Data consulting services & analytics solutions. Transform your business with expert insights. Contact us today.",
        "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "133"  } }
    

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
