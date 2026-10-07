/* Lösning till Uppgift 5. Av Sandra Safari, 2026 */
"use strict";

const foods = ["Pizza", "Sushi", "Tacos", "Pasta", "Hamburgare"];

console.log("Hela arrayen:", foods);
console.log("Första maträtten:", foods[0]);
console.log("Sista maträtten", foods[foods.length - 1]);

foods.push("Lasagne");
foods.shift();

console.log("Arrayen efter ändringarna:", foods);