import { Inter } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import Domain from "@/app/BaseAPI/Domain";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Best Hybrid Mobile App Developers | Expert App Developer",
  description:
    "Are you in search of hybrid mobile app developer? Logicspice is a top rated hybrid mobile app development company that serve expert hybrid app developers.",
  keywords:
    "Hybrid Mobile App Developers, Expert App Developer, Hire Developers,hire hybrid app developer, hire hybrid app developers, hire app developer india, hire app developers india, hire app developers in india, app developers for hire india, hire mobile app developers in india",
  alternates: {
    canonical: `${Domain}/hire-hybrid-mobile-app-developer`,
  },
};
// const jsonLd = {
//     "@context": "https://schema.org",
//     "@type": "ProfessionalService",
//     "name": "Hire Dedicated Developers | Hire Programmers - Logicspice",
//     "description": "Hire dedicated developers and programmers at Logicspice. Our skilled team offers expert solutions for your custom mobile apps & software development needs.",
//     "image": `${Domain}/img/logo.png`,
//     "@id": `${Domain}`,
//     "url": `${Domain}`,
//     "telephone": "+91-9829559922",
//     "address": {
//     "@type": "PostalAddress",
//     "streetAddress": "506-507, JAIPUR ELECTRONIC MARKET, Near Riddhi Siddhi Circle",
//     "addressLocality": "Jaipur",
//     "postalCode": "302018",
//     "addressCountry": "IN"
//     }
//     }

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
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /> */}
    </html>
  );
}
