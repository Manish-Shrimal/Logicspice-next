// import { Inter } from "next/font/google";
// import "../../globals.css";
// import Head from "next/head";
// import BaseAPI from "@/app/BaseAPI/BaseAPI";
// import MetadataApi from "@/app/BaseAPI/MetadataApi";
// import Domain from "@/app/BaseAPI/Domain";

// const inter = Inter({ subsets: ["latin"] });

// export async function generateMetadata({ params, searchParams }, parent) {
//   // Fetch data
//   const product = await fetch(`${MetadataApi}/recruitment-management-software`,{
//     cache: "no-store",
//   }).then((res) =>
//     res.json()
//   );

//   let text = product.data.schema;

//   let schemaOrg = null;
//   if(text !== null || text !== ""){
//     const cleanedText = text
//       .replace(/\\r\\n/g, '')   // Remove \r\n (carriage return + newline)
//       .replace(/\\n/g, '')      // Remove \n (newline)
//       .replace(/\\r/g, '')      // Remove \r (carriage return)
//       .replace(/\\+/g, '')      // Remove unnecessary backslashes
//       .replace(/[\u0000-\u001F\u007F]/g, '');  // Remove control characters

//       schemaOrg = cleanedText;

//   }

//   // Return metadata
//   return {
//     title: product.data.meta_title,
//     description: product.data.meta_description,
//     keywords: product.data.meta_keyword,
//     // Add other meta tags as needed
//     alternates: {
//       canonical: `${Domain}/recruitment-management-software`,
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
//       <body className={inter.className}>{children}</body>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: metadata.schemaOrg }}
//       />
//     </html>
//   );
// }

import { Inter } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import BaseAPI from "../../BaseAPI/BaseAPI";
import MetadataApi from "../../BaseAPI/MetadataApi";
import Domain from "../../BaseAPI/Domain";
import CookiesConsent from "../../Components/CookiesConsent";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params, searchParams }, parent) {
  // Fetch data
  const product = await fetch(
    `${MetadataApi}/recruitment-management-software`,
    {
      cache: "no-store",
    }
  ).then((res) => res.json());

  let text = product.data.schema;

  let schemaOrg = null;
  if (text) {
    const cleanedText = text
      .replace(/\\r\\n/g, "") // Remove \r\n (carriage return + newline)
      .replace(/\\n/g, "") // Remove \n (newline)
      .replace(/\\r/g, "") // Remove \r (carriage return)
      .replace(/\\+/g, "") // Remove unnecessary backslashes
      .replace(/[\u0000-\u001F\u007F]/g, ""); // Remove control characters

    schemaOrg = cleanedText && JSON.parse(cleanedText);
  }

  // Example FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can candidates upload their CV to apply for job?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, they can upload their CV and can apply for a particular job position.",
        },
      },
      {
        "@type": "Question",
        name: "Can jobseeker search for jobs using work type and location?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, they can search for Jobs by using Keyword, Category, Location & Work Type etc.",
        },
      },
      {
        "@type": "Question",
        name: "Once I purchase this script, how many days will it take to go online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "it takes 2 working days generally, provided all the information to make it live has been given.",
        },
      },
      {
        "@type": "Question",
        name: "Can I resell the script? Will I have rights over the script code?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, You can�t resell the script. All rights will remain with Logicspice only.",
        },
      },
      {
        "@type": "Question",
        name: "Will I be able to use it on multiple domains, after I purchase this script?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You will be licensed to use it only for the domain, you purchased for.",
        },
      },
      {
        "@type": "Question",
        name: "Along with hosting server details, what other recommendations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We recommend you purchase SSL certificate along with a hosting server, considering that an SSL certificate is necessary for all the websites these days and it provides a secure layer to the website as well.",
        },
      },
    ],
  };

  return {
    title: product.data.meta_title,
    description: product.data.meta_description,
    keywords: product.data.meta_keyword,
    alternates: {
      canonical: `${Domain}/recruitment-management-software`,
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
    faqSchema: faqSchema,
  };
}

export default async function RootLayout({ children, params, searchParams }) {
  // Fetch metadata using the generateMetadata function
  const metadata = await generateMetadata({ params, searchParams });

  return (
    <html lang="en">
      <Head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <title>{metadata.title}</title>
      </Head>
      <CookiesConsent />
      <body className={inter.className}>{children}</body>
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(metadata.schemaOrg) }}
      /> */}
      {metadata.schemaOrg && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(metadata.schemaOrg),
          }}
        />
      )}
      {/* Render the FAQ schema separately */}
      {metadata.faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: metadata.faqSchema,
          }}
        />
      )}
    </html>
  );
}
