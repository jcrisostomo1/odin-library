const cardContainer = document.querySelector(".card-container");
const submitButton = document.getElementById("submit-btn");
const addBookButton = document.getElementById("add-btn");
const closeButton = document.querySelector(".close-button");
const modal = document.querySelector(".modal");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const numPages = document.querySelector("#numPages");
const read = document.querySelector("#read");

console.log(addBookButton)

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

let toggleModal = () => {
    modal.classList.toggle("show-modal");
}

let windowOnClick = (event) => {
    if (event.target === modal) {
        toggleModal();
    }
}

let updateIndexes = () => {
    let remainingCards = document.querySelectorAll(".card");
    console.log(remainingCards)
}

let deleteBook = (book) => {
    let selectedBook = document.querySelector(`[data-index="${myLibrary.indexOf(book)}"]`);
    selectedBook.remove();
    //myLibrary = myLibrary.filter(item => item !== book);
    updateIndexes();
}

let addCard = (book) => {
    let card = document.createElement("div");
    card.className="card";
    card.setAttribute("data-index", myLibrary.indexOf(book))
    let title = document.createElement("p");
    title.innerText = `${book.title}`;
    let author = document.createElement("p");
    author.innerText = `By: ${book.author}`;
    let numPages = document.createElement("p");
    numPages.innerText = `Pages: ${book.numPages}`;
    let read = document.createElement("p");
    read.className="read";
    if (book.read) {
        read.innerText = "Read";
    } else {
        read.innerText = "Not Read";
    }
    let deleteButton = document.createElement('button');
    deleteButton.className = "delete-btn";
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener('click', () => {
        deleteBook(book);
    });
    card.append(title, author, numPages, read, deleteButton);
    cardContainer.appendChild(card);
}

let hungerGames = new Book("Hunger Games", "JC", 300 , true);
let percyJackon = new Book("Percy Jackson", "Me", 900, false)
addBookToLibrary(hungerGames, percyJackon);
loadExistingBooks();

addBookButton.addEventListener('click', toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

submitButton.addEventListener('click', () => {
    console.log(title.value + author.value + numPages.value)
    let newBook = new Book(title.value, author.value, numPages.value, read.checked);
    addBookToLibrary(newBook);
    addCard(newBook);
    toggleModal();
});

