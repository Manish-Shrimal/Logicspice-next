// import { Inter } from "next/font/google";
// import "../../globals.css";
// import Head from "next/head";
// import BaseAPI from "@/app/BaseAPI/BaseAPI";
// import MetadataApi from "@/app/BaseAPI/MetadataApi";
// import Domain from "@/app/BaseAPI/Domain";
// import CookiesConsent from "@/app/Components/CookiesConsent";

// const inter = Inter({ subsets: ["latin"] });

// export async function generateMetadata({ params, searchParams }, parent) {
//   // Fetch data
//   const product = await fetch(`${MetadataApi}/appointment-scheduling-software`,{
//     cache: "no-store",
//   }).then((res) =>
//     res.json()
//   );
//   // console.log(product)

//   let text = product.data.schema;

//   let schemaOrg = null;
//   if(text){
//     const cleanedText = text
//       .replace(/\\r\\n/g, '')   // Remove \r\n (carriage return + newline)
//       .replace(/\\n/g, '')      // Remove \n (newline)
//       .replace(/\\r/g, '')      // Remove \r (carriage return)
//       .replace(/\\+/g, '')      // Remove unnecessary backslashes
//       .replace(/[\u0000-\u001F\u007F]/g, '');  // Remove control characters

//       schemaOrg = cleanedText && JSON.parse(cleanedText);

//   }

//   // Return metadata
//   return {
//     title: product.data.meta_title,
//     description: product.data.meta_description,
//     keywords: product.data.meta_keyword,
//     // Add other meta tags as needed
//     alternates: {
//       canonical: `${Domain}/appointment-scheduling-software`,
//     },
//     robots: {
//       index: true,
//       follow: true,
//       googleBot: {
//         index: true,
//         follow: true,
//         "max-video-preview": -1,
//         "max-image-preview": "large",
//         "max-snippet": -1,
//       },
//     },
//     schemaOrg: schemaOrg || null,
//   };
// }

// export default async function RootLayout({ children, params, searchParams }) {
//   // Fetch metadata using the generateMetadata function
//   const metadata = await generateMetadata({ params, searchParams });
// //   console.log(metadata);

//   return (
//     <html lang="en">
//       <Head>
//         <meta name="description" content={metadata.description} />
//         <meta name="keywords" content={metadata.keywords} />
//         <title>{metadata.title}</title>

//       </Head>
//       <CookiesConsent />
//       <body className={inter.className}>{children}</body>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(metadata.schemaOrg) }}
//       />
//     </html>
//   );
// }

import { Inter } from "next/font/google";
// import "./globals.css";
import "../../globals.css";
import AOSInitializer from "../../Components/AOSInitializer";
import GTMComponent from "../../Components/GTMComponent";
import Chatbot from "../../Components/Chatbot";
import MetadataApi from "../../BaseAPI/MetadataApi";
import Domain from "../../BaseAPI/Domain";
import Head from "next/head";
import CookiesConsent from "../../Components/CookiesConsent";

const inter = Inter({ subsets: ["latin"] });
export async function generateMetadata({ params, searchParams }) {
  const product = await fetch(`${MetadataApi}/appointment-scheduling-software`, { cache: "no-store" })
    .then((res) => res.json());

  let text = product.data.schema;
  let schemaOrg = null;

  if (text) {
    const cleanedText = text
      .replace(/\\r\\n/g, '')
      .replace(/\\n/g, '')
      .replace(/\\r/g, '')
      .replace(/\\+/g, '')
      .replace(/[\u0000-\u001F\u007F]/g, '');
    
    schemaOrg = cleanedText ? JSON.parse(cleanedText) : null;
  }



  return {
    title: product.data.meta_title,
    description: product.data.meta_description,
    keywords: product.data.meta_keyword,
    alternates: {
      canonical: `${Domain}/appointment-scheduling-software`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    schemaOrg: schemaOrg || null,
  };
}

export default async function RootLayout({ children, params, searchParams }) {
  const metadata = await generateMetadata({ params, searchParams });

  return (
    <html lang="en">
      <Head>
        

        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <title>{metadata.title}</title>
      </Head>

      <body className={inter.className}>
        <Chatbot />
        <CookiesConsent />
        {children}

        {/* Render Structured Data (Schema.org) */}
        {metadata.schemaOrg && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(metadata.schemaOrg),
            }}
          />
        )}

      

        
      </body>
    </html>
  );
}
