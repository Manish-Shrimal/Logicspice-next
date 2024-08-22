

import { Inter } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import Domain from "@/app/BaseAPI/Domain";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CakePHP Web Development Company | CakePHP Developer",
  description:
    "A leading CakePHP web development company having CakePHP expert developers, providing the best cakephp development services.",
  keywords:
    "cakephp development company, cakephp web development company, cakephp developer, cakephp development services, cakephp development, cakephp application development, cakephp website development, Cakephp Web Development",
  alternates: {
    canonical: `${Domain}/services/cakephp-development`,
    
  },
};
// const jsonLd = {
//     "@context": "http://schema.org/",
//     "@type": "ProfessionalService",
//     "name": "Affordable Web & Mobile App Development Services-LogicSpice", 
//     "image": [ `${Domain}/img/logo.png` ],
//     "description": "Logicspice is a well established mobile application and web development company with over a decade and offers web design services, custom web development services, ready to use software development services, mobile app development & digital marketing services",
//     "aggregateRating": {
//     "@type": "AggregateRating",
//     "ratingValue": "4.6",
//     "reviewCount": "347"  } }

const jsonLd = {
    "@context": "http://schema.org/",
    "@type": "ProfessionalService",
    "name": " CakePHP Development Company | Cakephp Web Development ",
   
    "image": [ `${Domain}/img/cakephpdevelopment/cakephp-banner-img.png` ],
    "description": "Logicspice is CakePHP Development Company offers rich CakePHP web application development services at cost effective price.Experienced developers work over CakePHP framework.",
    "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "365"
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
