
/**
 * @typedef {import("@prismicio/client").Content.OurLocationSlice} OurLocationSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<OurLocationSlice>} OurLocationProps
 * @param {OurLocationProps}
 */
const OurLocation = ({ slice }) => {
  return (
    <>
    {slice.variation === "twoColumn" && (

      <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      >
     <div className="mb-8">
 <h2 class="flex flex-row items-center justify-center mb-2">
 <span class="block mx-4 px-4 py-2.5 text-2xl md:text-4xl rounded leading-none">
 {slice.primary.main_heading}
 </span>
 </h2>
 <h2 className="text-center text-xl">{slice.primary.sub_heading}</h2>
</div>
      <div class="mb-12 px-12">
      <div
      class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] s">
      <div class="flex flex-wrap items-center">
        <div class="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
          <div class="h-[500px] w-full">
              <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d453411.4373280255!2d152.958898!3d-27.398291!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-27.398290499999998!2d152.9588982!5e0!3m2!1sen!2sus!4v1702922725738!5m2!1sen!2sus" 
              class="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" allowFullScreen="" 
              loading="lazy" ></iframe>
          </div>
        </div>
        <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
          <div class="flex flex-wrap px-3 pt-12 pb-12 md:pb-0 lg:pt-0">
            <div class="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12 py-4 transform transition:all duration-500  hover:translate-y-[-10%] hover:bg-slate-200 cursor-pointer">
              <div class="flex align-start">
                <div class="shrink-0">
                  <div class="inline-block rounded-md bg-sky-200 p-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  </div>
                </div>
                <div class="ml-6 grow">
                  <p class="mb-2 font-bold dark:text-white">
                    Address
                  </p>
                  <p class="text-neutral-500 dark:text-neutral-200">
                  <>{slice.primary.address}</>
                  </p>
                </div>
              </div>
            </div>
           
            <div class="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:mb-0 xl:w-6/12 xl:px-12 py-4 transform transition:all duration-500  hover:translate-y-[-10%] hover:bg-slate-200 cursor-pointer">
              <div class="flex align-start ">
                <div class="shrink-0">
                  <div class="inline-block rounded-md bg-sky-200 p-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  </div>
                </div>
                <div class="ml-6 grow">
                  <p class="mb-2 font-bold dark:text-white">Call Us</p>
                  <p class="text-neutral-500 dark:text-neutral-200">
                 {slice.primary.phone_no}
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12 py-4 transform transition:all duration-500  hover:translate-y-[-10%] hover:bg-slate-200 cursor-pointer">
              <div class="align-start flex">
                <div class="shrink-0">
                  <div class="inline-block rounded-md bg-sky-200 p-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>

                  </div>
                </div>
                <div class="ml-6 grow">
                  <p class="mb-2 font-bold dark:text-white">Mail Us</p>
                  <p class="text-neutral-500 dark:text-neutral-200">
                  <>{slice.primary.email}</>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      </section>

    )}

{slice.variation === "default" && (

<section
data-slice-type={slice.slice_type}
data-slice-variation={slice.variation}
>
<div className="mb-8">
 <h2 class="flex flex-row items-center justify-center mb-4">
 <span class="block mx-4 px-4 py-2.5 text-2xl md:text-4xl rounded leading-none">
 {slice.primary.main_heading}
 </span>
 </h2>
 <h2 className="text-center text-xl">{slice.primary.sub_heading}</h2>
</div>
<div className="main_container w-full h-1/2 p-16">
  <div className="top_div flex flex-row items-center justify-between gap-12  mb-12 w-full">
  <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
    <div className="w-full p-4 hover:bg-slate-50 transition-translate duration-1000 ease-out  hover:translate-y-[-10%]">
            <div class="flex justify-center items-center">
            <div className="p-8 bg-blue-400 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-20 h-20 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
            </svg>
            </div>
            </div>
            <div class="mt-4 text-center">
                  <p class="font-bold">
                  {slice.primary.address}
                  </p>
            </div>
    </div>

    <div className="w-full p-4 hover:bg-slate-50 transition-translate duration-1000 ease-out  hover:translate-y-[-10%]">
    <a href="mailto:hi@mygentledentist.com.au" target="_blank">
    <div class="flex justify-center items-center">
            <div className="p-8 bg-blue-400 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-20 h-20 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
            </div>
            </div>
            <div class="mt-4 text-center">
                  <p class="font-bold">
                  {slice.primary.email}
                  </p>
            </div>
            </a>
    </div>
    <div className="w-full p-4 hover:bg-slate-50 transition-translate duration-1000 ease-out  hover:translate-y-[-10%]">
            <a href="tel:0735061234" target="_blank">
            <div class="flex justify-center items-center">
            <div className="p-8 bg-blue-400 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-20 h-20 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            </div>
            </div>
            <div class=" mt-4 text-center">
                  <p class="font-bold">
                  {slice.primary.phone_no}
                  </p>
            </div>
            </a>
    </div>
    </div>
  </div>
<div className="bottom_div w-full">
<div class="h-[500px] w-full">
              <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d453411.4373280255!2d152.958898!3d-27.398291!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-27.398290499999998!2d152.9588982!5e0!3m2!1sen!2sus!4v1702922725738!5m2!1sen!2sus" 
              class="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" allowFullScreen="" 
              loading="lazy" ></iframe>
          </div>
</div>
</div>

</section>

)}

{slice.variation === "forContactusPage" && (

<section className="mt-8 mb-12 md:mt-12 px-12 md:px-16"
data-slice-type={slice.slice_type}
data-slice-variation={slice.variation}
>
<div class="">
  <div id="map" class="relative h-[500px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
  <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d453411.4373280255!2d152.958898!3d-27.398291!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-27.398290499999998!2d152.9588982!5e0!3m2!1sen!2sus!4v1702922725738!5m2!1sen!2sus" 
              class="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" allowFullScreen="" 
              loading="lazy" style={{border:"0"}}></iframe>
  </div>
 
  <div class=" px-6 md:px-12 ">
    <div class=" block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
      <div class="flex flex-wrap">
        <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12  lg:px-6">
          <form>
            <div className="mb-8">
              <p className="text-4xl mb-2 text-blue-500">{slice.primary.main_heading}</p>
              <hr className='mb-2 h-1 w-1/2 mt-1 bg-blue-500 border-0 rounded' />
              <p className="text-2xl">{slice.primary.sub_heading}</p>
            </div>
            
            <div class="relative mb-6">
            <div class="relative">
                        <label for="name" class="leading-7 py-4 text-lg text-gray-900">Name<span className="text-red-500">*</span></label>
                        <input type="text" id="name" name="name" required
                            class="w-full bg-white rounded border border-gray-400 focus:border-blue-500
                             focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 
                             leading-8 transition-colors duration-200 ease-in-out " />
             </div>
            </div>
            <div class="relative mb-6">
            <div class="relative">
                        <label for="email" class="leading-7 py-4 text-lg text-gray-900">Email<span className="text-red-500">*</span></label>
                        <input type="email" id="email" name="email" required
                            class="w-full bg-white rounded border border-gray-400 focus:border-blue-500
                             focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 
                             leading-8 transition-colors duration-200 ease-in-out " />
             </div>
            </div>
            <div class="relative mb-6">
            <div class="relative">
                        <label for="Phone_no" class="leading-7 py-4 text-lg text-gray-900">Phone No</label>
                        <input type="text" id="Phone_no" name="Phone_no"
                            class="w-full bg-white rounded border border-gray-400 focus:border-blue-500
                             focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 
                             leading-8 transition-colors duration-200 ease-in-out " />
             </div>
            </div>
            <div class="relative mb-6">
            <div class="relative">
                        <label for="message" class="leading-7 py-4 text-lg text-gray-900">Your Message<span className="text-red-500">*</span></label>
                        <textarea id="message" name="message" required
                            class="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out "></textarea>
                    </div>
            </div>
            
            <button type="submit"
                // class="mb-6 w-full rounded bg-sky-500 text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal  lg:mb-0">
                className=" text-white bg-gradient-to-r from-cyan-500 to-blue-500 
               hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 
               font-medium rounded-lg text-xl px-8 md:px-20  py-2 md:py-4 text-center">
                Send
              </button>
          </form>
        </div>
        <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
          <div class="flex flex-wrap md:mt-20 md:pl-16">
            <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
              <div class="flex items-start">
                <div class="shrink-0">
                  <div class="inline-block rounded-md bg-sky-200 p-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  </div>
                </div>
                <div class="ml-6 grow">
                  <p class="mb-2 font-bold ">
                    Address
                  </p>
                  <p class="text-sm text-neutral-500">
                    {slice.primary.address}
                  </p>
                  
                </div>
              </div>
            </div>
            <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
              <div class="flex items-start">
                <div class="srink-0">
                  <div class="inline-block rounded-md bg-sky-200 p-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  </div>
                </div>
                <div class="ml-6 grow">
                  <p class="mb-2 font-bold ">
                    Phone No
                  </p>
                  <p class="text-sm text-neutral-500">
                    {slice.primary.phone_no}
                  </p>
                </div>
              </div>
            </div>
            <div
              class="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
              <div class="align-start flex">
                <div class="shrink-0">
                  <div class="inline-block rounded-md bg-sky-200 p-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  </div>
                </div>
                <div class="ml-6 grow">
                  <p class="mb-2 font-bold ">Email</p>
                  <p class="text-neutral-500">
                    {slice.primary.email}
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>





  </section>
)} 


</>
  );
};

export default OurLocation;
