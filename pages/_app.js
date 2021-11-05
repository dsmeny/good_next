// all rights reserved
import Head from "next/head";
import Layout from "../components/layout";
import "../styles/globals.css";
import { MediaContextProvider } from "../util/state/mediaContext";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Good2Watch</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MediaContextProvider>
        <Component {...pageProps} />
      </MediaContextProvider>
    </Layout>
  );
}

export default MyApp;
