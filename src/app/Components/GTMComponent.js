// "use client"
// // import { useEffect } from 'react';
// // import Script from 'next/script';

// // export default function GTMComponent() {
// //   useEffect(() => {
// //     window.dataLayer = window.dataLayer || [];
// //     function gtag() {
// //       dataLayer.push(arguments);
// //     }
// //     gtag('js', new Date());
// //     gtag('config', 'AW-946594877');
// //     gtag('config', 'G-080ZLKT6JT');
// //     gtag('config', 'G-ZXWWBTSP0T');
// //   }, []);

// //   return (
// //     <>
// //       {/* Google Tag Manager */}
// //       <Script
// //         id="google-tag-manager"
// //         src="https://www.googletagmanager.com/gtag/js?id=AW-946594877"
// //         strategy="afterInteractive"
// //       />
      
// //       <Script id="google-tag-manager-setup" strategy="afterInteractive">
// //         {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// //           j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// //           })(window,document,'script','dataLayer','GTM-5357VDW');`}
// //       </Script>

// //       {/* Global site tag (gtag.js) - Google Analytics */}
// //       <Script
// //         id="google-analytics"
// //         src="https://www.googletagmanager.com/gtag/js?id=UA-19456135-5"
// //         strategy="afterInteractive"
// //       />
// //     </>
// //   );
// // }


// // This works good for performance
// // import { useEffect } from 'react';
// // import Script from 'next/script';

// // export default function GTMComponent() {
// //   useEffect(() => {
// //     // Initialize dataLayer if not already done
// //     window.dataLayer = window.dataLayer || [];
// //     // Function to push data to dataLayer
// //     function gtag() {
// //       window.dataLayer.push(arguments);
// //     }
// //     // Initialize Google Analytics configurations
// //     gtag('js', new Date());
// //     gtag('config', 'AW-946594877');
// //     gtag('config', 'G-080ZLKT6JT');
// //     gtag('config', 'G-ZXWWBTSP0T');
// //   }, []);

// //   return (
// //     <>
// //       {/* Google Tag Manager - Lazy load */}
// //       <Script
// //         id="google-tag-manager"
// //         src="https://www.googletagmanager.com/gtag/js?id=AW-946594877"
// //         strategy="lazyOnload"
// //       />
      
// //       <Script id="google-tag-manager-setup" strategy="lazyOnload">
// //         {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// //           j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.defer=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// //           })(window,document,'script','dataLayer','GTM-5357VDW');`}
// //       </Script>

// //       {/* Google Analytics - Lazy load */}
// //       <Script
// //         id="google-analytics"
// //         src="https://www.googletagmanager.com/gtag/js?id=UA-19456135-5"
// //         strategy="lazyOnload"
// //       />
// //     </>
// //   );
// // }
// import { useEffect } from 'react';

// export default function GTMComponent() {
//   // useEffect(() => { 
//   //   // Add event listener for page load
//   //   const handlePageLoad = () => {
//   //     // Initialize dataLayer if not already done
//   //     window.dataLayer = window.dataLayer || [];
//   //     // Function to push data to dataLayer
//   //     function gtag() {
//   //       window.dataLayer.push(arguments);
//   //     }

//   //     console.log("From inside")
//   //     // Initialize Google Analytics configurations
//   //     gtag('js', new Date());
//   //     gtag('config', 'AW-946594877');
//   //     gtag('config', 'G-080ZLKT6JT');
//   //     gtag('config', 'G-ZXWWBTSP0T');

//   //     // Load GTM script dynamically after page load
//   //     const script = document.createElement('script');
//   //     script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-946594877';
//   //     script.async = true;
//   //     document.head.appendChild(script);

//   //     // Inject GTM initialization script
//   //     const initScript = document.createElement('script');
//   //     initScript.innerHTML = `
//   //       (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
//   //         var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
//   //         j.async=true; j.defer=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
//   //         f.parentNode.insertBefore(j,f);
//   //       })(window,document,'script','dataLayer','GTM-5357VDW');
//   //     `;
//   //     document.head.appendChild(initScript);
//   //   };

