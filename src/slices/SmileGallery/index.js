import { PrismicNextImage } from "@prismicio/next";
/**
 * @typedef {import("@prismicio/client").Content.SmileGallerySlice} SmileGallerySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SmileGallerySlice>} SmileGalleryProps
 * @param {SmileGalleryProps}
 */
import gal from "./index.module.css"
import gal1 from "./index1.module.css"
const SmileGallery = ({ slice }) => {
  return (
    <>
      {slice.variation === "default" && (

        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <div className={gal.mydiv}>
            <div className={gal.gallery}>
              {slice.items.map((item, index) => (
                <PrismicNextImage key={index} field={item.image} />
              ))}
            </div>
          </div>


        </section>
      )}

{slice.variation === "hover" && (

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  
  <div className={gal1.mydiv}>
    <div className={gal1.gallery}>
      {slice.items.map((item, index) => (
        <PrismicNextImage key={index} field={item.image} />
      ))}
    </div>
  </div>


</section>
)}

    </>
  );
};

export default SmileGallery;
