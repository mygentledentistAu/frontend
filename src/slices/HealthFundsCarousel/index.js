'use client';
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Swiper, SwiperSlide } from 'swiper/react';
/**
 * @typedef {import("@prismicio/client").Content.HealthFundsCarouselSlice} HealthFundsCarouselSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HealthFundsCarouselSlice>} HealthFundsCarouselProps
 * @param {HealthFundsCarouselProps}
 */
import {Autoplay, Navigation} from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

const HealthFundsCarousel = ({ slice }) => {
  return (
    <section className="bg-blue-100/40"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
<div className="px-8 pt-8 pb-8 md:pb-32">
<div className="mb-8">
 <h2 class="flex flex-row items-center justify-center mb-4">
 <span class="block mx-4 px-4 py-2.5 text-2xl md:text-4xl rounded leading-none font-medium bg-blue-500 text-white">
 {slice.primary.heading}
 </span>
 </h2>
 <h2 className="text-center text-xl md:text-2xl">{slice.primary.sub_heading}</h2>
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
  );
};

export default HealthFundsCarousel;
