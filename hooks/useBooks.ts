import { useQuery } from "react-query";

const fetchBooks = async () => {
  const response = await fetch("http://localhost:5000/books/special-books");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const { data } = await response.json();
  return data;
};

export const useBooks = () => {
  return useQuery("books", fetchBooks);
};
