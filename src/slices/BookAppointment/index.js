/**
 * @typedef {import("@prismicio/client").Content.BookAppointmentSlice} BookAppointmentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BookAppointmentSlice>} BookAppointmentProps
 * @param {BookAppointmentProps}
 */

import { PrismicNextLink } from "@prismicio/next";

import styles from "./index.module.scss";

const BookAppointment = ({ slice }) => {
  return (
    <section
      className={styles.bookAppointment}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid-wrap">
        <div className={styles.inner}>
          <div className={styles.group1}>
            <h2>{slice.primary.title}</h2>
          </div>

          <div className={styles.group2}>
            <ul>
              {slice.items.map((item) => (
                <li key={item.days}>
                  {item.days} <b>{item.hours}</b>
                </li>
              ))}
            </ul>

            <PrismicNextLink
              field={slice.primary.button_link}
              className="button button--primary"
              data-open-dialog="#book-dialog"
            >
              {slice.primary.button_label}
            </PrismicNextLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;
