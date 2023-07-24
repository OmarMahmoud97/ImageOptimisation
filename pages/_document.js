import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/images/icon.webp" />
          <meta name="theme-color" content="#FF869C" />
          <link rel="icon" type="image/png" href="/images/icon.webp" />
          <link rel="manifest" href="/manifest.json" />
          <meta property="og:type" content="website" />
          <meta property="og:image:width" content="2347" />
          <meta property="og:image:height" content="1277" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
