const myLibrary = [];

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor")
    }
this.title = title;
this.author = author;
this.pages = pages;
this.read = read; 
this.ID = crypto.randomUUID();
}

function addBookToLibrary (title, author, pages, read) {
    
    let novel = new Book(title, author, pages, read,);
    myLibrary.push(novel)

} 

function arrayDisplayLoop() {
    let bookShelf = document.querySelector(".book-shelf");
    myLibrary.forEach(novel => {
        let book = document.createElement("div");
        bookShelf.appendChild(book);
        let title = novel.title;
        let titleNode = document.createTextNode(title);
        let paraTitle = document.createElement("p");
        paraTitle.appendChild(titleNode);
        book.appendChild(paraTitle);
    });

    

