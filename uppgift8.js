/* Lösning till Uppgift 8. Av Sandra Safari, 2026 */
// Skapar ett bokobjekt och skriver ut information om boken.
"use strict";

// Objektet innehåller information om en bok.
const book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937
};

// Funktionen tar emot bokobjektet och skriver ut dess egenskaper.
function printBookInfo(bookObject) {
    console.log("Titel: " + bookObject.title);
    console.log("Författare: " + bookObject.author);
    console.log("Utgivningsår: " + bookObject.year);
}

printBookInfo(book);