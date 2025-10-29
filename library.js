const myLibrary = [];


// function Book(id, title, author, num_pages) {
//     if (!new.target) {
//         throw Error("You must use the 'new operator to call the constructor")
//     }

//     this.id = id;
//     this.title = title;
//     this.author = author;
//     this.num_pages = num_pages;

//     this.read_status = document.createElement('button')
//     this.read_status.textContent = "No"
//     this.read_status.id = "rs_btn"
//     this.read_status.addEventListener('click', () => {
//         if (this.read_status.textContent === "No") {
//             this.read_status.textContent = "Yes"
//         }
//         else {
//             this.read_status.textContent = "No"
//         }
//     })
// }

class Book {
    constructor(id, title, author, num_pages) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.num_pages = num_pages;

        this.read_status = document.createElement('button')
        this.read_status.textContent = "No"
        this.read_status.id = "rs_btn"
        this.read_status.addEventListener('click', () => {
            if (this.read_status.textContent === "No") {
                this.read_status.textContent = "Yes"
            }
            else {
                this.read_status.textContent = "No"
            }
        })
    }

    //get functions
    // id
    get id() {
        return this._id;
    }
    // title
    get title() {
        return this._title;
    }
    // author
    get author() {
        return this,_author;
    }
    // num_pages
    get num_pages() {
        return this._num_pages;
    }


    //set functions
    set id(val) {
        this._id = this.id;
    }
    // title
    set title(val) {
        this._title = this.val
    }
    // author
    set author(val) {
        this._author = this.val
    }
    // num_pages
    set num_pages(val) {
        this._num_pages = this.val
    }

}

function addBookToLibrary(title, author, num_pages) {
    let id = self.crypto.randomUUID()
    const newBook = new Book(id, title, author, num_pages);
    newBook.id = id;
    newBook.title = title;
    console.log(newBook.title)
    myLibrary.push(newBook)
    id = ''
}

function populateTable() {
    const tbody = document.querySelector("tbody")
    for (let book of myLibrary) {
        const tr = document.createElement("tr")
        
        // remove button is part of row, not book obj
        const removeBtn = document.createElement("button")
        removeBtn.id = "remove_btn"
        removeBtn.textContent = "Remove Book"
        removeBtn.addEventListener("click", () => {
            const rowID = removeBtn.parentElement.nextElementSibling;
            console.log("Removed entry: " + rowID.textContent)
            rowID.closest("tr").remove()
        })

        const td = document.createElement("td")
        td.appendChild(removeBtn)
        tr.appendChild(td)

        for (const val in book) {
            if (book.hasOwnProperty(val)) {
                const td = document.createElement("td")
                if (val === 'read_status') {
                    td.appendChild(book[val])
                } else {
                    td.textContent = book[val]
                }
                tr.appendChild(td)
            }
        }
        tbody.appendChild(tr)
    }
}


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

    addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value)
    populateTable()
    dialog.close()

    bookTitle.value = ''
    bookAuthor.value = ''
    bookPages.value = ''
    
    // won't make copies of old books
    myLibrary.pop()

    e.preventDefault();
})
