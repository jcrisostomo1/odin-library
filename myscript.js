const cardContainer = document.querySelector(".card-container");

console.log(cardContainer)

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

function addBookToLibrary(...book) {
    myLibrary.push(...book);
}

let hungerGames = new Book("Hunger Games", "JC", 300 , true);
let percyJackon = new Book("Percy Jackson", "Me", 900, false)
addBookToLibrary(hungerGames, percyJackon);

myLibrary.forEach(book =>{
    let card = document.createElement("div");
    card.className="card"
    let title = document.createElement("h3");
    title.innerText = book.title;
    let author = document.createElement("p");
    author.innerText = book.author;
    let numPages = document.createElement("p");
    numPages.innerText = book.numPages;
    let read = document.createElement("p");
    read.innerText = book.read;
    card.append(title, author, numPages, read);
    cardContainer.appendChild(card)
});