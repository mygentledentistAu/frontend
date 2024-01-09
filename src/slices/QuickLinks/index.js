/**
 * @typedef {import("@prismicio/client").Content.QuickLinksSlice} QuickLinksSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<QuickLinksSlice>} QuickLinksProps
 * @param {QuickLinksProps}
 */
import { useEffect } from "react";
import { PrismicNextLink } from "@prismicio/next";

import styles from "./index.module.scss";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const QuickLinks = ({ slice }) => {
  return (
    <section className={styles.quickLinks}>
      <div className="grid-wrap">
        <div className={styles.list}>
          <div className={styles.heading}>
            <h2>{slice.primary.title}</h2>
          </div>
          {slice.items.map((item, i) => (
            <PrismicNextLink key={i} field={item.link}>
              {item.label}
            </PrismicNextLink>
          ))}
          <div className={styles.empty}></div>
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