//   //   // Listen for the full page load event
//   //   window.addEventListener('load', handlePageLoad);

//   //   // Cleanup the event listener on component unmount
//   //   return () => window.removeEventListener('load', handlePageLoad);
//   // }, []);

//   useEffect(() => { 
//     const handlePageLoad = () => {
//       console.log("From inside");
//       window.dataLayer = window.dataLayer || [];
      
//       function gtag() {
//         window.dataLayer.push(arguments);
//       }
      
//       gtag('js', new Date());
//       gtag('config', 'AW-946594877');
//       gtag('config', 'G-080ZLKT6JT');
//       gtag('config', 'G-ZXWWBTSP0T');
      
//       const script = document.createElement('script');
//       script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-946594877';
//       script.async = true;
//       document.head.appendChild(script);

//       console.log("Fron gtag")
//       const initScript = document.createElement('script');
//       initScript.innerHTML = `
//         (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
//           var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
//           j.async=true; j.defer=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
//           f.parentNode.insertBefore(j,f);
//         })(window,document,'script','dataLayer','GTM-5357VDW');
//       `;
//       document.head.appendChild(initScript);
//     };
  
//     // Run on load event and call immediately
//     if (document.readyState === 'complete') {
//       handlePageLoad(); // Call immediately if the page is already loaded
//     } else {
//       window.addEventListener('load', handlePageLoad);
//     }
  
//     return () => window.removeEventListener('load', handlePageLoad);
//   }, []);
  

//   return null; // No need to render anything directly
// }



















// last working code
"use client";
import Script from 'next/script';

export default function GTMComponent() {
  return (
    <>
      {/* Load gtag.js (Google Analytics) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-946594877"
        strategy="afterInteractive"
      />

      {/* Initialize Google Analytics */}
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-946594877');
          gtag('config', 'G-080ZLKT6JT');
          gtag('config', 'G-ZXWWBTSP0T');
        `}
      </Script>

      {/* Load Google Tag Manager */}
      <Script id="gtm-init" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
          var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
          j.async=true; j.defer=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5357VDW');
        `}
      </Script>

      {/* Optional: Add GTM noscript fallback */}
      {/* <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5357VDW"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript> */}
    </>
  );
}








// "use client";
// import Script from "next/script";

// export default function GTMComponent() {
//   return (
//     <>
//       {/* Load Google Tag Manager with lazy loading */}
//       <Script
//         id="gtm-script"
//         strategy="lazyOnload"
//         dangerouslySetInnerHTML={{
//           __html: `
//             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
//             var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
//             j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
//             f.parentNode.insertBefore(j, f);
//             })(window, document, 'script', 'dataLayer', 'GTM-XXXXXXX');
//           `,
//         }}
//       />

//       {/* Load Google Analytics AFTER page load */}
//       <Script
//         src="https://www.googletagmanager.com/gtag/js?id=AW-946594877"
//         strategy="lazyOnload"
//       />
//       <Script id="gtag-init" strategy="lazyOnload">
//         {`
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());
//           gtag('config', 'AW-946594877', { send_page_view: false });
//         `}
//       </Script>
//     </>
//   );
// }


// Last optimized but GTM not working
// "use client";
// import Script from "next/script";

// export default function GTMComponent() {
//   return (
//     <>
//       {/* Load Google Tag Manager AFTER page load */}
//       <Script
//         id="gtm-script"
//         strategy="lazyOnload"
//         dangerouslySetInnerHTML={{
//           __html: `
//             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
//             var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
//             j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id=' + i + dl;
//             f.parentNode.insertBefore(j,f);
//             })(window,document,'script','dataLayer','GTM-XXXXXXX');
//           `,
//         }}
//       />

//       {/* Load Google Analytics AFTER page load */}
//       <Script
//         src="https://www.googletagmanager.com/gtag/js?id=AW-946594877"
//         strategy="lazyOnload"
//       />
//       <Script id="gtag-init" strategy="lazyOnload">
//         {`
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());
//           gtag('config', 'AW-946594877', { send_page_view: false });
//         `}
//       </Script>
//     </>
//   );
// }




