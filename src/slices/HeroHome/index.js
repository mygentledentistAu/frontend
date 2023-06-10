/**
 * @typedef {import("@prismicio/client").Content.HeroHomeSlice} HeroHomeSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroHomeSlice>} HeroHomeProps
 * @param {HeroHomeProps}
 */
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@/components/PrismicRichText";

import styles from "./index.module.scss";

const HeroHome = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.heroHome}
    >
      <div className="grid-wrap">
        <div className={styles.inner}>
          <article>
            <PrismicRichText field={slice.primary.title} />
            <div className={styles.group1}>
              <h2>{slice.primary.short_text}</h2>

              <div className={styles.ctaList}>
                <PrismicNextLink
                  field={slice.primary.button_link}
                  className="button button--primary"
                >
                  {slice.primary.button_label}
                </PrismicNextLink>

                <PrismicNextLink field={slice.primary.icon_link}>
                  <PrismicNextImage field={slice.primary.icon_image} />
                </PrismicNextLink>
              </div>
            </div>
          </article>

          <article>
            <PrismicNextImage field={slice.primary.image} />
          </article>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
