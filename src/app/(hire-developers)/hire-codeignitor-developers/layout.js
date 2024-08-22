import { Inter } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import Domain from "@/app/BaseAPI/Domain";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hire Codeigniter Developer | PHP Codeigniter Programmer",
  description:
    "Hire codeigniter developer from logicspice for custom web development, ecommerce solution. Our php codeigniter programmer having an expertise in all php framework.",
  keywords:
    "hire codeigniter developer, hire codeigniter programmers, Hire php codeigniter developer, hire expert codeigniter developers, codeigniter developer for hire, dedicated codeigniter developers, Hire Dedicated codeigniter Programmer",
  alternates: {
    canonical: `${Domain}/hire-codeigniter-developers`,
  },
};
// const jsonLd = {
//   "@context": "http://schema.org/",
//   "@type": "ProfessionalService",
//   name: "Hire Cakephp Developer | Hire Dedicated CakePHP Programmer",
//   image: [`${Domain}/img/hiredevelopers/hire_cakephp_developer.png`],
//   description:
//     "Hire dedicated CakePHP developers and programmers at logicspice for custom CakePHP website development solutions in your budget",
//   aggregateRating: {
//     "@type": "AggregateRating",
//     ratingValue: "4.8",
//     reviewCount: "152",
//   },
// };

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
