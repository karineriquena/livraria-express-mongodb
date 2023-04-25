import books from '../models/Book.js';

class BookController {
  static getBooks = async (_, res) => {
    try {
      const items = await books.find({});
      res.status(200).json(items);
    } catch (err) {
      res.status(500).send('error', err);
    }
  };

  static getBookById = async (req, res) => {
    try {
      // TODO: está retornando 200 com id inválido
      const book = await books.findById(req.params.id);
      res.status(200).json(book);
    } catch (err) {
      res.status(400).send({ message: `${err.message} - Book Id not found` });
    }
  };

  static newBook = async (req, res) => {
    try {
      let book = new books(req.body);
      await book.save();
      res.status(201).send(book.toJSON());
    } catch (err) {
      res.status(500).send({ message: `${err.message} - add book failed` });
    }
  };

  static updateBook = async (req, res) => {
    try {
      // TODO: retornar o recurso atualizado
      const id = req.params.id;
      const book = await books
        .findByIdAndUpdate(
          id,
          { $set: req.body },
          { new: true, returnDocument: 'after' }
        )
        .exec();
      res.status(204).send(book);
    } catch (err) {
      res.status(500).send({ message: `${err.message} - update book failed` });
    }
  };

  static deleteBook = async (req, res) => {
    // TODO: Não está retornando a mensagem
    try {
      const id = req.params.id;
      await books.findByIdAndDelete(id);
      res.status(204).send({ message: `Book ${id} successful deleted` });
    } catch (err) {
      res
        .status(500)
        .send({ message: `${err.message} - error to delete book` });
    }
  };
}

export default BookController;
