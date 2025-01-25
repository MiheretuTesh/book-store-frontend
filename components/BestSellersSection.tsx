import React from "react";

const BestSellersSection: React.FC = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-teal-700">Best Sellers</h2>
        <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition duration-300">
          More
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          <img
            src="https://via.placeholder.com/150"
            alt="Book 1"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-teal-700">Book Title 1</h3>
            <p className="text-gray-600">by Author Name</p>
            <p className="text-gray-500 text-sm">Genre</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          <img
            src="https://via.placeholder.com/150"
            alt="Book 2"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-teal-700">Book Title 2</h3>
            <p className="text-gray-600">by Author Name</p>
            <p className="text-gray-500 text-sm">Genre</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          <img
            src="https://via.placeholder.com/150"
            alt="Book 3"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-teal-700">Book Title 3</h3>
            <p className="text-gray-600">by Author Name</p>
            <p className="text-gray-500 text-sm">Genre</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          <img
            src="https://via.placeholder.com/150"
            alt="Book 3"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-teal-700">Book Title 3</h3>
            <p className="text-gray-600">by Author Name</p>
            <p className="text-gray-500 text-sm">Genre</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          <img
            src="https://via.placeholder.com/150"
            alt="Book 3"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-teal-700">Book Title 3</h3>
            <p className="text-gray-600">by Author Name</p>
            <p className="text-gray-500 text-sm">Genre</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          <img
            src="https://via.placeholder.com/150"
            alt="Book 3"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-teal-700">Book Title 3</h3>
            <p className="text-gray-600">by Author Name</p>
            <p className="text-gray-500 text-sm">Genre</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellersSection;
