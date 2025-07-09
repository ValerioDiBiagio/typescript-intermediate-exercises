// Creare un’interfaccia con una proprietà che può essere presente o no.
// Crea un’interfaccia chiamata Utente.
// Aggiungi due proprietà:
// nome (obbligatoria, di tipo string)
// eta (opzionale, di tipo number)
// Crea due oggetti Utente, uno con eta, uno senza.

interface Utente {
    nome: string,
    eta?: number
}

const persona: Utente = {
    nome: "Mario",
    eta: 27
}

console.log(persona);

const secondaPersona: Utente = {
    nome: "Luca"
}

console.log(secondaPersona);


// Crea un’interfaccia chiamata Prodotto.
// Aggiungi due proprietà:
// id (di tipo number, readonly)
// nome (di tipo string)
// Crea un oggetto Prodotto valido.
// Prova a modificare id e verifica che TypeScript segnali un errore.


interface Prodotto {
    readonly id: number,
    nome: string
}

const prodottoValido: Prodotto = {
    id: 1,
    nome: "ps5"
}

// prodottoValido.id = 2;


// Crea un’interfaccia Persona con:
// nome: string
// Crea un’interfaccia Impiegato che estende Persona, aggiungendo:
// ruolo: string
// Crea un oggetto Impiegato valido.


interface Persona {
    nome: string,
}

interface Impiegato extends Persona {
    ruolo: string
}

const impiegatoValido: Impiegato = {
    nome: "Stefano",
    ruolo: "Banchista"
}

console.log(impiegatoValido);






// Crea un’interfaccia UtenteBase con:
// id: number (readonly)
// nomeUtente: string
// Crea un’interfaccia UtentePremium che estende UtenteBase e aggiunge:
// livelloUtente: "gold" | "silver" | "bronze" (opzionale)
// Crea due oggetti UtentePremiun: uno con membership e uno senza.




// Crea un’interfaccia Libro con:
// titolo: string
// autore: string
// annoPubblicazione: number (opzionale)
// Scrivi una funzione stampaLibro(libro: Libro) che:
// stampa il titolo e l’autore
// se presente, stampa anche l’anno di pubblicazione
// Chiama la funzione con due oggetti: uno con l’anno e uno senza.











