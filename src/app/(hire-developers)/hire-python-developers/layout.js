

import { Inter } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import Domain from "@/app/BaseAPI/Domain";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hire Python Developers | Hire Python Programmer - Logicspice",
  description:
    "Find skilled Python developers for hire at Logicspice. Our experienced & dedicated Python programmers bring expertise to your projects. Contact us today!",
  keywords:
    "hire python developer, hire python developers, python developers for hire, hire python programmer, hire python developers india, hire dedicated python developers, python programmer for hire, hire python developer india, hire python django developer",
  alternates: {
    canonical: `${Domain}/hire-python-developers`,
    
  },
};
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Hire Python Developers | Hire Python Programmer - Logicspice",
    "description": "Find skilled Python developers for hire at Logicspice. Our experienced & dedicated Python programmers bring expertise to your projects. Contact us today!",
    "image": `${Domain}/img/hiredevelopers/paython-banner-icon.png`,
    "@id": `${Domain}`,
    "url": `${Domain}/hire-python-developers`,
    "telephone": "+91-9829559922",
    "address": {
    "@type": "PostalAddress",
    "streetAddress": "506-507, JAIPUR ELECTRONIC MARKET, Near Riddhi Siddhi Circle",
    "addressLocality": "Jaipur",
    "postalCode": "302018",
    "addressCountry": "IN"
    }
    }

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
