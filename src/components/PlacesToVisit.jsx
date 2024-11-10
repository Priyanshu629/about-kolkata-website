import React from "react";
import { images } from "../Images/index.js"; // Make sure the path is correct

const PlacesToVisit = () => {
  return (
    <div className="places-to-visit w-[100%] text-white">
      <h1 className="text-center font-bold text-2xl">Places to Visit</h1>
      <section className="flex flex-wrap w-[90%] mx-auto items-center">
        {images.map((place, index) => (
          <div key={index} className="p-2 w-[300px] h-[300px] m-2 border-2 ">
            <p className="text-center my-2">{place.name}</p>
            <img src={place.image} alt={place.name} className=" w-[70%] h-[70%] mx-auto border-2 rouned-md" />
          </div>
        ))}
      </section>
    </div>
  );
};

export default PlacesToVisit;
