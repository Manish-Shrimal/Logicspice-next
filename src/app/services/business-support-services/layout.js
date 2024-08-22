

import { Inter } from "next/font/google";
import "../globals.css";
import Head from "next/head";
import Domain from "@/app/BaseAPI/Domain";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Best Business Support Services for Small & Medium Enterprises",
  description:
    "We are a professional business support services provider company, offering technical support, customer support, Virtual Assistant Services to every enterprise.",
  keywords:
    "call center services,business support services,customer service support,technical support services,virtual assistant services,virtual personal assistant,virtual administrative assistant,online technical support,business call center services,it support services",
  alternates: {
    canonical: `${Domain}/services/business-support-services`,
    
  },
};


const jsonLd = {
    "@context": "http://schema.org/",
    "@type": "ProfessionalService",
    "name": "Best Business Support Services for Small & Medium Enterprises", 
    "image": [ `${Domain}/img/businesssupportservices/business-banner.png` ],
    "description": "We are professional business support services provider, offering the  call center, technical support, customer support, Virtual Assistant Services to small, medium & large enterprises",
    "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "261"  } }
    

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
