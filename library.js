// global variable
const myLibrary = [];


// constructor
function Book(id, title, author, num_pages, read_status) {
    if (!new.target) {
        throw Error("You must use the 'new operator to call the constructor")
    }

    this.id = id;
    this.title = title;
    this.author = author;
    this.num_pages = num_pages;
    this.read_status = read_status;
    
    // this.info = () => {
    //     return ("ID: " + id + ", " + title + " by " + author + ", " + num_pages + ", " + read_status)
    // }
}


// functions
function addBookToLibrary(title, author, num_pages, read_status) {
    let id = self.crypto.randomUUID()
    const newBook = new Book(id, title, author, num_pages, read_status);
    myLibrary.push(newBook)
}

function populateTable() {
    const tbody = document.querySelector("tbody")
    for (let book of myLibrary) {
        const tr = document.createElement("tr")
        for (const val in book) {
            if (book.hasOwnProperty(val)) {
                const td = document.createElement("td")
                td.textContent = book[val]
                tr.appendChild(td)
            }
        }
        tbody.appendChild(tr)
    }
}

const showFormBtn = document.getElementById("show_form")
const dialog = document.getElementById("dialog")

showFormBtn.addEventListener("click", () => {
    dialog.showModal();
});



// testing site

addBookToLibrary("a title", "an author", "number of pages", "it's been read")
addBookToLibrary("2", "2", "2", "2")
addBookToLibrary("blah", "blahblah", "blah","blah")
addBookToLibrary("blah1", "blahblah1", "blah1","blah1")

// console.log(myLibrary[0].info())

populateTable()