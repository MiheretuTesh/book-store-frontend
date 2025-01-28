import { useQuery } from "react-query";

const fetchSearchResults = async (query: string, searchBy: string) => {
  const response = await fetch(
    `http://localhost:5000/books/search-books?query=${query}&searchBy=${searchBy}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const { data } = await response.json();

  return data;
};

export const useSearch = (query: string, searchBy: string) => {
  return useQuery(
    ["searchBooks", query, searchBy],
    () => fetchSearchResults(query, searchBy),
    {
      enabled: false,
    }
  );
};
