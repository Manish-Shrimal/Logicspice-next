// import { Inter } from "next/font/google";
// import "../../globals.css";
// import Head from "next/head";
// import BaseAPI from "@/app/BaseAPI/BaseAPI";
// import MetadataApi from "@/app/BaseAPI/MetadataApi";
// import Domain from "@/app/BaseAPI/Domain";

// const inter = Inter({ subsets: ["latin"] });

// export async function generateMetadata({ params, searchParams }, parent) {
//   // Fetch data
//   const product = await fetch(
//     `${MetadataApi}/freelancer-clone`,{
//       cache: "no-store",
//     }
//   ).then((res) => res.json());
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
//       canonical: `${Domain}/freelancer-clone`,
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
//   //   console.log(metadata);

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
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(metadata.schemaOrg) }}
//       />
//     </html>
//   );
// }

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
//   const product = await fetch(`${MetadataApi}/freelancer-clone`, {
//     cache: "no-store",
//   }).then((res) => res.json());

//   let text = product.data.schema;

//   let schemaOrg = null;
//   if (text) {
//     const cleanedText = text
//       .replace(/\\r\\n/g, "") // Remove \r\n (carriage return + newline)
//       .replace(/\\n/g, "") // Remove \n (newline)
//       .replace(/\\r/g, "") // Remove \r (carriage return)
//       .replace(/\\+/g, "") // Remove unnecessary backslashes
//       .replace(/[\u0000-\u001F\u007F]/g, ""); // Remove control characters

//     schemaOrg = cleanedText && JSON.parse(cleanedText);
//   }

//   // Example FAQ schema
//   const faqSchema = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     mainEntity: [
//       {
//         "@type": "Question",
//         name: "Can the Employer give rating to a Worker even if they havent completed the project?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "No. The Employer and Worker can rate each other only when they have completed the project.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "Can Employer contact a Worker if they are interested in taking their services?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "Yes. Employer can send messages to the Worker but not before the Worker has posted a bid on the project that is uploaded by the Employer.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "How many days will it take to implement the customization?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "Time taken to implement your Freelancer Custom development depends on the level of customization and data migration. The time frame generally ranges 5-6 weeks.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "How can a worker get hired for a project by the employer?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "Worker can post a bid along with a proposal on the project of his skills. Employer can review the bid and award the project to the worker whose proposal they like.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "What information does the Worker is required to send while posting a bid on a project?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "The Worker is required to enter the estimated budget, time frame and a description of his understanding of the project while posting a bid.",
//         },
//       },
//     ],
//   };

//   // Combine the existing schema and FAQ schema
//   // schemaOrg = {
//   //   ...schemaOrg,
//   //   ...faqSchema,
//   // };

//   // Return metadata
//   return {
//     title: product.data.meta_title,
//     description: product.data.meta_description,
//     keywords: product.data.meta_keyword,
//     alternates: {
//       canonical: `${Domain}/freelancer-clone`,
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
//     faqSchema: faqSchema,
//   };
// }

// export default async function RootLayout({ children, params, searchParams }) {
//   // Fetch metadata using the generateMetadata function
//   const metadata = await generateMetadata({ params, searchParams });

//   return (
//     <html lang="en">
//       <Head>
//         <meta name="description" content={metadata.description} />
//         <meta name="keywords" content={metadata.keywords} />
//         <title>{metadata.title}</title>
//       </Head>
//       <CookiesConsent />
//       <body className={inter.className}>{children}</body>
//       {/* <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(metadata.schemaOrg) }}
//       /> */}
//       {metadata.schemaOrg && (
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(metadata.schemaOrg),
//           }}
//         />
//       )}
//       {/* Render the FAQ schema separately */}
//       {metadata.faqSchema && (
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: metadata.faqSchema,
//           }}
//         />
//       )}
//     </html>
//   );
// }

// import { Inter } from "next/font/google";
// import "../../globals.css";
// import Head from "next/head";
// import BaseAPI from "@/app/BaseAPI/BaseAPI";
// import MetadataApi from "@/app/BaseAPI/MetadataApi";
// import Domain from "@/app/BaseAPI/Domain";
// import CookiesConsent from "@/app/Components/CookiesConsent";

// const inter = Inter({ subsets: ["latin"] });

// export async function generateMetadata({ params, searchParams }, parent) {
//   const product = await fetch(`${MetadataApi}/freelancer-clone`, {
//     cache: "no-store",
//   }).then((res) => res.json());

//   let text = product.data.schema;
//   let schemaOrg = null;

//   if (text) {
//     const cleanedText = text
//       .replace(/\\r\\n/g, "")
//       .replace(/\\n/g, "")
//       .replace(/\\r/g, "")
//       .replace(/\\+/g, "")
//       .replace(/[\u0000-\u001F\u007F]/g, "");

