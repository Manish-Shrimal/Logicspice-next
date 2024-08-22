

import { Inter } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import Domain from "@/app/BaseAPI/Domain";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quality Assurance | innovative Web & Mobile Solution",
  description:
    "Logicspice offers quality assurance for their mobile development and web development solutions. Our services and products meet or exceed customer expectations.",
  keywords:
    "Quality Assurance, innovative Web & Mobile Solution, High Quality app development, Hire qualified app developers, Readymade software scripts",
  alternates: {
    canonical: `${Domain}/resources/quality-assurance`,
    
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
     
    </html>
  );
}
