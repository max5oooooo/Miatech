
/***
 * Completare il corpo della funzione "split" in modo che il valore
 * da essa restituito sia un array contenente i caratteri della stringa
 * passata come unico argomento alla funzione
*/

function split(word) {
    word=word.split("");
    return(word);
}

const x = split("Ciao");
console.log(x); // deve stampare l'array ["C", "i", "a", "o"]