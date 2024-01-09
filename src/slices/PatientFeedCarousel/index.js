'use client';
import { PrismicNextImage } from "@prismicio/next";
import { Swiper, SwiperSlide } from 'swiper/react';
/**
 * @typedef {import("@prismicio/client").Content.PatientFeedCarouselSlice} PatientFeedCarouselSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PatientFeedCarouselSlice>} PatientFeedCarouselProps
 * @param {PatientFeedCarouselProps}
 */
import {  Autoplay, Navigation, Pagination} from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

const PatientFeedCarousel = ({ slice }) => {
  return (
    <section 
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
<div className="py-8 md:py-12" >
<div className="mb-8">
 <h2 class="flex flex-row items-center justify-center mb-4">
 <span class="block mx-4 px-4 py-2.5 text-2xl md:text-4xl rounded leading-none font-medium bg-blue-500 text-white">
 {slice.primary.heading}
 </span>
 </h2>
 <h2 className="text-center text-xl md:text-2xl">{slice.primary.sub_heading}</h2>
</div>
     <Swiper
        autoplay = {{
          delay:6000
        }}
        loop={true}
        pagination={{
          clickable: true,
        }} 
        modules={[Autoplay,Pagination]}
        // className="mySwiper w-full h-full px-20"
        style={{width:"100%",maxHeight:"500px!important",overflow:"hidden",padding:"0 30px"}}
      >
      
       
       {slice.items.map((item, index)=>(
        <SwiperSlide  key={index}  className="w-full h-full overflow-hidden flex justify-center items-center text-center px-12">
            <PrismicNextImage field={item.image} className="w-full overflow-auto object-cover block" style={{maxHeight:"400px",minHeight:"400px"}}/>
            {/* <img src="https://media.istockphoto.com/id/1349328691/photo/young-happy-woman-during-dental-procedure-at-dentists-office.jpg?s=1024x1024&w=is&k=20&c=pQcUIm1GcRRITc1IDG9En2yQNMle4Oh5cYMTostVZcU=" className="w-full h-full object-cover block" /> */}
        </SwiperSlide>
       ))}    
     <div class="swiper-pagination mt-12"></div>
    </Swiper>
    </div>
    </section>
  );
};

export default PatientFeedCarousel;
