/* Lösning till Uppgift 7. Av Sandra Safari, 2026 */
// Räknar ut summan av alla tal i en array med hjälp av en funktion.
"use strict";

const numbers = [5, 8, 3, 10, 7, 9];

// Funktionen går igenom arrayen och lägger ihop alla tal.
function calculateSum(numberArray) {
    let sum = 0;

    // Går igenom varje tal i arrayen.
    for (let i = 0; i < numberArray.length; i++) {
        sum = sum + numberArray[i];
    }

    return sum;
}

console.log("Summan är " + calculateSum(numbers));