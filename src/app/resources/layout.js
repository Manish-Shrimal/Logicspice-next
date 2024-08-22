

import { Inter } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import Domain from "@/app/BaseAPI/Domain";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mobile App Development Resources | Web Development Resources",
  description:
    "Are you Looking building an app or website? Find out best resources for your mobile application development and web development need at logicspice.",
  keywords:
    "Mobile App development agency , Android app development company , Iphone app development services, website development company, hire app developers, Dedicated developers",
  alternates: {
    canonical: `${Domain}/resources`,
    
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
