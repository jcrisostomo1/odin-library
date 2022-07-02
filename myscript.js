const cardContainer = document.querySelector(".card-container");
const submitButton = document.getElementById("submit-btn");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const numPages = document.querySelector("#numPages");
const read = document.querySelector("#read");

let myLibrary = [];

function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;    
} 

Book.prototype.info = function() {
    return `${this.title}, ${this.author}, ${this.numPages}, ${this.read}`;
}

let addBookToLibrary = (...book) => {
    myLibrary.push(...book);
}

let loadExistingBooks = () => {
    myLibrary.map(book => {
        addCard(book);
    });
}

let addCard = (book) => {
    let card = document.createElement("div");
    card.className="card";
    let bookNumber = document.createElement("h3");
    bookNumber.innerText = `Book: ${myLibrary.indexOf(book)+1}`
    let title = document.createElement("p");
    title.innerText = `${book.title}`;
    let author = document.createElement("p");
    author.innerText = `By: ${book.author}`;
    let numPages = document.createElement("p");
    numPages.innerText = `Pages: ${book.numPages}`;
    let read = document.createElement("p");
    read.innerText = book.read;
    card.append(bookNumber, title, author, numPages, read);
    cardContainer.appendChild(card);
}

let hungerGames = new Book("Hunger Games", "JC", 300 , true);
let percyJackon = new Book("Percy Jackson", "Me", 900, false)
addBookToLibrary(hungerGames, percyJackon);
loadExistingBooks();

submitButton.addEventListener('click', () => {
    console.log(title.value + author.value + numPages.value)
    let newBook = new Book(title.value, author.value, numPages.value, read.checked);
    addBookToLibrary(newBook);
    addCard(newBook);
});
