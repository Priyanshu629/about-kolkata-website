import React from "react";
import { images } from "../Images/index.js"; // Make sure the path is correct

const PlacesToVisit = () => {
  return (
    <div className="places-to-visit w-[100%]">
      <h1 className="text-center font-bold text-2xl">Places to Visit</h1>
      <section className="flex flex-wrap w-[90%] mx-auto items-center">
        {images.map((place, index) => (
          <div key={index} className="p-2 max-w-[300px] h-[350px] gap-4">
            <img src={place.image} alt={place.name} className=" h-[100%] border-2 rouned-md" />
            <p className="text-center">{place.name}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PlacesToVisit;
