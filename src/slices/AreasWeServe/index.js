/**
 * @typedef {import("@prismicio/client").Content.AreasWeServeSlice} AreasWeServeSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AreasWeServeSlice>} AreasWeServeProps
 * @param {AreasWeServeProps}
 */
const AreasWeServe = ({ slice }) => {
  return (
    <section className="py-8 md:py-12"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className=" mb-4">
            <h2 class="flex flex-row items-center justify-center mb-4">
              <span class="block mx-4 px-4 py-2.5 text-2xl md:text-4xl rounded leading-none font-medium bg-blue-500 text-white">
                {slice.primary.heading}
              </span>
            </h2>
            <h3 className="text-center text-xl  md:px-12 ">{slice.primary.sub_heading}</h3>
          </div>
      <div className="flex justify-center items-center sm:p-8 md:py-12">
    <div className="md:px-8 grid sm:grid-cols-2 md:grid-cols-3 gap-5 space-y-4 md:space-y-0"> 
    {slice.items.map((item, index)=>(
      <div key={index}  className=" max-w-sm text-center rounded-2xl border overflow-hidden">
      <div>
      <iframe 
        src={`https://maps.google.com/maps?q=${item.map_latitude},${item.map_longitude}&hl=es;&output=embed`}
        height="250"
        allowFullScreen="" 
        className="w-full relative rounded-lg"
        loading="lazy">
          
        </iframe>
      </div>
      <div>
        <div className="my-2 text-center">
        <h2 className=" text-3xl">{item.city}</h2>
        </div>
        <div style={{minHeight:"75px",maxHeight:"75px",padding:"0px 10px"}}>
        <p className="mb-2 text-center text-xl ">{item.address}</p>
        </div>
        <div className="py-8">
        <a href={`tel:${item.phone_no}`} className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 
        rounded-full block-inline text-white text-xl hover:no-underline hover:bg-gradient-to-bl" >{item.phone_no}</a>
        {/* <p className="mb-2 text-center min-h-[80px] max-h-[80px] overflow-hidden py-2">{item.phone_no}</p> */}
        </div>   
        
      </div>
    
      
    </div>
    ))}
    </div>
    </div>
    </section>
  );
};

export default AreasWeServe;