import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.AboutTeamSlice} AboutTeamSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutTeamSlice>} AboutTeamProps
 * @param {AboutTeamProps}
 */


import { PrismicRichText } from "@/components/PrismicRichText";



const icons = {
  calendar: <CalendarIcon />

}

const AboutTeam = ({ slice }) => {

  return (
    <Bounded as="section" className="bg-white"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}>


      <div className="bg-green-500">
        <h1><PrismicRichText field={slice.primary.heading} /></h1>
      </div>


      {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 max-w-5xl gap-x-8 gap-y-12 mx-auto sm:place-items-start
       place-items-center bg-blue-600"> */}
      {/* <div style={{ backgroundColor: "blue" }}>
        {slice.items.map((item, index) => (
          <div key={index} className="max-w-xs grid sm:place-items-start place-items-center">
            <h2 className="text-4xl font-bold mb-2"><PrismicRichText field={item.title} /></h2>
            <h3 className="text-2xl mb-4"><PrismicRichText field={item.subtitle} /></h3>
            <PrismicNextImage field={item.image} />
            <>{item.content}</>

            <ul>

              <li>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.icon && <div className="mb-5">


                    <>{icons[item.icon]}</>

                  </div>}
                </a>
              </li>

            </ul>


          </div>
        ))}
      </div> */}



      {/* Placeholder component for about_team (variation: {slice.variation}) Slices */}
    </Bounded>
  );
};

export default AboutTeam;


function CalendarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      fill="none"
      viewBox="0 0 80 80"
    >
      <path
        stroke="#0891B2"
        strokeWidth="4.991"
        d="M6.667 40c0-12.57 0-18.856 3.905-22.761 3.905-3.906 10.19-3.906 22.761-3.906h13.334c12.57 0 18.856 0 22.761 3.906 3.905 3.905 3.905 10.19 3.905 22.761v6.667c0 12.57 0 18.856-3.905 22.761-3.905 3.905-10.19 3.905-22.761 3.905H33.333c-12.57 0-18.856 0-22.761-3.905-3.905-3.905-3.905-10.19-3.905-22.761V40z"
      ></path>
      <path
        stroke="#0891B2"
        strokeLinecap="round"
        strokeOpacity="0.5"
        strokeWidth="4.991"
        d="M23.333 13.333v-5M56.667 13.333v-5M8.333 30h63.334"
      ></path>
      <path
        fill="#0891B2"
        d="M60 56.667a3.333 3.333 0 11-6.667 0 3.333 3.333 0 016.667 0zM60 43.333a3.333 3.333 0 11-6.667 0 3.333 3.333 0 016.667 0zM43.333 56.667a3.333 3.333 0 11-6.666 0 3.333 3.333 0 016.666 0zM43.333 43.333a3.333 3.333 0 11-6.666 0 3.333 3.333 0 016.666 0zM26.667 56.667a3.333 3.333 0 11-6.667 0 3.333 3.333 0 016.667 0zM26.667 43.333a3.333 3.333 0 11-6.667 0 3.333 3.333 0 016.667 0z"
      ></path>
    </svg>
  );
}
