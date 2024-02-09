import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Layout } from "@/components/Layout";

export default function Page({ page, context, navigation, settings, footer }) {

  const shouldRenderHeaderAndFooter = page.uid !== 'location';

  return (
    <>
      <Head>
        <title>{prismic.asText(settings.data.name)}</title>
      </Head>

      <SliceZone
        slices={page.data.slices}
        components={components}
        context={context}
      />

      {shouldRenderHeaderAndFooter && (
        <Layout navigation={navigation} settings={settings} footer={footer}>
          {/* Additional content you want to display within Layout */}
          <Head>
            <title>{prismic.asText(settings.data.name)}</title>
          </Head>

          <SliceZone
            slices={page.data.slices}
            components={components}
            context={context}
          />
        </Layout>
      )}
    </>
  );
}

//   return (
//     <Layout navigation={navigation} settings={settings} footer={footer}>
//       <Head>
//         <title>
//           {prismic.asText(page.data.title)} |{" "}
//           {prismic.asText(settings.data.name)}
//         </title>
//       </Head>

//       <SliceZone
//         slices={page.data.slices}
//         components={components}
//         context={context}
//       />
//     </Layout>
//   );
// }

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", params.uid);
  const treatments = await client.getAllByType("treatment");
  const employees = await client.getAllByType("employee", {
    orderings: [{ field: "my.employee.order", direction: "asc" }],
  });
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");
  const footer = await client.getSingle("footer");

  const context = { treatments, employees };

  return {
    props: {
      page,
      context,
      navigation,
      settings,
      footer,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("page");

  return {
    paths: pages.map((page) => prismic.asLink(page)),
    fallback: false,
  };
}
