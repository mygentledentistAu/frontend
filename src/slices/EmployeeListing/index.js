/**
 * @typedef {import("@prismicio/client").Content.EmployeeListingSlice} EmployeeListingSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EmployeeListingSlice>} EmployeeListingProps
 * @param {EmployeeListingProps}
 */

import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@/components/PrismicRichText";
import styles from "./index.module.scss";

const Card = ({ data }) => {
  return (
    <article>
      <PrismicNextImage field={data?.image} alt="" />
      <div className={styles.overlay}>
        <div className={styles.text}>
          <h2>{data?.name}</h2>
          <h3>{data?.title}</h3>
        </div>
        {/* <div className={styles.rich}>
          <PrismicRichText field={data?.summary} />
        </div> */}
      </div>
    </article>
  );
};

const EmployeeListing = ({ slice, context = {} }) => {
  const employees = context.employees || [];
  const filterType = slice.primary.type;
  const filtered = employees.filter((e) => e.data.type === filterType);

  if (filtered.length < 1) {
    return (
      <div className="grid-wrap">
        <h4>No results for Employee Type: {filterType}</h4>
      </div>
    );
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.employeeListing}
    >
      <div className="grid-wrap">
        <ul>
          {filtered.map((e) => (
            <li key={e.uid}>
              {/* <PrismicNextLink field={}> */}
              <Card data={e.data} />
              {/* </PrismicNextLink> */}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EmployeeListing;
