/**
 * @typedef {import("@prismicio/client").Content.WizardAddressSlice} WizardAddressSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WizardAddressSlice>} WizardAddressProps
 * @param {WizardAddressProps}
 */
import st from "./index.module.scss"
const WizardAddress = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* <div className="w-full h-full relative"> */}
        <div className={st.panels}>
          <div className={st.panels__container}>
            <a href="#" class={st.panel}>
              <div className={st.panel__content} style={{background: 'url(https://unsplash.it/1000/1100/?image=786)'}}>
                <h3 className={st.panel__title}>{slice.primary.link_1_label}</h3>
                <h6 className="mt-4 text-center max-w-sm text-md md:text-xl  text-white leading-9 px-4">{slice.primary.address_1}</h6>
              </div>
            </a>
            <a href="#" className={st.panel}>
              <div className={st.panel__content} style={{background:' url(https://unsplash.it/1000/1100/?image=883)'}}>
                <h3 className={st.panel__title}>{slice.primary.link_2_label}</h3>
                <h6 className="mt-4 text-center max-w-sm text-md md:text-xl leading-8 text-white px-4">{slice.primary.address_2}</h6>
              </div>
            </a>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default WizardAddress;
