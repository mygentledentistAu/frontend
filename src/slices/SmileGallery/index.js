import React, { useState, useEffect } from 'react';
import { PrismicNextImage } from "@prismicio/next";
/**
 * @typedef {import("@prismicio/client").Content.SmileGallerySlice} SmileGallerySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SmileGallerySlice>} SmileGalleryProps
 * @param {SmileGalleryProps}
 */
import gal from "./index.module.css"
import gal1 from "./index1.module.css"



const SmileGallery = ({ slice }) => {
  // const [randomImageIndex, setRandomImageIndex] = useState(null);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     const newRandomIndex = Math.floor(Math.random() * slice.items.length);
  //     setRandomImageIndex(newRandomIndex);
  //     setTimeout(() => {
  //       setRandomImageIndex(null);
  //     }, 2000); // Adjust the duration for how long the image stays in color
  //   }, 5000); // Adjust the duration for how often the random image changes

  //   // Clear interval when component unmounts
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [slice.items]);
  const [randomImageIndex, setRandomImageIndex] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const remainingIndices = Array.from({ length: slice.items.length }, (_, i) => i)
        .filter(index => index !== randomImageIndex);

      const newRandomIndex = remainingIndices.length > 0
        ? remainingIndices[Math.floor(Math.random() * remainingIndices.length)]
        : null;

      setRandomImageIndex(newRandomIndex);

      setTimeout(() => {
        setRandomImageIndex(null);
      }, 4000); // Adjust the duration for how long the image stays in color
    }, 5000); // Adjust the duration for how often the random image changes

    // Clear interval when component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [randomImageIndex, slice.items]);




  return (
    <>
      {slice.variation === "default" && (

        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <div className={gal.mydiv}>
            <div className={gal.gallery}>
              {slice.items.map((item, index) => (
                <PrismicNextImage key={index} field={item.image} 
                style={{
                  filter: randomImageIndex === index ? 'none' : 'grayscale(100%)',
                  transition: 'all 3s ease', // Adjust the transition duration
                  // transform: randomImageIndex === index ? 'scale(1.1)' : 'scale(1)',
                  // zIndex:randomImageIndex === index ? '100' : '0',
                }}
                // style={{ filter: randomImageIndex === index ? 'none' : 'grayscale(100%)' }}
             />
              ))}
            </div>
          </div>


        </section>
      )}

{slice.variation === "hover" && (

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  
  <div className={gal1.mydiv}>
    <div className={gal1.gallery}>
      {slice.items.map((item, index) => (
        <PrismicNextImage key={index} field={item.image}
        style={{
          filter: randomImageIndex === index ? 'none' : 'grayscale(100%)',
          transition: 'all 2s ease', // Adjust the transition duration
          transform: randomImageIndex === index ? 'scale(1.1)' : 'scale(1)',
          zIndex:randomImageIndex === index ? '100' : '0',
        }}
        // style={{ filter: randomImageIndex === index ? 'none' : 'grayscale(100%)' }}
        />
      ))}
    </div>
  </div>


</section>
)}

    </>
  );
};

export default SmileGallery;
