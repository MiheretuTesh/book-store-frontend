import React from "react";
import { useBooks } from "../hooks/useBooks";

const BookList: React.FC = () => {
  const { data, error, isLoading } = useBooks();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading books</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Book List</h2>
      <ul>
        {data.map((book: { id: number; title: string; author: string }) => (
          <li key={book.id} className="mb-2">
            <div className="font-semibold">{book.title}</div>
            <div className="text-gray-600">{book.author}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
