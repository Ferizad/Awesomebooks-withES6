import Book from './modules/book.js';
import library from './modules/library.js';
import UI from './modules/UI.js';
import { DateTime } from './modules/time.js';

document.addEventListener('DOMContentLoaded', UI.displayBooks);
document.querySelector('.book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const book = new Book(title, author);
  UI.addBook(book);
  library.addBook(book);
  UI.clrFields();
});

document.querySelector('.table-body').addEventListener('click', (e) => {
  UI.delBook(e.target);
  library.remBk(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
});

const curDate = document.querySelector('.dateTime');

const dt = DateTime.local();
const newDate = dt.toLocaleString({
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

const newTime = dt.toLocaleString(DateTime.TIME_WITH_SECONDS);
curDate.innerHTML = `
    <p>${newDate} &nbsp ${newTime}</p>
  `;

const logo = document.querySelector('.logo');
const booklist = document.querySelector('.list-one');
const add = document.querySelector('.list-two');
const contact = document.querySelector('.list-three');
const renderBooks = document.querySelector('.books');
const forms = document.querySelector('.forms');
const contacts = document.querySelector('.contact');
logo.addEventListener('click', () => {
  renderBooks.classList.remove('active');
  forms.classList.remove('active');
  contacts.classList.remove('active');
});
booklist.addEventListener('click', () => {
  renderBooks.classList.remove('active');
  forms.classList.remove('active');
  contacts.classList.remove('active');
});
add.addEventListener('click', () => {
  renderBooks.classList.add('active');
  forms.classList.add('active');
  contacts.classList.remove('active');
});
contact.addEventListener('click', () => {
  renderBooks.classList.add('active');
  forms.classList.remove('active');
  contacts.classList.add('active');
});