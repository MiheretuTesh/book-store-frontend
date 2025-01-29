import React from "react";

interface Book {
  id: string;
  image: string;
  title: string;
  author: string;
  genre: string;
}

const NewArrivalsSection: React.FC<{ newArrivals: Book[] }> = ({
  newArrivals,
}) => {
  return (
    <section className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-teal-700">New Arrivals</h2>
        <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition duration-300">
          More
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {Array.isArray(newArrivals) &&
          newArrivals.map((book) => (
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

export default NewArrivalsSection;
