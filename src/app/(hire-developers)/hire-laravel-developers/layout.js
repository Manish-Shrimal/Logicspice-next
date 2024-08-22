import { Inter } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import Domain from "@/app/BaseAPI/Domain";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hire Laravel Developers | Dedicated Freelance Laravel Expert Developers",
  description:
    "Hire dedicated expert laravel programmers for custom Laravel web development. Full time or part time dedicated freelance Laravel developer for hire at affordable cost.",
  keywords:
    "laravel developers, hire laravel developer, hire dedicated laravel developer, hire laravel expert, hire laravel programmer, freelance laravel developer, hire expert laravel developer, hire laravel developers in india, hire laravel developer india, hire laravel developer in india, hire laravel developers india",
  alternates: {
    canonical: `${Domain}/hire-laravel-developers`,
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
