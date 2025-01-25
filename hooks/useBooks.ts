import { useQuery } from "react-query";

const fetchBooks = async () => {
  const response = await fetch("/api/books");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const useBooks = () => {
  return useQuery("books", fetchBooks);
};
