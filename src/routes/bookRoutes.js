import express from 'express';
import BookController from '../controllers/bookController.js';

const router = express.Router();

router
  .get('/books', BookController.getBooks)
  .get('/books/:id', BookController.getBookById)
  .post('/books', BookController.newBook)
  .put('/books/:id', BookController.updateBook)
  .delete('/books/:id', BookController.deleteBook);

export default router;
