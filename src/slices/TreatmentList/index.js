/**
 * @typedef {import("@prismicio/client").Content.TreatmentListSlice} TreatmentListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TreatmentListSlice>} TreatmentListProps
 * @param {TreatmentListProps}
 */

import { PrismicNextLink } from "@prismicio/next";
import styles from "./index.module.scss";

const TreatmentList = ({ slice, context = {} }) => {
  const treatments = context.treatments || [];
  const mapped = {};
  treatments.forEach((t) => {
    let category = t.data.category;
    let treatments = mapped[category] || [];
    mapped[category] = mapped[category] ? [...treatments, t] : [t];
  });

  const categories = Object.keys(mapped).sort().reverse();

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.treatmentList}
    >
      <div className="grid-wrap">
        <h2>{slice.primary.title}</h2>

        <div className={styles.list}>
          {categories.map((c) => {
            let treatments = mapped[c];
            return (
              <article key={c}>
                <h3>{c}</h3>
                <ul>
                  {treatments.map((t) => (
                    <li key={t.uid}>
                      <h4>
                        <PrismicNextLink href={t.url}>
                          {t.data.title}
                        </PrismicNextLink>
                      </h4>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <article>
          <div></div>
          <div className={styles.group2}>
            <p>{slice.primary.footer_text}</p>
            <PrismicNextLink
              field={slice.primary.footer_link}
              className="button button--secondary"
            >
              {slice.primary.footer_link_text}
            </PrismicNextLink>
          </div>
        </article>
      </div>
    </section>
  );
};

export default TreatmentList;
