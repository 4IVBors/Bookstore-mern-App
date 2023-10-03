const Book = require("../model/Book");

// Get all books
const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.error(err);
    return next(err);
  }

  if (!books || books.length === 0) {
    return res.status(404).json({ message: "No books found" });
  }
  return res.status(200).json({ books });
};

// Get a book by ID
const getById = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (err) {
    console.error(err);
    return next(err);
  }
  if (!book) {
    return res.status(404).json({ message: "No book found with this ID" });
  }
  return res.status(200).json({ book });
};

// Add a new book
const addBook = async (req, res, next) => {
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    book = new Book({
      name,
      author,
      description,
      price,
      available,
      image,
    });
    await book.save();
  } catch (err) {
    console.error(err);
    return next(err);
  }

  if (!book) {
    return res.status(500).json({ message: "Unable to add the book" });
  }
  return res.status(201).json({ book });
};

// Update a book by ID
const updateBook = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image,
    });
    book = await book.save();
  } catch (err) {
    console.error(err);
    return next(err);
  }
  if (!book) {
    return res.status(404).json({ message: "Unable to update by this ID" });
  }
  return res.status(200).json({ book });
};

// Delete a book by ID
const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndRemove(id);
  } catch (err) {
    console.error(err);
    return next(err);
  }
  if (!book) {
    return res.status(404).json({ message: "Unable to delete by this ID" });
  }
  return res.status(200).json({ message: "Book successfully deleted" });
};

module.exports = {
  getAllBooks,
  addBook,
  getById,
  updateBook,
  deleteBook,
};
