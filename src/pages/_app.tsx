import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gift Shop Bjelovar - DadoExpres</title>
        <meta name="author" content="Dado Expres" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
