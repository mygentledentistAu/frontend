import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
/**
 * @typedef {import("@prismicio/client").Content.DoctorTeamCardSlice} DoctorTeamCardSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DoctorTeamCardSlice>} DoctorTeamCardProps
 * @param {DoctorTeamCardProps}
 */
import st from "./index.module.css"
const DoctorTeamCard = ({ slice }) => {
  return (
    <>
      {slice.variation === "default" && (
        <section className="py-8 md:py-12"
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <div className=" mb-4 md:mb-8">
            <h2 class="flex flex-row items-center justify-center mb-4">
              <span class="block mx-4 px-4 py-2.5 text-2xl md:text-4xl rounded leading-none font-medium bg-blue-500 text-white">
                {slice.primary.heading}
              </span>
            </h2>
            <h3 className="text-center text-xl  md:px-12 ">{slice.primary.sub_heading}</h3>
          </div>
          <div className=" flex justify-center items-center p-8">
            <div className="md:px-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 space-y-4 md:space-y-0">
              {slice.items.map((item, index) => (
                <div key={index} className={st.doctorgrid}>
                  <div className={st.doctorimage}>
                    {/* <a href="#" className={st.image}> */}
                    <PrismicNextImage field={item.image}  className={st.image}/>
                    {/* <img src="images/img-1.jpg" /> */}
                    {/* </a> */}
                    {/* <span class="product-discount-label">-23%</span> */}
                    <ul className={st.doctorsociallinks}>
                      <li><PrismicNextLink field={item.instagram_link}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                          <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#fd5"></stop>
                            <stop offset=".328" stop-color="#ff543f"></stop>
                            <stop offset=".348" stop-color="#fc5245"></stop>
                            <stop offset=".504" stop-color="#e64771"></stop>
                            <stop offset=".643" stop-color="#d53e91"></stop>
                            <stop offset=".761" stop-color="#cc39a4"></stop>
                            <stop offset=".841" stop-color="#c837ab"></stop>
                          </radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path>
                          <radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#4168c9"></stop>
                            <stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop>
                          </radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path>
                          <path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path>
                          <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                          <path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                        </svg>
                      </PrismicNextLink>
                      </li>
                      <li>
                        <PrismicNextLink field={item.twitter_link}>
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                            <path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
                          </svg>
                        </PrismicNextLink>
                      </li>
                      <li>
                        <PrismicNextLink field={item.facebook_link}>
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                            <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path>
                            <path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                          </svg>
                        </PrismicNextLink>
                      </li>
                    </ul>
                    <PrismicNextLink field={item.link} class={st.doctordetails}>{item.link_text}</PrismicNextLink>
                  </div>
                  <div className={st.doctorbio}>
                    <h3 className={st.doctorname}>{item.name}</h3>
                    <h4 className={st.doctortitle}>{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      )}

      {slice.variation === "secondHover" && (
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
        </section>
      )}

    </>

  );
};

export default DoctorTeamCard;
