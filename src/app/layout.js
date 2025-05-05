import { Inter } from "next/font/google";
import "./globals.css";
import "./resposive.css";
import AOSInitializer from "./Components/AOSInitializer";
import GTMComponent from "./Components/GTMComponent";
import CookiesConsent from "./Components/CookiesConsent";
import Chatbot from "./Components/Chatbot";
import MetadataApi from "@/app/BaseAPI/MetadataApi";
import Domain from "./BaseAPI/Domain";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
let schemaData;

export async function generateMetadata({ params, searchParams }, parent) {
  // Fetch data
  const product = await fetch(`${MetadataApi}/home`, {
    cache: "no-store",
  }).then((res) => res.json());

  let text = product.data.schema;
  let schemaOrg = null;
  let cleanedText;
  if (text) {
    cleanedText = text
      .replace(/\\r\\n/g, "") // Remove \r\n (carriage return + newline)
      .replace(/\\n/g, "") // Remove \n (newline)
      .replace(/\\r/g, "") // Remove \r (carriage return)
      .replace(/\\+/g, "") // Remove unnecessary backslashes
      .replace(/[-\u001F\u007F]/g, ""); // Remove control characters
    schemaOrg = cleanedText && JSON.parse(cleanedText);
    schemaData = cleanedText && JSON.parse(cleanedText);
  } else {
    cleanedText = "";
    schemaOrg = "";
  }

  // Return metadata
  return {
    title: product.data.meta_title,
    description: product.data.meta_description,
    keywords: product.data.meta_keyword,
    alternates: {
      canonical: `${Domain}`,
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
    schemaData: schemaOrg,
  };
}

export default function RootLayout({ children, params, searchParams }) {
  const isHomePage = params && params.slug === undefined; // Adjust as necessary to match your home page route

  return (
    <html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="mGh8hmWuw4T_mXtpY3zzzIpZSMy-k0ua2kHramwX7j4"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="LogicSpice RSS Feed"
          href="/rss.xml"
        />
        <link rel="preload" as="image" />
      </Head>
      <body className={inter.className}>
        <GTMComponent />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5357VDW"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <AOSInitializer>{children}</AOSInitializer>

        {isHomePage && schemaData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schemaData),
            }}
          />
        )}

        {/* Hardcoded Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Custom Mobile App & Software Development Services",
              "provider": {
                "@type": "Organization",
                "name": "Logicspice",
                "url": "https://www.logicspice.com/"
              },
              "description": "We offer custom mobile app and software development services that help businesses grow with scalable, user-friendly, and future-ready digital solutions.",
              "url": "https://www.logicspice.com/services",
              "mainEntityOfPage": "https://www.logicspice.com/services",
              "areaServed": "Global",
              "serviceType": [
                "Mobile App Development Services",
                "Custom Software Development Services",
                "Web Development Services",
                "Ecommerce Development Services",
                "Website Design Services",
                "Digital Marketing Services"
              ],
              "sameAs": [
                "https://www.facebook.com/LogicSpice.company",
                "https://www.instagram.com/logicspiceapps/",
                "https://www.linkedin.com/company/logicspice/"
              ]
            }),
          }}
        />

        {/* Hardcoded Product Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              "name": "Ready-made Product & Application Scripts",
              "url": "https://www.logicspice.com/softwares",
              "image": "https://www.logicspice.com/_next/image?url=%2Fimg%2Flogo.png&w=384&q=75&dpl=dpl_J4whLDuR4GoWaMinTQ8mFAuDTsa6",
              "brand": {
                "@type": "Brand",
                "name": "Logicspice"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "967"
              }
            }),
          }}
        />

        {/* Hardcoded Local Business Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PostalAddress",
              "streetAddress": "JAIPUR ELECTRONIC MARKET, 506-507, Gopalpura Bypass Rd, near Riddhi Siddhi",
              "addressLocality": "Jaipur",
              "addressRegion": "India",
              "postalCode": "302018",
              "telephone": "+ 91 - 9829559922"
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PostalAddress",
              "streetAddress": "Logicspice UK, 1 Lyric Square, Hammersmith",
              "addressLocality": "London",
              "addressRegion": "United Kingdom",
              "postalCode": "W60NB",
              "telephone": "+44 7880654811"
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PostalAddress",
              "streetAddress": "California City",
              "addressLocality": "California",
              "addressRegion": "USA",
              "postalCode": "93505",
              "telephone": "+1-616-929-4064"
            }),
          }}
        />

        {/* Hardcoded FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What types of ready-made software does Logicspice offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer a wide range of pre-built software solutions, including job portal scripts, on-demand service apps, eLearning platforms, salon and doctor booking systems, and more — all customizable to suit your business needs. Check all the software we offer <a href=\"https://www.logicspice.com/softwares\">here</a>."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can Logicspice speed up the delivery of projects?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we can! If you’re on a tight deadline, we have ready-to-use solutions and a skilled team that can get things done faster without cutting corners. Just let us know your timeline. <a href=\"https://www.logicspice.com/contact-us\">Let’s discuss now</a>."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What development process do you follow?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We usually go with an Agile approach — that means we work in small steps, keep you in the loop, and stay flexible so we can make changes quickly if needed. Check out <a href=\"https://www.logicspice.com/our-work-process\">our development process</a>."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do you make sure the software is high quality?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We’ve got a solid testing process in place. Our QA team checks everything carefully, from the code to how the final product works, to make sure it’s smooth, secure, and ready to use."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will I be updated regularly during the project?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. You’ll get regular updates and can track progress through tools like Trello or Jira. We want you to feel involved and confident from start to finish."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What if I need changes after the project is live?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No worries! We offer ongoing support. Whether it’s fixing bugs or adding new features, our team is here to help even after your project goes live."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I hire developers from your team on a full-time or part-time basis?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Definitely. We offer flexible hiring models. You can <a href=\"https://www.logicspice.com/hire-developers\">hire dedicated developers</a> full-time, part-time, or even on an hourly basis, depending on what suits your project."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can Logicspice help us integrate AI into our existing software?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Our team can integrate AI features like chatbots, recommendation engines, or automation tools into your current system to boost performance and user experience. <a href=\"https://www.logicspice.com/artificial-intelligence\">Let’s discuss</a>."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why choose Logicspice for custom software development service?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Logicspice brings together deep industry experience and modern tech like AI, Blockchain, Next.js, and Laravel to build smart, scalable software that fits your business perfectly."
                  }
                }
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}

// Last working code before adding ServiceWorker, local and other schemas

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
  

//         {/* ✅ Twitter Card Meta Tags */}
//         {/* <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={metadata.twitter.title} />
//         <meta name="twitter:description" content={metadata.twitter.description} />
//         <meta name="twitter:image" content={metadata.twitter.images[0]} /> */}
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


