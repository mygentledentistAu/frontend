/**
 * @typedef {import("@prismicio/client").Content.BookAppointmentSlice} BookAppointmentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BookAppointmentSlice>} BookAppointmentProps
 * @param {BookAppointmentProps}
 */

import * as prismic from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@/components/PrismicRichText";

import styles from "./index.module.scss";

const WideCard = ({ slice }) => {
  return (
    <section
      className={styles.wideCard}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid-wrap">
        <div className={styles.inner}>
          <div className={styles.image}>
            {prismic.isFilled.image(slice.primary.image) && (
              <PrismicNextImage field={slice.primary.image} alt="" />
            )}
          </div>

          <div className={styles.content}>
            <h2>{slice.primary.title}</h2>

            <div className={styles.group1}>
              <PrismicRichText field={slice.primary.text} />
              {prismic.isFilled.link(slice.primary.button_link) && (
                <PrismicNextLink
                  field={slice.primary.button_link}
                  className="button button--primary"
                >
                  {slice.primary.button_label || "Learn More"}
                </PrismicNextLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WideCard;
