/* Lösning till Uppgift 5. Av Sandra Safari, 2026 */
// Skapar en array med maträtter och gör olika ändringar i den.
"use strict";

const foods = ["Pizza", "Sushi", "Tacos", "Pasta", "Hamburgare"];

// Skriver ut hela arrayen samt den första och sista maträtten.
console.log("Hela arrayen:", foods);
console.log("Första maträtten:", foods[0]);
console.log("Sista maträtten", foods[foods.length - 1]);

// Lägger till en maträtt sist och tar bort den första.
foods.push("Lasagne");
foods.shift();

console.log("Arrayen efter ändringarna:", foods);