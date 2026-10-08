/* Lösning till Uppgift 4. Av Sandra Safari, 2026 */
// Går igenom talen 1 till 20 och skriver ut de jämna talen.
"use strict";

// Modulus används för att kontrollera vilka tal som är jämnt delbara med 2.
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}