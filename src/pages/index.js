import Head from "next/head";
import * as prismic from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { Layout } from "@/components/Layout";
import { Bounded } from "@/components/Bounded";
import { Article } from "@/components/Article";
import { components } from "@/slices/";

export default function Index({
  page,
  articles,
  treatments,
  navigation,
  settings,
  footer,
}) {
  return (
    <Layout navigation={navigation} settings={settings} footer={footer}>
      <Head>
        <title>{prismic.asText(settings.data.name)}</title>
      </Head>

      <SliceZone
        slices={page.data.slices}
        components={components}
        context={{ treatments: treatments }}
      />

      {/* <Bounded size="widest">
        <h2>Articles List</h2>
        <ul className="grid grid-cols-1 gap-16">
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </ul>
      </Bounded>
      <hr />

      <Bounded size="widest">
        <h2>Treatment List</h2>

        <ul className="grid grid-cols-1 gap-16">
          {treatments.map((treatment, i) => (
            <li key={i}>
              <PrismicNextLink document={treatment}>
                <>{treatment.data.title}</>
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </Bounded> */}
    </Layout>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", "home");

  const articles = await client.getAllByType("article", {
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });
  const treatments = await client.getAllByType("treatment");
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");
  const footer = await client.getSingle("footer");

  return {
    props: {
      page,
      articles,
      treatments,
      navigation,
      settings,
      footer,
    },
  };
}
