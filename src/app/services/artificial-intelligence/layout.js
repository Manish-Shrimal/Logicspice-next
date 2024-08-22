

import { Inter } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import Domain from "@/app/BaseAPI/Domain";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Best Artificial Intelligence Development Company | Logicspice",
  description:
    "Transform your business and drive innovation with Logicspice. We are the best Artificial intelligence development company that offers effective AI development services.",
  keywords:
    "ai development company, artificial intelligence development company, artificial intelligence consulting services, ai development services, best ai company, ai technology company, ai services, hire ai developer, ai solutions company",
  alternates: {
    canonical: `${Domain}/services/artificial-intelligence`,
    
  },
};


const jsonLd = {
    "@context": "http://schema.org/",
    "@type": "ProfessionalService",
    "name": "Best Artificial Intelligence Development Company | Logicspice", 
    "image": [ `${Domain}/img/artificialintelligence/ArtificialImg.png` ],
    "description": "Transform your business and drive innovation with Logicspice. We are the best Artificial intelligence development company that offers effective AI development services.",
    "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "57"  } } 
    

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
