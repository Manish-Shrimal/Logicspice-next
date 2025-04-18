// import { Inter } from "next/font/google";
// import "../../globals.css";
// import Head from "next/head";
// import BaseAPI from "@/app/BaseAPI/BaseAPI";
// import MetadataApi from "@/app/BaseAPI/MetadataApi";
// import Domain from "@/app/BaseAPI/Domain";
// import CookiesConsent from "@/app/Components/CookiesConsent";

// const inter = Inter({ subsets: ["latin"] });

// export async function generateMetadata({ params, searchParams }, parent) {
//   const product = await fetch(`${MetadataApi}/event-booking-software`, {
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

//   const faqSchema = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     mainEntity: [
//       {
//         "@type": "Question",
//         name: "Once I purchase this script, how many days will it take to go online?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "It takes 2 working days generally, provided all the information to make it live has been given.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "Can I get help for customization?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "Yes, we have an experienced team of developers to help you with customization as per your requirements.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "Can I resell the script? Will I have rights over the script code?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "No, You can’t resell the script. All rights will remain with Logicspice only.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "Will I be able to use it on multiple domains, after I purchase this script?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "You will be licensed to use it only for the domain, you purchased for.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "Can I use your script without any programming skills?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "Yes, You can directly install our given script and can manage everything in the admin panel which is very user friendly.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "Along with hosting server details, what other recommendations?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "We recommend you purchase SSL certificate along with a hosting server, considering that an SSL certificate is necessary for all the websites these days and it provides a secure layer to the website as well.",
//         },
//       },
//     ],
//   };

//   return {
//     title: product.data.meta_title,
//     description: product.data.meta_description,
//     keywords: product.data.meta_keyword,
//     alternates: {
//       canonical: `${Domain}/event-booking-software`,
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
//       <Head>
//         <meta name="description" content={metadata.description} />
//         <meta name="keywords" content={metadata.keywords} />
//         <title>{metadata.title}</title>
//         {metadata.schemaOrg && (
//           <script
//             key="schema-org"
//             strategy="lazyonload"
//             type="application/ld+json"
//             dangerouslySetInnerHTML={{
//               __html: JSON.stringify(metadata.schemaOrg),
//             }}
//           />
//         )}
//         {metadata.faqSchema && (
//           <script
//             id="faq-schema"
//             strategy="lazyonload"
//             key="faq-schema"
//             type="application/ld+json"
//             dangerouslySetInnerHTML={{
//               __html: JSON.stringify(metadata.faqSchema, null, 2),
//             }}
//           />
//         )}
//       </Head>
//       <CookiesConsent />
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }











import { Inter } from "next/font/google";
import "../../globals.css";
import Domain from "@/app/BaseAPI/Domain";
import MetadataApi from "@/app/BaseAPI/MetadataApi";
import CookiesConsent from "@/app/Components/CookiesConsent";

const inter = Inter({ subsets: ["latin"] });

// ✅ Function to Fetch Metadata with Caching
export async function generateMetadata() {
  const response = await fetch(`${MetadataApi}/event-booking-software`, {
    cache: "force-cache", // Enables caching
    next: { revalidate: 3600 }, // Revalidate every 1 hour
  });

  const product = await response.json();
  let text = product?.data?.schema || "";

  let schemaOrg = null;
  if (text) {
    const cleanedText = text
      .replace(/\\r\\n/g, "")
      .replace(/\\n/g, "")
      .replace(/\\r/g, "")
      .replace(/\\+/g, "")
      .replace(/[\u0000-\u001F\u007F]/g, ""); // Remove control characters

    try {
      schemaOrg = JSON.parse(cleanedText);
    } catch (error) {
      console.error("Error parsing JSON schema:", error);
    }
  }

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Once I purchase this script, how many days will it take to go online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It takes 2 working days generally, provided all the information to make it live has been given.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get help for customization?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we have an experienced team of developers to help you with customization as per your requirements.",
        },
      },
      {
        "@type": "Question",
        name: "Can I resell the script? Will I have rights over the script code?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, You can’t resell the script. All rights will remain with Logicspice only.",
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
        name: "Can I use your script without any programming skills?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, You can directly install our given script and can manage everything in the admin panel which is very user friendly.",
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
      canonical: `${Domain}/event-booking-software`,
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
    schemaOrg,
    faqSchema,
  };
}

export default async function RootLayout({ children }) {
  const metadata = await generateMetadata();

  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <title>{metadata.title}</title>

        {/* ✅ JSON-LD Schema for SEO */}
        {metadata.schemaOrg && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(metadata.schemaOrg) }}
          />
        )}

        {metadata.faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(metadata.faqSchema, null, 2) }}
          />
        )}
      </head>

      <body className={inter.className}>
        <CookiesConsent />
        {children}
      </body>
    </html>
  );
}
