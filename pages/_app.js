import "tailwindcss/tailwind.css";
import "../styles/home.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Zeros & Ones - IT Service Provider</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
