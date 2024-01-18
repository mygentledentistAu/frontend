'use client';
import React, { useState, useEffect } from 'react';
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Swiper, SwiperSlide } from 'swiper/react';
/**
 * @typedef {import("@prismicio/client").Content.HealthFundsCarouselSlice} HealthFundsCarouselSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HealthFundsCarouselSlice>} HealthFundsCarouselProps
 * @param {HealthFundsCarouselProps}
 */
import {Autoplay, Navigation} from 'swiper/modules';
import gal from "./index.module.css"
// import 'swiper/css';
// import 'swiper/css/navigation';

const HealthFundsCarousel = ({ slice }) => {
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
    {slice.variation === "default" &&(
      <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
<div className="px-8 pt-8 pb-8 md:pb-32">
<div className="mb-12">
 <h2 class="flex flex-row items-center justify-center mb-2">
 <span class="block mx-4 px-4 py-2.5 text-2xl md:text-4xl rounded leading-none">
 {slice.primary.heading}
 </span>
 </h2>
 <h2 className="text-center text-xl">{slice.primary.sub_heading}</h2>
</div>
    <Swiper
      centeredSlides={true}
      spaceBetween={0}
        autoplay = {{
          delay:2000
        }}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          546: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
        style={{width:"100%",height:"10%",padding:"0 30px"}}
      >
        
       {slice.items.map((item, index)=>(
        <SwiperSlide  key={index} style={{width:"100%",height:"100%",padding:"0 30px"}} >
            <PrismicNextImage field={item.image} style={{width:"200px",maxHeight:"100px",objectFit:"cover",
            display:"block",minHeight:"100px"}} />
          </SwiperSlide>
       ))} 
       
     
    </Swiper>
    </div>
    </section>
    )}
    
    {slice.variation === "var1" &&(
      <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div class="md:p-12">
      <div class="grid lg:grid-cols-2 gap-8 max-lg:max-w-2xl mx-auto">
        <div class="text-left">
          <h2 class="text-4xl font-extrabold mb-2">{slice.primary.heading}</h2>
          <h2 class="text-2xl font-medium mb-4">{slice.primary.sub_heading}</h2>
          <p class="text-xl text-justify" style={{lineHeight:"2rem"}}>{slice.primary.text}</p>
        </div>
        <div class="">
        <div className={gal.mydiv}>
            <div className={gal.gallery}>
        {slice.items.map((item, index) => (
                <PrismicNextImage key={index} field={item.image} 
                style={{
                  // borderRadius: randomImageIndex === index ? '0%' : '50%',
                  transition: 'all 3s ease', // Adjust the transition duration
                  filter: randomImageIndex === index ? 'none' : 'blur(4px)',
                  transform: randomImageIndex === index ? 'scale(1.1)' : 'scale(1)',
                  zIndex:randomImageIndex === index ? '100' : '0',
                }}
             />
              ))}
              </div>
              </div>
        </div>
      </div>
    </div>

    </section>
    )}

    {slice.variation === "var2" &&(
             <section
             data-slice-type={slice.slice_type}
             data-slice-variation={slice.variation}
           >
            <div className='py-4 md:py-12'>
            <div className="mb-12">
        <h2 class="flex flex-row items-center justify-center mb-2">
        <span class="block mx-4 px-4 py-2.5 text-2xl md:text-4xl rounded leading-none">
        {slice.primary.heading}
        </span>
        </h2>
        <h2 className="text-center text-xl">{slice.primary.sub_heading}</h2>
        </div>
        <div className={gal.mydiv}>
            <div className={gal.gallery}>
        {slice.items.map((item, index) => (
                <PrismicNextImage key={index} field={item.image} 
                style={{
                  // borderRadius: randomImageIndex === index ? '0%' : '50%',
                  transition: 'all 3s ease', // Adjust the transition duration
                  filter: randomImageIndex === index ? 'none' : 'grayscale(100%)',
                  transform: randomImageIndex === index ? 'scale(1.1)' : 'scale(1)',
                  zIndex:randomImageIndex === index ? '100' : '0',
                }}
             />
              ))}
              </div>
              </div>
            </div>
            </section>
    )}
    </>
  );
};

export default HealthFundsCarousel;
