

import { Inter } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import Domain from "@/app/BaseAPI/Domain";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Project Communication Strategy | Process Flow – LogicSpice",
  description:
    "Logicspice follow project communication strategy and work step by step process to provide better solution for both mobile app and web development.",
  keywords:
    "Project Communication Strategy, step by step process, Work flow, app development services, mobile app development flowchart, proect analysis, Project Documentation, confidentiality for project, Post Maintenance Support",
  alternates: {
    canonical: `${Domain}/resources/project-communication`,
    
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
