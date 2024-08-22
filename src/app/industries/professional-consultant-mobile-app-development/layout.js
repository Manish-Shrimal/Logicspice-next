import { Inter } from "next/font/google";
import "../../globals.css";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import Domain from "@/app/BaseAPI/Domain";


import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Apps & Web Development Services For Professional Consultant",
  description:
    "An enterprise mobile app development company that offers android & iPhone app development services for professional consultant i.e. CA, Lawyers, Doctors.",
  keywords:
    "Web Development Services For Professional Consultant, App Development company for professional, Doctor appointment management mobile apps, applications for prfessional CA's, Business amangement mobile apps, iPhone apps for professional",
  alternates: {
    // canonical: 'https://nextjs.org',
    canonical: `${Domain}/industries/professional-consultant-mobile-app-development`,

    languages: {
      "en-US": "https://nextjs.org/en-US",
      "de-DE": "https://nextjs.org/de-DE",
    },
    media: {
      "only screen and (max-width: 600px)": "https://nextjs.org/mobile",
    },
    types: {
      "application/rss+xml": "https://nextjs.org/rss",
    },
  },
};


export default function RootLayout({ children, canonicalUrl }) {
  return (
    <html lang="en">
      <Head>
        
      </Head>
      <body className={inter.className}>{children}</body>
    
    </html>
  );
}






