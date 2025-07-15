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