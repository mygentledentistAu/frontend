/**
 * @typedef {import("@prismicio/client").Content.TextWithCardsSlice} TextWithCardsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextWithCardsSlice>} TextWithCardsProps
 * @param {TextWithCardsProps}
 */

import * as prismic from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@/components/PrismicRichText";
import styles from "./index.module.scss";

const TextWithCards = ({ slice }) => {
  return (
    <section
      className={styles.textCards}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid-wrap">
        <div className={styles.inner}>
          <PrismicRichText field={slice.primary.text} />

          <div className={styles.list}>
            {slice.items.map((item, i) => (
              <article key={i}>
                <div className="image">
                  {prismic.isFilled.image(item.icon) && (
                    <PrismicNextImage field={item.icon} sizes="100vw" alt="" />
                  )}
                </div>
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextWithCards;
