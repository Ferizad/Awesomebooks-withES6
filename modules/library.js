// handle storage
export default class library {
  static getBooks = () => {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static addBook = (book) => {
    const books = library.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static remBk = (title) => {
    const books = library.getBooks();

    books.forEach((book, index) => {
      if (book.title === title) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}