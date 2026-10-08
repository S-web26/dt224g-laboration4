/* Lösning till Uppgift 3. Av Sandra Safari, 2026 */
// Kontrollerar en persons ålder och skriver ut rätt ålderskategori.
"use strict";

const age = 78;

// Kontrollerar om personen är barn, vuxen eller pensionär.
if (age < 18) {
    console.log("Barn");
} else if (age <= 64) {
    console.log("Vuxen");
} else {
    console.log("Pensionär");
}