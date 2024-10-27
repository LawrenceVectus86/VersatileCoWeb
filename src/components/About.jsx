import React from 'react';
import modelTas from '../assets/2.webp'

const BrandSection = () => {
  return (
    <section className="bg-beige min-h-screen flex justify-center items-center p-8">
      <div className="max-w-7xl flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-16">
        {/* Image Section */}
        <div className="bg-gray-100 p-6">
          <img
            src={modelTas} // Replace with your image path
            alt="Bags"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-start space-y-4">
          <h1 className="text-4xl font-bold tracking-widest">BRAND</h1>
          <p className="italic text-lg">Read our story</p>
          <p className="text-gray-600 max-w-lg">
            Established in 2009, MOSSDOOM is one of the famous ladies' bag brands
            providing women with uniquely designed fashionable ladies' bags with
            the best craftsmanship and most advanced design concepts to provide
            high-quality ladies' bags.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
