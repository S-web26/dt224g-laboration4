/* Lösning till Uppgift 2. Av Sandra Safari, 2026 */
"use strict";

const price = 100;
const quantity = 3;

const totalPrice = price * quantity;
const totalWithTax = totalPrice * 1.25;

console.log("Pris: " + price + " kr");
console.log("Antal: " + quantity);
console.log("Totalt: " + totalPrice + " kr");
console.log("Totalt inklusive moms: " + totalWithTax + " kr");