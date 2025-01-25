import React from "react";

const FeaturedBooksSection: React.FC = () => {
  return (
    <section className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4 text-teal-700">Featured Books</h2>
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

export default FeaturedBooksSection;
