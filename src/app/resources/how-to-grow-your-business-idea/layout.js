

import { Inter } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import Domain from "@/app/BaseAPI/Domain";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "How to Grow Your Business Idea – LogicSpice",
  description:
    "Make your business idea successful, hire web developers and mobile application developers for your website development or business application development.",
  keywords:
    "Grow Your Business, Business mobile application, hire web developers for your business, business android app, iphone application for business, app development idea, web development ideas",
  alternates: {
    canonical: `${Domain}/resources/how-to-grow-your-business-idea`,
    
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
