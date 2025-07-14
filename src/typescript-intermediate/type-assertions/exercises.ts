// Hai una variabile valore di tipo any che contiene una stringa.
// Usa una type assertion per trattarla come string, poi stampa la lunghezza della stringa (.length).

{
    const valore: any = "Ciao,come stai?";
    const lunghezzaValore: number = (valore as string).length

    console.log(lunghezzaValore)
}

// Hai una variabile numero di tipo any che contiene un numero.
// Usa una type assertion per trattarla come number e stampane il valore.




// Hai una variabile qualcosa di tipo unknown che contiene una stringa.
// Usa una type assertion per trattarla come string e stampa la sua lunghezza.




// Hai un elemento HTML creato con document.createElement("input").
// Usa una type assertion per trattarlo come HTMLInputElement e imposta il valore del campo input a "Mario".




// Hai un oggetto vuoto che stai "forzando" a essere del tipo { nome: string }.
// Usa la type assertion per dichiarare il tipo, poi assegna un valore al campo nome e stampalo.
