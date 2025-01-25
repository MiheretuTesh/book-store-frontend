import { NextApiRequest, NextApiResponse } from "next";

const books = [
  { id: 1, title: "Book 1", author: "Author 1" },
  { id: 2, title: "Book 2", author: "Author 2" },
  // ...more books...
];

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(books);
};
