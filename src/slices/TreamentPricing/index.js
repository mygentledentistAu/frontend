import { PrismicNextLink } from "@prismicio/next";
/**
 * @typedef {import("@prismicio/client").Content.TreamentPricingSlice} TreamentPricingSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TreamentPricingSlice>} TreamentPricingProps
 * @param {TreamentPricingProps}
 */
import st from "./index.module.scss"
const TreamentPricing = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
  <div className="w-full py-8 px-8 md:px-16 ">
  <div className={st.container}>  
  {slice.items.map((item, index)=>(
    <div className={st.column}>
    
      <div className={`${st.pricingcard} ${st.pro}`}>
        <div className={st.popular}>{item.tag}</div>
        <div className={st.pricingheader}>
          <span className={st.plantitle}>{item.heading}</span>
          <div className={st.pricecircle}>
            <span className={st.pricetitle}>
              <small>$</small><span>{item.price}</span>
            </span>
            <span className={st.info}>/ {item.duration}</span>
          </div>
        </div>
        <div className={st.badgebox}>
          <span>{item.sub_heading}</span>
        </div>
        <ul>
          <li>
          {item.feature_1}
          </li>
          <li>
          {item.feature_2}
          </li>
          <li>
          {item.feature_3}
          </li>
          <li>
          {item.feature_4}
          </li>
        </ul>
        <div className={st.buybuttonbox}>
        {/* <PrismicNextLink url="{tel:}" className={st.buynow} field={slice.primary.link}>{slice.primary.link_label}</PrismicNextLink> */}
          <a href={`tel:${slice.primary.call_us}`}  className={st.buynow} >CALL NOW</a>
        </div>
      </div>
    
    </div>
    ))}
   
  </div>
</div>

    </section>
  );
};

export default TreamentPricing;
