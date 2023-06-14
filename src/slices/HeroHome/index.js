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
      <div className={styles.gridWrap}>
        <article className={styles.topSection}>
          <div className={styles.headline}>
            <PrismicRichText field={slice.primary.title} />
          </div>
          <div className={styles.image}>
            <PrismicNextImage field={slice.primary.image} alt="" />
          </div>
        </article>
      </div>

      <div className="grid-wrap">
        <article className={styles.bottomSection}>
          <div className={styles.group1}>
            <h2>{slice.primary.short_text}</h2>

            <div className={styles.ctaList}>
              <PrismicNextLink field={slice.primary.icon_link}>
                <PrismicNextImage field={slice.primary.icon_image} alt="" />
              </PrismicNextLink>

              <PrismicNextLink
                field={slice.primary.button_link}
                className="button button--primary"
              >
                {slice.primary.button_label}
              </PrismicNextLink>
            </div>
          </div>
          <div className="empty"></div>
        </article>
      </div>
      {/* </div> */}
    </section>
  );
};

export default HeroHome;
