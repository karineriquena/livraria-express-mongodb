import express from 'express';

const app = express();

const books = [
  { id: 1, title: 'The Elder Ring' },
  { id: 2, title: "Harry Potter and the Sorcerer's Stone" },
];

app.get('/', (_, res) => {
  res.status(200).send('Node course');
});

app.get('/books', (_, res) => {
  res.status(200).json(books);
});

export default app;
