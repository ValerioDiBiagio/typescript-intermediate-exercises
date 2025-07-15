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
// username:
// password: 
// Crea un tipo Profile con le proprietà:
// name:
// age: 
// Crea un tipo UserAccount che sia l’intersezione tra LoginData e Profile.
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

// Crea due tipi:
// UserInfo con le proprietà:
// name: string
// email: string
// Permissions con le proprietà:
// isAdmin: boolean
// canEdit: boolean
// Crea un tipo AdminUser che sia l’intersezione tra UserInfo e Permissions.
// Scrivi una funzione printPermissions che:
// accetta un oggetto di tipo AdminUser
// stampa:
// "Admin: sì" se isAdmin è true
// "Può modificare: sì" se canEdit è true
// e i dati dell’utente (name, email)
// Crea almeno due oggetti AdminUser diversi e chiamali nella funzione.

{
    type UserInfo = {
        name: string;
        email: string
    }

    type Permissions = {
        isAdmin: boolean;
        canEdit: boolean
    }

    type AdminUser = UserInfo & Permissions;

    function printPermissions(admin: AdminUser): void {

        console.log(admin.name);
        console.log(admin.email);

        if (admin.isAdmin) {
            console.log("Admin: si");
        } else {
            console.log("Admin: no")
        } if (admin.canEdit) {
            console.log("Può modificare: si");
        } else {
            console.log("Può modificare: no")
        }
    }

    const firstAdminUser: AdminUser = {
        name: "Luigi",
        email: "luigi@gmail.com",
        isAdmin: true,
        canEdit: true
    }

    const secondAdminUser: AdminUser = {
        name: "Franco",
        email: "franco@gmail.com",
        isAdmin: false,
        canEdit: true
    }

    printPermissions(firstAdminUser);
    printPermissions(secondAdminUser);

}

