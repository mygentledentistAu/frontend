/**
 * @typedef {import("@prismicio/client").Content.BookAppointmentSlice} BookAppointmentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BookAppointmentSlice>} BookAppointmentProps
 * @param {BookAppointmentProps}
 */

import { PrismicNextLink } from "@prismicio/next";

const BookAppointment = ({ slice }) => {
  return (
    <section
      className="book-appointment"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid-wrap">
        <div className="group-1">
          <h2>{slice.primary.title}</h2>
        </div>

        <div className="group-2">
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
          >
            {slice.primary.button_label}
          </PrismicNextLink>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;
