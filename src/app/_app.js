import { useEffect } from 'react';
// import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        var Tawk_API = Tawk_API || {},
          Tawk_LoadStart = new Date();
        (function () {
          var s1 = document.createElement("script"),
            s0 = document.getElementsByTagName("script")[0];
          s1.async = true;
          s1.src = "https://embed.tawk.to/66ed1e29e5982d6c7bb15ccc/1i873rkmf";
          s1.charset = "UTF-8";
          s1.setAttribute("crossorigin", "*");
          s0.parentNode.insertBefore(s1, s0);
        })();
      }, []); // Empty dependency array to run once on mount

  return <Component {...pageProps} />;
}

export default MyApp;
