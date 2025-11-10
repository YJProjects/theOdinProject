const myLibrary = []

function Book(name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    myLibrary.push(this);
}

function createCard(book) {
    const tableRow = document.createElement("tr");

    const bookName = document.createElement("td");
    bookName.innerText = book.name;

    const bookAuthor = document.createElement("td");
    bookAuthor.innerText = book.author;

    const bookPages = document.createElement("td");
    bookPages.innerText = book.pages;

    tableRow.appendChild(bookName);
    tableRow.appendChild(bookAuthor);
    tableRow.appendChild(bookPages);

    return tableRow;
}

function displayLibrary() {
    const table = document.getElementById("table");
    myLibrary.forEach((book) => {
        const card = createCard(book);
        table.appendChild(card);
    })
}

Book.prototype.addBookToLibrary = addBookToLibrary;

bookOne = new Book("BookOne", "AuthorOne", 100);
bookOne.addBookToLibrary();

bookTwo = new Book("BookTwo", "AuthorTwo", "10");
bookTwo.addBookToLibrary();

bookThree = new Book("BookThree", "AuthorThree", 10);
bookThree.addBookToLibrary();

displayLibrary();

