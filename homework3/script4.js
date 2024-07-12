const library = [
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    ISBN: "1234567890",
    status: "available",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    ISBN: "2345678901",
    status: "borrowed",
  },
];

function addBook(title, author, ISBN, status) {
  for (let i = 0; i < library.length; i++) {
    if (library[i].ISBN === ISBN) {
      console.log(`Book with ISBN ${ISBN} already exists in the library.`);
      return;
    }
  }

  const book = {
    title,
    author,
    ISBN,
    status,
  };
  library.push(book);
  console.log(`Book '${title}' by ${author} added successfully.`);
}

// addBook("1984", "test author", "3456789012", "available");
// console.log(library);

function borrowBook(ISBN) {
  for (let i = 0; i < library.length; i++) {
    if (library[i].ISBN === ISBN && library[i].status === "available") {
      library[i].status = "borrowed";
      console.log(
        `Book '${library[i].title}' by ${library[i].author} borrowed successfully.`
      );
      return;
    } else if (library[i].ISBN === ISBN && library[i].status === "borrowed") {
      console.log(
        `Book '${library[i].title}' by ${library[i].author} is already borrowed.`
      );
      return;
    }
  }
  console.log(`Book with ISBN ${ISBN} not found in the library.`);
}

// console.log(borrowBook("1234567890"));

function findBooksByAuthor(author) {
  let foundBooks = [];
  for (let i = 0; i < library.length; i++) {
    if (library[i].author === author) {
      foundBooks.push(library[i]);
    }
  }
  return foundBooks;
}

// console.log(findBooksByAuthor("J.D. Salinger"));

function listAvailableBooks() {
  let availableBooks = [];
  for (let i = 0; i < library.length; i++) {
    if (library[i].status === "available") {
      availableBooks.push(library[i]);
    }
  }
  return availableBooks;
}
// console.log(listAvailableBooks());

function listBorrowedBooks() {
  let borrowedBooks = [];
  for (let i = 0; i < library.length; i++) {
    if (library[i].status === "borrowed") {
      borrowedBooks.push(library[i]);
    }
  }
  return borrowedBooks;
}
// console.log(listBorrowedBooks());
