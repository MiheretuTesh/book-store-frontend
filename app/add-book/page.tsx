"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAddBook } from "@/hooks/useAddBook";

const AddBookPage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [readStatus, setReadStatus] = useState(false);
  const [userRating, setUserRating] = useState(1);
  const [notes, setNotes] = useState("");
  const [fileUrl, setFileUrl] = useState<File | null>(null);
  const [genre, setGenre] = useState("Fiction");
  const [isBestSeller, setIsBestSeller] = useState(false);
  const [isFeatured, setIsFeatured] = useState(false);
  const [coverImageUrl, setCoverImageUrl] = useState<File | null>(null);
  const [error, setError] = useState("");
  const router = useRouter();
  const mutation = useAddBook();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("isbn", isbn);
    formData.append("read_status", readStatus.toString());
    formData.append("user_rating", userRating.toString());
    formData.append("notes", notes);
    if (fileUrl) formData.append("file_url", fileUrl);
    formData.append("genre", genre);
    formData.append("isBestSeller", isBestSeller.toString());
    formData.append("isFeatured", isFeatured.toString());
    if (coverImageUrl) formData.append("coverImageUrl", coverImageUrl);

    mutation.mutate(formData, {
      onSuccess: () => {
        router.push("/");
      },
      onError: (error: any | unknown) => {
        setError(error.message);
      },
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-28">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl"
      >
        <h2 className="text-3xl mb-6 text-center text-teal-700">Add Book</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block mb-2 text-black">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-black">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-black">ISBN</label>
            <input
              type="text"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-black">Read Status</label>
            <input
              type="checkbox"
              checked={readStatus}
              onChange={(e) => setReadStatus(e.target.checked)}
              className="mr-2"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-black">User Rating</label>
            <input
              type="number"
              value={userRating}
              onChange={(e) => setUserRating(Number(e.target.value))}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
              min="1"
              max="5"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-black">Notes</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-black">File URL</label>
            <input
              type="file"
              onChange={(e) => setFileUrl(e.target.files?.[0] || null)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-black">Genre</label>
            <select
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
            >
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Mystery">Mystery</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Romance">Romance</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-black">Best Seller</label>
            <input
              type="checkbox"
              checked={isBestSeller}
              onChange={(e) => setIsBestSeller(e.target.checked)}
              className="mr-2"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-black">Featured</label>
            <input
              type="checkbox"
              checked={isFeatured}
              onChange={(e) => setIsFeatured(e.target.checked)}
              className="mr-2"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-black">Cover Image URL</label>
            <input
              type="file"
              onChange={(e) => setCoverImageUrl(e.target.files?.[0] || null)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 w-full"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBookPage;
