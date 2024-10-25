"use client"
import { useEffect } from 'react';
import Script from 'next/script';

export default function GTMComponent() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'AW-946594877');
    gtag('config', 'G-080ZLKT6JT');
    gtag('config', 'G-ZXWWBTSP0T');
  }, []);

  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="google-tag-manager"
        src="https://www.googletagmanager.com/gtag/js?id=AW-946594877"
        strategy="afterInteractive"
      />
      
      <Script id="google-tag-manager-setup" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5357VDW');`}
      </Script>

      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        id="google-analytics"
        src="https://www.googletagmanager.com/gtag/js?id=UA-19456135-5"
        strategy="afterInteractive"
      />
    </>
  );
}
