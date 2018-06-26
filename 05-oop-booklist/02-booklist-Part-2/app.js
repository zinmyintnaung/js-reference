// Using ES5 syntax
// Book constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI(){
    //Add book to list
    UI.prototype.addBookToList = function(book){
        const list = document.getElementById('book-list');
        //create tr element
        const row = document.createElement('tr');
        //add columns to row
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
        `;
        list.appendChild(row);
    }
}

UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

//Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
    //Get form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;
    //console.log(title, author, isbn);

    //Instantiate book
    const book = new Book(title, author, isbn);
    //console.log(book);

    //Instantiate UI
    const ui = new UI();
    ui.addBookToList(book);

    //Clear form fills after added
    ui.clearFields();

    e.preventDefault();
});