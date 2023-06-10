import { PrismicText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import * as prismic from "@prismicio/client";

import { getExcerpt } from "@/lib/getExcerpt";
import { findFirstImage } from "@/lib/findFirstImage";
import { dateFormatter } from "@/lib/dateFormatter";

import { Heading } from "./Heading";

export function Treatment({ article }) {

  const excerpt = getExcerpt(article?.data?.slices);



  return (
    <li className="grid grid-cols-1 items-start gap-6 md:grid-cols-3 md:gap-8">

      <pre>

        {JSON.stringify(article, 2, null)}
      </pre>
  
      {/* <div className="grid grid-cols-1 gap-3 md:col-span-2">
        <Heading as="h2">
          <PrismicNextLink document={article}>
           {article.data.title}
          </PrismicNextLink>
        </Heading>
        <p className="font-serif italic tracking-tighter text-slate-500">
          {dateFormatter.format(date)}
        </p>
        {excerpt && (
          <p className="font-serif leading-relaxed md:text-lg md:leading-relaxed">
            {excerpt}
          </p>
        )}
      </div> */}
    </li>
  );
}
