import Link from "next/link";
import Head from "next/head";
import { PrismicText, SliceZone } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Layout } from "@/components/Layout";
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { HorizontalDivider } from "@/components/HorizontalDivider";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

function LatestTreatment({ treatment }) {
  const date = prismic.asDate(
    treatment.data.publishDate || treatment.first_publication_date
  );

  return (
    <li>
      <h1 className="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
        <PrismicNextLink document={treatment}>
        {treatment.data.title}
        </PrismicNextLink>
      </h1>
      <p className="font-serif italic tracking-tighter text-slate-500">
        {dateFormatter.format(date)}
      </p>
    </li>
  );
}

export default function Treatment({
  treatment,
  latesttreatments,
  navigation,
  settings,
}) {
  const date = prismic.asDate(
    treatment.data.publishDate || treatment.first_publication_date
  );

  return (
    <Layout
      withHeaderDivider={false}
      withProfile={false}
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>
          {/* {prismic.asText(treatment.data.title)} |{" "} */}
          {/* {prismic.asText(settings.data.name)} */}
        </title>
      </Head>
      <Bounded>
        <Link href="/" className="font-semibold tracking-tight text-slate-400">
          &larr; Back to treatments
        </Link>
      </Bounded>
      <article>
        <h1>Treatment</h1>
        <Bounded className="pb-0">
          <h1 className="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
            {/* <PrismicText field={treatment.data.title} /> */}
          </h1>
          <p className="font-serif italic tracking-tighter text-slate-500">
            {/* {dateFormatter.format(date)} */}
          </p>
        </Bounded>
        <SliceZone slices={treatment.data.slices} components={components} />
      </article>
      {latesttreatments.length > 0 && (
        <Bounded>
          <div className="grid grid-cols-1 justify-items-center gap-16 md:gap-24">
            <HorizontalDivider />
            <div className="w-full">
              <Heading size="2xl" className="mb-10">
                Latest treatments
              </Heading>
              <ul className="grid grid-cols-1 gap-12">
                {latesttreatments.map((treatment) => (
                  <LatestTreatment key={treatment.id} treatment={treatment} />
                ))}
              </ul>
            </div>
          </div>
        </Bounded>
      )}
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

  return {
    props: {
      treatment,
      latesttreatments,
      navigation,
      settings,
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
