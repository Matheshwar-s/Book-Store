const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", img: "gatsby.jpg" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", img: "kill.jpg" },
    { title: "1984", author: "George Orwell", img: "1984.jpg" },
    { title: "Pride and Prejudice", author: "Jane Austen", img: "pride.jpg" },
    { title: "The Hobbit", author: "J.R.R. Tolkien", img: "hobbit.jpg" }
];


function renderBooks(bookArray) {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = ""; // Clear previous content

    bookArray.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        bookCard.innerHTML = `
            <img src="${book.img}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>by ${book.author}</p>
        `;
        bookList.appendChild(bookCard);
    });
}


document.getElementById("searchBox").addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm) || 
        book.author.toLowerCase().includes(searchTerm)
    );
    renderBooks(filteredBooks);
});

renderBooks(books);
