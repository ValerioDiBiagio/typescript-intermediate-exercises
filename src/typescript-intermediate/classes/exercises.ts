// Creare una classe base con proprietà e un metodo.
// Istruzioni:
// Crea una classe Persona.
// Aggiungi le proprietà:
// nome: string
// eta: number
// // Crea un metodo saluta() che stampa: "Ciao, mi chiamo {nome} e ho {eta} anni".


class Persona {
    nome: string;
    eta: number


    constructor(nome: string, eta: number) {
        this.nome = nome
        this.eta = eta
    }

    saluta() {
        console.log(`Ciao, mi chiamo ${this.nome} e ho ${this.eta} anni`)
    }
}

const aggiungiPersona = new Persona("Luca", 35);
aggiungiPersona.saluta();




// Usare metodi per modificare lo stato interno.
// Aggiungi alla classe Persona un metodo:
// invecchia(anni: number) che aumenta l'età della persona.





// Imparare a estendere le classi.
// Crea una classe Animale con proprietà:
// nome: string
// Aggiungi un metodo faVerso() che stampa: "L'animale fa un verso generico".
// Crea una sottoclasse Cane che estende Animale:
// Override del metodo faVerso() per stampare: "Bau!"







// Accedere e modificare i dati tramite metodi.
// Crea una classe Libro con una proprietà titolo.
// Includi un costruttore che inizializza il titolo.
// Aggiungi due metodi:
// getTitolo() che restituisce il titolo del libro.
// setTitolo(nuovoTitolo: string) che aggiorna il titolo.