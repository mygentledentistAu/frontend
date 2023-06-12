import { PrismicPreview } from "@prismicio/next";

import { repositoryName } from "../prismicio";

import "../styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <PrismicPreview repositoryName={repositoryName} />
    </>
  );
}
