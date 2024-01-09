import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
/**
 * @typedef {import("@prismicio/client").Content.HowtoAssistYouSlice} HowtoAssistYouSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HowtoAssistYouSlice>} HowtoAssistYouProps
 * @param {HowtoAssistYouProps}
 */
const HowtoAssistYou = ({ slice }) => {
  return (
    <>
    {slice.variation === "default" && (
   <section className="py-8"
   data-slice-type={slice.slice_type}
   data-slice-variation={slice.variation}
   >
 
 <div className="bg-gradient-to-tr from-blue-100 to-white py-4 ">
 <div className="mb-8">
 <h2 class="flex flex-row items-center justify-center mb-4">
 <span class="block mx-4 px-4 py-2.5 text-2xl md:text-4xl rounded leading-none font-medium bg-blue-500 text-white">
 {slice.primary.heading}
 </span>
 </h2>
 <h2 className="text-center text-xl md:text-2xl">{slice.primary.sub_heading}</h2>
</div>
  <div className=" flex justify-center items-center p-8">
    <div className="md:px-8 grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-5 space-y-4 md:space-y-0"> 
    {slice.items.map((item, index)=>(
      // <div key={index} className="max-w-sm bg-white p-4 shadow-lg  text-center rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-xl transform hover:scale-105 transition duration-500">
      <div key={index} className="max-w-sm  text-center  bg-transparent transform hover:scale-105 transition duration-500">
         <PrismicNextImage field={item.image} className=" w-36 h-36 bg-center rounded-full object-cover mx-auto"  />
         <p className="mt-4">
         <PrismicNextLink   field={item.link} className=" text-xl hover:underline hover:transition duration-300">
        {item.link_text}
        </PrismicNextLink>
         </p>
      </div>
    ))}
    </div>
    </div>
    </div>
</section>
)}
    
    
    </>
  );
};

export default HowtoAssistYou;
