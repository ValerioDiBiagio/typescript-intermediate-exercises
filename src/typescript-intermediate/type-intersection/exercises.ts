// Crea due tipi:
// Person con proprietà name: string
// Address con proprietà city: string
// Crea un tipo PersonWithAddress come intersezione tra Person e Address
// Crea un oggetto che rispetta questo tipo


{
    type Person = {
        nome: string

    }

    type Address = {
        city: string
    }

    type PersonWithAddress = Person & Address;

    const personAndAddress: PersonWithAddress = {
        nome: "Luca",
        city: "Roma"
    }

    console.log(personAndAddress);

}

// Crea un tipo LoginData con le proprietà:
// username: string
// password: string
// Crea un tipo Profile con le proprietà:
// name: string
// age: number
// Crea un tipo UserAccount che sia l’intersezione (&) tra LoginData e Profile.
// Scrivi una funzione chiamata printAccount che:
// accetta come parametro un oggetto di tipo UserAccount
// stampa su console tutte le proprietà: username, password, name, age
// Crea un oggetto user che rispetta il tipo UserAccount
// e passalo alla funzione printAccount.


{
    type LoginData = {
        username: string;
        password: string
    }

    type Profile = {
        name: string;
        age: number
    }

    type UserAccount = LoginData & Profile;

    function printAccount(user: UserAccount): void {
        console.log(user.username);
        console.log(user.password);
        console.log(user.name);
        console.log(user.age);
    }

    const user: UserAccount = {
        username: "Mario87",
        password: "password",
        name: "Mario",
        age: 38
    }

    printAccount(user);

}