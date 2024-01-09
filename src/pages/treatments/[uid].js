import Head from "next/head";
import { PrismicText, SliceZone } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Layout } from "@/components/Layout";

export default function Treatment({ treatment, navigation, settings, footer }) {
  const { title, summary, category, image } = treatment?.data || {};

  function renderHead() {
    const title = treatment?.data?.meta_title;
    const description = treatment?.data?.meta_description?.[0]?.text;
    return (
      <>
        {title ? <title>{title}</title> : null}
        {description ? (
          <meta name="description" content={description}></meta>
        ) : null}
      </>
    );
  }

  return (
    <Layout
      withHeaderDivider={false}
      withProfile={false}
      navigation={navigation}
      settings={settings}
      footer={footer}
    >
      <Head>{renderHead()}</Head>

      <section className="hero hero-treatment">
        <div className="grid-wrap">
          <div className="inner">
            <h3>{category}</h3>
            <h1>{title}</h1>
            <h2>{summary}</h2>
          </div>
        </div>
      </section>

      <SliceZone slices={treatment.data.slices} components={components} />
    </Layout>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const treatment = await client.getByUID("treatment", params.uid);
  const latesttreatments = await client.getAllByType("treatment", {
    limit: 3,
    orderings: [
      { field: "my.treatment.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");
  const footer = await client.getSingle("footer");

  return {
    props: {
      treatment,
      latesttreatments,
      navigation,
      settings,
      footer,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const treatments = await client.getAllByType("treatment");

  return {
    paths: treatments.map((treatment) => prismic.asLink(treatment)),
    fallback: false,
  };
}
