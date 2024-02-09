import React, { useState, useEffect, useRef } from 'react';
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@/components/PrismicRichText";
/**
 * 
 * 
 * @typedef {import("@prismicio/client").Content.WizardHeroSectionSlice} WizardHeroSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WizardHeroSectionSlice>} WizardHeroSectionProps
 * @param {WizardHeroSectionProps}
 */
const WizardHeroSection = ({ slice }) => {
  return (
    <>
      {slice.variation === "default" && (
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <section className="relative pb-8 " style={{ height: '750px' }}>
            <div>
              <PrismicNextImage field={slice.primary.image} />
              <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center holder bg-gray-900/75">
                <div className="z-10 max-w-5xl px-4 mx-auto text-center">
                  <span className="text-xs font-semibold text-blue-400 uppercase"><>{slice.primary.title}</></span>
                  <h2
                    className="mt-2 mb-4 text-3xl font-bold leading-tight text-white md:text-4xl md:leading-tight lg:text-7xl lg:leading-tight g">
                    <PrismicRichText field={slice.primary.heading} />
                  </h2>
                </div>
              </div>
            </div>
          </section>
          <div className="grid grid-cols-1 lg:grid-cols-4  relative mt-0 lg:-mt-[90px]  z-10  rounded">
            {slice.items.map((item, index) => (
              <div key={index} className="w-full p-8 mb-10 text-center transition-all bg-blue-900 shadow lg:mb-0">
                <div className="inline-block p-4 mb-6 -mt-16 bg-gray-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="w-8 h-8 text-blue-700 bi bi-people" viewBox="0 0 16 16">
                    <path
                      d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                  </svg>
                </div>
                <h2 className="mb-4 text-2xl font-semibold text-gray-100 dark:text-white"> <>{item.title}</></h2>
                <p className="text-base text-gray-300 dark:text-gray-300">
                  <>{item.content}</>
                </p>
              </div>
            ))}
          </div>

        </section>
      )}

      {/* {slice.variation === "variation2" && (
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <section className="relative pb-8 " style={{ height: '850px' }}> */}
      {/* <PrismicNextImage field={slice.primary.image} /> */}
      {/* <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center holder bg-gray-900/75"> */}
      {/* <div className="z-10 max-w-5xl px-4 mx-auto text-center"> */}
      {/* <span className="text-xs font-semibold text-blue-400 uppercase"><>{slice.primary.title}</></span>
                <h2
                  className="mt-2 mb-4 text-3xl font-bold leading-tight text-white md:text-4xl md:leading-tight lg:text-7xl lg:leading-tight g">
                  <PrismicRichText field={slice.primary.heading} />
                </h2> */}

      {/* <div className="flex flex-col md:grid md:grid-cols-3 gap-3">
              {slice.items.map((item, index) => (
                <div key={index} className="text-white">
                  <div className="relative rounded overflow-hidden">
                    <PrismicNextImage field={item.image} />
                    <p
                      className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                      <>{item.content}</>
                    </p>
                  </div>
                </div>
              ))}
            </div> */}

      {/* </div> */}
      {/* </div> */}
      {/* </section>
        </section>
      )} */}

    </>
  );
};

export default WizardHeroSection;
