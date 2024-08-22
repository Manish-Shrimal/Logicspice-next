

import { Inter } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import Domain from "@/app/BaseAPI/Domain";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Know How Much An App Cost | App Development – LogicSpice",
  description:
    "Logicspice is a certified IT company specialising in android and iphone app development. Know how much it cost to develop an android and iphone app.",
  keywords:
    "app development company, mobile app development company, android app development services, android app development company, iphone app development company, ios app development, iphone app development Services",
  alternates: {
    canonical: `${Domain}/resources/how-much-an-app-cost`,
    
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
