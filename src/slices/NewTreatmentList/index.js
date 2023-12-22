/**
 * @typedef {import("@prismicio/client").Content.NewTreatmentListSlice} NewTreatmentListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NewTreatmentListSlice>} NewTreatmentListProps
 * @param {NewTreatmentListProps}
 */
const NewTreatmentList = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-wrap justify-center mt-10">

        {/* card1 */}
        {slice.items.map((item, index) => (
          <div className="p-4 max-w-md" key={index}>
            <div class="relative cursor-pointer">
              <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
              <div className="flex rounded-lg h-full p-8 flex-col relative p-6 bg-white border-2 border-indigo-500 rounded-lg hover:scale-105 transition duration-500 space-y-8 space-x-8">
                <div className="flex items-center mb-3">
                  <div
                    className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-black dark:text-white text-lg font-medium"><>{item.title}</></h2>
                </div>
                <div className="flex flex-col justify-between flex-grow">
                  <p className="leading-relaxed text-base text-black dark:text-gray-300">
                    <>{item.subcontent}</>
                  </p>
                  <p className="leading-relaxed text-base text-black dark:text-gray-300">
                    <>{item.subcontent2}</>
                  </p>
                  <p className="leading-relaxed text-base text-black dark:text-gray-300">
                    <>{item.subcontent3}</>
                  </p>
                  <a href="#" className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>




    </section>
  );
};

export default NewTreatmentList;