//     schemaOrg = cleanedText && JSON.parse(cleanedText);
//   }

//   const faqSchema = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     mainEntity: [
//       {
//         "@type": "Question",
//         name: "Can the Employer give rating to a Worker even if they havent completed the project?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "No. The Employer and Worker can rate each other only when they have completed the project.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "Can Employer contact a Worker if they are interested in taking their services?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "Yes. Employer can send messages to the Worker but not before the Worker has posted a bid on the project that is uploaded by the Employer.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "How many days will it take to implement the customization?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "Time taken to implement your Freelancer Custom development depends on the level of customization and data migration. The time frame generally ranges 5-6 weeks.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "How can a worker get hired for a project by the employer?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "Worker can post a bid along with a proposal on the project of his skills. Employer can review the bid and award the project to the worker whose proposal they like.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "What information does the Worker is required to send while posting a bid on a project?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "The Worker is required to enter the estimated budget, time frame and a description of his understanding of the project while posting a bid.",
//         },
//       },
//     ],
//   };

//   return {
//     title: product.data.meta_title,
//     description: product.data.meta_description,
//     keywords: product.data.meta_keyword,
//     alternates: {
//       canonical: `${Domain}/freelancer-clone`,
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
//     faqSchema: faqSchema,
//   };
// }

// export default async function RootLayout({ children, params, searchParams }) {
//   const metadata = await generateMetadata({ params, searchParams });

//   return (
//     <html lang="en">

// <Head>
//   <meta name="description" content={metadata.description} />
//   <meta name="keywords" content={metadata.keywords} />
//   <title>{metadata.title}</title>

//   {/* Preconnect for performance */}
//   <link rel="preconnect" href="https://fonts.googleapis.com" />
//   <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//   <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
// </Head>

//       <CookiesConsent />

//       <body className={inter.className}>{children}</body>

//       {/* ✅ JSON-LD Structured Data */}
//       {metadata.schemaOrg && (
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(metadata.schemaOrg),
//           }}
//         />
//       )}

//       {metadata.faqSchema && (
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: metadata.faqSchema,
//           }}
//         />
//       )}
//     </html>
//   );
// }

import { Inter } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import MetadataApi from "@/app/BaseAPI/MetadataApi";
import Domain from "@/app/BaseAPI/Domain";
import CookiesConsent from "@/app/Components/CookiesConsent";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params, searchParams }, parent) {
  // Removed cache: "no-store" to support bfcache
  const product = await fetch(`${MetadataApi}/freelancer-clone`).then((res) =>
    res.json()
  );

  let text = product.data.schema;
  let schemaOrg = null;

  if (text) {
    const cleanedText = text
      .replace(/\\r\\n/g, "")
      .replace(/\\n/g, "")
      .replace(/\\r/g, "")
      .replace(/\\+/g, "")
      .replace(/[\u0000-\u001F\u007F]/g, "");

    schemaOrg = cleanedText && JSON.parse(cleanedText);
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can the Employer give rating to a Worker even if they haven't completed the project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The Employer and Worker can rate each other only when they have completed the project.",
        },
      },
      {
        "@type": "Question",
        name: "Can Employer contact a Worker if they are interested in taking their services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Employer can send messages to the Worker but not before the Worker has posted a bid on the project that is uploaded by the Employer.",
        },
      },
      {
        "@type": "Question",
        name: "How many days will it take to implement the customization?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Time taken to implement your Freelancer Custom development depends on the level of customization and data migration. The time frame generally ranges 5-6 weeks.",
        },
      },
      {
        "@type": "Question",
        name: "How can a worker get hired for a project by the employer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Worker can post a bid along with a proposal on the project of his skills. Employer can review the bid and award the project to the worker whose proposal they like.",
        },
      },
      {
        "@type": "Question",
        name: "What information does the Worker is required to send while posting a bid on a project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Worker is required to enter the estimated budget, time frame and a description of his understanding of the project while posting a bid.",
        },
      },
    ],
  };

  return {
    title: product.data.meta_title,
    description: product.data.meta_description,
    keywords: product.data.meta_keyword,
    alternates: {
      canonical: `${Domain}/freelancer-clone`,
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
  const metadata = await generateMetadata({ params, searchParams });

  return (
    <html lang="en">
      <Head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <title>{metadata.title}</title>

        {/* ✅ Preconnect and load Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body className={inter.className}>
        <CookiesConsent />
        {children}

        {/* ✅ Structured Data for SEO */}
        {metadata.schemaOrg && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(metadata.schemaOrg),
            }}
          />
        )}

        {metadata.faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(metadata.faqSchema),
            }}
          />
        )}
      </body>
    </html>
  );
}
