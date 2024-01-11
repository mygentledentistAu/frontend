import { PrismicNextLink } from "@prismicio/next";
/**
 * @typedef {import("@prismicio/client").Content.TreamentPricingSlice} TreamentPricingSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TreamentPricingSlice>} TreamentPricingProps
 * @param {TreamentPricingProps}
 */
import st from "./index.module.scss"
const TreamentPricing = ({ slice }) => {
  return (
    <>
    {slice.variation === "default" && (
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
    )}
    {slice.variation === "var1" && (
       <section
       data-slice-type={slice.slice_type}
       data-slice-variation={slice.variation}
     >
    <div class="grid lg:grid-cols-3 px-8 py-8 gap-10 text-zinc-800 mt-10">
    {slice.items.map((item, index)=>(
    <div class="flex flex-col items-center bg-gradient-to-br from-blue-300 via-white  to-blue-200 p-8 rounded-lg shadow-lg relative border-4 border-blue-400 max-w-sm">
        <p class="mono text-md absolute -top-4 bg-red-400 text-zinc-100 py-0.5 p-8  font-bold tracking-wider rounded">
            {item.tag}
        </p>
        <div>
            <div class="flex gap-4 justify-center">
                <p class="font-extrabold text-3xl mb-2">
                  {item.heading}
                </p>
            </div>
            <p class="opacity-60 text-center">
              {item.sub_heading}
            </p>
            <p class="opacity-60 text-center">
            </p>
            <div class="flex gap-4 justify-center">
                <div class="flex flex-col items-center my-8">
                    <p class="font-extrabold text-4xl">$ {item.price}

                    </p>
                    <p class="text-sm opacity-60">/{item.duration}

                    </p>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-1">
            <p class="flex items-center text-lg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    fill="currentColor" aria-hidden="true" class="w-4 h-4 mr-2">
                    <path fill-rule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clip-rule="evenodd"></path>
                </svg>
                <b className="ml-1">{item.feature_1}</b>
            </p>
            <p class="flex items-center text-lg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    fill="currentColor" aria-hidden="true" class="w-4 h-4 mr-2">
                    <path fill-rule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clip-rule="evenodd"></path>
                </svg>
                <b className="ml-1">{item.feature_2}</b>
            </p>
            <p class="flex items-center text-lg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    fill="currentColor" aria-hidden="true" class="w-4 h-4 mr-2">
                    <path fill-rule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clip-rule="evenodd"></path>
                </svg>
                <b className="ml-1">{item.feature_3}</b>
            </p>
            <p class="flex items-center text-lg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    fill="currentColor" aria-hidden="true" class="w-4 h-4 mr-2">
                    <path fill-rule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clip-rule="evenodd"></path>
                </svg>
                <b className="ml-1">{item.feature_4}</b>
            </p>
            
            <div class="flex justify-center mt-8">
            <a href={`tel:${slice.primary.call_us}`}  className={st.callLink} >CALL NOW</a>
            </div>
        </div>
    </div>
    ))}
</div>
      </section>
    )}
    </>
  );
};

export default TreamentPricing;
