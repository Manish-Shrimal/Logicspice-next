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
//     `${MetadataApi}/fiverr-clone`,{
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
//       canonical: `${Domain}/fiverr-clone`,
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
//   const product = await fetch(`${MetadataApi}/fiverr-clone`, {
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

  



  

//     // schemaOrg = cleanedText  

//   }




//   // Example FAQ schema
//   const faqSchema = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     mainEntity: [
//       {
//         "@type": "Question",
//         name: "How can a user search for gigs?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "User can search for the gigs by selecting the categories and the subcategories or by entering the keywords related to their environment.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "Can a user view the profile of users who has added the gig?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "Yes. User can view the profile of user who has uploaded the bid along the total reviews received by him and other gigs added by him.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "How can the users manage their gigs on the website?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "The users can add their gigs along with pictures and other deals to the website. They can also edit and delete the gigs that are already been added.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "How many days will it take to implement the customization?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "Time taken to implement your Fiverr Clone Script depends on the level of customization and data migration. The time frame generally ranges 5-6 weeks.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "Can the User give rating to a gig even if they haven purchased it?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "No. User can only give rating out of 5 when they have purchased the gig. User can also write a review along with the rating.",
//         },
//       },
//     ],
//   };

//   // Combine the existing schema and FAQ schema

//   // schemaOrg = {
//   //   ...schemaOrg,
//   //   ...faqSchema,
//   // };

//   // schemaOrg = {
//   //   ...schemaOrg,
//   //   // ...faqSchema,
//   // };

//   // Return metadata
//   return {
//     title: product.data.meta_title,
//     description: product.data.meta_description,
//     keywords: product.data.meta_keyword,
//     alternates: {
//       canonical: `${Domain}/fiverr-clone`,
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











import { Inter } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import BaseAPI from "../../BaseAPI/BaseAPI";
import MetadataApi from "../../BaseAPI/MetadataApi";
import Domain from "../../BaseAPI/Domain";
import Chatbot from "../../Components/Chatbot";
import CookiesConsent from "../../Components/CookiesConsent";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params, searchParams }, parent) {
  // Fetch data
  const product = await fetch(`${MetadataApi}/fiverr-clone`, {
    cache: "no-store",
  }).then((res) => res.json());

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
        name: "How can a user search for gigs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "User can search for the gigs by selecting the categories and the subcategories or by entering the keywords related to their environment.",
        },
      },
      {
        "@type": "Question",
        name: "Can a user view the profile of users who has added the gig?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. User can view the profile of user who has uploaded the bid along the total reviews received by him and other gigs added by him.",
        },
      },
      {
        "@type": "Question",
        name: "How can the users manage their gigs on the website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The users can add their gigs along with pictures and other deals to the website. They can also edit and delete the gigs that are already been added.",
        },
      },
      {
        "@type": "Question",
        name: "How many days will it take to implement the customization?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Time taken to implement your Fiverr Clone Script depends on the level of customization and data migration. The time frame generally ranges 5-6 weeks.",
        },
      },
      {
        "@type": "Question",
        name: "Can the User give rating to a gig even if they haven purchased it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. User can only give rating out of 5 when they have purchased the gig. User can also write a review along with the rating.",
        },
      },
    ],
  };

  return {
    title: product.data.meta_title,
    description: product.data.meta_description,
    keywords: product.data.meta_keyword,
    alternates: {
      canonical: `${Domain}/fiverr-clone`,
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
    openGraph: {
      title: product.data.meta_title,
      description: product.data.meta_description,
      url: `${Domain}/fiverr-clone`,
      type: "website",
      image: `${Domain}/images/og-image.jpg`, // Change this to your OG image path
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
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <title>{metadata.title}</title>
      </Head>
      <Chatbot />
      <CookiesConsent />
      <body className={inter.className}>{children}</body>
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
    </html>
  );
}




// Latest code Schema is not loading

// import { Inter } from "next/font/google";
// import "../../globals.css";
// import BaseAPI from "@/app/BaseAPI/BaseAPI";
// import MetadataApi from "@/app/BaseAPI/MetadataApi";
// import Domain from "@/app/BaseAPI/Domain";
// import CookiesConsent from "@/app/Components/CookiesConsent";

// const inter = Inter({ subsets: ["latin"] });

// // ✅ Make metadata static-friendly to improve performance
// export async function generateMetadata() {
//   try {
//     const response = await fetch(`${MetadataApi}/fiverr-clone`, {
//       cache: "force-cache", // ⏳ Cache the response for better performance
//     });
//     const product = await response.json();

//     let schemaOrg = null;
//     if (product?.data?.schema) {
//       try {
//         schemaOrg = JSON.parse(product.data.schema.replace(/\s+/g, " ").trim());
//       } catch (error) {
//         console.error("Error parsing schema JSON:", error);
//       }
//     }

//     return {
//       title: product.data.meta_title || "Fiverr Clone",
//       description: product.data.meta_description || "A Fiverr clone platform.",
//       keywords: product.data.meta_keyword || "fiverr clone, gig marketplace",
//       alternates: {
//         canonical: `${Domain}/fiverr-clone`,
//       },
//       robots: {
//         index: true,
//         follow: true,
//       },
//       openGraph: {
//         title: product.data.meta_title || "Fiverr Clone",
//         description: product.data.meta_description || "A Fiverr-like marketplace.",
//         url: `${Domain}/fiverr-clone`,
//         type: "website",
//         images: [
//           {
//             url: `${Domain}/images/og-image.jpg`,
//             width: 1200,
//             height: 630,
//             alt: "Fiverr Clone Platform",
//           },
//         ],
//       },
//       schemaOrg,
//     };
//   } catch (error) {
//     console.error("Error fetching metadata:", error);
//     return {};
//   }
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* ✅ Preconnect & Preload Optimizations */}
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//         <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
//           rel="stylesheet"
//         />
//       </head>
//       <body className={inter.className}>
//         <CookiesConsent />
//         {children}

//         {/* ✅ Lazy Loading Structured Data */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(generateMetadata().schemaOrg || {}),
//           }}
//         />
//       </body>
//     </html>
//   );
// }











