import React, { useState } from 'react';

const AccordComponent = ({ slice }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full h-full">
      <div className=" max-w-3xl mx-auto">
        {slice.items.map((item, index) => (
          <div key={index} className="bg-blue-100/40 rounded-md overflow-hidden shadow-md mb-4">

            <input
              type="checkbox"
              id={`accordion-item-${index}`}
              className="hidden"
              checked={openIndex === index}
              onChange={() => toggleAccordion(index)}
            />
            <div className="border-b">
              <label
                htmlFor={`accordion-item-${index}`}
                className="w-full flex items-center justify-between p-4 cursor-pointer focus:outline-none focus:bg-blue-200 transition duration-300 ease-in-out"
              >
                <span className="text-md md:text-xl font-semibold text-blue-800 mr-4">{item.title}</span>
                <span className={`transform text-lg transition duration-300 ease-in-out ${openIndex === index ? 'rotate-90' : 'rotate-0'}`}>&#8250;</span>
              </label>

              <div className={`p-4 ${openIndex === index ? '' : 'hidden'}`}>
                
                <p className="text-slate-700 text-lg text-justify p-2 leading-9">{item.description}</p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default AccordComponent;
