// import { Inter } from "next/font/google";
// import "./globals.css";
// import "./resposive.css";
// import AOSInitializer from "./Components/AOSInitializer";
// import GTMComponent from "./Components/GTMComponent";
// import CookiesConsent from "./Components/CookiesConsent";

// import Chatbot from "./Components/Chatbot";
// import MetadataApi from "@/app/BaseAPI/MetadataApi";
// import Domain from "./BaseAPI/Domain";
// import Head from "next/head";
// const inter = Inter({ subsets: ["latin"] });
// let schemaData;

// export async function generateMetadata({ params, searchParams }, parent) {
//   // Fetch data
//   const product = await fetch(`${MetadataApi}/home`, {
//     cache: "no-store",
//   }).then((res) => res.json());

//   let text = product.data.schema;
//   let schemaOrg = null;
//   let cleanedText;
//   if (text) {
//     cleanedText = text
//       .replace(/\\r\\n/g, "") // Remove \r\n (carriage return + newline)
//       .replace(/\\n/g, "") // Remove \n (newline)
//       .replace(/\\r/g, "") // Remove \r (carriage return)
//       .replace(/\\+/g, "") // Remove unnecessary backslashes
//       .replace(/[\u0000-\u001F\u007F]/g, ""); // Remove control characters
//     schemaOrg = cleanedText && JSON.parse(cleanedText);
//     schemaData = cleanedText && JSON.parse(cleanedText);
//   } else {
//     cleanedText = "";
//     schemaOrg = "";
//   }

//   // Return metadata
//   return {
//     title: product.data.meta_title,
//     description: product.data.meta_description,
//     keywords: product.data.meta_keyword,
//     alternates: {
//       canonical: `${Domain}`,
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
//     schemaData: schemaOrg,
//   };
// }

// export default function RootLayout({ children, params, searchParams }) {
//   const isHomePage = params && params.slug === undefined; // Adjust as necessary to match your home page route

//   return (
//     <html lang="en">
//       <Head>
//         <meta
//           name="google-site-verification"
//           content="mGh8hmWuw4T_mXtpY3zzzIpZSMy-k0ua2kHramwX7j4"
//         />
//         <link
//           rel="alternate"
//           type="application/rss+xml"
//           title="LogicSpice RSS Feed"
//           href="/rss.xml"
//         />
//         <link rel="preload" as="image" />
//       </Head>

//       <body className={inter.className}>
//         <Chatbot />
//         <AOSInitializer>{children}</AOSInitializer>

//         <GTMComponent />
//         {/* <CookiesConsent /> */}
//         {isHomePage && (
//           <>
//             <script
//               type="application/ld+json"
//               dangerouslySetInnerHTML={{
//                 __html: JSON.stringify({ __html: schemaData }),
//               }}
//             />
//           </>
//         )}
//       </body>
//     </html>
//   );
// }

import { Inter } from "next/font/google";
import "./globals.css";
import "./resposive.css";
import AOSInitializer from "./Components/AOSInitializer";
import GTMComponent from "./Components/GTMComponent";
import Chatbot from "./Components/Chatbot";
import MetadataApi from "@/app/BaseAPI/MetadataApi";
import Domain from "./BaseAPI/Domain";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
let schemaData;

// ✅ Function to fetch metadata dynamically
export async function generateMetadata({ params }) {
  const slug = params?.slug ? params.slug.join("/") : "home";

  try {
    // Fetch metadata from API
    const response = await fetch(`${MetadataApi}/home`, { cache: "no-store" });
    const product = await response.json();

    // Extract metadata fields
    const { meta_title, meta_description, meta_keyword, og_image, schema } =
      product.data;

    // ✅ Clean and parse schema JSON
    let schemaData = schema
      ? JSON.parse(
          schema
            .replace(/\\r\\n/g, "")
            .replace(/\\n/g, "")
            .replace(/\\r/g, "")
            .replace(/\\+/g, "")
            .replace(/[\u0000-\u001F\u007F]/g, "")
        )
      : null;

    return {
      title: meta_title || "Default Title",
      description: meta_description || "Default Description",
      keywords: meta_keyword || "default, keywords",
      alternates: {
        canonical: `${Domain}`,
      },
      openGraph: {
        title: meta_title || "Default OG Title",
        description: meta_description || "Default OG Description",
        url: `${Domain}`,
        type: "website",
        images: [
          {
            url:
              og_image ||
              `${Domain}/img/logo.png`,
            // width: 1200,
            // height: 630,
            // alt: meta_title || "OG Image",
          },
        ],
      },
      twitter: {
        card: `${Domain}/img/logo.png`,
        title: meta_title || "Default Twitter Title",
        description: meta_description || "Default Twitter Description",
        images: [
          og_image || `${Domain}/img/logo.png`,
        ],
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
      schemaData, // ✅ JSON-LD Schema
    };
  } catch (error) {
    console.error("Metadata API fetch error:", error);
    return {
      title: "Default Title",
      description: "Default Description",
      keywords: "default, keywords",
      alternates: { canonical: Domain },
      openGraph: {
        title: "Default OG Title",
        description: "Default OG Description",
        url: Domain,
        type: "website",
        images: [
          {
            url: `${Domain}/img/logo.png`,
            // width: 1200,
            // height: 630,
            // alt: "Default OG Image",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Default Twitter Title",
        description: "Default Twitter Description",
        images: [`${Domain}/default-og-image.jpg`],
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
      schemaData: null,
    };
  }
}

// ✅ Root Layout Component with Dynamic Metadata
export default async function RootLayout({ children, params }) {
  const isHomePage = params && params.slug === undefined;
  const metadata = await generateMetadata({ params });

  return (
    <html lang="en">
      <Head>
        {/* ✅ Standard SEO Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href={metadata.alternates.canonical} />

        {/* ✅ Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Card Meta Tags */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} /> */}

        {/* ✅ Google Site Verification */}
        <meta
          name="google-site-verification"
          content="mGh8hmWuw4T_mXtpY3zzzIpZSMy-k0ua2kHramwX7j4"
        />

        {/* ✅ Preload Resources */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS Feed"
          href="/rss.xml"
        />
        <link rel="preload" as="image" />

        {/* ✅ JSON-LD Schema Markup for Google */}
      </Head>

      <body className={inter.className}>
        {/* ✅ Chatbot, AOS (Animations), and GTM */}
        <Chatbot />
        <AOSInitializer>{children}</AOSInitializer>
        <GTMComponent />
        {/* {isHomePage && (
          <>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({ __html: schemaData }),
              }}
            />
          </>
        )} */}
        {metadata.schemaData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(metadata.schemaData),
            }}
          />
        )}
      </body>
    </html>
  );
}
