// Scrivi una funzione che prende un parametro input di tipo string | number.
// Se è una stringa, stampa la sua lunghezza.
// Se è un numero, stampa il numero arrotondato a due decimali.

function start(input: string | number) {
    if (typeof input === "string") {
        console.log(input.length);
    } else {
        console.log(input.toFixed(2));
    }
}

start("Ciao");
start(123.45);


// Scrivi una funzione chiamata controllaTipo che riceve un parametro value di tipo boolean, string o number.
// Se value è un booleano, stampa "Valore booleano".
// Se value è una stringa, stampa "Valore stringa".
// Se value è un numero, stampa "Valore numero".


function controllaTipo(value: boolean | string | number) {
    switch (typeof value) {
        case "boolean":
            console.log("Valore booleano");
            break;
        case "string":
            console.log("Valore stringa");
            break;
        case "number":
            console.log("Valore numero");
            break;
    }
}

controllaTipo(true);
controllaTipo("Come stai?");
controllaTipo(34);


// Scrivi una funzione chiamata stampaStringaOArray che riceve un parametro x di tipo string oppure array di stringhe (string[]).
// Se x è una stringa, stampa "Singola stringa: " seguito dal valore di x.
// Se x è un array di stringhe, stampa "Array di stringhe con lunghezza: " seguito dalla lunghezza dell’array.


function stampaStringaOArray(x: string | string[]) {
    if (typeof x === "string") {
        console.log(`Singola stringa: ${x}`);
    } else if (Array.isArray(x)) {
        console.log(`Array di stringhe con lunghezza: ${x.length}`);
    }
}

stampaStringaOArray("Ciao, come stai?");
stampaStringaOArray(["Mela", "Pera", "Lampone"]);


