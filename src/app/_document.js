import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap"
          as="style"
          onload="this.onload=null;this.rel='stylesheet'"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap"
          as="style"
          onload="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap"
            rel="stylesheet"
            type="text/css"
          />
        </noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
