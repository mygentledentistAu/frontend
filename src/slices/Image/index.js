import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

import { PrismicRichText } from "@/components/PrismicRichText";

const Image = ({ slice }) => {
  const image = slice.primary.image;

  return (
    <section size={slice.variation === "wide" ? "widest" : "base"}>
      <div className="grid-wrap">
        <figure>
          {prismic.isFilled.image(image) && (
            <div className="image-wrap">
              <PrismicNextImage field={image} />
            </div>
          )}
          {prismic.isFilled.richText(slice.primary.caption) && (
            <figcaption>
              <PrismicRichText field={slice.primary.caption} />
            </figcaption>
          )}
        </figure>
      </div>
    </section>
  );
};

export default Image;
