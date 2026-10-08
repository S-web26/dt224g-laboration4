/* Lösning till Uppgift 9. Av Sandra Safari, 2026 */
// Går igenom flera personer och kontrollerar om de är myndiga.
"use strict";

// Arrayen innehåller tre personobjekt med namn, ålder och stad.
const people = [
    {
        name: "Anna",
        age: 30,
        city: "Sundsvall"
    },
    {
        name: "Sofie",
        age: 45,
        city: "Hudiksvall"
    },
    {
        name: "Markus",
        age: 16,
        city: "Härnösand"
    }
];

// Funktionen skriver ut personens information och kontrollerar om personen är myndig.
function printPersonInfo(person) {
    if (person.age >= 18) {
        console.log(person.name + " bor i " + person.city + " och är myndig.");
    } else {
        console.log(person.name + " bor i " + person.city + " och är inte myndig.");
    }
}

// Går igenom alla personer och skickar varje person till funktionen.
for (let i = 0; i < people.length; i++) {
    printPersonInfo(people[i]);
}