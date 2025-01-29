"use client";

import { useTheme } from "@/context/ThemeContext";
import NavigationBar from "@/components/NavigationBar";
import HeroSection from "@/components/HeroSection";
import NewArrivalsSection from "@/components/NewArrivalsSection";
import SearchedResult from "@/components/SearchedResult";
import BestSellersSection from "@/components/BestSellersSection";
import FeaturedBooksSection from "@/components/FeaturedBooksSection";
import { useBooks } from "@/hooks/useBooks";
import { FaSpinner } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Home: React.FC = () => {
  const { theme } = useTheme();
  const { data, error, isLoading }: any = useBooks();
  const [searchResults, setSearchResults] = useState<any[] | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [genre, setGenre] = useState<string | null>(null);

  const handleSetSearchResults = (results: any) => {
    setSearchResults(results);
    setGenre(null);
  };

  if (isLoading || isSearching)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <FaSpinner className="animate-spin text-teal-500 text-4xl" />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
      }`}
    >
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Hero Section */}
      <section className="bg-gradient-radial from-teal-500 via-cyan-500 to-blue-500 text-white py-[100px] animate-fade-in">
        <HeroSection
          setSearchResults={handleSetSearchResults}
          setIsSearching={setIsSearching}
        />
      </section>

      {/* Conditionally render sections based on search results */}
      {searchResults ? (
        searchResults.length > 0 ? (
          <div className="search-results">
            {genre && (
              <h2 className="text-2xl font-bold text-center my-4">
                {genre} Books
              </h2>
            )}
            <SearchedResult searchResults={searchResults} />
          </div>
        ) : (
          <div className="text-center text-xl mt-8">No Content Found</div>
        )
      ) : (
        <>
          {data?.newArrivals?.length > 0 ? (
            <NewArrivalsSection newArrivals={data.newArrivals} />
          ) : (
            <div className="text-center text-xl mt-8">No Content Found</div>
          )}

          {data?.bestSellers?.length > 0 ? (
            <BestSellersSection bestSellers={data.bestSellers} />
          ) : (
            <div className="text-center text-xl mt-8">No Content Found</div>
          )}

          {data?.featuredBooks?.length > 0 ? (
            <FeaturedBooksSection featuredBooks={data.featuredBooks} />
          ) : (
            <div className="text-center text-xl mt-8">No Content Found</div>
          )}
        </>
      )}

      {/* Footer */}
      <footer className="bg-teal-800 text-white py-4 text-center">
        <p>&copy; 2022 Book Store. All Rights Reserved.</p>
      </footer>
      <style jsx>{``}</style>
    </div>
  );
};

export default Home;
