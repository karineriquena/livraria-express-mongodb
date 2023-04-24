import express from 'express';
import db from './config/dbConnect.js';
import books from './models/Book.js';

db.on('error', console.log.bind(console, 'DB Connection Error!'));
db.once('open', () => console.log('DB Connection Successful!'));

const app = express();

app.use(express.json());

app.get('/', (_, res) => {
  res.status(200).send('Node course');
});

app.get('/books', async (_, res) => {
  try {
    const items = await books.find({});
    res.status(200).json(items);
  } catch (err) {
    res.status(500).send('error', err);
  }
});

app.get('/books/:id', (req, res) => {
  const book = searchBook(req.params.id);

  res.json(book).status(204);
});

app.post('/books', (req, res) => {
  books.push(req.body);
  res.status(201).send(req.body);
});

app.put('/books/:id', (req, res) => {
  const book = searchBook(req.params.id);
  book.title = req.body.title;

  res.json(books).status(204);
});

app.delete('/books/:id', (req, res) => {
  const { id } = req.params;
  const index = searchBook(id, 'index');

  books.splice(index, 1);

  res.send(`Book ${id} succesful deleted`).status(204);
});

function searchBook(id, type = 'item') {
  if (type == 'item') {
    return books.find((book) => book.id == id);
  }

  return books.findIndex((book) => book.id == id);
}

export default app;
