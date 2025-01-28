import React, { useState } from "react";
import { IconSearch } from "@tabler/icons-react";
import { useSearch } from "@/hooks/useSearch";

interface HeroSectionProps {
  setSearchResults: (results: any) => void;
  setIsSearching: (isSearching: boolean) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  setSearchResults,
  setIsSearching,
}) => {
  const [searchBy, setSearchBy] = useState("title");
  const [query, setQuery] = useState("");

  const { data, refetch, isFetching } = useSearch(query, searchBy);

  const handleSearch = () => {
    setIsSearching(true);
    refetch().then(() => {
      setIsSearching(false);
      if (data && data.length > 0) {
        setSearchResults(data);
      } else {
        setSearchResults(null);
      }
    });
  };

  const handleTabClick = async (genre: string) => {
    setIsSearching(true);
    const response = await fetch(
      `http://localhost:5000/books/genre/${genre.toLowerCase()}`
    );
    const result = await response.json();
    setIsSearching(false);
    if (result.data && result.data.length > 0) {
      setSearchResults(result.data);
    } else {
      setSearchResults(null);
    }
  };

  return (
    <div className="container mx-auto text-center">
      <h1 className="text-3xl font-extrabold mb-2 drop-shadow-lg">
        Welcome to our Book Store
      </h1>
      <p className="text-xl mb-6 drop-shadow-md">
        Find your next favorite book he
      </p>
      <div className="mt-8 flex justify-center relative">
        <select
          className="px-1 py-2 focus:outline-none text-gray-700 border-2 border-teal-200 bg-white hover:bg-gray-100 transition duration-300"
          value={searchBy}
          onChange={(e) => setSearchBy(e.target.value)}
        >
          <option value="title">Title</option>
          <option value="author">Author</option>
        </select>
        <input
          type="text"
          placeholder="Search for books..."
          className="px-5 py-2 focus:outline-none text-gray-700 border-t-2 border-b-2 border-teal-200 w-[500px]"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-[#3E5962] text-teal-500 px-3 py-2 font-semibold hover:bg-[#647a81] transition duration-300 flex items-center"
          onClick={handleSearch}
        >
          <IconSearch className="mr-2" />
        </button>
      </div>
      <div className="mt-6 flex justify-center space-x-4">
        {["Fiction", "Non-Fiction", "Mystery", "Fantasy", "Romance"].map(
          (genre) => (
            <button
              key={genre}
              className="px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-200 transition duration-300"
              onClick={() => handleTabClick(genre)}
            >
              {genre}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default HeroSection;
