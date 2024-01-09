// 'use client';
import React, { useState, useEffect, useRef } from 'react';
import { PrismicNextImage,PrismicNextLink } from "@prismicio/next";
import { Swiper, SwiperSlide } from 'swiper/react';
/**
 * @typedef {import("@prismicio/client").Content.HomepageHeroVideoSlice} HomepageHeroVideoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HomepageHeroVideoSlice>} HomepageHeroVideoProps
 * @param {HomepageHeroVideoProps}
 */

import {  Autoplay,EffectFade} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import st from "./index3.module.css"

const Counter = ({ targetValue, label, step }) => {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(null);

  const handleScroll = () => {
    const container = counterRef.current;

    if (!container) return;

    const containerTop = container.getBoundingClientRect().top;
    const containerBottom = container.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (containerTop < windowHeight * 0.75 && containerBottom > 0) {
      // Start the counter when the container is partially in view
      const intervalId = setInterval(() => {
        setCounter((prevCounter) => {
          const newCounter = prevCounter + step;

          if (newCounter >= targetValue) {
            clearInterval(intervalId); // Stop the interval when the target is reached
            return targetValue;
          }

          return newCounter;
        });
      }, 100); // Interval duration in milliseconds (adjust as needed)

      return () => {
        clearInterval(intervalId); // Cleanup the interval on component unmount
      };
    } else {
      // Reset the counter when the container is not in view
      setCounter(0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener on component unmount
    };
  }, [targetValue, step]);

  return (
    <div className="max-w-sm rounded-lg shadow-md py-4 px-2" ref={counterRef}>
      <p className="text-3xl counter-value">{counter}+</p>
      <p>{label}</p>
    </div>
  );
};




const HomepageHeroVideo = ({ slice }) => {
  return (
   <>
    {slice.variation === "homeHeroSlider" &&(
      <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      >

        <Swiper 
        effect={'fade'}
        autoplay = {{
          delay:3000
        }}
        loop={true}
        modules={[Autoplay,EffectFade]}
      >
        <div className="swiper-container">
        <div className="swiper-wrapper">
         {slice.items.map((item, index)=>(
        <SwiperSlide  key={index}>
            <PrismicNextImage field={item.image} className=" w-full object-cover block" />
            <div className={st["slide-text"]}>
              <h2 className=" text-white text-2xl  sm:text-5xl mb-4 text-center">{item.slide_heading_text}</h2>
              <p className=" text-white  text-xl sm:text-3xl text-center">{item.slide_text}</p>
              <p className="mt-4 sm:mt-12 text-center">
              <PrismicNextLink field={slice.primary.button_link}
               className=" text-white bg-gradient-to-r from-cyan-500 to-blue-500 
               hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 
               font-medium rounded-lg text-md px-8 md:px-12  py-2 md:py-4 text-center">{slice.primary.button_text}</PrismicNextLink>
              </p>
            </div>
        </SwiperSlide>
       ))} 
       </div>
       </div>
        </Swiper>
      
    <div className="flex justify-center items-center mx-auto mt-[1rem]  md:mt-[-7rem] z-50 relative">
    <div className="md:px-8 grid  md:grid-cols-2  lg:grid-cols-3"> 
    <div  className="max-w-sm  bg-blue-300 p-4">
    <div>
    <h1 className="text-white text-bold text-3xl ">Emergency Cases</h1>
    <hr className='mb-2 h-1  mt-1 bg-blue-100 border-0 rounded' />
    <p className=" text-sm mb-2 text-white">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    </p>
    <p className="text-3xl text-white">
      (07 3355 7490)
    </p>
    </div>
    <div className="mt-8">
    <h1 className="text-white text-bold text-3xl">Make An Appointment</h1>
    <hr className='mb-8 h-1  mt-1 bg-blue-100 border-0 rounded' />
    <p className='text-center'>
    <a 
          className="
          text-white bg-gradient-to-r from-cyan-400 to-blue-400 cursor-pointer
          hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 
          font-medium rounded-full text-2xl  px-16 py-4 text-center">Appointment
    </a>
    </p>
    
       

    </div>
    </div>
    <div  className="max-w-sm bg-blue-400 p-4">
    <h1 className="text-white text-bold text-3xl">Opening Hours</h1>
    <hr className='mb-2 h-1  mt-1 bg-blue-200 border-0 rounded' />
    <div>
    <table className="w-full text-md">
    <tbody className="text-white">
    <tr>
      <th>Monday</th>
      <td>9:0 - 8:0</td>
    </tr>
    <tr>
      <th>Tuesday</th>
      <td>9:0 - 8:0</td>
    </tr>
    <tr>
      <th>Wednesday</th>
      <td>9:0 - 8:0</td>
    </tr>
    <tr>
      <th>Thursday</th>
      <td>9:0 - 8:0</td>
    </tr>
    <tr>
      <th>Friday</th>
      <td>9:0 - 8:0</td>
    </tr>
    <tr>
      <th>Saturday</th>
      <td>9:0 - 8:0</td>
    </tr>
    <tr>
      <th>Sunday</th>
      <td>9:0 - 8:0</td>
    </tr>
    </tbody>
    </table>
    <p className="mb-2"><span className="bg-red-500 text-white p-1 mr-2">Note: </span>
    Treatment after 6pm by appointment only
    </p>
    <p><span className="bg-red-500 text-white p-1 mr-2">Note: </span>
    Saturday Treatment after 12pm by appointment
    </p>

    </div>
    </div>
    <div  className="max-w-sm bg-blue-500 p-4">
    <h1 className="text-white text-bold text-3xl">Why Choose Us?</h1>
    <hr className='mb-2 h-1 mt-1 bg-blue-300 border-0 rounded' />
    {/* <div className="grid grid-cols-2 gap-4 w-full mt-4 text-center text-white"> */}
    <div className="grid grid-cols-2 gap-4 w-full mt-4 text-center text-white" id="counterContainer">
  <Counter targetValue={parseInt(10) || 0} label={"Years of Experience"} step={1} />
  <Counter targetValue={parseInt(100) || 0} label={"Qualified Dentists"} step={5} />
  <Counter targetValue={parseInt(5000) || 0} label={"Happy Smiling Patients"} step={100} />
  <Counter targetValue={parseInt(400) || 0} label={"Patients Per Year"} step={10} />
  {/* <Counter targetValue={parseInt(slice.primary.heading, 10) || 0} label={slice.primary.label} /> */}
</div>
        {/* <Counter  targetValue={parseInt(slice.primary.heading, 10) || 0} label={slice.primary.label} /> */}
    {/* </div> */}
    </div>
    </div>
    </div>

    </section>

    )}
   
   </>
  );
};

export default HomepageHeroVideo;
