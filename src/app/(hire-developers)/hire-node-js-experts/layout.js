import { Inter } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import Domain from "@/app/BaseAPI/Domain";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hire Node Js Developers | Dedicated Node Js Developer For Hire",
  description:
    "Hire expert Node Js developers from Logicspice who build highly dynamic, fully-fledged and feature-rich web applications for you using latest technologies.",
  keywords:
    "Node Js Developers, HIre Node Js Developers, Node Js Programmer, expert Node Js developer, dedicated Node Js developers, Hire Developer, Hire Experts",
  alternates: {
    canonical: `${Domain}/hire-node-js-experts`,
  },
};
const jsonLd = {
  "@context": "http://schema.org/",
  "@type": "ProfessionalService",
  name: " Hire Node Js Developers | Dedicated Node Js Developer For Hire ",
  image: [`${Domain}/img/hiredevelopers/node_js.png`],
  description:
    "Hire expert Node Js developer from logicspice who can build highly dynamic, fully-fledged and feature-rich web applications for you. Our dedicated Node Js developers has experience in latest Node.JS application development platforms",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "213",
  },
};

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
