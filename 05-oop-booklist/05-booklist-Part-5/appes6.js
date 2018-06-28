class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI{
    addBookToList(book){
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
    showAlert(message, className){
        //Create div to show alert
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        //Add text to newly created div
        div.appendChild(document.createTextNode(message));
        //Insert to the dom, but first get parent
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form); //take two params; add a div before the form

        //set timeout after 3 sec
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }
    deleteBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove(); //parent is <a> tag and parent of <a> tag is <li>, we are removing each <li>
        }
    }
    clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

//Local Storage Class
class Store{
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem('books')); //local storage will only accept string
        }
        return books;
    }
    
    static displayBooks(){
        const books = Store.getBooks();
        books.forEach(function(book){
            const ui = new UI;
            //Add book to UI
            ui.addBookToList(book);
        });
    }
    
    static addBook(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
    
    static removeBook(isbn){
        const books = Store.getBooks();
        books.forEach(function(book, index){
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

//DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

//Event Listeners for Adding
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

    //Validation starts
    if(title === '' || author === '' || isbn === ''){
        //Error alert 
        ui.showAlert('Please fill in all fields', 'error');
    }else{
        //add to list if not empty
        ui.addBookToList(book);

        //add to local storage
        Store.addBook(book);

        //Show success message
        ui.showAlert('Book added successfully', 'success');
        
        //Clear form fills after added
        ui.clearFields();
    }

    e.preventDefault();
});

//Event Listeners for Deletion
document.getElementById('book-list').addEventListener('click', function(e){
    //Instantiate UI
    const ui = new UI();
    //Delete book
    ui.deleteBook(e.target);

    //Remove from local storage
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    //Show alert after deletion
    ui.showAlert('Book removed successfully', 'success');
    e.preventDefault();
});