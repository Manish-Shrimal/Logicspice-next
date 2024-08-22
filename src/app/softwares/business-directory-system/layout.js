

import { Inter } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import Domain from "@/app/BaseAPI/Domain";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Advanced Web Development | Advance Web Application",
  description:
    "As a advance web development company, logicspice offers best solution in advanced web programming & web application at cost effective price.",
  keywords:
    "advanced web development, advanced web design, advanced website development,advanced web programming, advanced web application development",
  alternates: {
    canonical: `${Domain}/services/advanced-web-programming`,
    
  },
};
const jsonLd = {
    "@context": "http://schema.org/",
    "@type": "ProfessionalService",
    "name": "Advanced Web Development | Advance Web Application", 
    "image": [ `${Domain}/img/advancedwebprogramming/advanced-web-development-img.png` ],
    "description": "As a advance web development company, logicspice offers best solution in advanced web programming & web application at cost effective price",
    "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "412"  } }
    

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
