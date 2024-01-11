/**
 * @typedef {import("@prismicio/client").Content.FaqsSlice} FaqsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FaqsSlice>} FaqsProps
 * @param {FaqsProps}
 */


import AccordComponent from "@/components/Accord";


const Faqs = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
<div className="mb-2">
 <h2 class="flex flex-row items-center justify-center mb-4">
 <span class="block mx-4 px-4 py-2.5 text-2xl md:text-4xl rounded leading-none font-medium text-blue-500">
 {slice.primary.heading}
 </span>
 </h2>
 <h2 className="text-center text-md md:text-lg">{slice.primary.sub_heading}</h2>
</div>

<div className="w-full py-8 px-12">
<AccordComponent slice={slice} />
</div>


    </section>
  );
};

export default Faqs;
