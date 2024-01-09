import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
/**
 * @typedef {import("@prismicio/client").Content.OurServicesSlice} OurServicesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<OurServicesSlice>} OurServicesProps
 * @param {OurServicesProps}
 */
const OurServices = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
<div className="mb-12">
 <h2 class="flex flex-row flex-nowrap items-center mb-4">
 <span class="flex-grow block border-t border-black"></span>
 <span class="flex-none block mx-4 px-4 py-2.5 text-4xl rounded leading-none font-medium bg-black text-white">
 {slice.primary.heading}
 </span>
 <span class="flex-grow block border-t border-black"></span>
 </h2>
 <h2 className="text-center text-2xl"><>{slice.primary.sub_heading}</></h2>
 </div>
  <div className=" flex justify-center items-center sm:p-8 md:py-12">
    <div className="md:px-8 grid sm:grid-cols-2 md:grid-cols-4 "> 
    {slice.items.map((item, index)=>(
      <div key={index}  className=" max-w-sm p-4 border text-center transform hover:scale-105 transition duration-500">
      <PrismicNextImage field={item.image} className="w-36 h-36 rounded-full  mx-auto bg-cover object-cover mb-2" />
      <PrismicNextLink field={item.link}  >
        <p className="mb-2 text-black md:text-3xl hover:text-blue-500">{item.heading}</p> 
        </PrismicNextLink>
      <p className="mb-2 text-center min-h-[80px] max-h-[80px] overflow-hidden py-2">{item.text}</p>
    </div>
    ))}
    </div>
    </div>
    </section>
  );
};

export default OurServices;
