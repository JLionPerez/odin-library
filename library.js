const myLibrary = [];

function Book(id, title, author, num_pages, read_status) {
    if (!new.target) {
        throw Error("You must use the 'new operator to call the constructor")
    }

    this.id = id;
    this.title = title;
    this.author = author;
    this.num_pages = num_pages;
    this.read_status = read_status;
    
    this.info = () => {
        return ("ID: " + id + ", " + title + " by " + author + ", " + num_pages + ", " + read_status)
    }
}

function addBookToLibrary(title, author, num_pages, read_status) {
    let id = self.crypto.randomUUID()
    const newBook = new Book(id, title, author, num_pages, read_status);
    myLibrary.push(newBook)
}

addBookToLibrary("a title", "an author", "number of pages", "it's been read")
addBookToLibrary("2", "2", "2", "2")
addBookToLibrary("blah", "blahblah", "blah","blah")
addBookToLibrary("blah1", "blahblah1", "blah1","blah1")

