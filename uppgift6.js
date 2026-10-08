/* Lösning till Uppgift 6. Av Sandra Safari, 2026 */
// Använder en funktion för att räkna ut arean av en rektangel.
"use strict";

// Funktionen tar emot bredd och höjd och returnerar arean.
function calculateArea(width, height) {
    const area = width * height;
    return area;
}

// Testar funktionen med tre olika värden.
console.log("Arean är " + calculateArea(4, 5));
console.log("Arean är " + calculateArea(6, 7));
console.log("Arean är " + calculateArea(10, 10));