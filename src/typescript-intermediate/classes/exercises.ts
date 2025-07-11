// Creare una classe base con proprietà e un metodo.
// Istruzioni:
// Crea una classe Persona.
// Aggiungi le proprietà:
// nome: string
// eta: number
// // Crea un metodo saluta() che stampa: "Ciao, mi chiamo {nome} e ho {eta} anni".


{
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
}

// Usare metodi per modificare lo stato interno.
// Aggiungi alla classe Persona un metodo:
// invecchia(anni: number) che aumenta l'età della persona.


{
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

        invecchia(anni: number) {
            this.eta = this.eta + anni
        }
    }

    const aggiungiPersona = new Persona("Luca", 35);
    aggiungiPersona.saluta();

    aggiungiPersona.invecchia(5)
    aggiungiPersona.saluta();

}


// Crea una classe che rappresenta un’automobile.
// La classe si chiama Macchina
// Deve avere due proprietà:
// marca (marca dell’auto, es. "Fiat")
// anno (anno di immatricolazione, es. 2020)
// Aggiungi un metodo info() che stampa:
//  "Questa auto è una {marca} del {anno}"


{
    class Macchina {
        marca: string;
        anno: number


        constructor(marca: string, anno: number) {
            this.marca = marca,
                this.anno = anno
        }

        info() {
            console.log(`Questa auto è una ${this.marca} del ${this.anno}`);
        }
    }

    const aggMacchina = new Macchina("Fiat", 75);
    aggMacchina.info();

}

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