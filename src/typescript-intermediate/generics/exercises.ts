// Crea una funzione identity che prende un parametro di tipo generico T e lo restituisce.
// Chiama la funzione con una stringa e con un numero.

function identity<T>(arg: T): T {
    return arg
}

console.log(identity("Ciao"));
console.log(identity(9));


// Scrivi una funzione getFirstElement<T> che accetta un array di tipo T[] e restituisce il primo elemento.
// Testala con array di stringhe e numeri.




// Definisci un'interfaccia Box<T> che abbia una proprietà value di tipo T.
// Crea due variabili: stringBox (con string) e numberBox (con number).




// Crea un tipo Pair<T, U> che rappresenta una coppia di valori (first e second).
// Crea una funzione makePair che restituisce un oggetto di tipo Pair<T, U>.
// Usala con diverse combinazioni di tipi.