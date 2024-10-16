import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Function to load the Tawk.to script
    const loadTawkScript = () => {
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
    };

    // Load the script on initial page load
    loadTawkScript();

    // Add a listener to load the script on route change (page redirection)
    const handleRouteChange = () => {
      loadTawkScript();
    };

    // Listen to route changes
    router.events.on('routeChangeComplete', handleRouteChange);

    // Cleanup event listener on unmount
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
