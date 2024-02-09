/**
 * @typedef {import("@prismicio/client").Content.WizardAddressSlice} WizardAddressSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WizardAddressSlice>} WizardAddressProps
 * @param {WizardAddressProps}
 */
import st from "./index.module.scss";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
const WizardAddress = ({ slice }) => {
  return (
    <>
      {slice.variation === "default" && (

        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <div className={st.panels}>
            <div className={st.panels__container}>
              <PrismicNextLink field={slice.primary.link_1} class={st.panel}>
                <div className={st.panel__content} style={{ backgroundImage: `url(${slice.primary.image_1.url})` }}>
                  <h3 className={st.panel__title}>{slice.primary.link_1_label}</h3>
                  <h6 className="mt-8 text-center max-w-md text-md md:text-2xl px-4 text-cyan-300 font-extrabold">{slice.primary.address_1}</h6>
                </div>
              </PrismicNextLink>
              <PrismicNextLink field={slice.primary.link_2} className={st.panel}>
                <div className={st.panel__content} style={{ backgroundImage: `url(${slice.primary.image_2.url})` }}>
                  <h3 className={st.panel__title}>{slice.primary.link_2_label}</h3>
                  <h6 className="mt-8 text-center max-w-md text-md md:text-2xl px-4 text-cyan-300 font-extrabold">{slice.primary.address_1}</h6>
                </div>
              </PrismicNextLink>
            </div>
          </div>
        </section>
      )}

      {slice.variation === "var1" && (

        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <section className=" flex w-full min-h-screen overflow-hidden ">
            <div className={st1.left}
              style={{ backgroundImage: ` url(${slice.primary.image_1.url})`, }} >
              <article>
                <PrismicNextLink field={slice.primary.link_1} className={st1.button}>
                  {slice.primary.link_1_label}
                </PrismicNextLink>
                <h5 className=" max-w-md mt-4 md:text-2xl mx-auto text-black bg-cyan-50 p-4 rounded-lg leading-loose">{slice.primary.address_2}</h5>
              </article>

            </div>
            <div className={st1.right} style={{ backgroundImage: 'url(${slice.primary.image_2.url})' }}>
              <article>
                <PrismicNextLink field={slice.primary.link_2} className={st1.button}>
                  {slice.primary.link_2_label}
                </PrismicNextLink>
                <h5 className=" max-w-md mt-4 md:text-xl mx-auto text-black bg-cyan-50 p-4 rounded-lg leading-loose">{slice.primary.address_2}</h5>
              </article>
            </div>
          </section>
        </section>
      )}
    </>
  );
};

export default WizardAddress;
