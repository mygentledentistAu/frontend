import { PrismicNextImage } from "@prismicio/next";
/**
 * @typedef {import("@prismicio/client").Content.CalltoActionSlice} CalltoActionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CalltoActionSlice>} CalltoActionProps
 * @param {CalltoActionProps}
 */
const CalltoAction = ({ slice }) => {
  return (
    <>
      {slice.variation === "default" && (
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >

          <div className="py-8">
            <div className="bg-blue-900 text-white py-20">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-8 lg:flex-row items-center">
                  <div className="lg:w-1/2">
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">{slice.primary.heading}</h1>
                    <p className="text-xl mb-8">{slice.primary.description}</p>
                    <a href={`tel:${slice.primary.phone_no}`}
                      class=" inline-block mt-4 hover:no-underline rounded-full border-2 border-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                      data-te-ripple-init data-te-ripple-color="light">
                      {slice.primary.phone_no}
                    </a>
                  </div>
                  <div className="lg:w-1/2 lg:ml-12">
                    <PrismicNextImage field={slice.primary.image} className="rounded-lg shadow-lg hover:shadow-xl transition duration-200" />
                  </div>
                </div>
              </div>
            </div>

          </div>


        </section>
      )}

      {slice.variation === "var1" && (
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <div className="py-12">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative">
              <div className="shadow rounded-xl">
                <div className="grid overflow-hidden text-white shadow-xl md:grid-cols-2 bg-blue-800 rounded-xl">
                  <aside className="p-8 space-y-4 md:p-16">
                    <h2 className="text-2xl font-bold tracking-tight md:text-3xl font-headline mb-8">
                      {slice.primary.heading}
                    </h2>

                    <p className="font-medium text-blue-100 md:text-2xl">
                      {slice.primary.description}
                    </p>

                    <div >
                      <a href={`tel:${slice.primary.phone_no}`}
                        class=" inline-block mt-4 hover:no-underline rounded-full border-2 border-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                        data-te-ripple-init data-te-ripple-color="light">
                        {slice.primary.phone_no}
                      </a>
                    </div>
                  </aside>

                  <aside className="relative hidden md:block">
                    <PrismicNextImage field={slice.primary.image} class="absolute inset-0 object-cover object-left-top w-full h-full mt-16 -mr-16 rounded-tl-lg" />
                  </aside>
                </div>
              </div>
            </div>
          </div>

        </section>
      )}

      {slice.variation === "var2" && (
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <div className="py-8">
            <div className="bg-blue-900 text-white py-20 max-w-6xl mx-auto rounded-lg">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-8 lg:flex-row items-center">
                  <div className="lg:w-1/2">
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">{slice.primary.heading}</h1>
                    <p className="text-xl mb-8">{slice.primary.description}</p>
                    <a href={`tel:${slice.primary.phone_no}`}
                      class=" inline-block mt-4 hover:no-underline rounded-full border-2 border-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                      data-te-ripple-init data-te-ripple-color="light">
                      {slice.primary.phone_no}
                    </a>
                  </div>
                  <div className="lg:w-1/2 lg:ml-12">
                    <PrismicNextImage field={slice.primary.image} className="rounded-lg shadow-lg hover:shadow-xl transition duration-200" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      )}

      {slice.variation === "var3" && (
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <div className="px-2 py-20 w-full flex justify-center">
            <div className="bg-blue-900 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
              <div className="lg:w-1/2">
                <PrismicNextImage field={slice.primary.image} class="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg object-cover" />
              </div>
              <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                <h2 className="text-3xl text-white font-bold">
                  {slice.primary.heading}
                </h2>
                <p className="mt-4 text-white">
                  {slice.primary.description}
                </p>
                <div>
                  <a href={`tel:${slice.primary.phone_no}`}
                    class=" inline-block mt-4 hover:no-underline rounded-full border-2 border-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                    data-te-ripple-init data-te-ripple-color="light">
                    {slice.primary.phone_no}
                  </a>

                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {slice.variation === "var4" && (
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <div className="container my-24 mx-auto px-6">
            <div className="mb-32">
              <div className="flex flex-wrap">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
                  <div className="flex lg:py-12">
                    <PrismicNextImage field={slice.primary.image} class="w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px] z-[10]" />
                  </div>
                </div>
                <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                  <div className="flex h-full items-center rounded-lg bg-blue-800 p-6 text-center text-white lg:pl-12 lg:text-left">
                    <div className="lg:pl-12">
                      <h2 className="mb-6  text-2xl md:text-5xl font-bold">
                        {slice.primary.heading}
                      </h2>
                      <p className="mb-6 pb-2 lg:pb-0  text-lg md:text-xl ">
                        {slice.primary.description}
                      </p>
                      <a href={`tel:${slice.primary.phone_no}`}
                        class=" inline-block mt-4 hover:no-underline rounded-full border-2 border-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                        data-te-ripple-init data-te-ripple-color="light">
                        {slice.primary.phone_no}
                      </a>
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

export default CalltoAction;
