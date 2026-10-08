/* Lösning till Uppgift 9. Av Sandra Safari, 2026 */
"use strict";

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

function printPersonInfo(person) {
    if (person.age >= 18) {
        console.log(person.name + " bor i " + person.city + " och är myndig.");
    } else {
        console.log(person.name + " bor i " + person.city + " och är inte mynding.");
    }
}

for (let i = 0; i < people.length; i++) {
    printPersonInfo(people[i]);
}