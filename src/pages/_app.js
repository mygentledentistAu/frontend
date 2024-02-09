import { PrismicPreview } from "@prismicio/next";

import { repositoryName } from "../prismicio";
import "../styles/globals.scss";
import { useState, useEffect } from 'react';

// import "../styles/globals.scss";
import "../styles/global.css";

export default function App({ Component, pageProps }) {

  return (
    <>

      <Component {...pageProps} />
      <PrismicPreview repositoryName={repositoryName} />
    </>
  );
}
