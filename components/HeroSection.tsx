import React from "react";
import { IconSearch } from "@tabler/icons-react";

const HeroSection: React.FC = () => {
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-3xl font-extrabold mb-2 drop-shadow-lg">
        Welcome to our Book Store
      </h1>
      <p className="text-xl mb-6 drop-shadow-md">
        Find your next favorite book here
      </p>
      <div className="mt-8 flex justify-center relative">
        <select className="px-1 py-2 focus:outline-none text-gray-700 border-2 border-teal-200 bg-white hover:bg-gray-100 transition duration-300">
          <option value="title">Title</option>
          <option value="author">Author</option>
        </select>
        <input
          type="text"
          placeholder="Search for books..."
          className="px-5 py-2 focus:outline-none text-gray-700 border-t-2 border-b-2 border-teal-200 w-[500px]"
        />
        <button className="bg-[#3E5962] text-teal-500 px-3 py-2 font-semibold hover:bg-[#647a81] transition duration-300 flex items-center">
          <IconSearch className="mr-2" />
        </button>
      </div>
      <div className="mt-6 flex justify-center space-x-4">
        <button className="px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-200 transition duration-300">
          Fiction
        </button>
        <div className="border-l border-gray-500 h-8"></div>
        <button className="px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-200 transition duration-300">
          Non-Fiction
        </button>
        <div className="border-l border-gray-500 h-8"></div>
        <button className="px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-200 transition duration-300">
          Mystery
        </button>
        <div className="border-l border-gray-500 h-8"></div>
        <button className="px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-200 transition duration-300">
          Fantasy
        </button>
        <div className="border-l border-gray-500 h-8"></div>
        <button className="px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-200 transition duration-300">
          Romance
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