// {/* this code works but the gtm component here causes a run time error */}
//       {/* <body className={inter.className}>
//         <Chatbot />
//         <AOSInitializer>{children}</AOSInitializer>

//         <GTMComponent />
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
//       </body> */}
// <body className={inter.className}>
//   <GTMComponent />
//   <noscript
//     dangerouslySetInnerHTML={{
//       __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5357VDW"
//         height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
//     }}
//   />

//   {/* <Chatbot /> */}
//   <AOSInitializer>{children}</AOSInitializer>

//   {/* {isHomePage && (
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{
//         __html: JSON.stringify(schemaData),
//       }}
//     />
//   )} */}

// {isHomePage && schemaData && (
//   <script
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{
//       __html: JSON.stringify(schemaData),
//     }}
//   />
// )}

// </body>



//     </html>
//   );
// }

// import { Inter } from "next/font/google";
// import "./globals.css";
// import "./resposive.css";
// import AOSInitializer from "./Components/AOSInitializer";
// import GTMComponent from "./Components/GTMComponent";
// import Chatbot from "./Components/Chatbot";
// import MetadataApi from "@/app/BaseAPI/MetadataApi";
// import Domain from "./BaseAPI/Domain";
// import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });
// let schemaData;

// // ✅ Function to fetch metadata dynamically
// export async function generateMetadata({ params }) {
//   const slug = params?.slug ? params.slug.join("/") : "home";

//   try {
//     // Fetch metadata from API
//     const response = await fetch(`${MetadataApi}/home`, { cache: "no-store" });
//     const product = await response.json();

//     // Extract metadata fields
//     const { meta_title, meta_description, meta_keyword, og_image, schema } =
//       product.data;

//     // ✅ Clean and parse schema JSON
//     let schemaData = schema
//       ? JSON.parse(
//           schema
//             .replace(/\\r\\n/g, "")
//             .replace(/\\n/g, "")
//             .replace(/\\r/g, "")
//             .replace(/\\+/g, "")
//             .replace(/[\u0000-\u001F\u007F]/g, "")
//         )
//       : null;

//     return {
//       title: meta_title || "Default Title",
//       description: meta_description || "Default Description",
//       keywords: meta_keyword || "default, keywords",
//       alternates: {
//         canonical: `${Domain}`,
//       },
//       openGraph: {
//         title: meta_title || "Default OG Title",
//         description: meta_description || "Default OG Description",
//         url: `${Domain}`,
//         type: "website",
//         images: [
//           {
//             url:
//               og_image ||
//               `${Domain}/img/logo.png`,
//             width: 1200,
//             height: 630,
//             // alt: meta_title || "OG Image",
//           },
//         ],
//       },
//       twitter: {
//         card: `summary_large_image`,
//         title: meta_title || "Default Twitter Title",
//         description: meta_description || "Default Twitter Description",
//         images: [
//           og_image || `${Domain}/img/logo.png`,
//         ],
//       },
//       robots: {
//         index: true,
//         follow: true,
//         googleBot: {
//           index: true,
//           follow: true,
//           "max-video-preview": -1,
//           "max-image-preview": "large",
//           "max-snippet": -1,
//         },
//       },
//       schemaData, // ✅ JSON-LD Schema
//     };
//   } catch (error) {
//     console.error("Metadata API fetch error:", error);
//     return {
//       title: "Default Title",
//       description: "Default Description",
//       keywords: "default, keywords",
//       alternates: { canonical: Domain },
//       openGraph: {
//         title: "Default OG Title",
//         description: "Default OG Description",
//         url: Domain,
//         type: "website",
//         images: [
//           {
//             url: `${Domain}/img/logo.png`,
//             width: 1200,
//             height: 630,
//             // alt: "Default OG Image",
//           },
//         ],
//       },
//       twitter: {
//         card: "summary_large_image",
//         title: "Default Twitter Title",
//         description: "Default Twitter Description",
//         images: [`${Domain}/img/logo.png`],
//       },
//       robots: {
//         index: true,
//         follow: true,
//         googleBot: {
//           index: true,
//           follow: true,
//           "max-video-preview": -1,
//           "max-image-preview": "large",
//           "max-snippet": -1,
//         },
//       },
//       schemaData: null,
//     };
//   }
// }

// // ✅ Root Layout Component with Dynamic Metadata
// export default async function RootLayout({ children, params }) {
//   const isHomePage = params && params.slug === undefined;
//   const metadata = await generateMetadata({ params });

//   return (
//     <html lang="en">
//       <Head>
//         {/* ✅ Standard SEO Meta Tags */}
//         <title>{metadata.title}</title>
//         <meta name="description" content={metadata.description} />
//         <meta name="keywords" content={metadata.keywords} />
//         <link rel="canonical" href={metadata.alternates.canonical} />

//         {/* ✅ Open Graph Meta Tags */}
//         <meta property="og:title" content={metadata.openGraph.title} />
//         <meta
//           property="og:description"
//           content={metadata.openGraph.description}
//         />
//         <meta property="og:image" content={metadata.openGraph.images[0].url} />
//         <meta property="og:url" content={metadata.openGraph.url} />
//         <meta property="og:type" content="website" />

//         {/* ✅ Twitter Card Meta Tags */}
//         {/* <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={metadata.twitter.title} />
//         <meta name="twitter:description" content={metadata.twitter.description} />
//         <meta name="twitter:image" content={metadata.twitter.images[0]} /> */}

//         {/* ✅ Google Site Verification */}
//         <meta
//           name="google-site-verification"
//           content="mGh8hmWuw4T_mXtpY3zzzIpZSMy-k0ua2kHramwX7j4"
//         />

//         {/* ✅ Preload Resources */}
//         <link
//           rel="alternate"
//           type="application/rss+xml"
//           title="RSS Feed"
//           href="/rss.xml"
//         />
//         <link rel="preload" as="image" />

//         {/* ✅ JSON-LD Schema Markup for Google */}
//       </Head>

//       <body className={inter.className}>
//         {/* ✅ Chatbot, AOS (Animations), and GTM */}
//         <Chatbot />
//         <AOSInitializer>{children}</AOSInitializer>
//         <GTMComponent />
//         {/* {isHomePage && (
//           <>
//             <script
//               type="application/ld+json"
//               dangerouslySetInnerHTML={{
//                 __html: JSON.stringify({ __html: schemaData }),
//               }}
//             />
//           </>
//         )} */}
//         {metadata.schemaData && (
//           <script
//             type="application/ld+json"
//             dangerouslySetInnerHTML={{
//               __html: JSON.stringify(metadata.schemaData),
//             }}
//           />
//         )}
//       </body>
//     </html>
//   );
// }
