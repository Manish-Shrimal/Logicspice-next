

import { Inter } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import Domain from "@/app/BaseAPI/Domain";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Android App Development Company | Android App Developers",
  description:
    "Logicspice has well experienced android application developers that offers Android app development services and Create astounding android apps.",
  keywords:
    "Android app developers , Android app programmers , Android application development, Best Android app development company, Android development services",
  alternates: {
    canonical: `${Domain}/services/android-app-development`,
    
  },
};
const jsonLd = {
    "@context": "http://schema.org/",
    "@type": "ProfessionalService",
    "name": "Android App Development Company | Android App Developers", 
    "image": [ `${Domain}/img/iosappdevelopment/android-phone.png` ],
    "description": "Logicspice has well experienced android application developers that offers Android app development services and Create astounding android apps",
    "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "472"  } }
    

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
