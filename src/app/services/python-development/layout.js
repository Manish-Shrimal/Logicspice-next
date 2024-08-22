import { Inter } from "next/font/google";
import "../globals.css";
import Head from "next/head";
import Domain from "@/app/BaseAPI/Domain";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Affordable Web & Mobile App Development Services - LogicSpice",
  description:
    "Logicspice, an IT company that is offering services in web design, web and mobile app development, ready to use software development, digital marketing & other.",
  keywords:
    "Mobile application development services, Website design and development services, e-commerce web development, android app development, iPhone app development, Website hosting services, Mobile app development company",
  alternates: {
    canonical: `${Domain}/services`,
    
  },
};
const jsonLd = {
    "@context": "http://schema.org/",
    "@type": "ProfessionalService",
    "name": "Affordable Web & Mobile App Development Services-LogicSpice", 
    "image": [ `${Domain}/img/logo.png` ],
    "description": "Logicspice is a well established mobile application and web development company with over a decade and offers web design services, custom web development services, ready to use software development services, mobile app development & digital marketing services",
    "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "reviewCount": "347"  } }
    

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
