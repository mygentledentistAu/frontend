/**
 * @typedef {import("@prismicio/client").Content.HeroVideoSlice} HeroVideoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroVideoSlice>} HeroVideoProps
 * @param {HeroVideoProps}
 */

import * as prismic from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@/components/PrismicRichText";
// import { YouTubeEmbed } from '@next/third-parties/google'

import styles from "./index.module.scss";

const HeroVideo = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.heroVideo}
    >
      <div className={styles.image}>
        {prismic.isFilled.image(slice.primary.mobile_image) && (
          <PrismicNextImage field={slice.primary.mobile_image} />
        )}
        <div className={styles.image__mask} />
      </div>

      <div className={styles.video}>
        <iframe
          src={`https://www.youtube.com/embed/${slice.primary.video_id}?controls=0&autoplay=1&mute=1&playsinline=1&loop=1&playlist=${slice.primary.video_id}`}
          width="100%"
          border="0"
        ></iframe>
        <div className={styles.video__mask} />
      </div>

      <article className={styles.topSection}>
        <div className="grid-wrap">
          <div className={styles.content}>
            <PrismicRichText field={slice.primary.title} />
            <h2>{slice.primary.short_text}</h2>
            <PrismicNextLink
              field={slice.primary.button_link}
              className="button button--primary"
            >
              {slice.primary.button_label}
            </PrismicNextLink>
          </div>
        </div>
      </article>

      <article className={styles.bottomSection}>
        <div className="grid-wrap">
          <div className={styles.content}>
            <div className={styles.locationTitle}>
              {slice.primary.locations_title}
            </div>
            <div className={styles.locationLinks}>
              {slice.items.map((item) => (
                <PrismicNextLink
                  field={item.button_link}
                  key={item.button_label}
                >
                  <i></i>
                  {item.button_label}
                </PrismicNextLink>
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default HeroVideo;
