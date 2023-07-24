import "tailwindcss/tailwind.css";
import "./globals.css";

import Head from "next/head";
import { registerEventHandlers } from "@/services/windowUtilities";

function MyApp({ Component, pageProps }) {
  registerEventHandlers();

  return (
    <>
      <Head>
        <title>Image Upscale</title>
        <meta name="description" content="Image Upscale" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
