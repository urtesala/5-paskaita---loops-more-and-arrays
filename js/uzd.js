"use strict";
console.log("uzd.js");

// ? Atspausdinti konsoleje sk nuo 12 iki 24 padaugintus is 3

//^ sukam cikla nuo 12 iki 24
// ^ kiekvieno ciklo metu mes einamaja reiksme ( index ) padauginam ir 3 ir atspausdinam

// for (let i = 12; i <= 24; i++) {
//   let daugyba = i * 3;
//   console.log(`reiksme ${i} padauginta is triju ${daugyba}`);
// }

// ? sudaugitni sk nuo kintamojo min iki kintamojo max

// ^ min 5-max 10
// ^ sudauginti ir atspausdinti sk daugybos rez

// let min = 5;
// let max = 10;
// let total = 1;

// for (let i = min; i <= max; i++) {
//   console.log(i);
//   total = total * i;
//   console.log(" total ===", total);
// }
// console.log("total ===", total);

//? uzd: sudeti skaicius nuo 17 iki 33. ir atspausdinti kiek buvo ciklu
// let ciklas = 0;
// for (let i = 17; i <= 33; i++) {
//   console.log(i);
//   ciklas = ciklas + 1;
// }
// console.log("ciklas ===", ciklas);

//? uzd: sudauginti sk nuo -4 iki 7 ir rez atspausdinti padalinta is 3.

console.group(
  "uzd: sudauginti sk nuo -4 iki 7 ir rez atspausdinti padalinta is 3."
);

let total = 1;

for (let i = 4; i <= 17; i++) {
  total *= i;
}
console.log("total ===", total);
console.log("total ===", total / 3);

console.groupEnd();

//? uzd: atspausdinti sk string nuo 44 iki 66 atskirtus "|| " zenklu

// let skString = "";
// for (let i = 44; i <= 66; i++) {
//   skString = skString + `${i} || `;
// }
// console.log("skString ===", skString);

//? Suskaiciuoti kie yra skaiciau 3 kartotiniu nuo 12 iki 57

// let kartot = 0;
// let suma = 0;
// for (let i = 12; i <= 57; i++) {
//   if (i % 3 === 0);
//   suma = i + 1;
// }
// console.log(i);

//? suskaiciuoti koks butu vidurkis skaiciu nuo 45 iki 87

// let total = 0;
// let elem = 0;
// for (let i = 45; i <= 87; i++) {
//   total = total + i;
//   elem++;
// }
// console.log("total ===", total);
// console.log("elem ===", elem);
// const avg = total / elem;
// console.log("avg ===", avg);

//?  sugeneruoti 3 random skaicius nuo 1 iki 10 ir pranesti:
//? a: ar buvo skaicius didesnis uz 7?

// for (let i = 1; i <= 10; i++) {
//   let i = Math.trunc(Math.random() * 10) + 1;
//   if (i > 7) {
//     console.log(i);
//   }
// }

// //? b: ar buvo skaicius mazesnis uz 3?

// for (let i = 1; i <= 10; i++) {
//   let i = Math.trunc(Math.random() * 10) + 1;
//   if (i < 3) {
//     console.log(i);
//   }
// }

//=============================================

console.group("atspausdinti sk nuo 3 iki 25");

for (let i = 3; i <= 25; i++) {
  if (i % 2 === 0 && i % 3 === 0) {
    console.log(`${i} lyginis ir triju kartotinis`);
  } else if (i % 2 === 0) {
    console.log(`${i} lyginis`);
  } else if (i % 3 === 0) {
    console.log(`${i} triju kartotinis`);
  } else {
    console.log(i);
  }
}

console.groupEnd();
