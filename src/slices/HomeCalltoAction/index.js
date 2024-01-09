/**
 * @typedef {import("@prismicio/client").Content.HomeCalltoActionSlice} HomeCalltoActionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HomeCalltoActionSlice>} HomeCalltoActionProps
 * @param {HomeCalltoActionProps}
 */
const HomeCalltoAction = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for home_callto_action (variation: {slice.variation}
      ) Slices
    </section>
  );
};

export default HomeCalltoAction;
