/* Lösning till Uppgift 8. Av Sandra Safari, 2026 */
"use strict";

const book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937
};

function printBookInfo(bookObject) {
    console.log("Titel: " + bookObject.title);
    console.log("Författare: " + bookObject.author);
    console.log("Utgivningsår: " + bookObject.year);
}

printBookInfo(book);