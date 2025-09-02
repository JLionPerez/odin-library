const myLibrary = [];

function Book(id,title_author, num_pages, read_status) {
    if (!new.target) {
        throw Error("You must use the 'new operator to call the constructor")
    }
    
    this.id = id;
    this.title_author = title_author;
    this.num_pages = num_pages;
    this.read_status = read_status;
    
    this.info = () => {
        return (title_author + ", " + num_pages + ", " + read_status)
    }
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
}