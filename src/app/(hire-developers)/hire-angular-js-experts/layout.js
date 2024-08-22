

import { Inter } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import Domain from "@/app/BaseAPI/Domain";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hire AngularJS Developers | Offshore AngularJS Programmers",
  description:
    "Hire dedicated AngularJS programmers from Logicspice. Our Angular JS developers use the right methodologies for effective solutions. Request a free quote!",
  keywords:
    "Hire angularjs developers, Expert AngularJS developer, Hire AngularJS programmer, Hire Dedicated Angularjs developer,hire angularjs developers india, hire angular developers india, hire angular developer india, hire angular developers in india",
  alternates: {
    canonical: `${Domain}/hire-angular-js-developers`,
    
  },
};
const jsonLd = {
    "@context": "http://schema.org/",
    "@type": "ProfessionalService",
    "name": "Hire AngularJS Developers|Offshore AngularJS Programmers", 
    "image": [ `${Domain}/img/hiredevelopers/Hire_angularjs_developer.png` ],
    "description": "Hire dedicated AngularJS developers and programmers from Logicspice. We have a highly skilled Angular JS developer using the right methodologies for effective solutions. We take angular js development projects on hourly or full time basis. Request a free quote",
    "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "154"  } }

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
