import * as prismic from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

import { PrismicRichText } from "@/components/PrismicRichText";

const TextWithImage = ({ slice }) => {
  const data = slice.primary;
  const image = data.image;
  const alignClass = data.image_align === "left" ? "text-image--left" : "";

  return (
    <section className={`text-image ${alignClass}`}>
      <div className="grid-wrap">
        <div className="inner">
          <div className="text">
            <PrismicRichText field={data.text} />

            {data.button_label ? (
              <PrismicNextLink
                field={data.button_link}
                className="button button--secondary"
              >
                {data.button_label}
              </PrismicNextLink>
            ) : null}
          </div>
          <div className="image">
            {prismic.isFilled.image(image) && (
              <PrismicNextImage field={image} sizes="100vw" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextWithImage;
