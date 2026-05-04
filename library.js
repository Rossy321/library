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
    bookShelf.textContent = "";
    myLibrary.forEach(novel => {
        let book = document.createElement("div");
        book.classList.add("book");
        bookShelf.appendChild(book);
        let paraTitle = document.createElement("p");
        paraTitle.textContent = novel.title;
        book.appendChild(paraTitle);
        let paraAuthor = document.createElement("p");
        paraAuthor.textContent = novel.author;
        book.appendChild(paraAuthor);
        let paraPages = document.createElement("p");
        paraPages.textContent = novel.pages;
        book.appendChild(paraPages);
        let paraRead = document.createElement("p");
        paraRead.textContent = novel.read;
        book.appendChild(paraRead);    
    }); 
}

    addBookToLibrary ("trainspotting", "irvine welsh", 300, "yes");
    addBookToLibrary ("great expectations", "charles dickens", 265, "yes");
    addBookToLibrary ("cien años de soledad", "Gabriel García Márquez", 325, "yes");


    arrayDisplayLoop();

