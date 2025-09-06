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
}


// functions
function addBookToLibrary(title, author, num_pages, read_status) {
    let id = self.crypto.randomUUID()
    const newBook = new Book(id, title, author, num_pages, read_status);
    myLibrary.push(newBook)
    id = ''
}

// function createRemoveBtn() {
//     const removeBtn = document.createElement("button")
// }

function populateTable() {
    const tbody = document.querySelector("tbody")
    for (let book of myLibrary) {
        const tr = document.createElement("tr")
        
        // adds remove button first
        const removeBtn = document.createElement("button")
        removeBtn.id = "remove_btn"
        removeBtn.textContent = "Remove Book"
        // removeBtn.style.width = "100px"
        // removeBtn.style.height = "50px"
        const td = document.createElement("td")
        td.appendChild(removeBtn)
        tr.appendChild(td)

        for (const val in book) {
            if (book.hasOwnProperty(val)) {
                const td = document.createElement("td")
                td.textContent = book[val]
                // td.appendChild(val])
                tr.appendChild(td)
            }
        }
        tbody.appendChild(tr)
    }
}


// buttons
const showFormBtn = document.getElementById("show_form")
const dialog = document.getElementById("dialog")
const close = document.getElementById("close_btn")
const addBookBtn = document.getElementById("confirm_btn")

showFormBtn.addEventListener("click", () => {
    dialog.showModal();
});

close.addEventListener('click', () => {
    dialog.close()
})

addBookBtn.addEventListener('click', (e) => {
    const bookTitle = document.getElementById("book_title")
    const bookAuthor = document.getElementById("book_author")
    const bookPages = document.getElementById("book_pages")
    const bookStatus = document.getElementById("read_status")

    addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, bookStatus.value)
    populateTable()
    dialog.close()

    // clears input boxes
    bookTitle.value = ''
    bookAuthor.value = ''
    bookPages.value = ''
    bookStatus.value = ''
    
    // won't make copies of old books
    myLibrary.pop()

    e.preventDefault();
})
