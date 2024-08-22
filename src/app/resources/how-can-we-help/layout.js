

import { Inter } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import Domain from "@/app/BaseAPI/Domain";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "How Can We Help | Project Step By Step Guide - Logicspice",
  description:
    "Do you have any query? Find out how can we help for your mobile app development and web solutions. Know step by step process of web & app development.",
  keywords:
    "How Can We Help, Mobile application development help, Android app development services, iphone application development, app query help, project help",
  alternates: {
    canonical: `${Domain}/resources/how-can-we-help`,
    
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
