"use client";

import React, { useState } from "react";

const images = [
  "/images/act1.jpg",
  "/images/act2.jpg",
  "/images/act9.jpg",
  "/images/act4.jpg",

  "/images/act6.jpg",
  "/images/act7.jpg",
];

const Activities = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleActivate = (index) => {
    // Sur mobile : on active l’image cliquée
    if (window.innerWidth < 768) {
      setActiveIndex((prev) => (prev === index ? null : index));
    }
  };

  return (
    <>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
        An overview of my daily activities, sports, travel and some events in my
        life.
      </p>

      <div className="flex items-center gap-2 h-[400px] w-full max-w-4xl mt-10 mx-auto overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => handleActivate(index)}
            className={`
              relative group grow transition-all w-56 rounded-lg overflow-hidden 
              h-[400px] duration-500 cursor-pointer
              
              /* Desktop hover */
              hover:w-full

              /* Mobile active effect */
              ${activeIndex === index ? "w-full" : ""}
            `}
          >
            <img
              src={img}
              className="h-full w-full object-cover object-center"
              alt="activity"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Activities;
