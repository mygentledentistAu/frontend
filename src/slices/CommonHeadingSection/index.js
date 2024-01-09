/**
 * @typedef {import("@prismicio/client").Content.CommonHeadingSectionSlice} CommonHeadingSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CommonHeadingSectionSlice>} CommonHeadingSectionProps
 * @param {CommonHeadingSectionProps}
 */

import st from "./index.module.css"
const CommonHeadingSection = ({ slice }) => {

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      


      <div className={st.area} >
      <div className={st.context}>
        <h1>{slice.primary.heading}</h1>
      </div>
        <ul className={st.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >
    </section>
  );
};

export default CommonHeadingSection;
