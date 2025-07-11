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


{

    class Animale {
        nome: string


        constructor(nome: string) {
            this.nome = nome
        }

        faVerso() {
            console.log("L'animale fa un vero generico");
        }
    }

    class Cane extends Animale {
        faVerso(): void {
            console.log("Baubau");
        }
    }

    const postAnimale = new Animale("Luna");
    postAnimale.faVerso();

    const postCane = new Cane("Nerone");
    postCane.faVerso();

}

// Crea una classe Instrument con una proprietà:
// name (string)
// Nel costruttore inizializza name.
// Aggiungi un metodo play() che stampa:
// "Lo strumento suona una melodia generica."
// Crea una sottoclasse Piano che estende Instrument.
// Override il metodo play() nella classe Piano per stampare:
// "Il piano suona note dolci e armoniose."
// Crea un’istanza di Instrument e una di Piano e chiama il metodo play() su entrambe.


{
    class Instrument {
        nome: string


        constructor(nome: string) {
            this.nome = nome
        }

        play() {
            console.log("Lo strumento suona una melodia generica");
        }
    }

    class Piano extends Instrument {
        play(): void {
            console.log("Il piano suona noti dolci e armoniose")
        }

    }

    const postInstrument = new Instrument("Violino");
    postInstrument.play();

    const postPiano = new Piano("Piano");
    postPiano.play();
}


// Accedere e modificare i dati tramite metodi.
// Crea una classe Libro con una proprietà titolo.
// Includi un costruttore che inizializza il titolo.
// Aggiungi due metodi:
// getTitolo() che restituisce il titolo del libro.
// setTitolo(nuovoTitolo: string) che aggiorna il titolo.

{

    class Libro {
        titolo: string


        constructor(titolo: string) {
            this.titolo = titolo
        }


        getTitolo() {
            return this.titolo
        }

        setTitolo(nuovoTitolo: string): void {
            this.titolo = nuovoTitolo

        }


    }

    const primoLibro = new Libro("Il Signore degli Anelli");
    primoLibro.getTitolo()
    console.log("Il primo libro è:", primoLibro.getTitolo())

    primoLibro.setTitolo("Harry Potter")
    console.log("Il secondo libro è:", primoLibro.getTitolo())

}

// Crea una classe Book con una proprietà title dichiarata public.
// Crea un metodo showTitle() che stampa il titolo.
// Istanzia la classe, modifica il titolo dall’esterno e stampa il titolo prima e dopo la modifica.

{
    class Book {
        public title: string


        constructor(title: string) {
            this.title = title
        }


        showTitle(): void {
            console.log(`${this.title}`);
        }

        newTitolo(newTitle: string): void {
            this.title = newTitle

        }
    }

    const firstBook = new Book("Foto dal Futuro")
    firstBook.showTitle()
    console.log("Il primo titolo è:")
    firstBook.showTitle()


    firstBook.newTitolo("Foto dal Futuro N2")
    console.log("Il secondo titolo è:")
    firstBook.showTitle()
}

// Crea una classe Account con una proprietà private password.
// Crea un metodo checkPassword(input: string): boolean che ritorna true se la password corrisponde, false altrimenti.
// Prova a leggere la password dall’esterno (dovrebbe dare errore).

{
    class Account {
        private password: string


        constructor(password: string) {
            this.password = password
        }

        checkPassword(input: string): boolean {
            return input === this.password
        }
    }

    const myAccount = new Account("PasswordSegreta")
    // console.log(myAccount.password)
}


// Crea una classe Person con una proprietà protected ssn (codice fiscale).
// Crea una sottoclasse Employee che estende Person.
// Nella sottoclasse, crea un metodo showSSN() che stampa il codice fiscale.
// Istanzia Employee e chiama il metodo showSSN().
// Prova a leggere ssn dall’esterno (dovrebbe dare errore).

{
    class Person {
        protected ssn: string


        constructor(ssn: string) {
            this.ssn = ssn
        }
    }

    class Employee extends Person {
        showSSN(): void {
            console.log(this.ssn);
        }
    }

    const postEmployee = new Employee("CodiceFiscale")
    postEmployee.showSSN()

    // console.log(postEmployee.ssn);

}

// Crea una classe User con:
// una proprietà username pubblica
// una proprietà email privata
// una proprietà role protetta
// Aggiungi un metodo getEmail() che restituisce l’email
// Crea una sottoclasse Admin che estende User
// Crea un metodo describeRole() che stampa il ruolo dell’utente
// Crea un oggetto Admin, prova ad accedere a tutte le proprietà da fuori e verifica i risultati

{
    class User {
        public username: string;
        private email: string;
        protected role: string

        constructor(username: string, email: string, role: string) {
            this.username = username
            this.email = email
            this.role = role
        }

        getEmail() {
            return this.email
        }
    }

    class Admin extends User {
        describeRole(): void {
            console.log(this.role);
        }
    }

    const adminUser = new Admin("Mario", "sonomario@gmail.com", "Admin")
    adminUser.describeRole()
    console.log(adminUser.username);
    console.log(adminUser.getEmail());




}