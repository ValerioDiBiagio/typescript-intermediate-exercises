// Crea una funzione identity che prende un parametro di tipo generico T e lo restituisce.
// Chiama la funzione con una stringa e con un numero.

{

    function identity<T>(arg: T): T {
        return arg
    }

    console.log(identity("Ciao"));
    console.log(identity(9));
}



// Scrivi una funzione getFirstElement<T> che accetta un array di tipo T[] e restituisce il primo elemento.
// Testala con array di stringhe e numeri.

{
    function getFirstElement<T>(arr: T[]): T {
        return arr[0];
    }

    console.log(getFirstElement(["Mela", "Banana", "Anguria"]));
    console.log(getFirstElement([1, 2, 3, 4]));

}


// Definisci un'interfaccia Box<T> che abbia una proprietà value di tipo T.
// Crea due variabili: stringBox (con string) e numberBox (con number).

{
    interface Box<T> {
        value: T
    }

    const stringBox: Box<string> = {
        value: "Ciao, mi chiamo Luigi"
    }

    const numberBox: Box<number> = {
        value: 10
    }

    console.log(stringBox.value);
    console.log(numberBox.value);

}

// Crea un tipo generico chiamato Pair<T, U>, che rappresenta una coppia di valori:
// uno chiamato first
// uno chiamato second
// T è il tipo del primo valore
// U è il tipo del secondo valore
// Crea una funzione chiamata makePair che:
// accetta due parametri generici a: T e b: U
// restituisce un oggetto { first: a, second: b } del tipo Pair<T, U>
// Usa la funzione con tipi diversi, per esempio:
// una stringa e un numero
// un booleano e una stringa
// due numeri
{
    type Pair<T, U> = {
        first: T;
        second: U
    }

    function makePair<T, U>(a: T, b: U): Pair<T, U> {
        return { first: a, second: b }

    }

    console.log(makePair("Luca", 4));
    console.log(makePair(true, "Mario"));

}