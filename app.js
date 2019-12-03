//Event listeners
document.getElementById('book-form').addEventListener('submit',
  e => {
    //Get form values
    e.preventDefault();
    var title = document.getElementById('title');
    var author = document.getElementById('author');
    var isbn = document.getElementById('isbn');
    console.log(new Book(title.value, author.value, isbn.value));
    title.value = '';
    author.value = '';
    isbn.value = '';
  })
class Book{
  constructor(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
