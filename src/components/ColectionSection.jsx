import React from 'react';
import modelTas from '../assets/3.webp'
import modelTas1 from '../assets/4.webp'
import modelTas2 from '../assets/5.webp'
const CollectionSection = () => {
  return (
    <section className="bg-beige min-h-screen py-12 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800">Collection</h1>
          <p className="italic text-xl text-gray-600 mt-2">Designer Series</p>
          <div className="bg-gray-300 text-sm text-white rounded-lg inline-block py-2 px-4 mt-4">
            We believe in making women’s bags that are both attractive and practical
          </div>
        </div>

        {/* Gallery Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img
              src={modelTas}
              alt="Model 1"
              className="rounded-lg shadow-lg w-[503px] h-[735px]"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 md:col-span-1">
            <img
              src={modelTas1} // Replace with your image path
              alt="Model 2"
              className="rounded-lg shadow-lg w-[352] h-[289]"
            />
            <img
              src={modelTas2} // Replace with your image path
              alt="Model 3"
              className="rounded-lg shadow-lg w-full"
            />
            <img
              src="/path-to-your-image4.jpg" // Replace with your image path
              alt="Model 4"
              className="rounded-lg shadow-lg w-full"
            />
            <img
              src="/path-to-your-image5.jpg" // Replace with your image path
              alt="Model 5"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <img
            src="/path-to-your-image6.jpg" // Replace with your image path
            alt="Model 6"
            className="rounded-lg shadow-lg w-full"
          />
          <img
            src="/path-to-your-image7.jpg" // Replace with your image path
            alt="Model 7"
            className="rounded-lg shadow-lg w-full"
          />
          <img
            src="/path-to-your-image8.jpg" // Replace with your image path
            alt="Model 8"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
