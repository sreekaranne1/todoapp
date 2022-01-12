import { useState } from "react";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import Store from "../Redux/Store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  const [searchfield, setSearchfield] = useState("");

  const onSearchChange = (value) => {
    setSearchfield(value);
  };
  return (
    <Provider store={Store}>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <Layout searchInput={onSearchChange}>
        <Component {...pageProps} search={searchfield} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
