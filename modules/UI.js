import library from './library.js';
// UI for UI tasks
export default class UI {
  static displayBooks = () => {
    const books = library.getBooks();

    books.forEach((book) => UI.addBook(book));
  }

  static addBook = (book) => {
    const list = document.querySelector('.table-body');

    const row = document.createElement('tr');

    row.innerHTML = `
                  <td>${book.title}</td>
                  <td>by${book.author}</td>
                  <td><a href="#" class="remove-btn">Remove</a></td>
              `;

    list.appendChild(row);
  }

  static delBook = (el) => {
    if (el.classList.contains('remove-btn')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clrFields = () => {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}
