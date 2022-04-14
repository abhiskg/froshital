import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* <meta property="application-name" content="froshital" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Froshital" />
        <meta property="twitter:site" content="@froshital" />
        <meta property="twitter:creator" content="@froshital" />
        <meta property="twitter:card" content="summary_large_image" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
