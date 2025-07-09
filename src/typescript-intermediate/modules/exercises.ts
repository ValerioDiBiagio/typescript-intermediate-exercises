// CONSEGNA: importa le funzioni add e multiply da main.ts
// // e usale per stampare:
// // - 3 + 5 = 8
// // - 4 * 6 = 24

// import { add, multiply } from "./utils/main";
// console.log(add(3, 5));
// console.log(multiply(4, 6));


// importa la funzione greet da main.ts (usando default import)  e stampala con il nome "Lucia"

// import greet from "./utils/main"
// console.log(greet("Lucia"));


// importa area come default e PI come named da main.ts
// calcola area(5)
// stampa PI

// import { PI } from "./utils/main";
// import area from "./utils/main";

// console.log(area(5));
// console.log(PI);



// importa capitalize da main.ts con alias cap
// stampare cap("ciao") → "Ciao"

// import { capitalize as cup } from "./utils/main";
// console.log(cup("ciao"));



// importa formatDate da main.ts come alias fmt
// // - stampa fmt(new Date("2025-07-01")) → "2025-07-01"

import fmt from "./utils/main";
console.log(fmt(new Date("2025-07-01")));

