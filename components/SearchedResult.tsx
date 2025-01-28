import React from "react";

const SearchedResult: React.FC<{ searchResults: any[] }> = ({
  searchResults,
}) => {
  return (
    <section className="container mx-auto py-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {Array.isArray(searchResults) &&
          searchResults.map((book) => (
            <div
              key={book.id}
              className="bg-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-teal-700">
                  {book.title}
                </h3>
                <p className="text-gray-600">by {book.author}</p>
                <p className="text-gray-500 text-sm">{book.genre}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default SearchedResult;
