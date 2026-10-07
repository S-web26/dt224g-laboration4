/* Lösning till Uppgift 7. Av Sandra Safari, 2026 */
"use strict";

const numbers = [5, 8, 3, 10, 7, 9];

function calculateSum(numberArray) {
    let sum = 0;

    for (let i = 0; i < numberArray.length; i++) {
        sum = sum + numberArray[i];
    }

    return sum;
}

console.log("Summan är " + calculateSum(numbers));