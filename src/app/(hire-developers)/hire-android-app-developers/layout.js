

import { Inter } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import Domain from "@/app/BaseAPI/Domain";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hire Android App Developer | Top Android App Programmer",
  description:
    "Hire android app developer from logicspice for best app development service. We are equipped with a team of expert android app programmer who build robust apps.",
  keywords:
    "hire android app developer, hire android developer, hire android programmer, hire android app programmer,hire dedicated android developers, hire android developer in india, hire android app developer india, hire android developer india, hire android app developers in india",
  alternates: {
    canonical: `${Domain}/hire-android-app-developers`,
    
  },
};
const jsonLd = {
    "@context": "http://schema.org/",
    "@type": "ProfessionalService",
    "name": "Hire Android App Developer|Top Android App Programmer", 
    "image": [ `${Domain}/img/hiredevelopers/hire_android_programmers.png` ],
    "description": "Hire android app developer from logicspice for best app development service. We are equipped with a team of expert android app programmer who build robust apps",
    "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "153"  } }

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
