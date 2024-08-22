

import { Inter } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import Domain from "@/app/BaseAPI/Domain";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Know About Our Work Process In Developing Web & Mobile App",
  description:
    "Web & mobile application developers at logicspice follow simple and clean work process that includes steps like analysis of requirements, estimate of time & cost,",
  keywords:
    "Software Development Work Process, Flow Graph for app development, web development flow chart, how we work, customized development work process",
  alternates: {
    canonical: `${Domain}/resources/our-work-process`,
    
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
