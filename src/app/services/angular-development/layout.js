

import { Inter } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import Domain from "@/app/BaseAPI/Domain";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Angular Development Company | Hire Angular Developers | Logicspice",
  description:
    "We are the best Angular development company that delivers scalable AngularJS development services. Hire Angular Developers to Build feature-rich, next-gen web apps.",
  keywords:
    "hire angular developers, angular development company, angularjs development company, hire angularjs developers, angularjs mobile app development, angular development services, angular development agency, angularjs web development company, angular web development services, angular frameworks, hire dedicated angular developer",
  alternates: {
    canonical: `${Domain}/services/angular-development`,
    
  },
};

const jsonLd = {
    "@context": "http://schema.org/",
    "@type": "ProfessionalService",
    "name": "Angular Development Company | Hire Angular Developers | Logicspice", 
    "image": [ `${Domain}/img/angulardevelopment/angular-icon.png` ],
    "description": "We are the best Angular development company that delivers scalable AngularJS development services. Hire Angular Developers to Build feature-rich, next-gen web apps.",
    "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "21"  } } 
    

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
