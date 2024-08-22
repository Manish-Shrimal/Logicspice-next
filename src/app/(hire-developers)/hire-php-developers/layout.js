import { Inter } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import Domain from "@/app/BaseAPI/Domain";

const inter = Inter({ subsets: ["latin"] });

// Metadata for the page
const metadata = {
  title: "Hire iPhone App Developers | Hire Dedicated iOS Programmers",
  description:
    "Hire IOS app developers from Logicspice for the best iOS app development services. Develop custom iPhone mobile apps at affordable prices with our developer.",
  keywords:
    "hire iOS developer, hire iPhone app developer, hire iOS app developer, hire iOS programmer, best iPhone app developers, expert iPhone app developer for hire, hire iPhone application developer",
  alternates: {
    canonical: `${Domain}/hire-ios-app-developers`,
  },
};

export default function RootLayout({ children, canonicalUrl }) {
  return (
    <html lang="en">
      <Head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link
          rel="canonical"
          href={canonicalUrl || metadata.alternates.canonical}
        />
        <title>{metadata.title}</title>
      </Head>
      <body className={inter.className}>{children}</body>
      {/* Uncomment and use this if you need structured data */}
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /> */}
    </html>
  );
}
