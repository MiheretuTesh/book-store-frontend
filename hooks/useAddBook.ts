import { useMutation } from "react-query";

const addBook = async (formData: FormData) => {
  const response = await fetch("http://localhost:5000/books", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to add book");
  }

  return response.json();
};

export const useAddBook = () => {
  return useMutation(addBook);
};
